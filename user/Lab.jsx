import React, { useState } from "react";
import Header from "../common/Header";

function Lab() {
  const [patientName, setPatientName] = useState("");
  const [selectedTests, setSelectedTests] = useState([]);

  const labTests = [
    { id: 1, name: "Complete Blood Count (CBC)", price: 350 },
    { id: 2, name: "Blood Sugar (FBS)", price: 150 },
    { id: 3, name: "Blood Sugar (PPBS)", price: 150 },
    { id: 4, name: "HbA1c", price: 500 },
    { id: 5, name: "Lipid Profile", price: 800 },
    { id: 6, name: "Liver Function Test (LFT)", price: 700 },
    { id: 7, name: "Kidney Function Test (KFT)", price: 650 },
    { id: 8, name: "Thyroid Profile (T3 T4 TSH)", price: 600 },
    { id: 9, name: "Urine Routine", price: 200 },
    { id: 10, name: "Urine Culture", price: 450 },
    { id: 11, name: "Vitamin D", price: 1200 },
    { id: 12, name: "Vitamin B12", price: 900 },
    { id: 13, name: "CRP", price: 400 },
    { id: 14, name: "ESR", price: 250 },
    { id: 15, name: "Dengue NS1", price: 700 },
    { id: 16, name: "Widal Test", price: 300 },
    { id: 17, name: "COVID-19 RT-PCR", price: 1200 },
    { id: 18, name: "Malaria Parasite", price: 350 },
    { id: 19, name: "ECG", price: 400 },
    { id: 20, name: "X-Ray Chest", price: 500 }
  ];

  const toggleTest = (test) => {
    setSelectedTests((prev) =>
      prev.find((t) => t.id === test.id)
        ? prev.filter((t) => t.id !== test.id) // unselect
        : [...prev, test] // select
    );
  };

  const isSelected = (id) => selectedTests.some((t) => t.id === id);

  const totalAmount = selectedTests.reduce((sum, test) => sum + test.price, 0);

  const handleSubmit = () => {
    if (!patientName || selectedTests.length === 0) {
      alert("Please enter patient name and select tests");
      return;
    }

    alert(
      `Lab Booking Successful\n\nPatient: ${patientName}\nTests:\n${selectedTests
        .map((t) => `• ${t.name}`)
        .join("\n")}\n\nTotal: ₹${totalAmount}`
    );
  };

  return (
    <>
      <Header />
      <section style={styles.section}>
        <div style={styles.card}>
          <h2>🧪 Lab Test Booking</h2>

          <input
            type="text"
            placeholder="Patient Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            style={styles.input}
          />

          <div style={styles.list}>
            {labTests.map((test) => (
              <div
                key={test.id}
                onClick={() => toggleTest(test)}
                style={{
                  ...styles.testItem,
                  ...(isSelected(test.id) && styles.selectedTest)
                }}
              >
                <span>{test.name}</span>
                <span>₹{test.price}</span>
              </div>
            ))}
          </div>

          <div style={styles.total}>
            Total Amount: <strong>₹{totalAmount}</strong>
          </div>

          <button style={styles.button} onClick={handleSubmit}>
            Book Lab Test
          </button>
        </div>
      </section>
    </>
  );
}

const styles = {
  section: {
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#667eea,#764ba2)",
    padding: "20px"
  },
  card: {
    width: "100%",
    maxWidth: "720px",
    background: "#fff",
    borderRadius: "18px",
    padding: "30px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.2)"
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "18px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "15px"
  },
  list: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    marginBottom: "20px"
  },
  testItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px",
    borderRadius: "10px",
    cursor: "pointer",
    border: "1px solid #ddd",
    fontSize: "14px",
    transition: "0.2s"
  },
  selectedTest: {
    background: "#e6fff3",
    border: "2px solid #43cea2",
    fontWeight: "600"
  },
  total: {
    fontSize: "16px",
    marginBottom: "15px",
    textAlign: "right"
  },
  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg,#43cea2,#185a9d)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer"
  }
};

export default Lab;
