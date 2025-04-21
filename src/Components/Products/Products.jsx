import React from 'react';
import Slider from "react-slick";
import './Products.css';
import resouce from '../resouce';
import ContactPopup from '../Contact-popup/ContactPopup';

function Products({ setShowContact, showContact }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const cardData = [
    {
      name: 'Product1',
      profile: resouce.Product1,
      desc: 'High quality poultry feed',
    },
    {
      name: 'Product2',
      profile: resouce.Product2,
      desc: 'Enriched with proteins and vitamins',
    },
    {
      name: 'Product3',
      profile: resouce.Product3,
      desc: 'Improves egg production and growth',
    },
    {
      name: 'Feed Product 4',
      profile: resouce.Product1,
      desc: 'Balanced nutrition for all poultry',
    }
  ];

  return (
    <div className='Products' style={{ height: 'fit-content', padding: '20px' }}>
      <div className="slider-container">
        <Slider {...settings}>
          {cardData.map((item, index) => (
            <div className="card" key={index}>
              <img src={resouce.ComingSoon} alt={`product-${index}`} />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <button className='globle-btn' onClick={() => setShowContact(true)}>Get</button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Products;
