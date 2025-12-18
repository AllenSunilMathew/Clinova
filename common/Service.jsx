import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Service() {
  const services = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png',
      title: 'Expert Doctors',
      desc: 'Consult experienced specialists across multiple departments.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/3050/3050525.png',
      title: 'Advanced Labs',
      desc: 'Accurate diagnostics with modern lab facilities.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2919/2919906.png',
      title: 'Appointments',
      desc: 'Book doctor and lab appointments instantly.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2965/2965567.png',
      title: 'Emergency Care',
      desc: '24/7 emergency services for critical patients.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png',
      title: 'Pharmacy',
      desc: 'Get prescribed medicines delivered to your doorstep.'
    }
  ];

  return (
    <>
    <Header/>
      <section className="services">
        <h2>Our Services</h2>
        <p>We provide modern healthcare solutions for patients and staff.</p>

        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.icon} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .services {
          padding: 70px 20px;
          text-align: center;
          background: #f4f8fc;
        }

        .services h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .services p {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 40px;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
          max-width: 1000px;
          margin: auto;
        }

        .service-card {
          background: white;
          padding: 25px;
          border-radius: 14px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s;
        }

        .service-card:hover {
          transform: translateY(-8px);
        }

        .service-card img {
          width: 60px;
          margin-bottom: 15px;
        }

        .service-card h3 {
          color: #3A8DFF;
          margin-bottom: 10px;
        }

        .service-card p {
          color: #555;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .services h2 {
            font-size: 2rem;
          }
        }
      `}</style>
      <Footer/>
    </>
  );
}

export default Service;
