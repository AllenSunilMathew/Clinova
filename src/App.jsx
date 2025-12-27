import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../common/Login";
import Register from "../common/Register";
import Home from "../common/Home";
import Admin from "../Admin/Admin";
import About from "../common/About";
import Service from "../common/Service";
import Contact from "../common/Contact";
import Lab from "../user/Lab";
import LabRecords from "../user/LAbRecord";
import Appointment from "../user/Appointment";
import User from "../user/User";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    setIsAuthenticated(!!token);
    setUserRole(role || "");
  }, []);

  return (
    <Routes>
      {/* Default route -> login */}
      <Route
        path="/"
        element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />}
      />

      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />

      {/* Protected routes */}
      <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
      <Route path="/user" element={isAuthenticated ? <User /> : <Navigate to="/login" />} />
      <Route path="/lab" element={isAuthenticated ? <Lab /> : <Navigate to="/login" />} />
      <Route path="/labrecords" element={isAuthenticated ? <LabRecords /> : <Navigate to="/login" />} />
      <Route path="/appointments" element={isAuthenticated ? <Appointment /> : <Navigate to="/login" />} />

      {/* Admin protected route */}
      <Route
        path="/admin"
        element={
          isAuthenticated && userRole === "admin" ? (
            <Admin />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}

export default App;
