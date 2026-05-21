import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useAuth } from "./context/AuthContext";

export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {/* <div className="min-h-screen max-h-fit"> */}
        <Routes>
          <Route
            path="/login"
            element={
              isLoggedIn
                ? <Navigate to="/notes" replace />
                : <Login/> 
            }
          />

          //Home Route
          <Route
            path="/notes"
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
                to={isLoggedIn ? "/notes" : "/login"}
                replace
              />
            }
          />

        </Routes>
      {/* </div > */}
    </>
  )
}

export default App
