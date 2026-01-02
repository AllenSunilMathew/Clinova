import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2500);
  };

  const handleRegister = () => {
    if (!name || !email || !password) {
      showToast("⚠️ Please fill all fields");
      return;
    }

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check duplicate email
    const duplicate = existingUsers.find((u) => u.email === email);
    if (duplicate) {
      showToast("❌ Email already registered");
      return;
    }

    // Create new user
    const newUser = { name, email, password, role };
    existingUsers.push(newUser);

    localStorage.setItem("users", JSON.stringify(existingUsers));
    showToast("✅ Registration successful");

    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <>
      <Header />

      <section style={sectionStyle}>
        <div style={cardWrapper}>
          
          {/* Image Section */}
          <div style={imageSection}>
            <img
              src="https://illustrations.popsy.co/white/user-login.svg"
              alt="register"
              style={{ width: "100%", maxWidth: "280px" }}
            />
            <h3 style={{ marginTop: "20px" }}>Join Us Today 🚀</h3>
            <p style={{ fontSize: "14px", opacity: 0.8 }}>
              Create an account and unlock all features
            </p>
          </div>

          {/* Form Section */}
          <div style={formSection}>
            <h2 style={{ marginBottom: "10px" }}>Create Account</h2>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{ ...inputStyle, color: "#333" }}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>

            <button
              onClick={handleRegister}
              style={buttonStyle}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              Register
            </button>
          </div>
        </div>
      </section>

      {toast && <div style={toastStyle}>{toast}</div>}
    </>
  );
}

/* ================= STYLES ================= */

const sectionStyle = {
  minHeight: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "30px",
  background: "linear-gradient(135deg, #667eea, #764ba2)",
};

const cardWrapper = {
  width: "100%",
  maxWidth: "900px",
  display: "flex",
  borderRadius: "22px",
  overflow: "hidden",
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(14px)",
  boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
};

const imageSection = {
  flex: 1,
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  textAlign: "center",
};

const formSection = {
  flex: 1,
  padding: "40px",
  background: "rgba(255,255,255,0.95)",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
};

const inputStyle = {
  padding: "12px 14px",
  borderRadius: "12px",
  border: "none",
  outline: "none",
  fontSize: "14px",
  background: "#f3f4f6",
  boxShadow: "inset 0 2px 6px rgba(0,0,0,0.1)",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "12px",
  borderRadius: "12px",
  border: "none",
  fontSize: "16px",
  fontWeight: "600",
  color: "#fff",
  cursor: "pointer",
  background: "linear-gradient(135deg, #43cea2, #185a9d)",
  transition: "all 0.3s ease",
};

const toastStyle = {
  position: "fixed",
  bottom: "30px",
  right: "30px",
  background: "linear-gradient(135deg, #43cea2, #185a9d)",
  color: "#fff",
  padding: "14px 22px",
  borderRadius: "12px",
  fontSize: "14px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  zIndex: 999,
};

export default Register;
