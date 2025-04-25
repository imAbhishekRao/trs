import React from 'react';
import './Aboutcompany.css';
import Image1 from '../lmage/img1.png';

const AboutCompany = () => {
  return (
    <div className="about-container">
      <h1>About Company</h1>

      <section className="profile-section">
        <div className="profile-content">
          <img 
            src={Image1}
            alt="Company Overview" 
            className="profile-image"
          />

          <div className="profile-text">
            <h2>Our Profile</h2>
            <p>
              TRS Global Business Solutions is a leading provider of precision industrial testing, measurement, and balancing equipment, headquartered in Ludhiana, Punjab, India. The company specializes in delivering advanced solutions for quality assurance, material testing, and rotor balancing across diverse industries, including manufacturing, metallurgy, aerospace, automotive, and construction. With over 60 years of expertise, TRS Global represents renowned brands and offers end-to-end services, from equipment supply to calibration and technical support.
            </p>
          </div>
        </div>
      </section>

      <div className="certified-section">
        <h3>Certified Company</h3>
        <p>TRS Global is ISO 9001:2015 certified, ensuring the highest standards of quality and reliability in all its products and services.</p>
      </div>
    </div>
  );
};

export default AboutCompany;
