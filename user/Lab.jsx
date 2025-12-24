import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Lab() {
  const labTests = [
    { name: 'Complete Blood Count (CBC)', price: 350, time: 'Same Day' },
    { name: 'Peripheral Blood Smear (PBS)', price: 250, time: 'Same Day' },
    { name: 'Blood Sugar (FBS)', price: 150, time: 'Fasting Required' },
    { name: 'Post Prandial Blood Sugar (PPBS)', price: 180, time: '2 Hours After Food' },
    { name: 'HbA1c', price: 450, time: 'Same Day' },
    { name: 'Lipid Profile', price: 600, time: 'Fasting Required' },
    { name: 'Thyroid Profile (T3 T4 TSH)', price: 500, time: 'Same Day' },
    { name: 'Urine Routine', price: 200, time: 'Same Day' },
    { name: 'Liver Function Test (LFT)', price: 700, time: 'Same Day' },
    { name: 'Kidney Function Test (KFT)', price: 650, time: 'Same Day' },
    { name: 'Vitamin D Test', price: 900, time: 'Next Day' },
    { name: 'Vitamin B12', price: 600, time: 'Next Day' },
    { name: 'ESR', price: 180, time: 'Same Day' },
    { name: 'CRP', price: 500, time: 'Same Day' },
    { name: 'Calcium', price: 300, time: 'Same Day' },
    { name: 'Electrolytes', price: 450, time: 'Same Day' },
    { name: 'ECG', price: 300, time: 'Immediate' },
    { name: 'X-Ray Chest', price: 400, time: 'Immediate' },
    { name: 'Dengue NS1', price: 850, time: 'Same Day' },
    { name: 'COVID-19 RT-PCR', price: 1200, time: '24 Hours' }
  ];

  const [patientName, setPatientName] = useState('');
  const [selectedTests, setSelectedTests] = useState([]);
  const [toast, setToast] = useState('');
const navigate = useNavigate();

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(''), 2500);
  };

  const toggleTest = (test) => {
    if (selectedTests.find(t => t.name === test.name)) {
      showToast('⚠️ Test already selected');
      return;
    }
    setSelectedTests([...selectedTests, test]);
  };

const handleSubmit = () => {
  if (!patientName.trim()) {
    showToast('⚠️ Please enter patient name');
    return;
  }
  if (selectedTests.length === 0) {
    showToast('⚠️ Please select at least one test');
    return;
  }

  showToast('✅ Lab tests submitted successfully');

  setTimeout(() => {
    navigate('/');
  }, 1500);
};


  const totalAmount = selectedTests.reduce((sum, test) => sum + test.price, 0);

  return (
    <>
      {/* Parallax Banner */}
      <section className="lab-banner">
        <div className="overlay">
          <h1>Clinova Laboratory</h1>
          <p>Your Health, Our Priority</p>
        </div>
      </section>

      <section className="lab-section">
        <div className="lab-container">

          <input
            className="patient-input"
            type="text"
            placeholder="Patient Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />

          <div className="lab-grid">
            {labTests.map((test, index) => (
              <div
                key={index}
                className={`lab-card ${selectedTests.find(t => t.name === test.name) ? 'active' : ''}`}
                onClick={() => toggleTest(test)}
              >
                <img src={`https://source.unsplash.com/80x80/?laboratory,${index}`} alt={test.name} />
                <h3>{test.name}</h3>
                <p>₹ {test.price}</p>
                <span>{test.time}</span>
              </div>
            ))}
          </div>

          <div className="total-box">
            <p><strong>Patient:</strong> {patientName || '—'}</p>
            <p><strong>Selected Tests:</strong> {selectedTests.length}</p>
            <h3>Total Amount</h3>
            <h2>₹ {totalAmount}</h2>
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </section>

      {toast && <div className="toast">{toast}</div>}

      <style>{`
        /* Parallax Banner */
        .lab-banner {
          height: 40vh;
          background: url('https://images.unsplash.com/photo-1588776814546-c9e4b1f5577f') center/cover fixed;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .lab-banner .overlay {
          background: rgba(58,141,255,0.7);
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
        }

        .lab-banner h1 {
          font-size: 3rem;
          margin-bottom: 10px;
        }

        .lab-banner p {
          font-size: 1.2rem;
        }

        /* Lab Section */
        .lab-section {
          padding: 50px 20px;
          background: #f0f4f8;
        }

        .lab-container {
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        .patient-input {
          width: 300px;
          padding: 12px;
          margin-bottom: 30px;
          border-radius: 10px;
          border: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          font-size: 14px;
        }

        /* Glassy Lab Cards */
        .lab-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }

        .lab-card {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px);
          padding: 20px;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
          border: 2px solid transparent;
        }

        .lab-card img {
          width: 80px;
          border-radius: 10px;
          margin-bottom: 10px;
        }

        .lab-card h3 {
          margin: 8px 0;
          color: #3A8DFF;
        }

        .lab-card p {
          font-weight: bold;
          color: #333;
        }

        .lab-card span {
          font-size: 13px;
          color: #666;
        }

        .lab-card.active {
          border-color: #3A8DFF;
          box-shadow: 0 0 20px #3A8DFF88;
          transform: translateY(-6px);
        }

        /* Total Box - Glassy */
        .total-box {
          margin-top: 40px;
          background: rgba(58,141,255,0.2);
          backdrop-filter: blur(12px);
          color: #3A8DFF;
          padding: 25px;
          border-radius: 16px;
          display: inline-block;
          min-width: 320px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
        }

        .total-box h2 {
          font-size: 2rem;
          margin: 10px 0;
        }

        .submit-btn {
          margin-top: 15px;
          padding: 10px 20px;
          border: none;
          border-radius: 25px;
          background: #3A8DFF;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
        }

        .submit-btn:hover {
          background: #1f6fe0;
        }

        /* Toast */
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
          z-index: 999;
        }

        @media (max-width: 768px) {
          .lab-banner h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}

export default Lab;
