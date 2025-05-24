import React, { useState } from "react";
import "./ContactPopup.css";

function ContactPopup({ setShowContact }) {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    location: "",
    other_location: "",
    preferred_time: "",
    quantity: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLocationChange = (e) => {
    const loc = e.target.value;
    setSelectedLocation(loc);
    setFormData({ ...formData, location: loc });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for other location
    if (formData.location === "Other" && formData.other_location.trim() === "") {
      alert("Please specify your location.");
      return;
    }

    try {
      setLoading(true);
      setStatus(null);

      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL || "https://gengross-backend-10.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: "",
          location: "",
          other_location: "",
          preferred_time: "",
          quantity: "",
        });
        setSelectedLocation("");
      } else {
        setStatus(`❌ ${data.error || "Failed to send message."}`);
      }
    } catch (error) {
      setStatus("❌ Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ContactPopup">
      <i
        className="fa-solid fa-xmark close-icon"
        onClick={() => setShowContact(false)}
      ></i>

      <form onSubmit={handleSubmit}>
        <h2>Contact Form</h2>

        <div className="row1">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row1">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row1">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[6-9]\d{9}"
            title="Enter a valid 10-digit Indian phone number"
          />
        </div>

        <div className="row1">
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="">-- Choose Product --</option>
            <option value="Neprogen">Neprogen</option>
            <option value="Poul Guard liquid">Poul Guard liquid</option>
            <option value="Livogen">Livogen</option>
            <option value="Poulgrow-p">Poulgrow-p</option>
            <option value="Genferol">Genferol</option>
            <option value="Other products">Other products</option>
          </select>
        </div>

        <div className="row1">
          <select
            name="location"
            value={selectedLocation}
            onChange={handleLocationChange}
            required
          >
            <option value="">-- Choose Location --</option>
            <option value="Delhi">Delhi</option>
            <option value="Patna">Patna</option>
            <option value="Gurgram">Gurgram</option>
            <option value="Nashik">Nashik</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {selectedLocation === "Other" && (
          <div className="row1">
            <input
              type="text"
              name="other_location"
              placeholder="Please specify your location"
              value={formData.other_location}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="row1">
          <select
            name="preferred_time"
            value={formData.preferred_time}
            onChange={handleChange}
            required
          >
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
            type="text"
            name="quantity"
            placeholder="Quantity / Requirement Details"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>

        {status && <p className="form-status">{status}</p>}
      </form>
    </div>
  );
}

export default ContactPopup;
