import React from 'react'
import resouce from '../resouce'
import './Promo.css'
import Moto from '../Moto/Moto'

function Promo() {
  return (
    <div className='Promo-section'>
      <hr style={{width:'80%',color:'gray',margin:'40px auto'}} />
      <div className="promo-1">
        <div className="img-con">
          <img src={resouce.HumanHealth2} alt="img" />
        </div>
        <div className="text-con">
          <h2>Our Vision</h2>
          <p>"<span>Our vision is to transform the future of healthcare by creating a world where health and wellness are seamlessly integrated into everyday life.</span> We aim to bridge the gap between technology and personalized care, making high-quality healthcare accessible, proactive, and empowering for everyone—regardless of location or background. Through continuous innovation, data-driven solutions, and a human-first approach, we envision a healthier society where individuals are equipped to take control of their well-being and live longer, more fulfilling lives."</p>
           
        </div>
      </div>
      <hr style={{width:'80%',color:'gray',margin:'40px auto'}} />
      <Moto />
      <hr style={{width:'80%',color:'gray',margin:'40px auto'}} />
      <div className="promo-2">
        <h3>Our Mission</h3>
        <div className="Mission-wrapper">
          <div className="Mission-card">
            <img src={resouce.HumanHealth1} className='Mission-card-img' alt="Mission1" />
            <h2 className='Mission-card-h2'>Gengross Revolutionizing Healthcare with Innovation</h2>
            <p className='Mission-card-p' > Our mission is to leverage cutting-edge technology to develop innovative healthcare solutions that improve patient care, streamline medical processes, and empower healthcare professionals worldwide.</p>
          </div>
          <div className="Mission-card">
            <img src={resouce.HumanHealth4} className='Mission-card-img' alt="Mission1" />
            <h2 className='Mission-card-h2'>Advancing Access to Quality Medical Solutions</h2>
            <p className='Mission-card-p' >We aim to make advanced medical technology accessible to all, ensuring that patients and healthcare providers have the tools they need to improve outcomes and ensure a healthier future.</p>
          </div>
          <div className="Mission-card">
            <img src={resouce.HumanHealth3} className='Mission-card-img' alt="Mission1" />
            <h2 className='Mission-card-h2'>Empowering Healthcare Through Smart Devices:</h2>
            <p className='Mission-card-p' > Our mission is to design and deliver smart medical devices that enhance diagnostics, treatment precision, and patient monitoring, ensuring better health management at every step</p>
          </div>
        </div>
      </div>
      <hr style={{width:'80%',color:'gray',margin:'80px auto'}} />
    </div>
  )
}

export default Promo

