import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
    <Header />
      {/* HERO / PARALLAX SECTION */}
      <section className="home">
        <div className="overlay">
          <h1>
            Welcome to <span>Clinova</span>
          </h1>
          <p>Your smart healthcare platform for everyone</p>
<Link to="/appointments">
            <button className="cta">Book Appointment</button>
  
</Link>        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2>Why Choose Clinova?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
              alt="Doctor"
            />
            <h3>Expert Doctors</h3>
            <p>Consult experienced specialists across departments.</p>
          </div>

          <div className="feature-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3050/3050525.png"
              alt="Lab"
            />
            <h3>Advanced Labs</h3>
            <p>Accurate diagnostics with modern lab facilities.</p>
          </div>

          <div className="feature-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
              alt="Appointments"
            />
            <h3>Easy Appointments</h3>
            <p>Book doctor and lab appointments instantly.</p>
          </div>
        </div>
      </section>

      {/* PARALLAX INFO SECTION */}
      <section className="parallax-info">
        <div className="content">
          <h2>Healthcare That Cares</h2>
          <p>
            Clinova combines technology and compassion to deliver quality
            healthcare, making medical services accessible, efficient, and
            reliable.
          </p>
        </div>
      </section>

      {/* DESIGN STYLES */}
      <style>{`
        /* HERO PARALLAX */
        .home {
          height: 90vh;
          background: url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3')
            center / cover fixed no-repeat;
          position: relative;
        }

        .overlay {
          height: 100%;
          background: rgba(0, 0, 0, 0.55);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
          padding: 20px;
        }

        .overlay h1 {
          font-size: 3.2rem;
          margin-bottom: 15px;
        }

        .overlay h1 span {
          color: #6cc1ff;
        }

        .overlay p {
          font-size: 1.3rem;
          max-width: 600px;
          margin-bottom: 25px;
        }

        .cta {
          padding: 12px 28px;
          border: none;
          border-radius: 25px;
          background: #3a8dff;
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }

        .cta:hover {
          background: #1f6fe0;
          transform: scale(1.05);
        }

        /* FEATURES */
        .features {
          padding: 70px 20px;
          background: #f4f8fc;
          text-align: center;
        }

        .features h2 {
          font-size: 2.3rem;
          margin-bottom: 40px;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: auto;
        }

        .feature-card {
          background: white;
          padding: 30px;
          border-radius: 14px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-8px);
        }

        .feature-card img {
          width: 70px;
          margin-bottom: 15px;
        }

        .feature-card h3 {
          margin-bottom: 10px;
          color: #3a8dff;
        }

        .feature-card p {
          color: #555;
          font-size: 14px;
        }

        /* PARALLAX INFO */
        .parallax-info {
          height: 60vh;
          background: url('https://images.unsplash.com/photo-1579684385127-1ef15d508118')
            center / cover fixed no-repeat;
          position: relative;
        }

        .parallax-info .content {
          height: 100%;
          background: rgba(58, 141, 255, 0.75);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
        }

        .parallax-info h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .parallax-info p {
          max-width: 700px;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .overlay h1 {
            font-size: 2.4rem;
          }
        }
      `}</style>
    </>
  );
}

export default Home;
