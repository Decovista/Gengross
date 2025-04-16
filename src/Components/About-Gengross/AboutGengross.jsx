import React from 'react'
import '../About-Gengross/AboutGengross.css'
import resouce from '../resouce'

function AboutGengross() {
  return (
    <div className='About-gengross'>
      <h3 style={{textAlign:'center', fontSize:'28px', color:'#0b474b', margin:'30px 0 10px'}}>About Gengross</h3>
      <div className="About-wrap">
        <h3 style={{textAlign:'center', fontSize:'21px', color:'#81037b', margin:'20px 0 ', textDecoration:'underline'}}>Founders</h3>
        <hr style={{width:'80%', margin:'20px auto 30px'}} />
        <div className="founders" id='founder'>
            <div className="founder-row1">
                <img src={resouce.Founder} alt="founder" />
            </div>
            <div className="founder-row3">
                <p style={{fontSize:'19px', color:'#0b474b',}}><span style={{fontSize:'22px', color:'#81037b',width:'100%',fontWeight:'800',margin:'0 10px'}}>Santosh Singh</span>The foundation of Genross was built on a strong vision—to revolutionize the healthcare industry with reliable, affordable, and high-quality medical products. Guided by innovation and integrity, our founder brought together expertise and purpose to create a brand that puts patient care first. Today, Genross stands as a trusted name in medical manufacturing, committed to improving lives through advanced, accessible solutions.</p>
            </div>
        </div>
        <hr style={{width:'80%', margin:'20px auto 30px'}} />
        <div className="services" id='services'>
            <h3 style={{textAlign:'center', fontSize:'21px', color:'#81037b', margin:'20px 0 ', textDecoration:'underline'}}>Services</h3>
            <div className="service-wrapper">
                <div className="swrap1">
                <div className="founder-row1">
                <img src={resouce.servisl3} alt="founder" />
            </div>
            <div className="service-row3">
                <p style={{fontSize:'15px', color:'#0b474b',}}><span style={{fontSize:'15px', color:'#81037b',width:'100%',fontWeight:'800',margin:'0 10px'}}>Cheaper Medicines</span>Quality healthcare shouldn't be expensive. We provide trusted, high-quality medicines at prices that won't break the bank—because your well-being matters, and affordability should never be a barrier.</p>
            </div>
                </div>
                <div className="swrap1">
                <div className="founder-row1">
                <img src={resouce.servisl1} alt="founder" />
            </div>
            <div className="service-row3">
                <p style={{fontSize:'15px', color:'#0b474b',}}><span style={{fontSize:'15px', color:'#81037b',width:'100%',fontWeight:'800',margin:'0 10px'}}>Fast delivery</span>We value your time! Our efficient delivery system ensures your orders reach you quickly and safely—no delays, no hassles. Experience speed, reliability, and satisfaction with every delivery.</p>
            </div>
                </div>
           
            </div>
            <hr style={{width:'80%', margin:'20px auto 30px'}} />
        </div>
      </div>
    </div>
  )
}

export default AboutGengross
