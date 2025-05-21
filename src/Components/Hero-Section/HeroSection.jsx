import React from 'react'
import {Link} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './HeroSection.css'
import resouce from '../resouce';

function HeroSection() {
   var settings = {
    autoplay:true,
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='Hero-slider'>
      <Slider {...settings}>
      <div className='slide1'>
        <div className="img-con">
       <img src={resouce.homesection1} alt="" />
        </div>
         <div className="text-con-hero">
           <h3>Advanced Care for Your Cattle</h3>
           <p>Boost your cow’s immunity, enhance milk yield, and protect against common infections with our veterinary-approved cow medicine range.</p>
           <Link to='/Product'><button>Explore Cow Solutions</button></Link>
        </div>
      </div>
      <div className='slide1'>
           <div className="img-con">
       <img src={resouce.strongcheek} alt="strongcheek" />
        </div>
        <div className="text-con-hero">
       <h3>Healthy Start for Stronger Chicks</h3>
       <p>Give your chicks the right start with balanced nutrition and disease resistance. Ideal for broilers and layers in their early growth phase.</p>
       <Link to='/Product'><button>View Chick Products</button></Link>
        </div>
      </div>
      <div className='slide1'>
           <div className="img-con">
       <img src={resouce.digestive} alt="" />
        </div>
        <div className="text-con-hero">
           <h3>Fast Relief from Digestive Disorders</h3>
           <p>Treat stomach infections in poultry and livestock with fast-acting formulas that restore gut health and improve digestion.</p>
           <Link to='/Product'><button>Browse Stomach Care</button></Link>
        </div>
      </div>
   
    </Slider>
    </div>
  )
}

export default HeroSection
