import React from 'react';
import Navbar from './NavBar';
import Footer from './footer';

const AboutUs = () => {
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: "'Arial', sans-serif",
      lineHeight: '1.7',
      color: '#333'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
      padding: '2rem 0'
    },
    section: {
      marginBottom: '3rem',
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      margin: '2rem 0'
    },
    featureCard: {
      backgroundColor: '#fff',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
    }
  };

  return (
        <>
        <Navbar />
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={{color: '#2c3e50', fontSize: '2.5rem', marginBottom: '0.5rem'}}>
          TRS Global Business Solutions
        </h1>
        <p style={{fontSize: '1.1rem', color: '#666'}}>
          Precision Measurement Solutions & Technical Services
        </p>
      </header>

      <section style={styles.section}>
        <h2 style={{color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '0.5rem'}}>
          Our Expertise
        </h2>
        <p>
          We specialize in advanced technical solutions for quality control and precision measurement:
        </p>
        
        <div style={styles.productGrid}>
          <div style={styles.featureCard}>
            <h3 style={{color: '#3498db', marginTop: 0}}>Balancing Systems</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li>• Vertical/Hard Bearing Machines</li>
              <li>• Microprocessor-controlled Units</li>
              <li>• Auto-stop Technology</li>
            </ul>
          </div>
          
          <div style={styles.featureCard}>
            <h3 style={{color: '#3498db', marginTop: 0}}>Testing Equipment</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li>• Universal Testing Systems</li>
              <li>• Hardness Testers</li>
              <li>• Metallurgical Analysis Tools</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={{color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '0.5rem'}}>
          Compliance & Standards
        </h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem'}}>
          <div style={styles.featureCard}>
            <h4 style={{color: '#2c3e50', marginTop: 0}}>Certifications</h4>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li>✓ ISO 9001:2008 Certified</li>
              <li>✓ NABL Accredited</li>
              <li>✓ ASTM Compliant</li>
            </ul>
          </div>
          <div style={styles.featureCard}>
            <h4 style={{color: '#2c3e50', marginTop: 0}}>Technical Specifications</h4>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li>• ±1% Loading Accuracy</li>
              <li>• Digital Readout Systems</li>
              <li>• Automated Data Recording</li>
            </ul>
          </div>
        </div>
      </section>
     
<section style={styles.section}>
  <h2 style={{color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '0.5rem'}}>
    Our Client Partnerships
  </h2>
  <div style={{...styles.productGrid, marginTop: '1.5rem'}}>
    <div style={styles.featureCard}>
      <h3 style={{color: '#3498db', marginTop: 0}}>Industry Reach</h3>
      <ul style={{listStyle: 'none', padding: 0}}>
        <li>• Automotive Components</li>
        <li>• Aerospace Engineering</li>
        <li>• Power Generation</li>
        <li>• Heavy Machinery</li>
        <li>• Precision Engineering</li>
      </ul>
    </div>
    
    <div style={styles.featureCard}>
      <h3 style={{color: '#3498db', marginTop: 0}}>Client Success</h3>
      <ul style={{listStyle: 'none', padding: 0}}>
        <li>✓ 1000+ Systems Deployed</li>
        <li>✓ Pan-India Implementation</li>
        <li>✓ Multi-industry Applications</li>
        <li>✓ Recurring Technical Contracts</li>
      </ul>
    </div>
  </div>
  <p style={{marginTop: '1rem', fontStyle: 'italic'}}>
    Our solutions support quality assurance programs across diverse sectors, maintaining long-term partnerships through technical excellence and reliable performance.
  </p>
</section>
      <section style={{...styles.section, backgroundColor: '#2c3e50', color: 'white'}}>
        <h2 style={{borderColor: '#3498db', color: 'white'}}>Contact Us</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
          <div>
            <h4 style={{color: '#3498db'}}>Corporate Office</h4>
            <p>
              481-C, Phase-1, Urban Estate<br/>
              Focal Point, Jamalpur<br/>
              Ludhiana-141010, Punjab
            </p>
          </div>
          <div>
            <h4 style={{color: '#3498db'}}>Connect With Us</h4>
            <p>
              📞 +91 98039 91842<br/>
              📧 sales.trsgbs@gmail.com<br/>
              📠 0161-5289386
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;