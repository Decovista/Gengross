import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './SubNav.css'

function SubNav({setToggleNav}) {
  const [toggleSubMenu, setToggleSubMenu] = useState(false)
  const subMenu = [
    {
      item:'Manufacturing',
      path:'/About'
    },
    {
      item:'Work Culture',
      path:'/Media'
    }
  ]
  return (
    <div className='sideBar'>
      <i class="fa-solid fa-xmark" onClick={() => setToggleNav(false)}></i>
      <ul className="side">
      <Link to='/' onClick={() => setToggleNav(false)}><li>Home</li></Link>
      <li onClick={() => setToggleSubMenu(prev => !prev)} ><h4>About</h4>
      <ul  className='mobile-sub-menu'>
      { toggleSubMenu &&
        subMenu.map((item,index) =>{
          return(
            <>
            <Link to={item.path}><li key={index} onClick={() => setToggleNav(false)}>{item.item}</li></Link>
            </>
          )
        })
      }</ul></li>
      <Link to='/Generic' onClick={() => setToggleNav(false)}><li>Generic Medicine</li></Link>
      </ul>
    </div>
  )
}

export default SubNav
