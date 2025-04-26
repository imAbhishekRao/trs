import React from 'react';
import { FaMedal, FaCheckCircle, FaUser, FaClock, FaPhone, FaAward } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-container">
      <style>{`
        .why-choose-container {
          background-color: #f9f9f9;
          padding: 60px 20px;
        }

        .why-choose-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .why-choose-subtitle {
          color: #3498db;
          font-weight: 600;
          font-size: 18px;
          margin-bottom: 10px;
        }

        .why-choose-title {
          color: #0b1d3a;
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 40px;
        }

        .reasons-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .reason-card {
          background-color: #fff;
          padding: 40px 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .reason-icon {
          font-size: 32px;
          color: #0b1d3a;
          margin-bottom: 16px;
        }

        .reason-text {
          font-size: 18px;
          font-weight: 600;
          color: #3498db;
        }

        /* Tablet: 2 per row */
        @media (min-width: 768px) {
          .reasons-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Laptop and above: 3 per row */
        @media (min-width: 1024px) {
          .reasons-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <div className="why-choose-content">
        <h4 className="why-choose-subtitle">Why Choose Us</h4>
        <h2 className="why-choose-title">Six Reasons For People Choosing Us</h2>
        <div className="reasons-grid">
          <div className="reason-card">
            <FaMedal className="reason-icon" />
            <p className="reason-text">Quality Material</p>
          </div>
          <div className="reason-card">
            <FaCheckCircle className="reason-icon" />
            <p className="reason-text">Accredited</p>
          </div>
          <div className="reason-card">
            <FaUser className="reason-icon" />
            <p className="reason-text">Trained Workers</p>
          </div>
          <div className="reason-card">
            <FaClock className="reason-icon" />
            <p className="reason-text">Time Availability</p>
          </div>
          <div className="reason-card">
            <FaPhone className="reason-icon" />
            <p className="reason-text">Quick Response</p>
          </div>
          <div className="reason-card">
            <FaAward className="reason-icon" />
            <p className="reason-text">1 Year Warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
