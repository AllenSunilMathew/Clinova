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

  const handleRegister = async () => {
    if (!name || !email || !password) {
      showToast("⚠️ Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();

      if (res.status === 201) {
        showToast("✅ Registration successful");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        showToast(data.message || "❌ Registration failed");
      }
    } catch (error) {
      showToast("❌ Server error");
    }
  };

  return (
    <>
      <Header />
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h2>Register</h2>
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button onClick={handleRegister}>Register</button>
        </div>
      </section>
      {toast && <div style={toastStyle}>{toast}</div>}
    </>
  );
}

const sectionStyle = { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh", padding: "40px 20px", background: "#f0f4f8" };
const containerStyle = { display: "flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: "400px", padding: "30px", background: "#fff", borderRadius: "16px", boxShadow: "0 8px 20px rgba(0,0,0,0.15)" };
const toastStyle = { position: "fixed", bottom: "30px", right: "30px", background: "#3A8DFF", color: "#fff", padding: "12px 20px", borderRadius: "8px", fontSize: "14px", zIndex: 999 };

export default Register;
