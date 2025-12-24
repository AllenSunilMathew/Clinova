import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";

function Appointment() {
  const navigate = useNavigate();

  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [department, setDepartment] = useState("");
  const [toast, setToast] = useState("");

  // Check login on page load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("userName");
    if (!token) {
      showToast("⚠️ Please login first");
      setTimeout(() => navigate("/login"), 2000);
    } else {
      setPatientName("");
    }
  }, [navigate]);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2500);
  };

  const handleSubmit = () => {
    if (!patientName || !email || !phone || !date || !time || !department) {
      showToast("⚠️ Please fill all fields");
      return;
    }

    // Here you can send appointment to backend API
    // For now, we store in localStorage for demonstration
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push({
      patientName,
      email,
      phone,
      date,
      time,
      department,
      status: "Confirmed",
    });
    localStorage.setItem("bookings", JSON.stringify(bookings));

    showToast("✅ Appointment booked successfully");

    // Redirect to user page after 2 seconds
    setTimeout(() => {
      navigate("/user");
    }, 2000);
  };

  return (
    <>
      <Header />
      <section className="appointment-section">
        <div className="appointment-container">
          <h2>Book an Appointment</h2>

          <input
            type="text"
            placeholder="Patient Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">Select Department</option>
            <option value="General">General</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Neurology">Neurology</option>
            <option value="Dermatology">Dermatology</option>
          </select>

          <button onClick={handleSubmit}>Book Appointment</button>
<button className=" btn btn-danger text-black" onClick={() => navigate("/lab")}>
  Lab
</button>

        </div>
      </section>

      {toast && <div className="toast">{toast}
        


        </div>}









      <style>{`
        .appointment-section {
          position: relative;
          padding: 80px 20px;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: url('https://images.unsplash.com/photo-1588776814546-6e2c1ee7f8c0?auto=format&fit=crop&w=1950&q=80') no-repeat center center/cover;
          overflow: hidden;
        }

        .appointment-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 500px;
          padding: 40px;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .appointment-container h2 {
          text-align: center;
          color: #3A8DFF;
          margin-bottom: 20px;
        }

        .appointment-container input,
        .appointment-container select {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ccc;
          outline: none;
          transition: 0.3s;
        }

        .appointment-container input:focus,
        .appointment-container select:focus {
          border-color: #3A8DFF;
          box-shadow: 0 0 10px rgba(58,141,255,0.3);
        }

        .appointment-container button {
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: #3A8DFF;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .appointment-container button:hover {
          background: #0066cc;
        }

        .toast {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: #e50101ff;
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 14px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }

        @media (max-width: 600px) {
          .appointment-container {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
}

export default Appointment;
