import React, { useEffect, useState } from "react";
import { fetchDoctors, bookAppointment } from "../services/AllApi";

function Appointment() {
  const [user, setUser] = useState({});
  const [departments] = useState(["General", "Cardiology", "Orthopedics", "Neurology", "Dermatology"]);
  const [selectedDept, setSelectedDept] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [toast, setToast] = useState("");

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
      setPatientName(savedUser.name);
      setEmail(savedUser.email);
    }
  }, []);

  useEffect(() => {
    if (selectedDept) {
      fetchDoctors(selectedDept).then(setDoctors);
      setSelectedDoctor("");
    }
  }, [selectedDept]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const handleBooking = async () => {
    if (!patientName || !email || !phone || !selectedDept || !selectedDoctor || !date || !time) {
      showToast("⚠️ Please fill all fields");
      return;
    }
    const bookingData = {
      patientName,
      email,
      phone,
      department: selectedDept,
      doctor: selectedDoctor,
      date,
      time,
      userId: user._id,
    };
    const res = await bookAppointment(bookingData);
    if (res.success) {
      showToast("✅ Appointment booked successfully");
      // Reset form
      setSelectedDept("");
      setSelectedDoctor("");
      setDate("");
      setTime("");
      setPhone("");
    } else {
      showToast("❌ Booking failed");
    }
  };

  return (
    <section className="appointment-section">
      <div className="appointment-container">
        <h2>Book an Appointment</h2>

        <input type="text" placeholder="Patient Name" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}>
          <option value="">Select Department</option>
          {departments.map((dept, i) => (
            <option key={i} value={dept}>{dept}</option>
          ))}
        </select>

        {selectedDept && (
          <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
            <option value="">Select Doctor</option>
            {doctors.map((doc, i) => (
              <option key={i} value={doc.name}>{doc.name}</option>
            ))}
          </select>
        )}

        <div className="row">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>

        <button className="primary-btn" onClick={handleBooking}>Book Appointment</button>
      {toast && <div className="toast">{toast}</div>}
      </div>

      <style>{`
        .appointment-section { min-height: 90vh; display: flex; justify-content: center; align-items: center; padding: 30px; background: linear-gradient(135deg, #3A8DFF, #75A0F2); }
        .appointment-container { width: 100%; max-width: 500px; padding: 30px; border-radius: 20px; background: rgba(255,255,255,0.15); backdrop-filter: blur(12px); display: flex; flex-direction: column; gap: 12px; color: #fff; }
        input, select { padding: 12px; border-radius: 12px; border: none; font-size: 14px; background: rgba(255,255,255,0.9); color: #333; }
        .row { display: flex; gap: 10px; }
        .primary-btn { padding: 12px; border-radius: 14px; border: none; background: linear-gradient(135deg, #43cea2, #185a9d); color: white; font-weight: bold; cursor: pointer; }
        .primary-btn:hover { transform: scale(1.05); }
        .toast { position: fixed; bottom: 20px; right: 20px; background: #43cea2; color: white; padding: 10px 18px; border-radius: 12px; }
        @media(max-width:600px){ .row{ flex-direction: column; } }
      `}</style>
    </section>
  );
}

export default Appointment;
