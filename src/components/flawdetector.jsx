import React from 'react';
import Navbar from './NavBar';
import Footer from './footer';

const FlawDetectorProduct = () => {
  return (
    <>
      <Navbar />

      <div className="product-container">
        <h1 className="product-title">Digital Ultrasonic Flaw Detector - Einstein-II DGS</h1>

        <div className="product-content">
          <div className="product-image">
            <img
              src="https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/WhatsApp%20Image%202025-06-05%20at%2013.15.15.jpeg?raw=true"
              alt="Einstein-II DGS Flaw Detector"
            />
          </div>

          <div className="product-details">
            <p>
              The Einstein-II DGS from Modsonic is an advanced digital ultrasonic flaw detector featuring instant flaw sizing capability.
              Designed for precision non-destructive testing, it offers built-in DGS/AVG curves, Time Controlled Gain (TCG), and dynamic
              DAC curves for reliable defect evaluation. Ideal for industrial applications requiring accurate flaw detection in materials
              ranging from 10mm to 5 meters in steel.
            </p>

            <h3>Salient Features:</h3>
            <ul className="feature-list">
              <li>Built-in DGS/AVG curves for proven flaw size evaluation</li>
              <li>Time Controlled Gain (TCG) for amplitude compensation</li>
              <li>Dynamic DAC curves with adjustable test range and gain</li>
              <li>Direct defect size display in ERS (Equivalent Reflector Size)</li>
              <li>Dual gate monitoring with positive/negative logic</li>
            </ul>

            <h3>Technical Specifications:</h3>
            <ul className="feature-list">
              <li><strong>Test Range:</strong> 10mm–5m (steel) with 13 Hot Key presets</li>
              <li><strong>Velocity:</strong> 1000–9999 m/sec (7 presets + fine adjustment)</li>
              <li><strong>Gain:</strong> 100dB range (0.5/1/2/6/12/20dB steps)</li>
              <li><strong>Frequency:</strong> 0.5–15MHz broad band amplifier</li>
              <li><strong>Display:</strong> 320x240px color LCD/TFT with 11 color schemes</li>
              <li><strong>Memory:</strong> Stores 200 A-Scan patterns + 50 calibration setups</li>
              <li><strong>Interfaces:</strong> RS-232, BNC/LEMO connectors, PAL video output</li>
              <li><strong>Software:</strong> EinSoft DGS Interface for PC connectivity</li>
              <li><strong>Power:</strong> 14.4V Li-ion (8hr runtime), 100-240V charger</li>
              <li><strong>Environmental:</strong> Operates at 0–55°C</li>
            </ul>

            <h3>Advanced Capabilities:</h3>
            <ul className="feature-list">
              <li>Peak Freeze function for angle beam probing</li>
              <li>Digital thickness/depth readout with unit conversion</li>
              <li>Automatic PRF (Pulse Repetition Frequency) selection</li>
              <li>Reference A-Scan comparison during testing</li>
              <li>Direct printing via IBM-compatible serial printers</li>
            </ul>

            <h3>Physical Specifications:</h3>
            <ul className="feature-list">
              <li><strong>Dimensions:</strong> 154 x 255 x 68mm (HxWxD)</li>
              <li><strong>Weight:</strong> 2.3kg including battery</li>
            </ul>

            <div className="contact-info">
              <h3>Sold & Serviced By:</h3>
              <p>
                TRS Global Business Solutions<br />
                481-C, Phase-1, Urban Estate, Focal Point,<br />
                Jamalpur, Ludhiana-141010, Punjab, India<br />
                📞 9803991842, 9888812254, 01615289386<br />
                📧 sales.trsgbs@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="product-buttons">
          <button className="whatsapp-btn">CONTACT VIA WHATSAPP</button>
          <button className="catalogue-btn">DOWNLOAD BROCHURE</button>
        </div>
      </div>

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

        .product-image {
          display: flex;
          justify-content: flex-start;
          align-self: flex-start;
        }

        .product-image img {
          max-width: 400px;
          width: 100%;
          height: auto;
          border-radius: 8px;
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

        .contact-info {
          margin-top: 25px;
          padding: 15px;
          background-color: #f5f5f5;
          border-radius: 5px;
        }
      `}</style>

      <Footer />
    </>
  );
};

export default FlawDetectorProduct;
