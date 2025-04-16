import React from 'react'
import {Link} from 'react-router-dom'
import './SubNav.css'

function SubNav({setToggleNav}) {
  return (
    <div className='sideBar'>
      <i class="fa-solid fa-xmark" onClick={() => setToggleNav(false)}></i>
      <ul className="side">
      <Link to='/' onClick={() => setToggleNav(false)}><li>Home</li></Link>
      <Link to='/Human' onClick={() => setToggleNav(false)}><li >Human Health</li></Link>
      <Link to='/About' onClick={() => setToggleNav(false)}><li>Manufacturing</li></Link>
      <Link to='/About' onClick={() => setToggleNav(false)}><li>About Gengross</li></Link>
      <Link to='/Product' onClick={() => setToggleNav(false)}><li>Products</li></Link>
      </ul>
    </div>
  )
}

export default SubNav
