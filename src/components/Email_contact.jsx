import React from 'react';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <style>{`
        .contact-section {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 60px 20px;
          background-color: #f9f9f9;
          max-width: 1200px;
          margin: auto;
        }

        .contact-left,
        .contact-right {
          flex: 1 1 500px;
          padding: 20px;
        }

        .contact-left h4 {
          color: #9333ea;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .contact-left h2 {
          color: #0b1d3a;
          font-size: 32px;
          margin-bottom: 10px;
        }

        .contact-left p {
          font-size: 16px;
          color: #333;
          margin: 6px 0;
        }

        .contact-left hr {
          border: none;
          border-top: 1px solid #ccc;
          margin: 20px 0;
        }

        .contact-left strong {
          font-weight: 700;
        }

        .contact-left .email {
          color: #0b1d3a;
          font-weight: 600;
          margin-top: 10px;
          display: block;
        }

        .contact-right h4 {
          color: #9333ea;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .contact-right h2 {
          color: #0b1d3a;
          font-size: 32px;
          margin-bottom: 30px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 500;
          margin-bottom: 6px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          resize: vertical;
        }

        .submit-btn {
          background-color: #eee;
          padding: 12px 24px;
          border: 1px solid #ccc;
          font-weight: 600;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #ddd;
        }

        @media (max-width: 768px) {
          .contact-section {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="contact-left">
        <h4>Offices</h4>
        <h2>Head Office</h2>
        <p>Ludhiana</p>
        <hr />
        <p><strong>Contact Person :-</strong></p>
        <p><strong>Mr.Amit  – Chief Business Officer</strong></p>
        <p>Phone: +91 – 987654987 / 7654789123 / 8528528525</p>
        <p>Email:</p>
        <span className="email">
          contact@trsgbs.com / amit@trsgbs.com / info@trsgbs.com
        </span>
      </div>

      <div className="contact-right">
        <h4>Free Consultation</h4>
        <h2>Get A Free Quote</h2>
        <form>
          <div className="form-group">
            <label>Name *</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Mobile Number *</label>
            <input type="tel" required />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="4"></textarea>
          </div>
          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
