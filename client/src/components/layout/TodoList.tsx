import { LoaderCircle } from "lucide-react";
import TodoItem from "./TodoItem";
import { useQuery } from "@tanstack/react-query";


export type Todo = {
    _id: number;
    completed: boolean;
    body: string;
}
const TodoList = () => {
    const { data: todos, isLoading } = useQuery<Todo[]>({
        queryKey: ["todos"],
        queryFn: async () => {
            try {
                const res = await fetch("http://localhost:5000/api/todos")
                const data = await res.json()

                if (!res.ok) {
                    throw new Error(data.error || "something went wrong")
                }
                return data || []
            } catch (error) {
                console.log(error)
            }
        },
    });

    return (
        <>
            <div className="text-4xl font-bold text-center uppercase my-2">
                Today's Tasks
            </div>
            {isLoading && (
                <div className="justify-center my-4">
                    <LoaderCircle className="animate-spin" size={40} />
                </div>
            )}
            {!isLoading && todos?.length === 0 && (
                <div className="items-center gap-3">
                    <div className="text-xl text-center text-gray-500">
                        All tasks completed! 🤞
                    </div>
                    {/* <img src='/go.png' alt='Go logo' width={70} height={70} /> */}
                </div>
            )}
            <div className="space-y-3 py-5 px-3 mb-10"
                style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "16px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(5px)",
                    WebkitBackdropFilter: "blur(5px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                }}>
                {todos?.map((todo) => (
                    <TodoItem key={todo._id} todo={todo} />
                ))}
            </div>
        </>
    );
};
export default TodoList;