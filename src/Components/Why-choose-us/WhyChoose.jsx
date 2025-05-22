import React, { useEffect } from 'react';
import './Why-choose.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhyChoose() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className='why-choose'>
      <h3>Why choose Us</h3>
      <div className="why-choose-wrapper">
        <div className="why-choose-card" data-aos="flip-up">
          🧪
          <div className="text">
            <h2>Quality Assured Manufacturing</h2>
            <p>We adhere to strict GMP standards and ensure every product meets the highest pharmaceutical quality for consistent and effective results.</p>
          </div>
        </div>

        <div className="why-choose-card" data-aos="flip-up">
          💡
          <div className="text">
            <h2>Innovative & Research-Driven</h2>
            <p>Our R&D team constantly develops advanced formulas to address evolving animal health needs using the latest science and technologies.</p>
          </div>
        </div>

        <div className="why-choose-card" data-aos="flip-up">
          📦
          <div className="text">
            <h2>Comprehensive Product Line</h2>
            <p>From antibiotics to nutritional supplements, we offer a diverse portfolio to serve poultry, cattle, and livestock needs efficiently.</p>
          </div>
        </div>

        <div className="why-choose-card" data-aos="flip-up">
          🤝
          <div className="text">
            <h2>Preferred by Vets & Farmers</h2>
            <p>Our commitment to excellence has earned the trust of veterinary professionals and farmers across the country.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
