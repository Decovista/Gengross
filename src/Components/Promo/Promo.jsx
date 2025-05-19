import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resouce from '../resouce';
import './Promo.css';
import Moto from '../Moto/Moto';

function Promo() {
  useEffect(() => {
    AOS.init({ duration: 1000});
  }, []);

  return (
    <div className='Promo-section'>
      <hr style={{ width: '80%', color: 'gray', margin: '40px auto' }} />

      <div className="promo-1" data-aos="fade-right">
        <div className="text-con">
          <h2>Our Vision</h2>
          <p>
            <span>Is to transform the future of healthcare by creating a world where health and wellness are seamlessly integrated into everyday life.</span> <br />
            We aim to bridge the gap between technology and personalized care, making high-quality healthcare accessible, proactive, and empowering for everyone—regardless of location or background. Through continuous innovation, data-driven solutions, and a human-first approach, we envision a healthier society where individuals are equipped to take control of their well-being and live longer, more fulfilling lives."
          </p><br/>
          <p className='sub-p'><span>🌍 Accessibility for All</span><br/>In today’s world, access to quality healthcare should be a right, not a privilege. However, many individuals in rural or underserved areas face significant challenges in receiving the medical care they need. To address this, our goal is to bridge the gap between urban and remote healthcare access. By leveraging telemedicine, mobile health solutions, and community-based healthcare workers, we aim to ensure that every person, regardless of their location or socio-economic background, has access to vital health services.</p>
          <br/>
          <p className='sub-p'><span>🌱 Sustainable Growth</span><br/>The future of healthcare is intertwined with the health of our planet. A sustainable healthcare system is not just about providing services today, but also ensuring that future generations can benefit from the same level of care. As such, we are dedicated to building an ecosystem that balances health outcomes with environmental responsibility. This means integrating green technologies in healthcare facilities, reducing medical waste, and utilizing energy-efficient resources.</p>
          <br/>
          <p className='sub-p'><span>🤖 Technological Innovation </span><br/>The healthcare landscape is rapidly evolving, and technological advancements are at the forefront of this transformation. Artificial intelligence (AI), the Internet of Things (IoT), and mobile technology are enabling more personalized, accessible, and efficient healthcare than ever before.</p>
          <br/>
          <p className='sub-p'><span>🧠 Preventive Care Focus</span><br/>For too long, healthcare systems have primarily focused on treating illnesses after they occur. While treating sickness is important, we believe the future of healthcare lies in prevention. A proactive approach to health—focused on wellness and the early detection of potential health issues—can significantly reduce the burden on healthcare systems and improve quality of life for individuals.</p>
          <br/>
          <p className='sub-p'><span >🤝 Patient Empowerment</span><br/>Empowerment is at the core of patient-centered care. For healthcare to be truly effective, patients must have the tools, knowledge, and support to actively participate in their health decisions. Empowering individuals means making them active participants in their health journeys rather than passive recipients of care.</p>
        </div>
      </div>

      <hr style={{ width: '80%', color: 'gray', margin: '40px auto' }} />

      <Moto />

      <hr style={{ width: '80%', color: 'gray', margin: '40px auto' }} />

      <div className="promo-2" data-aos="fade-up">
        <h3>Our Mission</h3>
        <div className="Mission-wrapper">
          <div className="Mission-card" data-aos="zoom-in" data-aos-delay="100">
            <img src={resouce.HumanHealth1} className='Mission-card-img' alt="Mission1" />
            <h2 className='Mission-card-h2'>Gengross Revolutionizing Healthcare with Innovation</h2>
            <p className='Mission-card-p'>Our mission is to leverage cutting-edge technology to develop innovative healthcare solutions that improve patient care, streamline medical processes, and empower healthcare professionals worldwide.</p>
          </div>

          <div className="Mission-card" data-aos="zoom-in" data-aos-delay="200">
            <img src={resouce.HumanHealth4} className='Mission-card-img' alt="Mission2" />
            <h2 className='Mission-card-h2'>Advancing Access to Quality Medical Solutions</h2>
            <p className='Mission-card-p'>We aim to make advanced medical technology accessible to all, ensuring that patients and healthcare providers have the tools they need to improve outcomes and ensure a healthier future.</p>
          </div>

          <div className="Mission-card" data-aos="zoom-in" data-aos-delay="300">
            <img src={resouce.HumanHealth3} className='Mission-card-img' alt="Mission3" />
            <h2 className='Mission-card-h2'>Empowering Healthcare Through Smart Devices</h2>
            <p className='Mission-card-p'>Our mission is to design and deliver smart medical devices that enhance diagnostics, treatment precision, and patient monitoring, ensuring better health management at every step.</p>
          </div>
          <div className="Mission-card" data-aos="zoom-in" data-aos-delay="100">
            <img src={resouce.newCard} className='Mission-card-img' alt="Mission1" />
            <h2 className='Mission-card-h2'>Transforming Healthcare with AI and Data</h2>
            <p className='Mission-card-p'>We harness the power of artificial intelligence and big data to enable predictive analytics, early diagnostics, and personalized care plans, leading to more accurate and efficient treatments.</p>
          </div>

          <div className="Mission-card" data-aos="zoom-in" data-aos-delay="200">
            <img src={resouce.newCard1} className='Mission-card-img' alt="Mission2" />
            <h2 className='Mission-card-h2'>Building Resilient Healthcare Ecosystems</h2>
            <p className='Mission-card-p'>Our mission includes creating scalable, resilient healthcare systems that can adapt to crises, support frontline workers, and maintain continuity of care in all circumstances.</p>
          </div>

          <div className="Mission-card" data-aos="zoom-in" data-aos-delay="300">
            <img src={resouce.newCard2} className='Mission-card-img' alt="Mission3" />
            <h2 className='Mission-card-h2'>Fostering Global Health Equity</h2>
            <p className='Mission-card-p'>We strive to close the health disparity gap by promoting global partnerships, inclusive innovation, and equitable distribution of medical resources across regions.</p>
          </div>
        </div>
      </div>

      <hr style={{ width: '80%', color: 'gray', margin: '49px auto' }} />
    </div>
  );
}

export default Promo;
