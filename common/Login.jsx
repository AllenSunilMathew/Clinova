import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <section className="auth">
        <div className="background"></div>

        <div className="card">
          <h2>Welcome Back</h2>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button className="login-btn">Login</button>

          <div className="divider">OR</div>

          <button className="google-btn">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
            />
            <span>Sign in with Google</span>
          </button>

          <p className="register-text">
            Not a user?{' '}
            <Link to="/register" className="register-link">
              Register here
            </Link>
          </p>
        </div>
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

        .login-btn {
          padding: 12px;
          border-radius: 10px;
          border: none;
          background: #3A8DFF;
          color: white;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .login-btn:hover {
          background: #0066cc;
          transform: scale(1.05);
        }

        .divider {
          text-align: center;
          font-size: 13px;
          color: #e0e0e0;
        }

        .google-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.2);
          color: #fff;
          cursor: pointer;
          font-size: 14px;
          transition: 0.3s;
        }

        .google-btn img {
          width: 20px;
          height: 20px;
        }

        .google-btn:hover {
          background: rgba(255,255,255,0.4);
          transform: scale(1.05);
        }

        .register-text {
          text-align: center;
          margin-top: 10px;
          color: #e0e0e0;
          font-size: 14px;
        }

        .register-link {
          color: #fff;
          font-weight: bold;
          text-decoration: underline;
          transition: 0.3s;
        }

        .register-link:hover {
          color: #00FFC6;
        }

        @media (max-width: 400px) {
          .card {
            width: 90%;
          }
        }
      `}</style>
    </>
  );
}

export default Login;
