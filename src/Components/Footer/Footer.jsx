import React from 'react'
import {Link} from 'react-router-dom'
import  './Footer.css'

function Footer() {
  return (
    <div className="Footer-wrapper">
    <div className='Footer'>
      <div className="Footer-row-1">
        <ul className="footer-item">
            <h2>Company</h2>
            <hr />
            <Link to='/About'><li>About US</li></Link>
            <Link to='/'><li>Privacy policy</li></Link>
            <li>Our Services</li>
            <li>Affliate Programs</li>
        </ul>
        <ul className="footer-item">
            <h2>Get Help</h2>
            <hr  />
            <li>Shiping</li>
            <Link to='/FAQ'><li>FAQ</li></Link>
            <li>Returns</li>
            <li>Order Status</li>
        </ul>
        <ul className="footer-item">
            <h2>Online Shop</h2>
            <hr />
            <li>Watch</li>
            <li>Blogs</li>
            <li>Products</li>
        </ul>
        <ul className="footer-item">
            <h2>Follow Us</h2>
            <hr  />
            <li className='socail-me'>
            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/?lang=en"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://in.linkedin.com/"><i class="fa-brands fa-linkedin-in"></i></a>
            </li>
        </ul>
      </div>
      <div className="Footer-row-2">
      <hr style={{margin:'40px 0 0'}}  />
        <p>© Gengross - 2025</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
