import React from 'react';
import Footer from './footer';
import Navbar from './NavBar';    
const UniversalTestingMachines = () => {
  return (
    <>
    <Navbar/> 
    <div className="products-wrapper">
      {/* Machine 1 */}
      <div className="product-container">
        <h1 className="product-title">FIE Electronic Universal Testing Machine (UTES)</h1>

        <div className="product-content">
          <div className="product-image">
            <img src="/images/UTES-Machine-1.png" alt="FIE UTES Machine" />
          </div>

          <div className="product-details">
            <p>
              The FIE Electronic Universal Testing Machine (UTES) is designed for precision testing of materials under tension, compression, bending, transverse, shear loads, and hardness tests...
            </p>

            <h3>Standard Features:</h3>
            <ul className="feature-list">
              <li>Hydraulic wedge action grips for reliable specimen holding</li>
              <li>Servo-controlled motorized valve for precise control modes</li>
              <li>Digital readouts for simplicity in measurement</li>
              <li>Motor-driven threaded columns for effortless adjustments</li>
              <li>RS 232 serial port for PC interface and data transfer</li>
              <li>Load capacities: 100–1000 kN</li>
              <li>Designed to comply with BS: 1610, IS: 1828</li>
            </ul>

            <div className="product-buttons">
              <a href="https://wa.me/your-number?text=I'm%20interested%20in%20the%20FIE%20UTES%20Machine" target="_blank" rel="noopener noreferrer">
                <button className="whatsapp-btn">WHATSAPP NOW</button>
              </a>
              <a href="/catalogues/UTES-Catalogue.pdf" download>
                <button className="catalogue-btn">DOWNLOAD CATALOGUE</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Machine 2 */}
      <div className="product-container">
        <h1 className="product-title">FIE Electronic Universal Testing Machine – Model UTE</h1>

        <div className="product-content">
          <div className="product-image">
            <img src="/images/UTES-Machine-2.png" alt="FIE UTE Model Machine" />
          </div>

          <div className="product-details">
            <p>
              'FIE' Electronic Universal Testing Machine is designed for testing ferrous & non-ferrous materials under tension, compression, bending, transverse and shear loads. It includes...
            </p>

            <h3>Features:</h3>
            <ul className="feature-list">
              <li>Loading accuracy up to ±1%</li>
              <li>Straining at variable speeds</li>
              <li>Printer & PC graphs for material behavior analysis</li>
              <li>Manual control & release valve operation</li>
              <li>Clearance for various compression test setups</li>
              <li>Power: 1.33 HP to 6 HP | Voltage: 400–440V</li>
              <li>Load Capacities: 100–2000 kN</li>
            </ul>

            <div className="product-buttons">
              <a href="https://wa.me/your-number?text=I'm%20interested%20in%20the%20FIE%20Model%20UTE%20Machine" target="_blank" rel="noopener noreferrer">
                <button className="whatsapp-btn">WHATSAPP NOW</button>
              </a>
              <a href="/catalogues/UTE-Model-Catalogue.pdf" download>
                <button className="catalogue-btn">DOWNLOAD CATALOGUE</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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
        }

        .product-title {
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
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

        .product-image img {
          max-width: 100%;
          height: auto;
          border-radius: 5px;
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
          margin-bottom: 5px;
        }

        .product-buttons {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .product-buttons button {
          padding: 10px 20px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          width: 100%;
          border-radius: 5px;
        }

        .whatsapp-btn {
          background-color: #25D366;
          color: white;
        }

        .catalogue-btn {
          background-color: #000;
          color: white;
        }

        @media (min-width: 768px) {
          .product-buttons {
            flex-direction: row;
            justify-content: flex-start;
          }

          .product-buttons button {
            width: auto;
          }
        }
      `}</style>
    </div>
    <Footer/> 
    </>
  );
};

export default UniversalTestingMachines;
