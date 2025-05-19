import React from 'react';
import ContactPopup from '../Contact-popup/ContactPopup';
import './Contact.css';

function Contact({ setShowContact }) {
  return (
    <div className='Contact'>
      <h2>Connect with Us</h2>
      <div className="card-wrapper">
        <ul className="cards">
          <h3>Contact Details</h3>
          <li>
            <i className="fa-solid fa-location-dot"></i>
            <a
            href="https://www.google.co.in/maps/place/Vipul+Business+Park,+Central+Park+II+Rd,+Vipul+World,+Sector+48,+Gurugram,+Haryana+122004/@28.4226504,77.035029,17z/data=!3m1!4b1!4m6!3m5!1s0x390d18758a93762b:0x9348ae09f4ba0007!8m2!3d28.4226457!4d77.0376039!16s%2Fg%2F1pt_f2nln?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
              target="_blank"
               rel="noopener noreferrer"
               >
            <p>Gengross Life Sciencs</p> </a>
          </li>
          <li>
            <i className="fa-solid fa-location-dot"></i>
            <a
            href="https://www.google.co.in/maps/place/Vipul+Business+Park,+Central+Park+II+Rd,+Vipul+World,+Sector+48,+Gurugram,+Haryana+122004/@28.4226504,77.035029,17z/data=!3m1!4b1!4m6!3m5!1s0x390d18758a93762b:0x9348ae09f4ba0007!8m2!3d28.4226457!4d77.0376039!16s%2Fg%2F1pt_f2nln?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
              target="_blank"
               rel="noopener noreferrer"
               >
               Unit No. 417, 4th Floor, Vipul Business Park, Sector 48, Main Sohna Road, Gurugram-122011.
              </a>
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>
            <p>
              <a href="tel:+919708954645">+91 97089 54645</a>
            </p>
          </li>
          <li>
            <i className="fa-regular fa-envelope"></i>
            <p>
              <a href="mailto:gengross.lifescience@gmail.com">
                gengross.lifescience@gmail.com
              </a>
            </p>
          </li>
        </ul>

        <div className="cards">
          <h3>Get In Touch</h3>
          <p>Kindly click on the button and fill the contact form to get our services.</p>
          <button onClick={() => setShowContact(true)}>Subscribe Us</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
