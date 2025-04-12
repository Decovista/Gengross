import React from 'react';
import HeroSection from '../../Components/Hero-Section/HeroSection';
import About from '../../Components/About/About';
import Contact from '../../Components/Contact-form/Contact';
import ContactPopup from '../../Components/Contact-popup/ContactPopup';

function Home({ setShowContact, showContact }) {
  return (
    <div>
      <HeroSection />
      <About />
      <Contact setShowContact={setShowContact} />
      {showContact && <ContactPopup setShowContact={setShowContact} />}
    </div>
  );
}

export default Home;
