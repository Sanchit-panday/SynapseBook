import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

function App() {
  const token = localStorage.getItem("token");
  const [isLoggedIn, ] = useState<boolean>(
    !!token &&
    token !== "undefined" &&
    token !== "null"
  );
  return (
    <>
      {/* <div className="backgroundimageSVG min-h-screen max-h-fit"> */}
      <div className="backgroundimageSVG min-h-screen max-h-fit">
        <Routes>

          <Route
            path="/login"
            element={
              isLoggedIn
                ? <Navigate to="/todos" replace />
                : <Login/> 
            }
          />

          //Home Route
          <Route
            path="/todos"
            element={
              isLoggedIn
                ? <Home/>
                : <Navigate to="/login" replace />
            }
          />

          <Route
            path="*"
            element={
              <Navigate
                to={isLoggedIn ? "/todos" : "/login"}
                replace
              />
            }
          />

        </Routes>
      </div >
    </>
  )
}

export default App
