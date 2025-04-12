import React from 'react'
import ContactPopup from '../Contact-popup/ContactPopup'
import './Contact.css'

function Contact({setShowContact}) {
  return (
    <div className='Contact'>
        <h2>Connect with US</h2>
        <div className="card-wrapper">
        <ul className="cards">
        <h3>Contact Details</h3>
        <li><i class="fa-solid fa-location-dot"></i><p>Vipul bussiness Park</p></li>
        <li><i class="fa-solid fa-location-dot"></i><p>office address 84478 </p></li>
        <li><i class="fa-solid fa-phone"></i><p>7534785794</p></li>
        <li><i class="fa-regular fa-envelope"></i><p>vivek@jhasfdh438758</p></li>
      </ul>
      <div className="cards">
        <h3>Get-In Touch</h3>
        <p>Kindly click on the button and fill the contact form to get our Services</p>
        <button onClick={() => setShowContact(true) }>Subscribe Us</button>
      </div>
        </div>
    </div>
  )
}

export default Contact
