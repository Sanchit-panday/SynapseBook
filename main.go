package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/golang-jwt/jwt/v5"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"golang.org/x/crypto/bcrypt"
)

type Todo struct {
	ID        primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Completed bool               `json:"completed"`
	Body      string             `json:"body"`
}

// user id and password structure
type User struct {
	ID       primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Email    string             `json:"email" bson:"email"`
	Password string             `json:"password" bson:"password"`
}

var collection *mongo.Collection
var userCollection *mongo.Collection

func main() {
	fmt.Println("Starting app...")

	if os.Getenv("ENV") != "production" {
		// Load the .env file if not in production
		err := godotenv.Load(".env")
		if err != nil {
			log.Fatal("Error loading .env file:", err)
		}
	}

	MONGODB_URI := os.Getenv("MONGODB_URI")
	clientOptions := options.Client().ApplyURI(MONGODB_URI)
	client, err := mongo.Connect(context.Background(), clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	defer client.Disconnect(context.Background())

	err = client.Ping(context.Background(), nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to mongodb atlas")

	collection = client.Database("golang_db").Collection("todos")
	userCollection = client.Database("golang_db").Collection("users")

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:5173",
		AllowHeaders: "Origin,Content-Type,Accept, Authorization",
	}))

	// routes
	app.Get("/api/todos", authMiddleware, getTodos)
	app.Post("/api/todos", createTodo)
	app.Patch("/api/todos/:id", updateTodo)
	app.Delete("/api/todos/:id", deleteTodo)
	app.Post("/api/register", registerUser)
	app.Post("/api/login", loginUser)

	port := os.Getenv("PORT")

	if port == "" {
		port = "5000"
	}

	if os.Getenv("ENV") == "production" {
		app.Static("/", "./client/dist")
	}

	log.Fatal(app.Listen("0.0.0.0:" + port))

}

func getTodos(c *fiber.Ctx) error {
	var todos []Todo

	cursor, err := collection.Find(context.Background(), bson.M{})

	if err != nil {
		return err
	}

	defer cursor.Close(context.Background())

	for cursor.Next(context.Background()) {
		var todo Todo
		if err := cursor.Decode(&todo); err != nil {
			return err
		}
		todos = append(todos, todo)
	}

	return c.JSON(todos)
}

func createTodo(c *fiber.Ctx) error {
	todo := new(Todo)

	if err := c.BodyParser(todo); err != nil {
		return err
	}

	if todo.Body == "" {
		return c.Status(400).JSON(fiber.Map{"error": "cannot create an empty todo"})
	}

	insertResult, err := collection.InsertOne(context.Background(), todo)

	if err != nil {
		return err
	}
	todo.ID = insertResult.InsertedID.(primitive.ObjectID)

	return c.Status(201).JSON(todo)
}

func updateTodo(c *fiber.Ctx) error {
	id := c.Params("id")
	objectID, err := primitive.ObjectIDFromHex(id)

	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid todo ID"})
	}

	filter := bson.M{"_id": objectID}
	update := bson.M{"$set": bson.M{"completed": true}}

	_, err = collection.UpdateOne(context.Background(), filter, update)

	if err != nil {
		return err
	}

	return c.Status(200).JSON(fiber.Map{"success": true})

}

func deleteTodo(c *fiber.Ctx) error {
	id := c.Params("id")
	objectID, err := primitive.ObjectIDFromHex(id)

	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "todo doesn't exist"})
	}
	filter := bson.M{"_id": objectID}
	_, err = collection.DeleteOne(context.Background(), filter)

	if err != nil {
		return err
	}

	return c.Status(200).JSON(fiber.Map{"success": true})
}

func registerUser(c *fiber.Ctx) error {

	user := new(User)

	if err := c.BodyParser(user); err != nil {
		return err
	}

	if user.Email == "" || user.Password == "" {
		return c.Status(400).JSON(fiber.Map{
			"error": "email and password required",
		})
	}

	// Check existing user
	var existing User

	err := userCollection.FindOne(
		context.Background(),
		bson.M{"email": user.Email},
	).Decode(&existing)

	if err == nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "user already exists",
		})
	}

	// Hash password
	hashedPassword, err := bcrypt.GenerateFromPassword(
		[]byte(user.Password),
		bcrypt.DefaultCost,
	)

	if err != nil {
		return err
	}

	user.Password = string(hashedPassword)

	result, err := userCollection.InsertOne(
		context.Background(),
		user,
	)

	if err != nil {
		return err
	}

	user.ID = result.InsertedID.(primitive.ObjectID)
	secret := os.Getenv("JWT_SECRET")

	// Generate JWT token
	token := jwt.NewWithClaims(
		jwt.SigningMethodHS256,
		jwt.MapClaims{
			"userId": user.ID.Hex(),
			"email":  user.Email,
		},
	)
	tokenString, err := token.SignedString([]byte(secret))
	if err != nil {
		return err
	}
	return c.JSON(fiber.Map{
		"message": "registered successfully",
		"token":   tokenString,
	})
}
func loginUser(c *fiber.Ctx) error {

	var req User

	if err := c.BodyParser(&req); err != nil {
		return err
	}

	var user User

	err := userCollection.FindOne(
		context.Background(),
		bson.M{"email": req.Email},
	).Decode(&user)

	if err != nil {
		return c.Status(401).JSON(fiber.Map{
			"error": "invalid credentials",
		})
	}

	err = bcrypt.CompareHashAndPassword(
		[]byte(user.Password),
		[]byte(req.Password),
	)

	if err != nil {
		return c.Status(401).JSON(fiber.Map{
			"error": "invalid credentials",
		})
	}

	// Generate JWT token
	secret := os.Getenv("JWT_SECRET")
	token := jwt.NewWithClaims(
		jwt.SigningMethodHS256,
		jwt.MapClaims{
			"userId": user.ID.Hex(),
			"email":  user.Email,
		},
	)

	tokenString, err := token.SignedString([]byte(secret))
	if err != nil {
		return err
	}

	return c.JSON(fiber.Map{
		"message": "login successful",
		"token":   tokenString,
	})

}

func authMiddleware(c *fiber.Ctx) error {

	tokenString := c.Get("Authorization")

	if tokenString == "" {
		return c.Status(401).JSON(
			fiber.Map{
				"error": "missing token",
			},
		)
	}

	tokenString = strings.TrimPrefix(
		tokenString,
		"Bearer ",
	)

	secret := os.Getenv("JWT_SECRET")

	token, err := jwt.Parse(
		tokenString,
		func(token *jwt.Token) (interface{}, error) {
			return []byte(secret), nil
		},
	)

	if err != nil || !token.Valid {
		return c.Status(401).JSON(
			fiber.Map{
				"error": "invalid token",
			},
		)
	}

	return c.Next()
}
