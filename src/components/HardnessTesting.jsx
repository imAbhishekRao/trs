import React from 'react';
import Navbar from './NavBar';
import Footer from './footer';

const HardnessTestingMachines = () => {
  return (
    <>
    <Navbar />
    <div className="products-wrapper">
      {/* B-3000-PC */}
      <div className="product-container">
        <h1 className="product-title">Computerized Brinell Hardness Testing Machine (B-3000-PC)</h1>
        <div className="product-content">
          <div className="product-image">
            <img src="https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/WhatsApp%20Image%202025-06-05%20at%2013.04.46.jpeg?raw=true" alt="B-3000-PC Machine" />
          </div>
          <div className="product-details">
            <p>PC-based system with image processing technology for precise Brinell hardness measurement across soft metals to medium-hardness steels.</p>
            <h3>Key Features:</h3>
            <ul className="feature-list">
              <li>250-3000 kgf test loads in 250 kgf increments</li>
              <li>State-of-the-art image processing technology</li>
              <li>Hydraulic loading/unloading cycle</li>
              <li>4X magnification objectives</li>
              <li>Advanced Windows-based software</li>
              <li>Compliant with IS:1500-2</li>
            </ul>
            <div className="product-buttons">
              <a href="https://wa.me/your-number?text=I'm%20interested%20in%20B-3000-PC" target="_blank" rel="noopener noreferrer">
                <button className="whatsapp-btn">WHATSAPP NOW</button>
              </a>
              <a href="/catalogues/B-3000-PC-Catalogue.pdf" download>
                <button className="catalogue-btn">DOWNLOAD CATALOGUE</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* RASN-TS/TSFA */}
      <div className="product-container">
        <h1 className="product-title">Touch Screen Rockwell Hardness Testers (RASN-TS/RASN-TSFA)</h1>
        <div className="product-content">
          <div className="product-image">
            <img src="https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/WhatsApp%20Image%202025-06-05%20at%2013.06.18.jpeg?raw=true" alt="RASN-TS Series" />
          </div>
          <div className="product-details">
            <p>Advanced touch screen models with semi/fully automatic operation for Rockwell testing with built-in thermal printer and USB connectivity.</p>
            <h3>Series Features:</h3>
            <ul className="feature-list">
              <li>RASN-TS (Semi-Auto): Motorized loading, touch interface</li>
              <li>RASN-TSFA (Fully Auto): Auto load selection, data storage</li>
              <li>15-150 kgf test loads (Rockwell)</li>
              <li>0.1 Rockwell resolution</li>
              <li>Built-in thermal printer</li>
              <li>IS:1586-2 compliant</li>
            </ul>
            <div className="product-buttons">
              <a href="https://wa.me/your-number?text=I'm%20interested%20in%20RASN-TS%20Series" target="_blank" rel="noopener noreferrer">
                <button className="whatsapp-btn">WHATSAPP NOW</button>
              </a>
              <a href="/catalogues/RASN-TS-Catalogue.pdf" download>
                <button className="catalogue-btn">DOWNLOAD CATALOGUE</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* RASNE-3 Series */}
      <div className="product-container">
        <h1 className="product-title">Digital Rockwell Hardness Testers (RASNE-3 Series)</h1>
        <div className="product-content">
          <div className="product-image">
            <img src="https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/WhatsApp%20Image%202025-06-05%20at%2013.05.40.jpeg?raw=true" alt="RASNE-3 Series" />
          </div>
          <div className="product-details">
            <p>Motorized digital testers with automatic cycles and LCD display for Rockwell, Superficial, and Brinell testing applications.</p>
            <h3>Series Variants:</h3>
            <ul className="feature-list">
              <li>RASNE-3: Digital Rockwell</li>
              <li>RASNET-3: Rockwell + Superficial</li>
              <li>RASNEB-3: Rockwell + Brinell</li>
              <li>Automatic load/dwell/unload cycle</li>
              <li>0.1 resolution display</li>
              <li>Up to 250 kgf test force</li>
            </ul>
            <div className="product-buttons">
              <a href="https://wa.me/your-number?text=I'm%20interested%20in%20RASNE-3%20Series" target="_blank" rel="noopener noreferrer">
                <button className="whatsapp-btn">WHATSAPP NOW</button>
              </a>
              <a href="/catalogues/RASNE-3-Catalogue.pdf" download>
                <button className="catalogue-btn">DOWNLOAD CATALOGUE</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* B-3000-TS */}
      <div className="product-container">
        <h1 className="product-title">Touch Screen Brinell Hardness Tester (B-3000-TS)</h1>
        <div className="product-content">
          <div className="product-image">
            <img src="https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/WhatsApp%20Image%202025-06-05%20at%2013.03.55.jpeg?raw=true" alt="B-3000-TS" />
          </div>
          <div className="product-details">
            <p>Fully computerized touch screen model with integrated laptop and advanced image processing for non-destructive testing.</p>
            <h3>Premium Features:</h3>
            <ul className="feature-list">
              <li>Integrated touch screen laptop</li>
              <li>Manual/Semi/Auto measurement modes</li>
              <li>Statistical evaluation software</li>
              <li>PDF report generation</li>
              <li>380mm max test height</li>
              <li>415V 3-phase operation</li>
            </ul>
            <div className="product-buttons">
              <a href="https://wa.me/your-number?text=I'm%20interested%20in%20B-3000-TS" target="_blank" rel="noopener noreferrer">
                <button className="whatsapp-btn">WHATSAPP NOW</button>
              </a>
              <a href="/catalogues/B-3000-TS-Catalogue.pdf" download>
                <button className="catalogue-btn">DOWNLOAD CATALOGUE</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Styles - Same as Previous Component */}
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
          max-width: 100%;
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
          flex-direction: column;
          gap: 10px;
        }

        .product-buttons button {
          padding: 12px 25px;
          font-size: 15px;
          border: none;
          cursor: pointer;
          width: 100%;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .whatsapp-btn {
          background-color: #25D366;
          color: white;
        }

        .whatsapp-btn:hover {
          background-color: #128C7E;
        }

        .catalogue-btn {
          background-color: #2d3748;
          color: white;
        }

        .catalogue-btn:hover {
          background-color: #1a202c;
        }

        @media (min-width: 768px) {
          .product-buttons {
            flex-direction: row;
            justify-content: flex-start;
          }

          .product-buttons button {
            width: auto;
            padding: 12px 30px;
          }
        }
      `}</style>
    </div>
    <Footer />
    </>
  );
};

export default HardnessTestingMachines;