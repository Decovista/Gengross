import React from 'react'
import {Link} from 'react-router-dom'
import './SubNav.css'

function SubNav({setToggleNav}) {
  return (
    <div className='sideBar'>
      <i class="fa-solid fa-xmark" onClick={() => setToggleNav(false)}></i>
      <ul className="side">
      <Link to='*'><li>Home</li></Link>
      <Link to='/Human'><li >Human Health</li></Link>
      <Link to='Manufacturing'><li>Manufacturing</li></Link>
      <Link to='/About'><li>About Gengross</li></Link>
      <Link to='/Product'><li>Products</li></Link>
      </ul>
    </div>
  )
}

export default SubNav
