import React from "react";
import './ContactPopup.css';

function ContactPopup({ setShowContact }) {
  return (
    <div className="ContactPopup">
      <i className="fa-solid fa-xmark close-icon" onClick={() => setShowContact(false)}></i>

      <form action="https://api.web3forms.com/submit" method="POST">
        <h2>Contact Form</h2>

        <input type="hidden" name="access_key" value="fcd435e6-55c3-47a1-8a71-42dc2d1b929e" />

        <div className="row1">
          <input id="name" placeholder="Name" type="text" name="name" required />
        </div>

        <div className="row1">
          <input id="email" placeholder="Email" type="email" name="email" required />
        </div>

        <div className="row1">
          <textarea id="message" placeholder="Note" rows="4" name="message" required></textarea>
        </div>

        <input type="hidden" name="redirect" value="https://web3forms.com/success" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPopup;
