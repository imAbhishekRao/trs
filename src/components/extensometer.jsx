import React from 'react';
import Navbar from './NavBar';
import Footer from './footer';

const ElectronicExtensometer = () => {
  return (
    <>
    <Navbar />
      <div className="product-container">
        <h1 className="product-title">Electronic Mechanical Extensometer - Model EE-2</h1>

        <div className="product-content">
          <div className="product-image">
            <img src="https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/WhatsApp%20Image%202025-06-05%20at%2013.10.55.jpeg?raw=true" alt="EE-2 Extensometer" />
          </div>

          <div className="product-details">
            <div className="general-info">
              <h3>General Information</h3>
              <ul className="feature-list">
                <li>Complies with IS: 12872 & ISO 9513:1989 (Class 1 Accuracy)</li>
                <li>Used with Universal Testing Machines (UTM) for tension tests</li>
                <li>Measures Young's Modulus, proof stress, and yield stress</li>
                <li>Requires electronic signal conditioning PCB for UTM interface</li>
              </ul>
            </div>

            <h3>Technical Specifications</h3>
            <div className="spec-table">
              <div className="spec-row header">
                <div>Parameter</div>
                <div>Value</div>
              </div>
              
              {specsData.map((spec, index) => (
                <div className="spec-row" key={index}>
                  <div>{spec.parameter}</div>
                  <div>{spec.value}</div>
                </div>
              ))}
            </div>

            <h3>Optional Accessories</h3>
            <ul className="feature-list">
              <li>Extended gauge lengths: 25.4mm, 62.5mm, 70mm, 80mm</li>
              <li>Specimen thickness/diameter adapters: 4-40mm & 4-50mm</li>
            </ul>

            <div className="contact-info">
              <h3>Sold & Serviced By:</h3>
              <p>TRS GLOBAL BUSINESS SOLUTIONS</p>
              <p>Contact: <a href="mailto:sales.trsqbs@gmail.com">sales.trsqbs@gmail.com</a></p>
            </div>

            <div className="capabilities">
              <h3>Our Core Capabilities</h3>
              <p>NABL Accredited Calibration Service<br />
              (ISO/IEC 17025:2005 Compliant)</p>
            </div>
          </div>
        </div>

        <div className="product-buttons">
          <button className="whatsapp-btn">Whatsapp Now</button>
          <button className="catalogue-btn">TECHNICAL DOCS</button>
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

        .spec-table {
          margin: 20px 0;
          border: 1px solid #ddd;
        }

        .spec-row {
          display: grid;
          grid-template-columns: 2fr 1fr;
          padding: 10px;
          border-bottom: 1px solid #eee;
        }

        .spec-row.header {
          font-weight: bold;
          background-color: #f5f5f5;
        }

        .feature-list {
          margin: 10px 0;
          padding-left: 20px;
        }

        .feature-list li {
          margin-bottom: 6px;
        }

        .contact-info, .capabilities {
          margin-top: 25px;
          padding: 15px;
          background-color: #f9f9f9;
          border-radius: 5px;
        }

        .capabilities {
          margin-top: 15px;
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

        a {
          color: #d9444d;
          text-decoration: none;
        }
      `}</style>
      <Footer />
    </>
  );
};

const specsData = [
  { parameter: 'Measuring Range', value: '0 to 2 mm' },
  { parameter: 'Least Count', value: '1/100 mm' },
  { parameter: 'Adjustable Gauge Length', value: '25, 30, 45 & 50mm' },
  { parameter: 'Specimen Thickness/Diameter', value: '1 to 20 mm' },
  { parameter: 'Excitation', value: '±5VDC' },
  { parameter: 'Output (Approx)', value: '20 mV full scale' },
];

export default ElectronicExtensometer;