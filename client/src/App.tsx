import Navbar from "./components/layout/Navbar"
import { TodoForm } from "./components/layout/TodoForm"
import TodoList from "./components/layout/TodoList"

export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

function App() {
  return (
    <>
      <div className="flex flex-col items-center backgroundimageSVG min-h-screen max-h-fit">
        <Navbar />
        <TodoForm />
        <TodoList />
      </div>
    </>
  )
}

export default App
