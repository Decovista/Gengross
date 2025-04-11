import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import resouce from '../resouce';
import './HeroSection.css'

function HeroSection() {
  const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: false,
  autoplay: true,
  autoplaySpeed: 3000,
  };
  return (
    <div className='slider-warapper'>
       <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={resouce.slide1} />
        </div>
        <div>
          <img src={resouce.slide2} />
        </div>
        <div>
          <img src={resouce.slide3} />
        </div>
      
      </Slider>
    </div>
    <div className="slide-show">
      <div className="slide-track">
        <div className="box"><img src={resouce.servisl1} alt="" /></div>
        <div className="box"><img src={resouce.servisl2} alt="" /></div>
        <div className="box"><img src={resouce.servisl3} alt="" /></div>
        <div className="box"><img src={resouce.servisl4} alt="" /></div>
        <div className="box"><img src={resouce.servisl5} alt="" /></div>

        <div className="box"><img src={resouce.servisl1} alt="" /></div>
        <div className="box"><img src={resouce.servisl2} alt="" /></div>
        <div className="box"><img src={resouce.servisl3} alt="" /></div>
        <div className="box"><img src={resouce.servisl4} alt="" /></div>
        <div className="box"><img src={resouce.servisl5} alt="" /></div>
      </div>
    </div>
    </div>
  )
}

export default HeroSection
