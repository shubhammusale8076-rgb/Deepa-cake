"use client";

import { useState } from "react";

const OCCASION_OPTIONS = [
  "Wedding Cake",
  "Birthday Celebration",
  "Corporate Event",
  "Private Tasting",
  "Custom Commission",
  "Other Inquiry",
];

export default function ContactInfoPanel() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    occasion: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submission logic placeholder
    alert("Your inquiry has been received. Our concierge will be in touch shortly.");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", occasion: "", message: "" });
  };

  return (
    <section className="contact-info-panel">
      <div className="contact-form-wrapper">
        <p className="contact-form-subtitle">Inquiry Form</p>
        <h2 className="contact-form-title">Begin Your Bespoke Journey</h2>

        <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Deepa"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Swami"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="deepa@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone (optional)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select an occasion…
              </option>
              {OCCASION_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="message">Your Vision</label>
            <textarea
              id="message"
              name="message"
              placeholder="Describe your dream creation — flavours, aesthetics, guest count…"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary form-submit-btn">
            Send Inquiry
          </button>
        </form>
      </div>

      {/* ── Contact Details ── */}
      <div className="contact-details-wrapper">
        <div className="contact-detail-img-wrapper">
          <img src="/images/product_sea_salt_cookies.png" alt="cookies Image" />
            <div className="contact-detail-img-overlay"></div>
        </div>
        <div className="contact-detail-card-wrapper">
          <div className="contact-detail-card">
            <p className="detail-card-label">The Flagship</p>
            <h3 className="detail-card-title">Paris Boutique</h3>
            <p className="detail-card-value">
              42 Rue de Rivoli<br />
              75004 Paris, France
            </p>
          </div>
          <div className="contact-detail-card">
            <p className="detail-card-label">Direct Liaison</p>
            <h3 className="detail-card-title">Reach Us Directly</h3>
            <p className="detail-card-value">
              <a href="tel:+33142741234">+33 (0) 1 42 74 12 34</a>
              <br />
              <a href="mailto:concierge@artisancakery.com">
                concierge@artisancakery.com
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
