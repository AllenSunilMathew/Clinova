import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2500);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      showToast("⚠️ Please fill all fields");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });
      const data = await res.json();
      if (res.status === 200) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        showToast("✅ Login successful");
        setTimeout(() => {
          if (data.role === "admin") navigate("/admin");
          else navigate("/");
        }, 1500);
      } else {
        showToast(data.message || "❌ Login failed");
      }
    } catch (error) {
      showToast("❌ Server error");
    }
  };

  return (
    <>
      <Header />

      {/* Background */}
      <section
        style={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          padding: "20px",
        }}
      >
        {/* Card */}
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            padding: "35px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            color: "#fff",
          }}
        >
          <h2 style={{ textAlign: "center", fontSize: "28px", marginBottom: "10px" }}>
            Welcome Back 👋
          </h2>

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

<a className="text-center" href="/register"> New user??  register</a>
          <button
            onClick={handleLogin}
            style={{
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
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Login
          </button>
        </div>
      </section>

      {/* Toast */}
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            background: "linear-gradient(135deg, #43cea2, #185a9d)",
            color: "#fff",
            padding: "14px 22px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
            fontWeight: "500",
            animation: "fadeIn 0.3s ease",
          }}
        >
          {toast}
        </div>
      )}
    </>
  );
}

const inputStyle = {
  padding: "12px 14px",
  borderRadius: "12px",
  border: "none",
  outline: "none",
  fontSize: "14px",
  background: "rgba(255,255,255,0.9)",
  boxShadow: "inset 0 2px 6px rgba(0,0,0,0.15)",
};

export default Login;
