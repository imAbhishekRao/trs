import React from 'react';
import Navbar from './NavBar';
import Footer from './footer';  

const MetallurgicalPolishingMachines = () => {
  return (<>
    <Navbar/>
    <div className="products-wrapper">
      {/* MMP-6 Single Disc */}
      <div className="product-container">
        <h1 className="product-title">Metallurgical Polishing Machine (MMP-6)</h1>

        <div className="product-content">
          <div className="product-image">
            <img src="https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/WhatsApp%20Image%202025-06-05%20at%2012.59.21.jpeg?raw=true" alt="MMP-6 Machine" />
          </div>

          <div className="product-details">
            <p>
              A single disc polishing machine with 20cm balanced polishing disc, ideal for standard metallurgical specimen preparation. Features quick-change polishing cloth system and durable construction.
            </p>

            <h3>Key Features:</h3>
            <ul className="feature-list">
              <li>20cm balanced polishing disc</li>
              <li>Heavy duty ball bearing spindle</li>
              <li>Quick-change polishing cloth/paper system</li>
              <li>Aluminum drain jacket with drain tube</li>
              <li>Spring/rubber girdle fastening</li>
              <li>220-230V single phase operation</li>
            </ul>

            <div className="product-buttons">
              <a href="https://wa.me/your-number?text=I'm%20interested%20in%20MMP-6%20Machine" target="_blank" rel="noopener noreferrer">
                <button className="whatsapp-btn">WHATSAPP NOW</button>
              </a>
              <a href="/catalogues/MMP-6-Catalogue.pdf" download>
                <button className="catalogue-btn">DOWNLOAD CATALOGUE</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MMP-6A Single Disc */}
      <div className="product-container">
        <h1 className="product-title">Metallurgical Polishing Machine (MMP-6A)</h1>

        <div className="product-content">
          <div className="product-image">
            <img src="https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/WhatsApp%20Image%202025-06-05%20at%2012.59.21.jpeg?raw=true" alt="MMP-6A Machine" />
          </div>

          <div className="product-details">
            <p>
              Advanced single disc model with variable speed control and water reservoir system. Enhanced version of MMP-6 for precision polishing applications.
            </p>

            <h3>Advanced Features:</h3>
            <ul className="feature-list">
              <li>Variable speed control (450-1200 RPM)</li>
              <li>Integrated water reservoir system</li>
              <li>Motorized operation with safety features</li>
              <li>Heavy-duty steel spindle construction</li>
              <li>Quick-release disc mechanism</li>
              <li>220-230V single phase operation</li>
            </ul>

            <div className="product-buttons">
              <a href="https://wa.me/your-number?text=I'm%20interested%20in%20MMP-6A%20Machine" target="_blank" rel="noopener noreferrer">
                <button className="whatsapp-btn">WHATSAPP NOW</button>
              </a>
              <a href="/catalogues/MMP-6A-Catalogue.pdf" download>
                <button className="catalogue-btn">DOWNLOAD CATALOGUE</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MMP-7 Double Disc */}
      <div className="product-container">
        <h1 className="product-title">Double Disc Polishing Machine (MMP-7)</h1>

        <div className="product-content">
          <div className="product-image">
            <img src="https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/WhatsApp%20Image%202025-06-05%20at%2013.02.21.jpeg?raw=true" alt="MMP-7 Machine" />
          </div>

          <div className="product-details">
            <p>
              Dual spindle system for efficient roughing and polishing operations. Features independent 8" discs with dedicated motor system for industrial-grade performance.
            </p>

            <h3>Special Features:</h3>
            <ul className="feature-list">
              <li>Dual 8" polishing discs</li>
              <li>Separate roughing and polishing stations</li>
              <li>1 HP induction motor</li>
              <li>Heavy-duty ball bearing spindles</li>
              <li>Corrosion-resistant aluminum components</li>
              <li>Industrial-grade safety features</li>
            </ul>

            <div className="product-buttons">
              <a href="https://wa.me/your-number?text=I'm%20interested%20in%20MMP-7%20Machine" target="_blank" rel="noopener noreferrer">
                <button className="whatsapp-btn">WHATSAPP NOW</button>
              </a>
              <a href="/catalogues/MMP-7-Catalogue.pdf" download>
                <button className="catalogue-btn">DOWNLOAD CATALOGUE</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MMP-7A Double Disc */}
      <div className="product-container">
        <h1 className="product-title">Double Disc Polishing Machine (MMP-7A)</h1>

        <div className="product-content">
          <div className="product-image">
            <img src="https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/WhatsApp%20Image%202025-06-05%20at%2013.02.21.jpeg?raw=true" alt="MMP-7A Machine" />
          </div>

          <div className="product-details">
            <p>
              Advanced dual disc system with enhanced polishing capabilities. Designed for continuous operation with automated media application and superior finish quality.
            </p>

            <h3>Premium Features:</h3>
            <ul className="feature-list">
              <li>Automated polishing media application</li>
              <li>Diamond/Silicon Carbide compatible</li>
              <li>Scratch-free mirror finish capability</li>
              <li>Enhanced drainage system</li>
              <li>Low-vibration operation</li>
              <li>Heavy-duty steel frame construction</li>
            </ul>

            <div className="product-buttons">
              <a href="https://wa.me/your-number?text=I'm%20interested%20in%20MMP-7A%20Machine" target="_blank" rel="noopener noreferrer">
                <button className="whatsapp-btn">WHATSAPP NOW</button>
              </a>
              <a href="/catalogues/MMP-7A-Catalogue.pdf" download>
                <button className="catalogue-btn">DOWNLOAD CATALOGUE</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
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
    <Footer/>
    </>
  );
};

export default MetallurgicalPolishingMachines;