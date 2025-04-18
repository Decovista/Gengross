import React from 'react'
import '../About-Gengross/AboutGengross.css'
import resouce from '../resouce'

function AboutGengross() {
  return (
    <div className='About-gengross'>
      <div className="About-wrap">
        <h3 style={{textAlign:'center', fontSize:'21px', color:'#510959', margin:'20px 0 ', textDecoration:'underline'}}>Founder</h3>
        <hr style={{width:'80%', margin:'20px auto 30px'}} />
        <div className="founders" id='founder'>
            <div className="founder-row1">
                <img src={resouce.Founder} alt="founder" />
            </div>
            <div className="founder-row3">
                <p style={{fontSize:'19px', color:'#0b474b',}}><span style={{fontSize:'22px', color:'#510959',width:'100%',fontWeight:'800',margin:'0 10px'}}>Mr. Deepak Kumar,</span> Director of the company,
                          holds a Diploma in Veterinary Science and an
                    LL.B. from Bihar University. With over 20
                     years of experience, he has worked as a paraveterinary teacher, manager in a veterinary
                         medicine company, and poultry feed technical
                             expert. His expertise drives the company’s
                             growth in the animal health sector.</p>
            </div>
        </div>
        <hr style={{width:'80%', margin:'20px auto 30px'}} />
        
           <div className="team">
            <h3 style={{textAlign:'center', fontSize:'21px', color:'#510959', margin:'20px 0 ', textDecoration:'underline'}}>Leadership</h3>
            <div className="leaderships">
                <div className="cards">
                    <img src={resouce.HumanHealth1} alt="" />
                    <h2>Marco singh</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati fugiat adipisci tenetur corporis error voluptate voluptas laboriosam.</p>
                </div>
                <div className="cards">
                    <img src={resouce.HumanHealth2} alt="" />
                    <h2>josef Devi</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati fugiat adipisci tenetur corporis error voluptate voluptas laboriosam.</p>
                </div>
                <div className="cards">
                    <img src={resouce.HumanHealth3} alt="" />
                    <h2>Ratan Lal</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati fugiat adipisci tenetur corporis error voluptate voluptas laboriosam.</p>
                </div>
                <div className="cards">
                    <img src={resouce.HumanHealth4} alt="" />
                    <h2>Manoj Xever</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati fugiat adipisci tenetur corporis error voluptate voluptas laboriosam.</p>
                </div>
            </div>
           </div>
               
            <hr style={{width:'80%', margin:'20px auto 30px'}} />
        </div>
      </div>
  )
}

export default AboutGengross
