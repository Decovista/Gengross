import React from 'react';
import './About.css';
import resouce from '../resouce';

function About() {
  return (
    <div className='About' id='about'>
      <div className="about-header">
        <h3>Manufacturing At <br /><span>Gengross</span></h3>
        <hr />
      </div>

      <div className="Quarter">
        <div className="col1">
          <p className="animate-text">We manufacture, market, and distribute all kinds of medicines and feed supplements for humans and animals...</p>
        </div>
        <div className="col2 animate-image">
          <img src={resouce.About1} alt="About1" />
        </div>
      </div>
      <hr />

      <div className="Quarter l2">
        <div className="col2 animate-image">
          <img src={resouce.labs2} alt="About1" />
        </div>
        <div className="col1">
          <p className="animate-text">We engage in the business of healthcare, life sciences, research and development, and contract manufacturing...</p>
        </div>
      </div>
      <hr />

      <div className="Quarter">
        <div className="col1">
          <p className="animate-text">We deal in photographic goods, oils, perfumes, cosmetics, patent medicines, soaps, artificial limbs, hospital requisites, etc...</p>
        </div>
        <div className="col2 animate-image">
          <img src={resouce.labs3} alt="About1" />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default About;
