import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Contact() {
  return (
    <>
      <Header />

      {/* CONTACT INFO */}
      <section className="contact-info">
        <h2>Contact Us</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>Email</h3>
            <p>contact@clinova.com</p>
          </div>
          <div className="info-card">
            <h3>Phone</h3>
            <p>+91 12345 67890</p>
          </div>
          <div className="info-card">
            <h3>Address</h3>
            <p>123 Clinova Street, City, India</p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* MAP */}
      <section className="map">
        <iframe
          title="Clinova Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11612345678!2d72.741099!3d19.082197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63!2sMumbai!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <Footer />

      <style>{`
        .contact-info {
          padding: 60px 20px;
          text-align: center;
          background: #f4f8fc;
        }

        .contact-info h2 {
          font-size: 2.5rem;
          margin-bottom: 40px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
          max-width: 900px;
          margin: auto;
        }

        .info-card {
          background: white;
          padding: 25px;
          border-radius: 14px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s;
        }

        .info-card:hover {
          transform: translateY(-6px);
        }

        .info-card h3 {
          color: #3A8DFF;
          margin-bottom: 10px;
        }

        .info-card p {
          font-size: 14px;
          color: #555;
        }

        /* FORM */
        .contact-form {
          padding: 60px 20px;
          text-align: center;
        }

        .contact-form h2 {
          font-size: 2.3rem;
          margin-bottom: 25px;
        }

        .contact-form form {
          max-width: 600px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 12px 15px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 14px;
          resize: none;
        }

        .contact-form button {
          padding: 12px;
          border-radius: 25px;
          border: none;
          background: #3A8DFF;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .contact-form button:hover {
          background: #1f6fe0;
        }

        /* MAP */
        .map {
          margin: 0;
          padding: 0;
        }

        @media (max-width: 768px) {
          .contact-info h2,
          .contact-form h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}

export default Contact;
