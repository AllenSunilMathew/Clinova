import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
// import { loginUser } from "../services/AllApi"; // Ensure AllApi.js exports loginUser as a named export
import { loginUser } from "../Services/allAPI";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");
  const [toast, setToast] = useState("");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      showToast("⚠️ Enter all fields");
      return;
    }

    try {
      const res = await loginUser({ email, password, role });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("email", res.data.email);
        showToast("✅ Login Successful");
        setTimeout(() => navigate("/home"), 1500);
      }
    } catch (error) {
      showToast("❌ Invalid Credentials");
    }
  };

  return (
    <>
      <Header />
      <section style={styles.section}>
        <div style={styles.card}>
          <h2>Welcome Back 👋</h2>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ ...styles.input, color: "#333" }}
          >
            <option>User</option>
            <option>Admin</option>
          </select>

          <button onClick={handleLogin} style={styles.button}>
            Login
          </button>

          <a href="/register" style={styles.registerLink}>
            New user? Register
          </a>
        </div>

        {toast && <div style={styles.toast}>{toast}</div>}
      </section>
    </>
  );
}

const styles = {
  section: {
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `linear-gradient(135deg, rgba(102,126,234,0.85), rgba(118,75,162,0.85)), url("https://images.unsplash.com/photo-1580281657527-47d15b92d07b")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    padding: "35px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(12px)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    color: "#fff",
  },
  input: {
    padding: "12px 14px",
    borderRadius: "12px",
    border: "none",
    outline: "none",
    fontSize: "14px",
    background: "rgba(255,255,255,0.9)",
    boxShadow: "inset 0 2px 6px rgba(0,0,0,0.15)",
  },
  button: {
    marginTop: "10px",
    padding: "12px",
    borderRadius: "12px",
    border: "none",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    cursor: "pointer",
    background: "linear-gradient(135deg, #43cea2, #185a9d)",
  },
  registerLink: {
    textAlign: "center",
    color: "#fff",
    textDecoration: "underline",
    fontSize: "14px",
  },
  toast: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    background: "linear-gradient(135deg, #43cea2, #185a9d)",
    color: "#fff",
    padding: "14px 22px",
    borderRadius: "12px",
    fontSize: "14px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  },
};

export default Login;
