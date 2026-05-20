import { useState } from "react";

import Navbar from "./components/layout/Navbar"
import { TodoForm } from "./components/layout/TodoForm"
import TodoList from "./components/layout/TodoList"
import Auth from "./pages/Auth";

export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

function App() {
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
   !! token && 
    token !== "undefined" && 
    token !== "null"
  );
  return (
    <>
      <div className="flex flex-col items-center backgroundimageSVG min-h-screen max-h-fit">
        <h1>hello</h1>
        {!isLoggedIn ? (
          <Auth setIsLoggedIn={setIsLoggedIn} />

        ) :
          <>
            <Navbar />
            <TodoForm />
            <TodoList />
          </>}
      </div>
    </>
  )
}

export default App
