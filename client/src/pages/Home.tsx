import Navbar from "../components/layout/Navbar"
import { TodoForm } from "../components/layout/TodoForm"
import TodoList from "../components/layout/TodoList"
function Home() {
    return (
        <>
            <Navbar/>
            <TodoForm />
            <TodoList />
        </>
    )
}

export default Home