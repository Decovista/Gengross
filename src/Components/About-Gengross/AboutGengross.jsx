import React, { useEffect } from 'react';
import '../About-Gengross/AboutGengross.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resouce from '../resouce';

function AboutGengross() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='About-gengross'>
      <div className="About-wrap">
        <h3 className="section-title">Founder</h3>
        <hr className="section-divider" />
        <div className="founders" id='founder'>
          <div className="founder-row1" data-aos="fade-right">
            <img src={resouce.Founder} alt="Founder" />
          </div>
          <div className="founder-row3" data-aos="fade-left">
            <p>
              <span className="founder-name">Mr. Deepak Kumar,</span><br />
              Director of the company, holds a Diploma in Veterinary Science and an LL.B. from Bihar University.
              With over 20 years of experience, he has worked as a paraveterinary teacher, manager in a veterinary
              medicine company, and poultry feed technical expert. His expertise drives the company’s growth in
              the animal health sector.
            </p>
          </div>
        </div>

        <hr className="section-divider" />
        <div className="team">
          <h3 className="section-title">Leadership</h3>
          <div className="leaderships">
            {[
              { img: resouce.HumanHealth1, name: "Employe1" },
              { img: resouce.career2, name: "Employe2" },
              { img: resouce.HumanHealth3, name: "Employe3" },
              { img: resouce.HumanHealth4, name: "Employe4" }
            ].map((member, i) => (
              <div className="cards" key={i} data-aos="zoom-in">
                <img src={member.img} alt={member.name} />
                <h2>{member.name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati fugiat adipisci tenetur corporis error voluptate voluptas laboriosam.</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="section-divider" />
      </div>
    </div>
  );
}

export default AboutGengross;
