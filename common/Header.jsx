import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ toggleTheme, theme }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [userName, setUserName] = useState("");
  const [language, setLanguage] = useState("en");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    setIsLoggedIn(!!token);
    setUserName(name || "");
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleProfile = () => {
    navigate("/user");
    setShowProfileMenu(false);
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoText}>Clinova</Link>
      </div>

      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/about" style={styles.navLink}>About</Link>
        <Link to="/service" style={styles.navLink}>Services</Link>
        <Link to="/contact" style={styles.navLink}>Contact</Link>
        {isLoggedIn && <Link to="/appointments" style={styles.navLink}>Book Appointment</Link>}
      </nav>

      <div style={styles.actions}>
        {/* Theme toggle */}
        <button onClick={toggleTheme} style={styles.themeBtn}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        {/* Language select */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={styles.langSelect}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="ml">Malayalam</option>
        </select>

        {!isLoggedIn ? (
          <Link to="/login" style={styles.loginBtn}>Login</Link>
        ) : (
          <div style={styles.profileWrapper}>
            <img
              src="https://i.pravatar.cc/40"
              alt="Profile"
              style={styles.profileIcon}
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            />
            {showProfileMenu && (
              <div style={styles.dropdown}>
                <button onClick={handleProfile} style={styles.dropdownBtn}>Full Profile</button>
                <button onClick={handleLogout} style={styles.dropdownBtn}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#3A8DFF",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 999,
  },
  logoText: { color: "#fff", fontWeight: "bold", textDecoration: "none", fontSize: "1.5rem" },
  nav: { display: "flex", gap: "20px" },
  navLink: { color: "#fff", textDecoration: "none", fontWeight: 500 },
  actions: { display: "flex", alignItems: "center", gap: "10px" },
  loginBtn: {
    padding: "8px 15px",
    borderRadius: "6px",
    background: "#10b981",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    textDecoration: "none",
  },
  profileWrapper: { position: "relative" },
  profileIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    cursor: "pointer",
  },
  dropdown: {
    position: "absolute",
    top: "50px",
    right: 0,
    background: "#fff",
    color: "#333",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    minWidth: "150px",
  },
  dropdownBtn: {
    padding: "10px",
    border: "none",
    background: "transparent",
    textAlign: "left",
    cursor: "pointer",
    fontWeight: 500,
    width: "100%",
    borderBottom: "1px solid #eee",
  },
  themeBtn: {
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
    background: "#fff",
    color: "#3A8DFF",
    fontWeight: "bold",
  },
  langSelect: {
    padding: "6px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
  },
};

export default Header;
