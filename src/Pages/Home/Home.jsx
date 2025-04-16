import React from 'react';
import HeroSection from '../../Components/Hero-Section/HeroSection';
import Contact from '../../Components/Contact-form/Contact';
import ContactPopup from '../../Components/Contact-popup/ContactPopup';
import BestSellers from '../../Components/About-Gengross/BestSellers';
import Faq from '../../Components/FAQ/Faq';

function Home({ setShowContact, showContact }) {
  return (
    <div>
      <HeroSection />
      <BestSellers setShowContact={setShowContact} showContact={showContact} />
      <Faq/>
      <Contact setShowContact={setShowContact} />
      {showContact && <ContactPopup setShowContact={setShowContact} />}
    </div>
  );
}

export default Home;
