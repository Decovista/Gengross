import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className='footer'>
        <div className="footer-grid">

          <div className="footer-column">
            <h2>Company</h2>
            <hr />
            <Link to='/About'><li>About Us</li></Link>
            <Link to='/'><li>Privacy Policy</li></Link>
            <li>Our Services</li>
            <li>Affiliate Programs</li>
          </div>

          <div className="footer-column">
            <h2>Get Help</h2>
            <hr />
            <li>Shipping</li>
            <Link to='/FAQ'><li>FAQ</li></Link>
            <li>Returns</li>
            <li>Order Status</li>
          </div>

          <div className="footer-column">
            <h2>Online Shop</h2>
            <hr />
            <li>Watch</li>
            <li>Blogs</li>
            <li>Products</li>
          </div>

          <div className="footer-column">
            <h2>Follow Us</h2>
            <hr />
            <div className='social-icons'>
              <a href="https://www.instagram.com/gengross_healthcare?igsh=MXFybWZuaDBqOGhtMA=="><i className="fa-brands fa-instagram"></i></a>
              <a href="https://x.com/gengross_life?t=fV_vbqYP0U0KAnLC9MAUJw&s=09"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.facebook.com/share/1AitujSx2o/"><i class="fa-brands fa-facebook-f"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <hr />
          <p>© Gengross - 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
