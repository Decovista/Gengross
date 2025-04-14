import React from 'react'
import Products from '../Products/Products'

function BestSellers() {
  return (
    <div className='best-seller'>
      <h4 style={{ textAlign: 'center', fontSize: '32px', color: '#0b474b', margin: '240px 0 0' }}>BESTSELLERS</h4>
      <hr style={{height:'1.5px', color:'#0b474b', width:'80%', margin:'20px auto'}} />
      <Products />
      <hr style={{height:'1.5px', color:'#0b474b', width:'80%', margin:'40px auto'}} />
    </div>
  )
}

export default BestSellers
