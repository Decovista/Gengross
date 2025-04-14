import React from 'react';
import HeroSection from '../../Components/Hero-Section/HeroSection';
import About from '../../Components/About/About';
import Contact from '../../Components/Contact-form/Contact';
import ContactPopup from '../../Components/Contact-popup/ContactPopup';
import BestSellers from '../../Components/About-Gengross/BestSellers';

function Home({ setShowContact, showContact }) {
  return (
    <div>
      <HeroSection />
      <BestSellers />
      <Contact setShowContact={setShowContact} />
      {showContact && <ContactPopup setShowContact={setShowContact} />}
    </div>
  );
}

export default Home;
