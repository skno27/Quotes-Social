import react from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function Logout() {
  // clears tokens
  localStorage.clear();

  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  // clear so that we dont return old access tokens, prevents functionality errors
  localStorage.clear();

  return <Register />;
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              {/* cant access home unless user is authenticated */}
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/logout"
          element={<Logout />}
        />
        <Route
          path="/register"
          element={<RegisterAndLogout />}
        />
        <Route
          path="/*"
          // 404 page
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
