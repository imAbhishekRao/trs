import React from 'react';
import Navbar from './NavBar';
import Footer from './footer';

const Clients = () => {
  const logos = [
    { src: "https://santest.in/wp-content/uploads/2024/12/c15.jpg", alt: 'Volkswagen' },
    { src: "https://santest.in/wp-content/uploads/2024/12/c14.jpg", alt: 'Trans Asia' },
    { src: "https://santest.in/wp-content/uploads/2024/12/c13.jpg", alt: 'Tata Steel BSL' },
    { src: "https://santest.in/wp-content/uploads/2024/12/c12.jpg", alt: 'MRF' },
    { src: "https://santest.in/wp-content/uploads/2024/12/c11.jpg", alt: 'Mahindra' },
    { src: "https://santest.in/wp-content/uploads/2024/12/c10.jpg", alt: 'KSB' },
    { src: "https://santest.in/wp-content/uploads/2024/12/c9.jpg", alt: 'Kirloskar' },
    { src: "https://santest.in/wp-content/uploads/2024/12/c8.jpg", alt: 'Bharat Forge' },
    { src: "https://santest.in/wp-content/uploads/2024/12/c7.jpg", alt: 'JSW Steel' },
    { src: "https://santest.in/wp-content/uploads/2024/12/c6.jpg", alt: 'Endurance' },
    { src: "https://santest.in/wp-content/uploads/2024/12/4.jpg", alt: 'Crompton Greaves' },
    { src: "https://santest.in/wp-content/uploads/2024/12/c5.jpg", alt: 'Cummins' },
  ];

  return (
    <>
      <Navbar />
      <div className="clients-section">
        <div className="clients-container">
          <h2 className="clients-title">Our Clients</h2>
          <div className="clients-grid">
            {logos.map((logo, index) => (
              <div key={index} className="client-logo-container">
                <img src={logo.src} alt={logo.alt} className="client-logo" />
                <p className="logo-text">{logo.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />

      <style>{`
        .clients-section {
          padding: 2rem;
          background-color: #f9fafb;
          text-align: center;
        }

        .clients-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .clients-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 2rem;
          color: #222;
        }

        .clients-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          justify-items: center;
          align-items: center;
        }

        .client-logo-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .client-logo {
          max-width: 240px;
          max-height: 100px;
          object-fit: contain;
        }

        .logo-text {
          margin-top: 0.5rem;
          font-size: 1rem;
          color: #333;
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .clients-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .clients-grid {
            grid-template-columns: 1fr;
          }

          .clients-title {
            font-size: 1.5rem;
          }

          .client-logo {
            max-width: 100px;
            max-height: 80px;
          }
        }
      `}</style>
    </>
  );
};

export default Clients;
