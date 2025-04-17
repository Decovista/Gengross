import React from 'react';
import HeroSection from '../../Components/Hero-Section/HeroSection';
import Contact from '../../Components/Contact-form/Contact';
import ContactPopup from '../../Components/Contact-popup/ContactPopup';
import Faq from '../../Components/FAQ/Faq';
import Promo from '../../Components/Promo/Promo';

function Home({ setShowContact, showContact }) {
  return (
    <div>
      <HeroSection />
      <Promo />
      <Faq/>
      <Contact setShowContact={setShowContact} />
      {showContact && <ContactPopup setShowContact={setShowContact} />}
    </div>
  );
}

export default Home;
