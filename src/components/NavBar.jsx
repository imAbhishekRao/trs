import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../lmage/logo.png';
import { FaHamburger, FaTimes, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Blue Strip */}
      <div className="top-strip">
        <div className="top-left">+91 97801 89255</div>
        <div className="top-center">TRS Global Business Solutions</div>
        <div className="top-right">
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={Logo} className="logo-image" alt="FSSAI Logo" />
          </Link>

          <div className="navbar-actions">
            <Link to="/contact" className="btn-get-started desktop-only">
              Get started
            </Link>

            <button
              type="button"
              onClick={handleMenuToggle}
              className="hamburger mobile-only"
              aria-controls="navbar-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? <FaTimes className="hamburger-icon" /> : <FaHamburger className="hamburger-icon" />}
            </button>
          </div>

          <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`} id="navbar-menu">
            <ul className="navbar-links">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>
              <li><Link to="/Catalouge" className="nav-link">Product Catalouge</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Styles */}
      <style>{`
        .top-strip {
          background-color: #3b4dbd;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          flex-wrap: wrap;
        }

        .top-left,
        .top-center,
        .top-right {
          flex: 1;
          text-align: center;
          font-weight: 600;
          font-size: large;
        }

        .top-left {
          text-align: left;
          margin-left: 5em;
        }

        .top-right {
          text-align: right;
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
          margin-right: 5em;
        }

        .social-icon {
          color: white;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .social-icon:hover {
          color: #cbd5e1;
        }

        .navbar {
          background-color: white;
          border-bottom: 1px solid #e5e7eb;
          position: relative;
          z-index: 50;
        }

        .navbar-container {
          max-width: 1280px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          margin: auto;
          padding: 1rem;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
        }

        .logo-image {
          height: 4rem;
          width: auto;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          order: 2;
        }

        .btn-get-started {
          background-color: black;
          color: white;
          padding: 0.625rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 500;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .btn-get-started:hover {
          background-color: #3498db;
        }

        .hamburger {
          background: transparent;
          border: none;
          cursor: pointer;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          padding: 0.5rem;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.5rem;
        }

        .hamburger-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: black;
        }

        .navbar-menu {
          width: 100%;
          display: none;
          order: 3;
        }

        .navbar-menu.open {
          display: block;
        }

        .navbar-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1rem;
          margin-top: 1rem;
          background-color: white;
          border-radius: 0.5rem;
          font-weight: 500;
          list-style-type: disc;
          padding-left: 1.5rem;
        }

        .nav-link {
          padding: 0.5rem 1rem;
          color: black;
          text-decoration: none;
          border-radius: 0.375rem;
          transition: background-color 0.2s, color 0.2s;
        }

        .nav-link:hover {
          background-color: #f3e8ff;
          color: #3498db;
        }

        .mobile-only {
          display: inline-flex;
        }

        .desktop-only {
          display: none;
        }

        @media (min-width: 768px) {
          .hamburger {
            display: none;
          }

          .navbar-menu {
            display: flex !important;
            width: auto;
            order: 1;
          }

          .navbar-links {
            flex-direction: row;
            margin-top: 0;
            padding: 0;
            background: transparent;
            list-style-type: none;
            padding-left: 0;
          }

          .desktop-only {
            display: inline-flex;
          }

          .mobile-only {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
