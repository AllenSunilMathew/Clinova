import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [labs, setLabs] = useState([]);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (!loggedUser) {
      navigate("/login");
      return;
    }
    setUser(loggedUser);

    const allAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const allLabs = JSON.parse(localStorage.getItem("labBookings")) || [];

    setAppointments(allAppointments.filter(a => a.userEmail === loggedUser.email));
    setLabs(allLabs.filter(l => l.userEmail === loggedUser.email));
  }, []);

  return (
    <div style={styles.container}>
      <h2>👤 User Profile</h2>

      {user && (
        <div style={styles.card}>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
        </div>
      )}

      <div style={styles.section}>
        <h3>🩺 Appointments</h3>
        {appointments.length === 0 ? <p>No appointments</p> :
          appointments.map((a, i) => (
            <div key={i} style={styles.item}>
              <p><b>Doctor:</b> {a.doctor}</p>
              <p><b>Date:</b> {a.date}</p>
              <p><b>Status:</b> {a.status}</p>
            </div>
          ))}
      </div>

      <div style={styles.section}>
        <h3>🧪 Lab Bookings</h3>
        {labs.length === 0 ? <p>No lab bookings</p> :
          labs.map((l, i) => (
            <div key={i} style={styles.item}>
              <p><b>Test:</b> {l.test}</p>
              <p><b>Date:</b> {l.date}</p>
              <p><b>Status:</b> {l.status}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "20px", maxWidth: "800px", margin: "auto" },
  card: {
    background: "#f9fafb",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px"
  },
  section: { marginTop: "25px" },
  item: {
    background: "#eef2ff",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "10px"
  }
};

export default User;
