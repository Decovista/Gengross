import React from 'react'
import  './Footer.css'

function Footer() {
  return (
    <div className="Footer-wrapper">
    <div className='Footer'>
      <div className="Footer-row-1">
        <ul className="footer-item">
            <h2>Company</h2>
            <hr />
            <li>About US</li>
            <li>Privacy policy</li>
            <li>Our Services</li>
            <li>Affliate Programs</li>
        </ul>
        <ul className="footer-item">
            <h2>Get Help</h2>
            <hr  />
            <li>Shiping</li>
            <li>FAQ</li>
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
            <li className='socail-me'><i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i></li>
        </ul>
      </div>
      <div className="Footer-row-2">
        <p>© Gengross - 2025</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
