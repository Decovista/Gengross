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
          <p className="animate-text">Generic medicines are made after the original drug’s patent expires, allowing manufacturers to produce the same active ingredients without the high R&D costs—making them much more affordable.</p>
        </div>
        <div className="col2 animate-image">
          <img src={resouce.About1} alt="About1" />
        </div>
      </div>
      <hr />

      <div className="Quarter l2">
        <div className="col2 animate-image">
          <img src={resouce.manufacturing5} alt="About1" />
        </div>
        <div className="col1">
          <p className="animate-text">Despite being cheaper, generic drugs must meet the same regulatory standards for safety, quality, and efficacy as brand-name drugs, as enforced by authorities like the FDA or CDSCO.</p>
        </div>
      </div>
      <hr />

      <div className="Quarter">
        <div className="col1">
          <p className="animate-text">Generic medicines must be proven bioequivalent, meaning they work in the same way and provide the same clinical benefit as the original branded drug.</p>
        </div>
        <div className="col2 animate-image">
          <img src={resouce.manufacturing6} alt="About1" />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default About;
