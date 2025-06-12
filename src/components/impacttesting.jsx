import React from 'react';
import Navbar from './NavBar';
import Footer from './footer';

const ImpactTestingMachines = () => {
  return (
    <>
    <Navbar/>
    <div className="products-wrapper">
      {/* IT-30 Series */}
      <div className="product-container">
        <h1 className="product-title">Impact Testing Machines (IT-30 Series)</h1>
        <div className="product-content">
          <div className="product-image">
            <img src="https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Untitled%20design%20(5).jpg?raw=true" alt="IT-30 Series" />
          </div>
          <div className="product-details">
            <p>
              Manual pendulum testers for Izod and Charpy tests with multiple configurations and compliance with BS/EN standards.
            </p>
            <h3>Series Variants:</h3>
            <ul className="feature-list">
              <li>IT-30: Basic model for Izod/Charpy tests</li>
              <li>IT-30 (D): Digital readout version</li>
              <li>IT-30 (ASTM): ASTM E-23 compliant model</li>
              <li>300J maximum capacity</li>
              <li>Anti-friction bearing pendulum</li>
              <li>Interchangeable strikers</li>
            </ul>
            <div className="product-buttons">
              <a href="/catalogues/IT-30-Series-Catalogue.pdf" download>
                <button className="catalogue-btn">DOWNLOAD CATALOGUE</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Auto Impact-30 */}
      <div className="product-container">
        <h1 className="product-title">Automatic Impact Tester (Auto Impact-30)</h1>
        <div className="product-content">
          <div className="product-image">
            <img src="https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Picture3.jpg?raw=true" alt="Auto Impact-30" />
          </div>
          <div className="product-details">
            <p>
              Fully automated system with digital readout and auto-braking mechanism for precise energy absorption measurement.
            </p>
            <h3>Key Features:</h3>
            <ul className="feature-list">
              <li>Automatic pendulum release and braking</li>
              <li>Digital energy display (Joules)</li>
              <li>BSEN 10045-2:1993 compliant</li>
              <li>300J/168J capacity</li>
              <li>HMI interface with data logging</li>
              <li>Safety door interlocks</li>
            </ul>
            <div className="product-buttons">
              <a href="/catalogues/Auto-Impact-30-Catalogue.pdf" download>
                <button className="catalogue-btn">DOWNLOAD CATALOGUE</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Auto Impact-40 (ASTM) */}
      <div className="product-container">
        <h1 className="product-title">ASTM Impact Tester (Auto Impact-40 ASTM)</h1>
        <div className="product-content">
          <div className="product-image">
            <img src="https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Picture2.png?raw=true" alt="Auto Impact-40 ASTM" />
          </div>
          <div className="product-details">
            <p>
              High-capacity automated tester specifically designed for ASTM-E23 standards with advanced safety features.
            </p>
            <h3>Premium Features:</h3>
            <ul className="feature-list">
              <li>400J maximum capacity</li>
              <li>Touch screen HMI interface</li>
              <li>Thermal printer output</li>
              <li>USB data logging</li>
              <li>High-resolution encoder (&lt;1J accuracy)</li>
              <li>Full safety enclosure</li>
            </ul>
            <div className="product-buttons">
              <a href="/catalogues/Auto-Impact-40-Catalogue.pdf" download>
                <button className="catalogue-btn">DOWNLOAD CATALOGUE</button></a>
      
              
      
            </div>
          </div>
        </div>
      </div>

      {/* Styles - Same as Previous Components */}
      <style jsx>{`
        .products-wrapper {
          display: flex;
          flex-direction: column;
          gap: 60px;
          padding: 20px;
          max-width: 1200px;
          margin: auto;
          font-family: Arial, sans-serif;
        }

        .product-container {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 20px;
          background: #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .product-title {
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #333;
        }

        .product-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        @media (min-width: 768px) {
          .product-content {
            flex-direction: row;
          }
        }

        .product-image {
          flex: 0 0 40%;
          display: flex;
          align-items: center;
        }

        .product-image img {
          max-width: 70%;
          height: auto;
          border-radius: 5px;
          border: 1px solid #eee;
        }

        .product-details {
          flex: 1;
          font-size: 15px;
          line-height: 1.6;
          color: #444;
        }

        .product-details h3 {
          font-size: 18px;
          margin: 15px 0 10px;
          color: #222;
        }

        .feature-list {
          margin: 10px 0;
          padding-left: 20px;
          list-style-type: square;
        }

        .feature-list li {
          margin-bottom: 8px;
        }

        .product-buttons {
          margin-top: 25px;
          display: flex;
          justify-content: center;
        }

        .product-buttons button {
          padding: 12px 30px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .catalogue-btn {
          background-color: #2d3748;
          color: white;
        }

        .catalogue-btn:hover {
          background-color: #1a202c;
        }
      `}</style>
    </div>
<Footer/>
    </>
  );
};

export default ImpactTestingMachines;