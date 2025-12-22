import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <section className="auth">
        <div className="background"></div>

        <div className="card">
          <h2>Create Account</h2>

          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button className="register-btn">Register</button>

          <p className="login-text">
            Already have an account?{' '}
            <Link to="/login" className="login-link">
              Login here
            </Link>
          </p>
        </div>

        {/* Image that fades in after motion */}
        <img
          className="floating-image"
          src="data:image/jpeg;base64,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"
          alt="Medical Illustration"
        />
      </section>

      <style>{`
        .auth {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          overflow: hidden;
          position: relative;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .background {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          background: linear-gradient(270deg, #3A8DFF, #6CC1FF, #00FFC6, #3A8DFF);
          background-size: 800% 800%;
          animation: gradientAnimation 20s ease infinite;
          z-index: 0;
        }

        @keyframes gradientAnimation {
          0% {background-position:0% 50%;}
          50% {background-position:100% 50%;}
          100% {background-position:0% 50%;}
        }

        .card {
          position: relative;
          z-index: 1;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(15px);
          padding: 40px 30px;
          border-radius: 20px;
          width: 350px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          gap: 15px;
          animation: floatCard 6s ease-in-out infinite;
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .card h2 {
          text-align: center;
          color: #fff;
          margin-bottom: 20px;
          font-size: 1.8rem;
        }

        .card input {
          padding: 12px;
          border-radius: 10px;
          border: none;
          outline: none;
          font-size: 14px;
          background: rgba(255,255,255,0.3);
          color: #fff;
          transition: 0.3s;
        }

        .card input::placeholder {
          color: #e0e0e0;
        }

        .card input:focus {
          background: rgba(255,255,255,0.5);
          box-shadow: 0 0 10px rgba(58,141,255,0.5);
        }

        .register-btn {
          padding: 12px;
          border-radius: 10px;
          border: none;
          background: #28a745;
          color: white;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .register-btn:hover {
          background: #218838;
          transform: scale(1.05);
        }

        .login-text {
          text-align: center;
          margin-top: 10px;
          color: #e0e0e0;
          font-size: 14px;
        }

        .login-link {
          color: #fff;
          font-weight: bold;
          text-decoration: underline;
          transition: 0.3s;
        }

        .login-link:hover {
          color: #00FFC6;
        }

        /* Floating image that fades in */
        .floating-image {
          position: absolute;
          bottom: 50px;
          right: 50px;
          width: 200px;
          border-radius: 15px;
          opacity: 0;
          z-index: 1;
          padding: 10px;
          animation: fadeInImage 6s ease-in-out infinite;
        }

        @keyframes fadeInImage {
          0%, 40% { opacity: 0; }
          50%, 90% { opacity: 1; }
          100% { opacity: 0; }
        }

        @media (max-width: 400px) {
          .card {
            width: 90%;
          }
          .floating-image {
            width: 150px;
            right: 20px;
            bottom: 20px;
          }
        }
      `}</style>
    </>
  );
}

export default Register;
