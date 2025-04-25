import React from 'react';
import Navbar from './NavBar';
import Footer from './footer';

const AnalyticalInstruments = () => {
  return (
    <>
      <Navbar />
    <div className="products-wrapper">
      {/* Optical Emission Spectrometer */}
      <div className="product-container">
        <h1 className="product-title">Optical Emission Spectrometer - AS Series</h1>
        <div className="product-content">
          <div className="product-image">
            <img src="/images/oes-as-series.png" alt="OES Spectrometer" />
          </div>
          <div className="product-details">
            <h3>Product Overview</h3>
            <p>CCD/CMOS-based analyzers for rapid metal composition analysis with high accuracy across ferrous and non-ferrous metals.</p>
            
            <h3>Key Features</h3>
            <ul className="feature-list">
              <li>Multi-base calibration for various metal matrices</li>
              <li>35+ element analysis with upgrade capability</li>
              <li>Compact design with competitive pricing</li>
              <li>Spark emission technology with CCD/CMOS detection</li>
              <li>Compliant with ISO/IEC 17025:2005 standards</li>
            </ul>

            <h3>Model Specifications</h3>
            <div className="spec-table">
              <div className="spec-row header">
                <div>Parameter</div>
                <div>AS-S1</div>
                <div>AS-S3 CROWN-N</div>
              </div>
              {oesSpecs.map((spec, index) => (
                <div className="spec-row" key={index}>
                  <div>{spec.parameter}</div>
                  <div>{spec.asS1}</div>
                  <div>{spec.asS3}</div>
                </div>
              ))}
            </div>

            <h3>Software Features</h3>
            <ul className="feature-list">
              <li>Windows-based interface (7/8/10 compatible)</li>
              <li>Automatic standard correction and recalibration</li>
              <li>Real-time statistical analysis with graphical display</li>
              <li>Custom report generation with archive function</li>
              <li>Automatic calculation of ASD & RSD</li>
            </ul>

            <div className="product-buttons">
              <a href="https://wa.me/919803991842?text=Interest%20in%20OES%20Spectrometer" target="_blank" rel="noopener noreferrer">
                <button className="whatsapp-btn">WHATSAPP NOW</button>
              </a>
              <a href="/catalogues/oes-as-series.pdf" download>
                <button className="catalogue-btn">DOWNLOAD CATALOGUE</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Micro Vickers Hardness Tester */}
      <div className="product-container">
        <h1 className="product-title">Advanced Computerized Micro Vickers Hardness Tester - MMT-X8</h1>
        <div className="product-content">
          <div className="product-image">
            <img src="/images/mmt-x8.png" alt="MMT-X8 Hardness Tester" />
          </div>
          <div className="product-details">
            <h3>Product Overview</h3>
            <p>Touch-controlled hardness tester with automatic turret system and digital encoder for precision measurements from HV0.01 to HV1 scales.</p>

            <h3>Technical Specifications</h3>
            <div className="spec-table">
              <div className="spec-row header">
                <div>Parameter</div>
                <div>Specification</div>
              </div>
              {hardnessSpecs.map((spec, index) => (
                <div className="spec-row" key={index}>
                  <div>{spec.parameter}</div>
                  <div>{spec.value}</div>
                </div>
              ))}
            </div>

            <h3>Key Features</h3>
            <ul className="feature-list">
              <li>8" LCD touch screen interface</li>
              <li>Automatic load/dwell/unload cycle</li>
              <li>300 test report storage capacity</li>
              <li>LED cold light source (24hr continuous use)</li>
              <li>Compliant with IS1501-2, ASTM E384 & ASTM E92</li>
            </ul>

            <h3>Standard Accessories</h3>
            <ul className="feature-list">
              <li>Omron digital micro eyepiece (10X)</li>
              <li>Vickers indentor & test blocks</li>
              <li>X-Y testing table & leveling kit</li>
              <li>Dust proof cover & accessories case</li>
            </ul>

            <div className="product-buttons">
              <a href="https://wa.me/919803991842?text=Interest%20in%20MMT-X8" target="_blank" rel="noopener noreferrer">
                <button className="whatsapp-btn">WHATSAPP NOW</button>
              </a>
              <a href="/catalogues/mmt-x8.pdf" download>
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

        .spec-table {
          margin: 20px 0;
          border: 1px solid #ddd;
          border-radius: 4px;
          overflow: hidden;
        }

        .spec-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          padding: 12px;
          border-bottom: 1px solid #eee;
        }

        .spec-row.header {
          background-color: #f5f5f5;
          font-weight: bold;
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

// Data arrays
const oesSpecs = [
  { parameter: 'Detection System', asS1: 'CCD', asS3: 'CCD/CMOS' },
  { parameter: 'Spectral Range', asS1: '160-410nm', asS3: '140-670nm' },
  { parameter: 'Power Supply', asS1: '110-250V 50/60Hz', asS3: '110-250V 50/60Hz' },
  { parameter: 'Dimensions (LxWxH)', asS1: '620x610x400mm', asS3: '645x620x430mm' },
  { parameter: 'Weight', asS1: '50kg', asS3: '60kg' },
];

const hardnessSpecs = [
  { parameter: 'Testing Force', value: '10g - 1000g (0.098N - 9.8N)' },
  { parameter: 'Hardness Scales', value: 'HV0.01 to HV1' },
  { parameter: 'Magnification', value: '100X (Observation), 400X (Measurement)' },
  { parameter: 'Stage Travel', value: '25x25mm @ 0.01mm resolution' },
  { parameter: 'Light Source', value: '5V/3W LED (100,000hr lifespan)' },
  { parameter: 'Dimensions', value: '540x260x650mm' },
  { parameter: 'Weight', value: '65kg' },
  { parameter: 'Power', value: '220V ±5%, 50/60Hz' },
];

export default AnalyticalInstruments;