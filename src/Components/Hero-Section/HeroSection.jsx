import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './HeroSection.css'

function HeroSection() {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='Hero-slider'>
      <Slider {...settings}>
      <div className='slide1'>
        <h3>1</h3>
      </div>
      <div className='slide1'>
        <h3>2</h3>
      </div>
      <div className='slide1'>
        <h3>3</h3>
      </div>
      <div className='slide1'>
        <h3>4</h3>
      </div>
      <div className='slide1'>
        <h3>5</h3>
      </div>
      <div className='slide1'>
        <h3>6</h3>
      </div>
    </Slider>
    </div>
  )
}

export default HeroSection
