import React from 'react'
import './About.css'
import resouce from '../resouce'

function About({setActive,active}) {
  return (
    <div className='About' id='about'>
      <h3>Manufacturing At <br/><span>Gengross</span></h3>
      <hr />
      <div className="Quarter">
        <div className="col1">
         <p>To manufacture, market, and distribute all kinds of medicines and feed supplements for humans and animals. To manufacture, formulate, process, develop, refine, import, export, and engage in wholesale and/or retail trade of all types of pharmaceutical products, medicines, drugs, biologicals, nutraceuticals, healthcare products, ayurvedic and dietary supplements, medicinal preparations, vaccines, chemicals, chemical products, and dry salters.</p>
        </div>
        <div className="col2">
          <img src={resouce.About1} alt="About1" />
        </div>
      </div>
      <hr />
      <div className="Quarter l2">
        <div className="col2">
          <img src={resouce.labs2} alt="About1" />
        </div>
        <div className="col1">
         <p>To engage in the business of healthcare, life sciences, research and development, and contract manufacturing in India and/or abroad. To manufacture, formulate, process, develop, refine, import, export, and engage in wholesale and/or retail trade of medicinal goods such as surgical instruments and contraceptives.</p>
        </div>
      </div>
      <hr />
      <div className="Quarter">
        <div className="col1">
         <p>To deal in photographic goods, oils, perfumes, cosmetics, patent medicines, soaps, artificial limbs, hospital requisites, proprietary medicines, veterinary medicines, and tinctures and extracts. To carry on the business of vialling, bottling, repacking, and processing of tablets, capsules, syrups, injections, ointments, etc. Also, to carry on the business as chemists, druggists, buyers, sellers, agents, distributors, and stockists of all kinds of pharmaceutical and allied products.</p>
        </div>
        <div className="col2">
          <img src={resouce.labs3} alt="About1" />
        </div>
      </div>
      <hr />
    </div>
  )
}

export default About
