import React, { useState } from "react";
import './ContactPopup.css';
import resouce from '../resouce';

function ContactPopup({ setShowContact }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value, // using 'id' as the key
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      alert(result.message);
      setFormData({ name: "", email: "", address: "", message: "" }); // reset form
    } catch (err) {
      alert("Failed to send message.");
      console.error(err);
    }
  };

  return (
    <div className="ContactPopup">
      <i className="fa-solid fa-xmark close-icon" onClick={() => setShowContact(false)}></i>

      <form onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST">
        <h2>Contact Form</h2>
        <div className="row1">
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"/>
          <input id="name"  type="text" name="name" required />
        </div>
        <div className="row1">
          <input id="email"  placeholder="Email" type="email" name="email" required />
        </div>
        <div className="row1">
          <textarea id="message" placeholder="Note" rows="4" name="message" required></textarea>
        </div>
        <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPopup;
