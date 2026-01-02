import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ toggleTheme, theme }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(storedUser);
    }
  }, []);

  // Sync login changes
  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        setIsLoggedIn(true);
        setUser(storedUser);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    navigate("/login");
  };

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logo}>Clinova</Link>

      <nav style={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/lab">Lab</Link>
      </nav>

      <div style={styles.right}>
        {/* Theme Toggle */}
        <button onClick={toggleTheme} style={styles.themeBtn}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        {!isLoggedIn ? (
          <Link to="/login" style={styles.loginBtn}>Login</Link>
        ) : (
          <div style={{ position: "relative" }}>
            <img
              src={`https://i.pravatar.cc/40?u=${user.email}`}
              alt="profile"
              style={styles.avatar}
              onClick={() => setShowMenu(!showMenu)}
            />

            {showMenu && (
              <div style={styles.menu}>
                <button
                  style={styles.menuBtn}
                  onClick={() => {
                    navigate("/user");
                    setShowMenu(false);
                  }}
                >
                  View Profile
                </button>
                <button
                  style={styles.menuBtn}
                  onClick={logout}
                >
                  Logout
                </button>
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
    padding: "15px 30px",
    background: "#68686aff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff"
  },
  logo: { color: "#fff", fontWeight: "bold", textDecoration: "none", fontSize: "20px" },
  nav: { display: "flex", gap: "20px" },
  right: { display: "flex", gap: "12px", alignItems: "center" },
  loginBtn: {
    background: "#22c55e",
    padding: "8px 14px",
    borderRadius: "6px",
    color: "#fff",
    textDecoration: "none",
    cursor: "pointer"
  },
  avatar: { width: 40, height: 40, borderRadius: "50%", cursor: "pointer" },
  menu: {
    position: "absolute",
    right: 0,
    top: "50px",
    background: "#fff",
    color: "#000",
    borderRadius: "6px",
    boxShadow: "0 4px 10px rgba(0,0,0,.2)",
    display: "flex",
    flexDirection: "column",
    minWidth: "150px",
  },
  menuBtn: {
    padding: "10px",
    border: "none",
    background: "transparent",
    textAlign: "left",
    cursor: "pointer",
    borderBottom: "1px solid #eee",
    fontWeight: 500,
  },
  themeBtn: { padding: "6px 10px", borderRadius: "6px", cursor: "pointer" }
};

export default Header;
