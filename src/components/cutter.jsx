import React from 'react';
import Footer from '../components/footer'; 
import Navbar from '../components/NavBar';  

const AbrasiveCutOffMachines = () => {
  return (
    <>
    <Navbar/>
    <div className="products-wrapper">
      {/* MMP-8a Heavy Duty Specimen Cutter */}
      <div className="product-container">
        <h1 className="product-title">Heavy Duty Specimen Cutter Machine (MMP-8a)</h1>
        <div className="product-content">
          <div className="product-image">
            <img src="/images/mmp-8a.png" alt="MMP-8a Machine" />
          </div>
          <div className="product-details">
            <p>Abrasive cut-off machine enabling cool, burn-free sample production with minimal deformation. Features robust construction and rigid clamping to minimize wheel breakage.</p>
            <h3>Technical Specifications:</h3>
            <ul className="feature-list">
              <li>3 HP Motor for 12" or 8" Oxide Wheels</li>
              <li>Manual X-Y Feed System</li>
              <li>Screw Operated Vice</li>
              <li>Enclosed Cutting Compartment</li>
              <li>Built-in Coolant Tank & Pump with Re-circulation</li>
              <li>Cutting Capacity: 25mm × 100mm (Round/Slab)</li>
              <li>Job Table with Y Feed and X Feed</li>
            </ul>
            <div className="product-buttons">
              <a href="https://wa.me/9803991842?text=I'm%20interested%20in%20MMP-8a%20Machine" target="_blank" rel="noopener noreferrer">
                <button className="whatsapp-btn">WHATSAPP NOW</button>
              </a>
              <a href="/catalogues/SPECIMEN-CUTTER-MMP-8a.pdf" download>
                <button className="catalogue-btn">DOWNLOAD CATALOGUE</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MMP-8 Abrasive Cut Off Machine */}
      <div className="product-container">
        <h1 className="product-title">Abrasive Cut Off Machine (MMP-8)</h1>
        <div className="product-content">
          <div className="product-image">
            <img src="/images/mmp-8.png" alt="MMP-8 Machine" />
          </div>
          <div className="product-details">
            <p>Precision cutting solution for metals and non-metallic materials using 12" abrasive wheel, featuring rust-proof construction and accurate cross-sectioning.</p>
            <h3>Key Features:</h3>
            <ul className="feature-list">
              <li>Sturdy Floor Model Design</li>
              <li>Rust-Proof Construction</li>
              <li>Heavy Duty Steel Vise</li>
              <li>12" Diameter Abrasive Wheel</li>
              <li>Integrated Coolant System with Tank</li>
              <li>Coolant Recirculation Pump</li>
              <li>Suitable for Metallographic Samples</li>
            </ul>
            <div className="product-buttons">
              <a href="https://wa.me/9803991842?text=I'm%20interested%20in%20MMP-8%20Machine" target="_blank" rel="noopener noreferrer">
                <button className="whatsapp-btn">WHATSAPP NOW</button>
              </a>
              <a href="/catalogues/ABRASIVE-CUT-OFF-MMP-8.pdf" download>
                <button className="catalogue-btn">DOWNLOAD CATALOGUE</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Maintain existing styles */}
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

export default AbrasiveCutOffMachines;