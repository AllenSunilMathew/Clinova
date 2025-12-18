import React from 'react';
import Header from '../common/Header';

function LabRecords() {
  const records = [
    { id: 1, patient: 'Rahul Kumar', tests: ['CBC', 'PBS', 'FBS'], amount: 750, date: '18-12-2025', status: 'Pending' },
    { id: 2, patient: 'Anjali Sharma', tests: ['Lipid Profile', 'Thyroid Profile'], amount: 1100, date: '17-12-2025', status: 'Completed' },
    { id: 3, patient: 'Suresh Menon', tests: ['ECG', 'X-Ray Chest'], amount: 700, date: '17-12-2025', status: 'Completed' },
  ];

  return (
    <>
    <Header/>
      <section className="records-section">
        <div className="records-bg"></div>
        <div className="records-container">
          <h2>Lab Test Records</h2>

          <table className="records-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Patient Name</th>
                <th>Tests</th>
                <th>Total Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={record.id}>
                  <td>{index + 1}</td>
                  <td>{record.patient}</td>
                  <td>{record.tests.join(', ')}</td>
                  <td>₹ {record.amount}</td>
                  <td>{record.date}</td>
                  <td>
                    <span className={`status ${record.status.toLowerCase()}`}>
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <style>{`
        .records-section {
          position: relative;
          padding: 80px 20px;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .records-bg {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          background: url('https://images.unsplash.com/photo-1581093588401-5989b76c1e1a?auto=format&fit=crop&w=1950&q=80') no-repeat center center/cover;
          filter: brightness(0.4) blur(2px);
          z-index: 0;
          transform: translateZ(0);
          will-change: transform;
          animation: floatBG 20s ease-in-out infinite alternate;
        }

        @keyframes floatBG {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.02); }
          100% { transform: translateY(0px) scale(1); }
        }

        .records-container {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          width: 100%;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }

        .records-container h2 {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2.5rem;
          color: #3A8DFF;
        }

        .records-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          font-size: 14px;
        }

        .records-table th,
        .records-table td {
          padding: 14px 18px;
          text-align: left;
          transition: transform 0.3s;
        }

        .records-table th {
          background: rgba(58,141,255,0.8);
          color: white;
          font-weight: 600;
          border-radius: 10px 10px 0 0;
        }

        .records-table tr {
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .records-table tr:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          background: rgba(255,255,255,0.2);
        }

        .status {
          padding: 5px 12px;
          border-radius: 25px;
          font-size: 12px;
          font-weight: 500;
          display: inline-block;
          text-align: center;
          min-width: 80px;
          transition: transform 0.3s;
        }

        .status.pending {
          background: rgba(255,193,7,0.2);
          color: #856404;
        }

        .status.completed {
          background: rgba(40,167,69,0.2);
          color: #155724;
        }

        @media (max-width: 768px) {
          .records-container {
            padding: 20px;
          }
          .records-container h2 {
            font-size: 2rem;
          }
          .records-table th, .records-table td {
            padding: 10px 8px;
          }
        }
      `}</style>
    </>
  );
}

export default LabRecords;
