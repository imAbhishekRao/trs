import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background-color: #0f0f0f;
          color: #fff;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
        }

        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start; /* ✅ Fix misalignment */
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
        }

        .footer-column {
          flex: 1 1 200px;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .footer-title {
          color: #3498db;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 16px;
          text-align: left;
        }

        .footer-text {
          font-size: 14px;
          line-height: 1.8;
          color: #ccc;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          color: #fff;
          text-decoration: none;
          font-size: 14px;
        }

        .footer-links a:hover {
          text-decoration: underline;
        }

        .footer-contact {
          font-size: 14px;
        }

        .footer-contact span {
          font-weight: bold;
          color: #fff;
        }

        .social-icons {
          margin-top: 16px;
        }

        .social-icons a {
          color: #3498db;
          font-size: 18px;
          margin-right: 12px;
          text-decoration: none;
        }

        .social-icons a:hover {
          opacity: 0.8;
        }

        @media screen and (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            gap: 20px;
            padding: 0 20px;
          }

          .footer-column {
            padding: 0;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          {/* About Section */}
          <div className="footer-column">
            <h2 className="footer-title">About</h2>
            <p className="footer-text">
              TRS Global Business solutions is an authorized Channel Partner for various
              renowned OEM manufacturers around the world. With a rich history of association with
              technology partners,
            </p>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h2 className="footer-title">Quick Links</h2>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms Of Service</a></li>
              <li><a href="#">Credits</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Our Service */}
          <div className="footer-column">
            <h2 className="footer-title">Our Service</h2>
            <ul className="footer-links">
              <li><a href="#">Universal Testing Machine</a></li>
              <li><a href="#">Rockwell Hardness Testers</a></li>
              <li><a href="#">Analytic Products</a></li>
              <li><a href="#">NDT Products</a></li>
            </ul>
          </div>

          {/* Free Estimate */}
          <div className="footer-column">
            <h2 className="footer-title">Free Estimate</h2>
            <p className="footer-contact">Call Us: <span>+91 98710 97737</span></p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
