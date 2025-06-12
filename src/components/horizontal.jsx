import React from 'react';
import Navbar from './NavBar';
import Footer from './footer';

const HorizontalBalancingMachine = () => {
  return (
    <>
      <Navbar />
      <div className="product-container">
        <h1 className="product-title">Horizontal Dynamic Balancing Machines - HDM Series</h1>

        <div className="product-image">
          <img
            src="https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/WhatsApp%20Image%202025-06-05%20at%2012.57.40.jpeg?raw=true"
            alt="HDM Horizontal Balancing Machine"
          />
        </div>

        <div className="product-details">
          <p>
            HDM Series horizontal universal hard bearing balancing machines feature microprocessor-based measuring panels (HDM-8500)
            for precision balancing of various rotors including electrical machine rotors, crankshafts, turbine rotors, pump rotors,
            and other industrial rotating components. With automatic operation cycles under 10 seconds and advanced safety features,
            these machines offer efficient unbalance correction with digital accuracy.
          </p>

          <h3>Key Features:</h3>
          <ul className="feature-list">
            <li>Microprocessor-based HDM-8500 measuring panel</li>
            <li>Digital display of unbalance amount (±1 digit) and angle (±1°)</li>
            <li>Automatic stop after measurement stabilization</li>
            <li>Simultaneous dual-plane unbalance indication</li>
            <li>Keyboard input for precise rotor dimensions (1-digit accuracy)</li>
            <li>LED tolerance indicators for both correction planes</li>
            <li>Auto-range selection for coarse/fine balancing</li>
            <li>Rotor data storage for repeat operations</li>
            <li>Self-check mode for system diagnostics</li>
          </ul>

          <h3>Technical Specifications:</h3>
          <div className="spec-table">
            <table>
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Rotor Weight (kg)</th>
                  <th>Max Diameter (mm)</th>
                  <th>Balancing Speed (RPM)</th>
                  <th>Motor Power (HP)</th>
                  <th>Min Unbalance (g)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>HDM-10</td><td>0.5-10</td><td>600</td><td>1,000</td><td>0.33</td><td>0.01</td></tr>
                <tr><td>HDM-30</td><td>1-30</td><td>600</td><td>700</td><td>0.75</td><td>0.1</td></tr>
                <tr><td>HDM-50</td><td>2-50</td><td>600</td><td>700</td><td>0.75</td><td>0.1</td></tr>
                <tr><td>HDM-100</td><td>3-100</td><td>1,000</td><td>600</td><td>1.5</td><td>0.1</td></tr>
                <tr><td>HDM-300</td><td>10-300</td><td>1,000</td><td>500</td><td>3</td><td>0.1</td></tr>
                <tr><td>HDM-650</td><td>20-650</td><td>1,200</td><td>350</td><td>5</td><td>0.1</td></tr>
                <tr><td>HDM-1,000</td><td>10-1,000</td><td>1,600</td><td>300/600</td><td>7.5</td><td>0.1</td></tr>
                <tr><td>HDM-3,000</td><td>30-3,000</td><td>2,000</td><td>250/500</td><td>20</td><td>0.1</td></tr>
                <tr><td>HDM-7,000</td><td>70-7,000</td><td>2,400</td><td>200/400</td><td>30</td><td>1</td></tr>
                <tr><td>HDM-10,000</td><td>100-10,000</td><td>2,400</td><td>200/400</td><td>40</td><td>1</td></tr>
                <tr><td>HDM-20,000</td><td>200-20,000</td><td>3,000</td><td>200/400</td><td>60</td><td>1</td></tr>
              </tbody>
            </table>
          </div>

          <h3>Additional Features:</h3>
          <ul className="feature-list">
            <li>Optional matrix printer integration with FIE software</li>
            <li>Special software for 2/4/6 throw crankshaft balancing</li>
            <li>Extension beds for large rotors (except HD-7,000/10,000/20,000)</li>
            <li>Slip ring motors for smooth acceleration (HDM 3,000–20,000)</li>
            <li>400–440V, 3-phase, 50Hz power operation</li>
          </ul>

          <div className="notes">
            <p>* Balancing speed varies based on rotor diameter and drive selection</p>
            <p>** PC & Printer not included in standard supply</p>
          </div>

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

        <div className="product-buttons">
          <button className="whatsapp-btn">CONTACT VIA WHATSAPP</button>
          <button className="catalogue-btn">DOWNLOAD FULL SPECS</button>
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

        .product-image img {
          max-width: 500px;
          width: 100%;
          height: auto;
          display: block;
          margin: 0 auto;
          border-radius: 8px;
        }

        .product-details {
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

        .spec-table {
          overflow-x: auto;
          margin: 20px 0;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin: 10px 0;
        }

        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: center;
          font-size: 14px;
        }

        th {
          background-color: #f5f5f5;
          font-weight: bold;
        }

        .notes {
          margin: 15px 0;
          font-size: 14px;
          color: #666;
        }

        .contact-info {
          margin-top: 25px;
          padding: 15px;
          background-color: #f5f5f5;
          border-radius: 5px;
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

        @media (max-width: 768px) {
          table {
            font-size: 12px;
          }

          th, td {
            padding: 6px;
          }

          .product-title {
            font-size: 22px;
          }

          .product-image img {
            max-width: 100%;
          }
        }
      `}</style>
      <Footer />
    </>
  );
};

export default HorizontalBalancingMachine;
