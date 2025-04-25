import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../lmage/logo.png';
import { FaHamburger, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={Logo} className="logo-image" alt="FSSAI Logo" />
        </Link>

        {/* Right side buttons */}
        <div className="navbar-actions">
          {/* Desktop Button */}
          <Link to="/contact" className="btn-get-started desktop-only">
            Get started
          </Link>

          {/* Hamburger for Mobile */}
          <button
            type="button"
            onClick={handleMenuToggle}
            className="hamburger mobile-only"
            aria-controls="navbar-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <FaTimes className="hamburger-icon" />
            ) : (
              <FaHamburger className="hamburger-icon" />
            )}
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}
          id="navbar-menu"
        >
          <ul className="navbar-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
         
            <li><Link to="/Catalouge" className="nav-link">Product Catalouge</Link></li>
        
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
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
          background-color: #9333ea;
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
          color: #9333ea;
        }

        /* Hide/Show on Devices */
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
    </nav>
  );
};

export default Navbar;
