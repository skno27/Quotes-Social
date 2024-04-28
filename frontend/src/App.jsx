import react from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Base from "./pages/Base";
import Users from "./pages/Users";

function Logout() {
  // clears tokens
  localStorage.clear();

  return <Navigate to="/" />;
}

function RegisterAndLogout() {
  // clear so that we dont return old access tokens, prevents functionality errors
  localStorage.clear();

  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Base />}
        />
        <Route
          path="/users/*"
          element={<Users />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
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
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
