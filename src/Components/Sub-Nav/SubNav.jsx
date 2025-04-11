import React from 'react'
import './SubNav.css'

function SubNav({setToggleNav}) {
  return (
    <div className='sideBar'>
      <i class="fa-solid fa-xmark" onClick={() => setToggleNav(false)}></i>
      <ul className="side">
      <li>Home</li>
      <li >Human Health</li>
      <li>Manufacturing</li>
      </ul>
    </div>
  )
}

export default SubNav
