import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import resouce from '../resouce'
import './Navigation.css'
import SubNav from '../Sub-Nav/SubNav'

function Navigation({setActive,active}) {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <div className="header">
  
    <div className='Navigation'>
      <div className="fist-row">
       <Link to='/Product'><button className='find'>FindProduct</button></Link> 
      </div>
      <div className="second-row">
      <div className="logo">
        <img src={resouce.logo} alt="logo" />
      </div>
      <div className="mobile-menu">
  <i class="fa-solid fa-bars" onClick={() => setToggleNav(true)}></i>
  </div>
      <ul className="nav">
          <li>About Gengross</li>
          <li>News</li>
          <li>Woring Enviroment</li>
          <li>Our Offices</li>
      </ul>
      </div>
    </div>
    <ul className="bar">
  <Link to='*'><li onClick={() => setActive('home')} className={`${active === 'home' ?'active':''}`}>Home</li></Link>
  <Link to="/Human"><li onClick={() => setActive('human')} className={`${active === 'human' ?'active':''}`}>Human Health</li></Link>
  <Link to='/About'><li onClick={() => setActive('manufacturing')} className={`${active === 'manufacturing' ?'active':''}`}>Manufacturing</li></Link>
    </ul>
    {toggleNav && <SubNav setToggleNav={setToggleNav}/>}
    </div>
   
  )
}

export default Navigation
