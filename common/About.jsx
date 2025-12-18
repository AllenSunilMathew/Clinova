import React from 'react';
import Footer from './Footer';
import Header from './Header';

function About() {
  return (
    <>
    <Header/>
      {/* HERO PARALLAX BANNER */}
      <section className="about-hero">
        <div className="overlay">
          <h2>About <span>Clinova</span></h2>
          <p>Empowering healthcare through technology and compassion.</p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision">
        <h2>Our Mission & Vision</h2>
        <div className="cards">
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              To provide high-quality, accessible healthcare solutions that
              enhance the wellbeing of every patient.
            </p>
          </div>
          <div className="card">
            <h3>Our Vision</h3>
            <p>
              To be a leading healthcare platform that combines innovation,
              expertise, and empathy for a healthier world.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM / PLACEHOLDER */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <p>Expert doctors, skilled nurses, and dedicated staff working together for you.</p>
      </section>

      <style>{`
        /* HERO PARALLAX */
        .about-hero {
          height: 50vh;
          background: url('https://images.unsplash.com/photo-1588776814546-c9e4b1f5577f') center/cover fixed no-repeat;
          position: relative;
        }

        .about-hero .overlay {
          height: 100%;
          background: rgba(58,141,255,0.6);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
          padding: 20px;
        }

        .about-hero h2 {
          font-size: 3rem;
          margin-bottom: 15px;
        }

        .about-hero h2 span {
          color: #fff3cd;
        }

        .about-hero p {
          font-size: 1.2rem;
          max-width: 600px;
        }

        /* MISSION & VISION CARDS */
        .mission-vision {
          padding: 60px 20px;
          background: #f4f8fc;
          text-align: center;
        }

        .mission-vision h2 {
          font-size: 2.3rem;
          margin-bottom: 40px;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          max-width: 1000px;
          margin: auto;
        }

        .card {
          background: white;
          padding: 25px;
          border-radius: 14px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s;
        }

        .card:hover {
          transform: translateY(-8px);
        }

        .card h3 {
          color: #3A8DFF;
          margin-bottom: 12px;
        }

        .card p {
          color: #555;
          font-size: 14px;
        }

        /* TEAM SECTION */
        .team {
          padding: 50px 20px;
          text-align: center;
        }

        .team h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .team p {
          font-size: 1.1rem;
          max-width: 700px;
          margin: 0 auto;
          color: #555;
        }

        @media (max-width: 768px) {
          .about-hero h2 {
            font-size: 2rem;
          }
        }
      `}</style>
      <Footer/>
    </>
  )
}

export default About;
