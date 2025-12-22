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
          else navigate("/user");
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
      <section style={{ padding: "60px 20px", minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ width: "100%", maxWidth: "400px", background: "#fff", padding: "30px", borderRadius: "16px", boxShadow: "0 8px 20px rgba(0,0,0,0.15)", display: "flex", flexDirection: "column", gap: "12px" }}>
          <h2>Login</h2>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button onClick={handleLogin}>Login</button>
        </div>
      </section>
      {toast && <div style={{ position: "fixed", bottom: "30px", right: "30px", background: "#3A8DFF", color: "#fff", padding: "12px 20px", borderRadius: "8px" }}>{toast}</div>}
    </>
  );
}

export default Login;
