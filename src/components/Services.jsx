import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Image1 from '../lmage/digital.png';
import Image2 from '../lmage/image2.png';
import Image3 from '../lmage/utm.jpeg';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Touchscreen Digital Rockwell Hardness Testing Machine',
      image: Image1,
      link: '/hardnesstestingmachines'
    },
    {
      id: 2,
      title: 'Automatic Impact Tester',
      image: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Picture3.jpg?raw=true",
      link: '/impacttestingmachines'
    },
    {
      id: 3,
      title: 'Universal Testing Machine',
      image: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Untitled%20design%20(48).png?raw=true",
      link: '/universal-testing-machine'
    }
  ];

  const stats = [
    { number: '9+', label: 'Years in Business' },
    { number: '1.5k', label: 'Happy Clients' },
    { number: '2000+', label: 'Products Delivered' },
    { number: '22+', label: 'Trained Staff' }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <p className="section-label">Our Services</p>
        <h2>Material Testing Machines Supplier, Authorized Dealer</h2>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <h3>{service.title}</h3>
              <div className="link-group">
                <Link to={service.link} className="cta-link">READ MORE</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="stats-overlay">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          padding: 80px 0 160px;
          background: #000;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-label {
          text-align: center;
          font-size: 16px;
          font-weight: 600;
          color: #3498db;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 10px;
          text-shadow: 0 0 8px rgba(139, 92, 246, 0.7);
        }

        h2 {
          text-align: center;
          color: white;
          margin-bottom: 40px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: #1a1a1a;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 2px 15px rgba(255,255,255,0.05);
          color: white;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .service-image {
          width: 70%;
          height: 70%;
          object-fit: contain;
          margin: 0 auto 20px auto;
        }

        h3 {
          color: #ffffff;
          margin-bottom: 20px;
        }

        .link-group {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-top: auto;
          padding-top: 20px;
        }

        .cta-link {
          display: inline-block;
          padding: 10px 25px;
          background-color: #ffffff;
          color: #1a3e6f;
          text-decoration: none;
          border-radius: 4px;
          font-weight: bold;
          transition: background-color 0.3s, color 0.3s;
        }

        .cta-link:hover {
          background-color: #1a3e6f;
          color: #fff;
        }

        .stats-overlay {
          position: absolute;
          bottom: -80px;
          left: 0;
          right: 0;
          z-index: 2;
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .stat-item {
          text-align: center;
          padding: 25px;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a3e6f;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 1.1rem;
          color: #4a5568;
        }

        @media (max-width: 768px) {
          .stats-container {
            grid-template-columns: repeat(2, 1fr);
          }
          .stat-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .stats-container {
            grid-template-columns: 1fr;
          }
          .services-section {
            padding-bottom: 240px;
          }
          .stats-overlay {
            bottom: -160px;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
