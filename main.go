package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"strings"

	"time"

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

type Note struct {
	ID     primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	UserID primitive.ObjectID `json:"userId" bson:"userId"`

	Title string `json:"title" bson:"title"`
	Body  string `json:"body" bson:"body"`

	CreatedAt time.Time `json:"createdAt" bson:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt" bson:"updatedAt"`

	Completed bool `json:"completed"`
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
	app.Get("/api/notes", authMiddleware, getNotes)
	app.Post("/api/notes", authMiddleware, createNote)
	app.Patch("/api/notes/:id", authMiddleware, updateNote)
	app.Delete("/api/notes/:id", authMiddleware, deleteNote)
	app.Post("/api/register", registerUser)
	app.Post("/api/login", loginUser)

	port := os.Getenv("PORT")

	if port == "" {
		port = "5000"
	}

	if os.Getenv("ENV") == "production" {
		app.Static("/", "./client/dist")

		app.Get("*", func(c *fiber.Ctx) error {
			return c.SendFile("./client/dist/index.html")
		})
	}

	log.Fatal(app.Listen("0.0.0.0:" + port))

}

func getNotes(c *fiber.Ctx) error {
	var notes []Note

	userIDHex := c.Locals("userId").(string)
	userID, err := primitive.ObjectIDFromHex(userIDHex)
	if err != nil {
		return err
	}

	cursor, err := collection.Find(
		context.Background(),
		bson.M{
			"userId": userID,
		},
	)

	if err != nil {
		return err
	}

	defer cursor.Close(context.Background())

	for cursor.Next(context.Background()) {
		var note Note
		if err := cursor.Decode(&note); err != nil {
			return err
		}
		notes = append(notes, note)
	}

	return c.JSON(notes)
}

func createNote(c *fiber.Ctx) error {
	note := new(Note)

	if err := c.BodyParser(note); err != nil {
		return err
	}

	// if note.Title == "" {
	// 	note.Title = "Untitled"
	// }

	note.CreatedAt = time.Now()
	note.UpdatedAt = time.Now()

	userIDHex := c.Locals("userId").(string)
	userID, err := primitive.ObjectIDFromHex(userIDHex)
	if err != nil {
		return err
	}
	note.UserID = userID

	// if note.Body == "" {
	// 	return c.Status(400).JSON(fiber.Map{"error": "cannot create an empty note"})
	// }

	insertResult, err := collection.InsertOne(context.Background(), note)

	if err != nil {
		return err
	}
	note.ID = insertResult.InsertedID.(primitive.ObjectID)

	return c.Status(201).JSON(note)
}

func updateNote(c *fiber.Ctx) error {
	var note Note

	if err := c.BodyParser(&note); err != nil {
		return err
	}

	id := c.Params("id")
	userIDHex := c.Locals("userId").(string)
	objectID, err := primitive.ObjectIDFromHex(id)

	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid note ID"})
	}

	userID, err := primitive.ObjectIDFromHex(userIDHex)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "Invalid user ID",
		})
	}
	filter := bson.M{
		"_id":    objectID,
		"userId": userID,
	}
	update := bson.M{
		"$set": bson.M{
			"title":     note.Title,
			"body":      note.Body,
			"updatedAt": time.Now(),
		},
	}

	result, err := collection.UpdateOne(
		context.Background(),
		filter,
		update,
	)

	if err != nil {
		return err
	}

	if result.MatchedCount == 0 {
		return c.Status(404).JSON(fiber.Map{
			"error": "Note not found",
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"success": true,
	})

}

func deleteNote(c *fiber.Ctx) error {
	id := c.Params("id")
	userIDHex := c.Locals("userId").(string)
	objectID, err := primitive.ObjectIDFromHex(id)

	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "note doesn't exist"})
	}

	userID, err := primitive.ObjectIDFromHex(userIDHex)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "Invalid user ID",
		})
	}
	filter := bson.M{
		"_id":    objectID,
		"userId": userID,
	}

	_, err = collection.DeleteOne(
		context.Background(),
		filter,
	)

	if err != nil {
		return err
	}

	return c.Status(200).JSON(fiber.Map{
		"success": true,
	})
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

	claims := token.Claims.(jwt.MapClaims)
	c.Locals("userId", claims["userId"])

	return c.Next()
}
