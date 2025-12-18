import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo-area">
          <img
            className="logo-img"
            src="https://static.vecteezy.com/system/resources/previews/025/945/079/non_2x/hospital-health-medical-medicine-logo-design-vector.jpg"
            alt="Clinova Logo"
          />
        <Link to={"/"}>  <h2 className="logo-text">Clinova</h2></Link>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/appoinment" className="cta-btn">Book Now</Link>
        </nav>
      </header>

      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 40px;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-img {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #3A8DFF;
        }

        .logo-text {
          font-size: 1.8rem;
          font-weight: bold;
          color: #3A8DFF;
        }

        .nav a {
          margin-left: 22px;
          text-decoration: none;
          color: #333;
          font-weight: 500;
          position: relative;
        }

        .nav a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: #3A8DFF;
          transition: width 0.3s ease;
        }

        .nav a:hover::after {
          width: 100%;
        }

        .login-btn {
          color: #3A8DFF;
          font-weight: 600;
        }

        .cta-btn {
          margin-left: 25px;
          padding: 8px 18px;
          background: #3A8DFF;
          color: white !important;
          border-radius: 20px;
          font-weight: 600;
          box-shadow: 0 5px 15px rgba(58,141,255,0.4);
        }

        .cta-btn:hover {
          background: #1f6fe0;
        }

        @media (max-width: 768px) {
          .nav {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
