import React from 'react'

function Admin() {
  return (
    <>
      <style>{`
        .admin-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Arial, sans-serif;
        }

        .admin-card {
          background: #ffffff;
          width: 90%;
          max-width: 900px;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          animation: slideUp 0.8s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .admin-header h2 {
          color: #2c5364;
          font-size: 26px;
        }

        .logout-btn {
          background: #e74c3c;
          color: #fff;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .logout-btn:hover {
          background: #c0392b;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .stat-card {
          background: #f4f6f8;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
        }

        .stat-card h3 {
          font-size: 22px;
          color: #203a43;
          margin-bottom: 8px;
        }

        .stat-card p {
          color: #555;
          font-size: 14px;
        }
      `}</style>

      <div className="admin-container">
        <div className="admin-card">
          <div className="admin-header">
            <h2>Admin Dashboard</h2>
            <button className="logout-btn">Logout</button>
          </div>

          <div className="stats">
            <div className="stat-card">
              <h3>120</h3>
              <p>Total Users</p>
            </div>

            <div className="stat-card">
              <h3>45</h3>
              <p>Appointments</p>
            </div>

            <div className="stat-card">
              <h3>12</h3>
              <p>Doctors</p>
            </div>

            <div className="stat-card">
              <h3>8</h3>
              <p>Departments</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin
