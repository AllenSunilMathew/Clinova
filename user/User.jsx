import React, { useEffect, useState } from "react";
import Header from "../common/Header";
    // import { fetchUserAppointments, fetchUserLabRecords } from "../services/AllApi";
import { fetchUserAppointments, fetchUserLabRecords } from "../Services/allAPI";
function User() {
  const [user, setUser] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [labRecords, setLabRecords] = useState([]);
  const [theme, setTheme] = useState("light");
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);

    fetchUserAppointments().then(setAppointments);
    fetchUserLabRecords().then(setLabRecords);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleChatSend = () => {
    if (!chatInput.trim()) return;
    const userMessage = { from: "user", text: chatInput };
    const botMessage = { from: "bot", text: `🤖 Response to "${chatInput}"` }; // replace with AI logic
    setChatMessages([...chatMessages, userMessage, botMessage]);
    setChatInput("");
  };

  return (
    <div className={theme}>
      <Header />

      {/* User Info */}
      <section className="user-cover">
        <div className="cover-overlay">
          <div className="profile-box">
            <img
              className="avatar"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt={user.name || "User"}
            />
            <h2>{user.name || "John Doe"}</h2>
            <p>{user.email || "user@email.com"}</p>

            <div className="action-btns">
              <button className="btn primary">Edit Profile</button>
              <button className="btn outline">Appointments</button>
              <button className="btn outline" onClick={toggleTheme}>
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Appointments */}
      <section className="appointments">
        <h2>Recent Appointments</h2>
        {appointments.map((appt, i) => (
          <div className="appointment-card" key={i}>
            <img src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png" alt="Doctor" />
            <div>
              <h4>{appt.doctor}</h4>
              <p>{appt.department} • {new Date(appt.date).toLocaleDateString()}</p>
            </div>
            <span className={`status ${appt.status === "Completed" ? "done" : "upcoming"}`}>
              {appt.status}
            </span>
          </div>
        ))}
      </section>

      {/* Lab Records */}
      <section className="appointments">
        <h2>Lab Records</h2>
        {labRecords.map((lab, i) => (
          <div className="appointment-card" key={i}>
            <img src="https://cdn-icons-png.flaticon.com/512/3050/3050525.png" alt="Lab" />
            <div>
              <h4>{lab.patientName}</h4>
              <p>{lab.tests.map(t => t.name).join(", ")}</p>
            </div>
            <span className="status done">Completed</span>
          </div>
        ))}
      </section>

      {/* Chatbot */}
      <div className={`chatbot ${chatOpen ? "open" : ""}`}>
        <div className="chat-header" onClick={() => setChatOpen(!chatOpen)}>
          💬 Chat with Assistant
        </div>
        {chatOpen && (
          <div className="chat-body">
            <div className="messages">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`message ${msg.from}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type your message..."
              />
              <button onClick={handleChatSend}>Send</button>
            </div>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .light { background: #f4f7fb; color: #333; }
        .dark { background: #121212; color: #eee; }

        .user-cover { height: 50vh; background: url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3') center/cover no-repeat; }
        .cover-overlay { height: 100%; background: rgba(0,0,0,0.6); display: flex; justify-content: center; align-items: center; }
        .profile-box { background: rgba(255,255,255,0.18); backdrop-filter: blur(15px); padding: 35px 40px; border-radius: 24px; text-align: center; color: inherit; }
        .avatar { width: 120px; border-radius: 50%; border: 4px solid #43cea2; margin-bottom: 15px; }
        .action-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 10px; }
        .btn { padding: 10px 18px; border-radius: 14px; border: none; cursor: pointer; font-weight: 600; }
        .btn.primary { background: linear-gradient(135deg, #43cea2, #185a9d); color: white; }
        .btn.outline { background: transparent; border: 2px solid currentColor; color: inherit; }

        .appointments { max-width: 900px; margin: 30px auto; padding: 0 20px; }
        .appointment-card { background: rgba(255,255,255,0.9); display: flex; align-items: center; gap: 20px; padding: 15px; border-radius: 16px; margin-bottom: 10px; }
        .appointment-card img { width: 50px; }
        .status.done { background: #43cea2; color: white; padding: 5px 10px; border-radius: 12px; margin-left: auto; }
        .status.upcoming { background: #3a8dff; color: white; padding: 5px 10px; border-radius: 12px; margin-left: auto; }

        .chatbot { position: fixed; bottom: 20px; right: 20px; width: 280px; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.2); background: #fff; color: #333; transition: transform 0.3s; }
        .chatbot .chat-header { background: #3a8dff; color: #fff; padding: 10px; cursor: pointer; }
        .chatbot.open { transform: translateY(0); }
        .chat-body { display: flex; flex-direction: column; height: 350px; }
        .messages { flex: 1; overflow-y: auto; padding: 10px; display: flex; flex-direction: column; gap: 6px; }
        .message.user { align-self: flex-end; background: #43cea2; color: white; padding: 6px 12px; border-radius: 12px; }
        .message.bot { align-self: flex-start; background: #e0e0e0; padding: 6px 12px; border-radius: 12px; }
        .chat-input { display: flex; gap: 6px; padding: 10px; border-top: 1px solid #ccc; }
        .chat-input input { flex: 1; padding: 8px 12px; border-radius: 12px; border: 1px solid #ccc; }
        .chat-input button { padding: 8px 12px; border-radius: 12px; border: none; background: #3a8dff; color: white; cursor: pointer; }
        @media (max-width: 600px) { .user-cover { height: 40vh; } .chatbot { width: 90%; right: 5%; bottom: 10px; } }
      `}</style>
    </div>
  );
}

export default User;
