import React from 'react';
import Footer from './footer';
import Navbar from './NavBar';

const BalancingMachineProduct = () => {
  return (
    <>
    <Navbar />
      <div className="product-container">
        <h1 className="product-title">Vertical Balancing Machine Models - HDVM & HDVTM</h1>

        <div className="product-content">
          <div className="product-image">
            <img src="/path-to-your-image.png" alt="Vertical Balancing Machine" />
          </div>

          <div className="product-details">
            <p>
              HDVM and HDVTM are vertical type single and two-plane hard bearing balancing machines respectively,
              equipped with microprocessor-based measuring panels (HDVM-8500 / HDVTM-8500). Designed for high precision
              balancing of rotors like clutch plates, fan blades, grinding wheels, impellers, spinning pots, and more.
              These machines offer fully automatic operation and high accuracy with digital display for both unbalance and RPM.
            </p>

            <h3>Standard Features:</h3>
            <ul className="feature-list">
              <li>Digital display for unbalance amount and angle (+1 digit / +1 degree accuracy)</li>
              <li>Auto Stop after measurement completion</li>
              <li>Simultaneous indication of unbalance in both planes (HDVTM)</li>
              <li>Digital RPM indication</li>
              <li>Key-board for precise data input with 1-digit accuracy</li>
              <li>LED indicators for tolerance confirmation</li>
              <li>Auto Range selection for coarse/fine balance</li>
              <li>Rotor data storage for repeated use</li>
              <li>Self-check mode for display/LEDs (optional)</li>
            </ul>

            <h3>Optional Attachments:</h3>
            <ul className="feature-list">
              <li>Vertical drilling with thrust compensation</li>
              <li>Horizontal drilling with thrust compensation</li>
              <li>Welding attachment</li>
              <li>Custom attachments on request</li>
            </ul>

            <h3>Additional Info:</h3>
            <ul className="feature-list">
              <li>Operates on 400–440V, 3-phase, 50Hz power</li>
              <li>FIE software integration with optional printer support</li>
              <li>Compensation for eccentricity via electronic software</li>
            </ul>
          </div>
        </div>

        <div className="product-buttons">
          <button className="whatsapp-btn">WHATSAPP NOW</button>
          <button className="catalogue-btn">CATALOGUE</button>
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`
        .product-container {
          font-family: Arial, sans-serif;
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .product-title {
          text-align: center;
          font-size: 26px;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .product-content {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        @media (min-width: 768px) {
          .product-content {
            flex-direction: row;
          }
        }

        .product-image img {
          max-width: 100%;
          height: auto;
        }

        .product-details {
          flex: 1;
          font-size: 15px;
          line-height: 1.6;
        }

        .feature-list {
          margin: 10px 0;
          padding-left: 20px;
        }

        .feature-list li {
          margin-bottom: 6px;
        }

        .product-buttons {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .product-buttons button {
          padding: 12px 25px;
          font-size: 16px;
          border: none;
          cursor: pointer;
          width: 250px;
          border-radius: 5px;
        }

        .whatsapp-btn {
          background-color: #25D366;
          color: white;
        }

        .catalogue-btn {
          background-color: black;
          color: white;
        }
      `}</style>
      <Footer />
    </>
  );
};

export default BalancingMachineProduct;
