import React from 'react'
import './About.css'
import resouce from '../resouce'

function About({setActive,active}) {
  return (
    <div className='About' id='about'   style={active === 'manufacturing' ? { margin: '20px auto' } : {}}>
      <h3>Manufacturing At <br/><span>Gengross</span></h3>
      <hr />
      <div className="Quarter">
        <div className="col1">
         <p>Munfactururing, Marketing, Distribution all medicine and feed supplement Human, Animals anythings.To manufacture, formulate, process, develop, refine, import, export, wholesale and/or retail trade all kinds of pharmaceuticals products, medicines, drugs, medicines, biologicals, neutraceuticals, healthcare, ayurvedic and dietary supplement products, medicinal preparations, vaccines, chemicals, chemical products and dry salters.</p>
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
         <p> To engage in business of healthcares, life sciences, research and development, contract manufacturing in India and/or abroad.To manufacture, formulate, process, develop, refine, import, export, wholesale and/or retail trade in medicinal goods such as surgical instruments, contraceptives.</p>
        </div>
      </div>
      <hr />
      <div className="Quarter">
        <div className="col1">
         <p>photographic goods, oils, perfumes, cosmetics, patent medicines, soaps, artificial limbs, hospital requisites, proprietary medicines, veterinary medicines and tinctures extracts and to carry on the business of vialling, bottling, repacking, processing of tablets, capsules, syrups, injections, ointments, etc. and also to carry on the business of chemists, druggists, buyers, sellers, agents, distributors and stockist of all kinds of pharmaceuticals and allied products.</p>
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
