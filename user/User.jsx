import React, { useEffect, useState } from "react";

function User() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(
      localStorage.getItem("userBookings") || "[]"
    );
    setBookings(savedBookings);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const userName = localStorage.getItem("userName") || "User";

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        
        {/* PROFILE HEADER */}
        <div style={styles.profile}>
          <img
            src="https://i.pravatar.cc/150"
            alt="user"
            style={styles.avatar}
          />
          <h2>{userName}</h2>
          <p style={{ color: "#6b7280" }}>Welcome back 👋</p>
        </div>

        {/* DASHBOARD CARDS */}
        <div style={styles.grid}>
          <div style={styles.box}>
            <h3>{bookings.length}</h3>
            <p>Bookings</p>
          </div>

          <div style={styles.box}>
            <h3>{bookings.filter(b => b.status === "Confirmed").length}</h3>
            <p>Appointments</p>
          </div>

          <div style={styles.box}>
            <h3>
              {bookings.length === 0 ? "—" : bookings[0].status}
            </h3>
            <p>Latest Status</p>
          </div>
        </div>

        {/* BOOKING LIST */}
        <div style={styles.section}>
          <h3>Your Bookings</h3>
          {bookings.length === 0 && <p>No bookings yet</p>}

          {bookings.map((b, i) => (
            <div key={i} style={styles.booking}>
              <strong>{b.type}</strong>
              <span>{b.date} • {b.time}</span>
              <span style={{ color: "#16a34a" }}>{b.status}</span>
            </div>
          ))}
        </div>

        {/* LOGOUT */}
        <button style={styles.logout} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default User;
