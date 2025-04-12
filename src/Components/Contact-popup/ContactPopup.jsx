import React from 'react';
import './ContactPopup.css';
import resouce from '../resouce'; 

function ContactPopup({ setShowContact }) {
  return (
    <div className="ContactPopup">
      <video autoPlay muted loop className="video-bg">
        <source src={resouce.video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <i className="fa-solid fa-xmark close-icon" onClick={() => setShowContact(false)}></i>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <h2>Contact Form</h2>
        <div className="row1">
          <input id="name" type="text" placeholder="Name" required />
        </div>
        <div className="row1">
          <input id="email" type="email" placeholder="Email" required />
        </div>
        <div className="row1">
          <input id="address" type="text" placeholder="Address" required />
        </div>
        <div className="row1">
          <textarea id="message" placeholder="Note" rows="4" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPopup;
