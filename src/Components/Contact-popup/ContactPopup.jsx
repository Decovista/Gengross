import React, { useState } from "react";
import "./ContactPopup.css";

function ContactPopup({ setShowContact }) {
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div className="ContactPopup">
      <i
        className="fa-solid fa-xmark close-icon"
        onClick={() => setShowContact(false)}
      ></i>

      <form action="https://api.web3forms.com/submit" method="POST">
        <h2>Contact Form</h2>

        <input
          type="hidden"
          name="access_key"
          value="fcd435e6-55c3-47a1-8a71-42dc2d1b929e"
        />

        <div className="row1">
          <input
            id="name"
            placeholder="Name"
            type="text"
            name="name"
            required
          />
        </div>

        <div className="row1">
          <input
            id="email"
            placeholder="Email"
            type="email"
            name="email"
            required
            title="Enter a valid email address"
          />
        </div>

        <div className="row1">
          <input
            id="phone"
            placeholder="Phone Number"
            type="tel"
            name="phone"
            title="Enter a valid 10-digit Indian phone number starting with 6-9"
            required
          />
        </div>

        <div className="row1">
          <select id="product" name="product" required>
            <option value="">-- Choose Product --</option>
            <option value="Neprogen">Neprogen</option>
            <option value="Poul Guard liquid">Poul Guard liquid</option>
            <option value="Livogen">Livogen</option>
            <option value="Poulgrow-p">Poulgrow-p</option>
            <option value="Genferol">Genferol</option>
            <option value="Genferol">Other products</option>
          </select>
        </div>

        <div className="row1">
          <select
            id="location"
            name="location"
            value={selectedLocation}
            onChange={handleLocationChange}
            required
          >
            <option value="">-- Choose Location --</option>
            <option value="Nagpur">Delhi</option>
            <option value="Pune">Patna</option>
            <option value="Aurangabad">Gurgram</option>
            <option value="Nashik">Nashik</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {selectedLocation === "Other" && (
          <div className="row1">
            <input
              id="other-location"
              placeholder="Please specify your location"
              type="text"
              name="other_location"
              minLength="3"
              required
            />
          </div>
        )}

        <div className="row1">
          <select id="contactTime" name="preferred_time" required>
            <option value="">-- Select a Time Slot --</option>
            <option value="9 AM - 11 AM">9 AM - 11 AM</option>
            <option value="11 AM - 1 PM">11 AM - 1 PM</option>
            <option value="1 PM - 3 PM">1 PM - 3 PM</option>
            <option value="3 PM - 5 PM">3 PM - 5 PM</option>
            <option value="5 PM - 7 PM">5 PM - 7 PM</option>
            <option value="Anytime">Anytime</option>
          </select>
        </div>

        <div className="row1">
          <input
            id="quantity"
            placeholder="Quantity / Requirement Details"
            type="text"
            name="quantity"
            required
          />
        </div>

        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPopup;
