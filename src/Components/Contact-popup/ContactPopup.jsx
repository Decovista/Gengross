import React, { useState } from "react";
import "./ContactPopup.css";

function ContactPopup({ setShowContact }) {
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.product) newErrors.product = "Please select a product.";
    if (!formData.location) newErrors.location = "Please select a location.";
    if (formData.location === "Other" && !formData.other_location.trim())
      newErrors.other_location = "Please specify your location.";
    if (!formData.preferred_time) newErrors.preferred_time = "Please select a time slot.";
    if (!formData.quantity.trim()) newErrors.quantity = "Quantity/Details required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://gengross-backend-1.onrender.com/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({ type: "success", text: "Form submitted successfully!" });
        setTimeout(() => setShowContact(false), 2000);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitMessage({ type: "error", text: "Submission failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDisabled =
    isSubmitting ||
    !formData.name ||
    !formData.email ||
    !formData.phone ||
    !formData.product ||
    !formData.location ||
    (formData.location === "Other" && !formData.other_location) ||
    !formData.preferred_time ||
    !formData.quantity;

  return (
    <div className="ContactPopup">
      <i
        className="fa-solid fa-xmark close-icon"
        onClick={() => setShowContact(false)}
        aria-label="Close contact form"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setShowContact(false);
        }}
      ></i>

      <form onSubmit={handleSubmit} noValidate>
        <h2>Contact Form</h2>

        <div className="row1">
          <label htmlFor="name">Name*</label>
          <input
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="row1">
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="row1">
          <label htmlFor="phone">Phone Number*</label>
          <input
            id="phone"
            name="phone"
            placeholder="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            required
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="row1">
          <label htmlFor="product">Product*</label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            aria-invalid={!!errors.product}
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
          {errors.product && <span className="error">{errors.product}</span>}
        </div>

        <div className="row1">
          <label htmlFor="location">Location*</label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            aria-invalid={!!errors.location}
            required
          >
            <option value="">-- Choose Location --</option>
            <option value="Delhi">Delhi</option>
            <option value="Patna">Patna</option>
            <option value="Gurgram">Gurgram</option>
            <option value="Nashik">Nashik</option>
            <option value="Other">Other</option>
          </select>
          {errors.location && <span className="error">{errors.location}</span>}
        </div>

        {formData.location === "Other" && (
          <div className="row1">
            <label htmlFor="other_location">Please specify your location*</label>
            <input
              id="other_location"
              name="other_location"
              placeholder="Please specify your location"
              type="text"
              value={formData.other_location}
              onChange={handleChange}
              aria-invalid={!!errors.other_location}
              required
            />
            {errors.other_location && <span className="error">{errors.other_location}</span>}
          </div>
        )}

        <div className="row1">
          <label htmlFor="preferred_time">Preferred Time Slot*</label>
          <select
            id="preferred_time"
            name="preferred_time"
            value={formData.preferred_time}
            onChange={handleChange}
            aria-invalid={!!errors.preferred_time}
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
          {errors.preferred_time && <span className="error">{errors.preferred_time}</span>}
        </div>

        <div className="row1">
          <label htmlFor="quantity">Quantity / Requirement Details*</label>
          <input
            id="quantity"
            name="quantity"
            placeholder="Quantity / Requirement Details"
            type="text"
            value={formData.quantity}
            onChange={handleChange}
            aria-invalid={!!errors.quantity}
            required
          />
          {errors.quantity && <span className="error">{errors.quantity}</span>}
        </div>

        <button type="submit" disabled={isDisabled}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {submitMessage && (
          <p className={submitMessage.type === "success" ? "success-msg" : "error-msg"}>
            {submitMessage.text}
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactPopup;
