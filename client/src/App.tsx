import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SitePolicy from "./pages/SitePolicy";
import { useAuth } from "./context/AuthContext";
import Terms from "./pages/legal/Terms";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import AcceptableUsePolicy from "./pages/legal/AcceptableUsePolicy";
import ContactAndSupport from "./pages/legal/ContactAndSupport";
import SecurityAndDataProtection from "./pages/legal/SecurityAndDataProtection";

export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            isLoggedIn
              ? <Navigate to="/notes" replace />
              : <Login />
          }
        />

          //Home Route
        <Route
          path="/notes"
          element={
            isLoggedIn
              ? <Home />
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
        <Route path="/site-policy"
          element={
            <SitePolicy />
          } >

          <Route
            index
            element={
              <Navigate to="terms-of-service/acceptance-of-terms" replace />
            } />
          <Route path="terms-of-service/:section"
            element={<Terms />} />
          <Route path="privacy-policies/:section"
            element={<PrivacyPolicy />} />
          <Route path="security-and-data-protection/:section"
            element={<SecurityAndDataProtection />} />
          <Route path="acceptable-use-policy/:section"
            element={<AcceptableUsePolicy />} />
          <Route path="contact-and-support/:section"
            element={<ContactAndSupport />} />

        </Route>

      </Routes>
    </>
  )
}

export default App
