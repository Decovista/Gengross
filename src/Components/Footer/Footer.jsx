import React from 'react'
import  './Footer.css'

function Footer() {
  return (
    <div className="Footer-wrapper">
    <div className='Footer'>
      <div className="Footer-row-1">
        <ul className="footer-item">
            <h2>About Gengross</h2>
            <li>One of the leading Farma Company in India</li>
            <li>Good wokrk space</li>
            <li>Trained Employees</li>
            <li>Quality Products</li>
        </ul>
        <ul className="footer-item">
            <h2>Human Health</h2>
            <li>Products</li>
            <li>Query</li>
            <li>Services</li>
            <li>Help</li>
        </ul>
        <ul className="footer-item">
            <h2>Terms & Condition</h2>
            <li>Privacy & policy</li>
            <li>FAQ</li>
            <li>Reveiw</li>
        </ul>
      </div>
      <div className="Footer-row-2">
        <div className="social-media">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        </div>
        <p>© Gengross - 2025</p>
        
      </div>
    </div>
    </div>
  )
}

export default Footer
