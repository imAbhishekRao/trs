import React from 'react';
import Footer from './footer';
import Navbar from './NavBar';  

const UltrafluxPowerPack = () => {
  return (
    <>
    <Navbar />
      <div className="product-container">
        <h1 className="product-title">ULTRAFLUX SERIES Power Pack - UF6000 & UF4000</h1>

        <div className="product-content">
          <div className="product-image">
            <img src="/ultraflux-powerpack.png" alt="ULTRAFLUX Power Pack" />
          </div>

          <div className="product-details">
            <p>
              The <strong>ULTRAFLUX UF6000/4000</strong> Power Packs are convenient & economical inspection units 
              designed for magnetic particle applications requiring moderate power. Ideal for large/heavy parts, 
              mobile equipment inspection, and job-site weld inspections.
            </p>

            <h3>Key Benefits:</h3>
            <ul className="feature-list">
              <li>Detect subsurface defects with DC current</li>
              <li>Switch to HWDC for near-surface flaws</li>
              <li>Multiple inspection methods: prods, central conductor, coil wrapping</li>
              <li>Infinitely variable current control</li>
              <li>Built-in automatic demagnetization (AC mode)</li>
              <li>Thyristorized solid-state current control</li>
            </ul>

            <h3>Technical Specifications</h3>
            <div className="spec-table">
              <div className="spec-row header">
                <div>Description</div>
                <div>UF6000</div>
                <div>UF4000</div>
              </div>
              
              {specsData.map((spec, index) => (
                <div className="spec-row" key={index}>
                  <div>{spec.description}</div>
                  <div>{spec.uf6000}</div>
                  <div>{spec.uf4000}</div>
                </div>
              ))}
            </div>

            <h3>Standard Accessories</h3>
            <ul className="feature-list">
              <li>120 Sq mm Cable (2x6m) with copper lugs & Prod Set</li>
              <li>Powder spray bulb with Aluminum head</li>
              <li>Feld Indicator, UV Light Meter</li>
              <li>Gauss Meter, Residual Field Indicator</li>
            </ul>

            <div className="contact-info">
              <h3>Sold & Serviced By:</h3>
              <p>TRS GLOBAL BUSINESS SOLUTIONS</p>
              <p>Regd. Office: 481-C, Phase-1, Urban Estate, Focal Point, Jamalpur, Ludhiana-141010</p>
              <p>Ph: 9803991842, 9888812254 | Email: sales.trsqbs@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="product-buttons">
          <button className="whatsapp-btn">WHATSAPP NOW</button>
          <button className="catalogue-btn">DOWNLOAD CATALOGUE</button>
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
          grid-template-columns: 2fr 1fr 1fr;
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

        .contact-info {
          margin-top: 25px;
          padding: 15px;
          background-color: #f9f9f9;
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
      `}</style>
    <Footer />  
    </>
  );
};

const specsData = [
  { description: 'Current Control', uf6000: 'Thyristorised sleepless', uf4000: 'Thyristorised sleepless' },
  { description: 'Input Power Supply', uf6000: '415V AC 50/60Hz 150A 2PHASE', uf4000: '415V AC 50/60Hz 70A 2PHASE' },
  { description: 'Output Power', uf6000: '6000A HWDC', uf4000: '4000A HWDC' },
  { description: 'Weight', uf6000: '<300kg (without cable)', uf4000: '<170kg (without cable)' },
  { description: 'Duty Cycle', uf6000: '3 Sec. on/off', uf4000: '3 Sec. on/off' },
  { description: 'Operating Temp.', uf6000: '-10 to +60°C', uf4000: '-10 to +60°C' },
  { description: 'Rectifier Type', uf6000: 'Single Capsule (DISC) Diode', uf4000: 'Single Capsule (DISC) Diode' },
];

export default UltrafluxPowerPack;