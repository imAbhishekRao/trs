import React from 'react';
import Navbar from '../components/NavBar';
import AboutCompany from '../components/Aboutcompany';
import ServicesSection from '../components/Services';
import GameChange from '../components/GameChange';
import WhyChooseUs from '../components/WhyChooseUs';
import Email from '../components/Email_contact';
import Footer from '../components/footer';
import Banner from '../components/Banner.jsx';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Banner />
        <AboutCompany />
        <ServicesSection />
        <GameChange />
        <WhyChooseUs />
        <Email />
      </main>
      <Footer />
    </div>
  );
}
