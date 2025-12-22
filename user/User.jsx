import React, { useState } from "react";

function User() {
  const [showEdit, setShowEdit] = useState(false);
  const [showBookings, setShowBookings] = useState(false);

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#f4f7fb",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Segoe UI, sans-serif",
      padding: "20px",
    },
    wrapper: {
      display: "flex",
      width: "100%",
      maxWidth: "1000px",
      background: "#fff",
      borderRadius: "16px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
      overflow: "hidden",
      flexWrap: "wrap",
      position: "relative",
    },

    /* LEFT PROFILE */
    left: {
      width: "100%",
      maxWidth: "320px",
      background: "#f8fafc",
      padding: "25px",
      textAlign: "center",
      borderRight: "1px solid #e5e7eb",
    },
    avatar: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "15px",
    },
    name: {
      fontSize: "20px",
      fontWeight: "600",
    },
    role: {
      color: "#6b7280",
      fontSize: "14px",
      marginBottom: "10px",
    },
    rating: {
      fontSize: "14px",
      marginBottom: "15px",
    },
    leftBtn: {
      width: "100%",
      padding: "10px",
      borderRadius: "10px",
      border: "none",
      cursor: "pointer",
      fontWeight: "600",
      marginBottom: "10px",
      transition: "all 0.3s ease",
    },

    /* RIGHT CONTENT */
    right: {
      flex: 1,
      padding: "30px",
    },
    section: {
      marginBottom: "25px",
    },
    sectionTitle: {
      fontSize: "16px",
      fontWeight: "600",
      borderBottom: "2px solid #e5e7eb",
      paddingBottom: "8px",
      marginBottom: "15px",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px",
      marginBottom: "10px",
      flexWrap: "wrap",
    },
    label: {
      color: "#6b7280",
      minWidth: "120px",
    },
    value: {
      fontWeight: "500",
    },

    bookingCard: {
      background: "#f9fafb",
      padding: "14px",
      borderRadius: "12px",
      marginBottom: "12px",
      boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
      fontSize: "14px",
      animation: "fadeIn 0.4s ease",
    },

    /* EDIT TOGGLE PANEL */
    editPanel: {
      position: "fixed",
      top: 0,
      right: showEdit ? "0" : "-400px",
      width: "100%",
      maxWidth: "400px",
      height: "100vh",
      background: "#fff",
      boxShadow: "-10px 0 40px rgba(0,0,0,0.25)",
      padding: "25px",
      transition: "right 0.45s cubic-bezier(.68,-0.6,.32,1.6)",
      zIndex: 1000,
    },
    close: {
      position: "absolute",
      top: "15px",
      right: "20px",
      border: "none",
      background: "transparent",
      fontSize: "20px",
      cursor: "pointer",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "14px",
      borderRadius: "8px",
      border: "1px solid #ccc",
    },
    saveBtn: {
      width: "100%",
      padding: "12px",
      borderRadius: "10px",
      border: "none",
      background: "#2563eb",
      color: "#fff",
      fontWeight: "600",
      cursor: "pointer",
    },
  };

  return (
    <>
      <div style={styles.page}>
        <div style={styles.wrapper}>
          {/* LEFT PROFILE */}
          <div style={styles.left}>
            <img
              src="https://i.pravatar.cc/300"
              alt="User"
              style={styles.avatar}
            />
            <div style={styles.name}>Jeremy Rose</div>
            <div style={styles.role}>Product Designer</div>
            <div style={styles.rating}>⭐⭐⭐⭐☆ 4.6</div>

            <button
              style={{ ...styles.leftBtn, background: "#2563eb", color: "#fff" }}
              onClick={() => setShowEdit(true)}
            >
              Edit Profile
            </button>

            <button
              style={{ ...styles.leftBtn, background: "#10b981", color: "#fff" }}
              onClick={() => setShowBookings(!showBookings)}
            >
              {showBookings ? "Hide Bookings" : "Show Bookings"}
            </button>
          </div>

          {/* RIGHT DETAILS */}
          <div style={styles.right}>
            <div style={styles.section}>
              <div style={styles.sectionTitle}>Contact Information</div>

              <div style={styles.row}>
                <span style={styles.label}>Phone</span>
                <span style={styles.value}>+91 98765 43210</span>
              </div>
              <div style={styles.row}>
                <span style={styles.label}>Email</span>
                <span style={styles.value}>jeremy@rose.com</span>
              </div>
              <div style={styles.row}>
                <span style={styles.label}>Address</span>
                <span style={styles.value}>New York, USA</span>
              </div>
            </div>

            {showBookings && (
              <div style={styles.section}>
                <div style={styles.sectionTitle}>Your Bookings</div>

                <div style={styles.bookingCard}>
                  <strong>Blood Test</strong><br />
                  Date: 12 Sep 2025<br />
                  Status: Confirmed
                </div>

                <div style={styles.bookingCard}>
                  <strong>Doctor Consultation</strong><br />
                  Date: 18 Sep 2025<br />
                  Status: Completed
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* EDIT TOGGLE PANEL */}
      <div style={styles.editPanel}>
        <button style={styles.close} onClick={() => setShowEdit(false)}>
          ✕
        </button>

        <h3>Edit Profile</h3>
        <input style={styles.input} defaultValue="Jeremy Rose" />
        <input style={styles.input} defaultValue="jeremy@rose.com" />
        <input style={styles.input} placeholder="New Password" type="password" />
        <button style={styles.saveBtn}>Save Changes</button>
      </div>
    </>
  );
}

export default User;
