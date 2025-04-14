import React from 'react'
import resouce from '../../Components/resouce'
import './HumanHealth.css'
const healthCards = [
  {
    cardimg:resouce.HumanHealth1,
    text:' lorem was a nice man cause i dont know '
  },
  {
    cardimg:resouce.HumanHealth2,
    text:' lorem was a nice man cause i dont know '
  },
  {
    cardimg:resouce.HumanHealth3,
    text:' lorem was a nice man cause i dont know '
  },
  {
    cardimg:resouce.HumanHealth4,
    text:' lorem was a nice man cause i dont know '
  }
]
function HumanHealth() {
  return (
    <div style={{height:'auto'}} className='Human-health'>
      <h2 style={{textAlign:'center', margin:'30px 0', textDecoration:'underline'}}>Human health</h2>
     <div className="wrapper">
     {
      healthCards.map((item,index) => {
        return(
        <div className="card" key={index}>
          <div className="blur"></div>
          <img src={item.cardimg} alt='cardimg' />
          <p className='card-text'>{item.text}</p>
        </div>
        )
      })
     }
     </div>
    </div>
  )
}

export default HumanHealth
