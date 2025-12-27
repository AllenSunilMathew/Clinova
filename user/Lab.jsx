import React, { useState, useEffect } from "react";
import { submitLabRequest } from "../Services/allAPI";

function Lab() {
  const [patientName, setPatientName] = useState("");
  const [selectedTests, setSelectedTests] = useState([]);
  const [toast, setToast] = useState("");
  const [labTests] = useState([
    { name: "Complete Blood Count (CBC)", price: 350, time: "Same Day" },
    { name: "Blood Sugar (FBS)", price: 150, time: "Fasting Required" },
    { name: "HbA1c", price: 450, time: "Same Day" },
    { name: "Lipid Profile", price: 600, time: "Fasting Required" },
    { name: "Thyroid Profile", price: 500, time: "Same Day" },
    { name: "Urine Routine", price: 200, time: "Same Day" },
    { name: "Vitamin D", price: 900, time: "Next Day" },
    { name: "ECG", price: 300, time: "Immediate" },
    { name: "X-Ray Chest", price: 400, time: "Immediate" },
    { name: "COVID-19 RT-PCR", price: 1200, time: "24 Hours" },
  ]);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setPatientName(savedUser.name);
  }, []);

  const toggleTest = (test) => {
    if (selectedTests.find((t) => t.name === test.name)) {
      showToast("⚠️ Test already added");
      return;
    }
    setSelectedTests([...selectedTests, test]);
  };

  const totalAmount = selectedTests.reduce((sum, t) => sum + t.price, 0);

  const handleSubmit = async () => {
    if (!patientName.trim()) return showToast("⚠️ Enter patient name");
    if (selectedTests.length === 0) return showToast("⚠️ Select at least one test");

    try {
      await submitLabRequest({
        patientName,
        tests: selectedTests,
      });
      showToast("✅ Lab request submitted successfully!");
      setSelectedTests([]);
    } catch (error) {
      showToast("❌ Failed to submit lab request");
    }
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  return (
    <section className="lab-page">
      <h2>🧪 Laboratory Tests</h2>
      <input
        className="patient-input"
        placeholder="Patient Full Name"
        value={patientName}
        readOnly
      />
      <div className="test-list">
        {labTests.map((test, i) => (
          <div
            key={i}
            className={`test-row ${selectedTests.find((t) => t.name === test.name) ? "selected" : ""}`}
            onClick={() => toggleTest(test)}
          >
            <div className="test-info">
              <h4>{test.name}</h4>
              <span>{test.time}</span>
            </div>
            <div className="test-price">₹{test.price}</div>
          </div>
        ))}
      </div>

      <div className="total">
        <h3>Total: ₹{totalAmount}</h3>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Confirm Lab Test
      </button>

      {toast && <div className="toast">{toast}</div>}

      <style>{`
        .lab-page { max-width: 700px; margin: auto; padding: 40px 20px; display: flex; flex-direction: column; gap: 15px; background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); border-radius: 20px; }
        .patient-input { padding: 12px; border-radius: 12px; border: none; outline: none; }
        .test-list { display: flex; flex-direction: column; gap: 10px; }
        .test-row { display: flex; justify-content: space-between; padding: 12px; border-radius: 10px; background: #fff; cursor: pointer; }
        .test-row.selected { background: #eef4ff; border-left: 6px solid #0a4ecb; }
        .submit-btn { padding: 12px; border-radius: 14px; border: none; background: linear-gradient(135deg, #43cea2, #185a9d); color: white; font-weight: bold; cursor: pointer; }
        .total { text-align: right; font-weight: bold; }
        .toast { position: fixed; bottom: 20px; right: 20px; background: #43cea2; color: white; padding: 10px 15px; border-radius: 10px; }
        @media (max-width: 600px) { .lab-page { padding: 20px 10px; } }
      `}</style>
    </section>
  );
}

export default Lab;
