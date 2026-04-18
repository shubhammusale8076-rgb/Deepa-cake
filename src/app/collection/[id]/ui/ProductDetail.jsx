"use client";

import React, { useState } from "react";
import "./ProductDetail.css";

export default function ProductDetail({
  title,
  subtitle,
  price,
  description,
  image,
}) {
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState("500g");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("Morning (10AM - 1PM)");
  const [cakeMessage, setCakeMessage] = useState("");

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleWhatsAppOrder = () => {
    if (!deliveryDate) {
      alert("Please select delivery date");
      return;
    }

    const message = `New ORDER REQUEST

    Hello Deepas Chocotales Homebakery, 
    
    I would like to place an order:

    ━━━━━━━━━━━━━━━
    Product Details
    • Name: ${title}
    • Price: ${price}
    • Weight: ${weight}
    • Quantity: ${quantity}

    ━━━━━━━━━━━━━━━
    Delivery Details
    • Date: ${deliveryDate}
    • Time Slot: ${timeSlot}

    ━━━━━━━━━━━━━━━
    Customization
    • Message on Cake: ${cakeMessage || "None"}

    ━━━━━━━━━━━━━━━
    Customer Details
    • Name:
    • Phone:

    ━━━━━━━━━━━━━━━

    Kindly fill in your details and confirm the order. Thank you!`;

    const url = `https://wa.me/918766453107?text=${encodeURIComponent(
      message
    )}`;

   window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="product-detail">
      <div className="product-detail-image-wrapper">
        <img src={image} alt={title} className="product-detail-image" />
      </div>

      <div className="product-detail-info">
        <p className="product-detail-subtitle">{subtitle}</p>
        <h1 className="product-detail-title">{title}</h1>
        <p className="product-detail-price">{price}</p>

        <div className="product-detail-description">
          <p>{description}</p>
        </div>

        <div className="options-container">
          {/* Weight */}
          <div className="option-group">
            <p className="weight-label">SELECT WEIGHT</p>
            <div className="weight-options">
              {["500g", "1kg", "2kg"].map((w) => (
                <button
                  key={w}
                  className={`weight-btn ${weight === w ? "active" : ""}`}
                  onClick={() => setWeight(w)}
                >
                  {w.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Delivery + Time */}
          <div className="row">
            <div className="option-group">
              <p className="label">DELIVERY DATE</p>
              <input
                type="date"
                className="input"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
            </div>

            <div className="option-group">
              <p className="label">TIME SLOT</p>
              <select
                className="input"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
              >
                <option>Morning (10AM - 1PM)</option>
                <option>Afternoon (1PM - 5PM)</option>
                <option>Evening (5PM - 9PM)</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="option-group">
            <p className="label">MESSAGE ON CAKE (OPTIONAL)</p>
            <input
              type="text"
              placeholder="E.g. Happy Anniversary"
              className="input"
              value={cakeMessage}
              onChange={(e) => setCakeMessage(e.target.value)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="product-detail-actions">
          <div className="quantity-selector">
            <button className="quantity-btn" onClick={decrement}>
              -
            </button>
            <span className="quantity-display">{quantity}</span>
            <button className="quantity-btn" onClick={increment}>
              +
            </button>
          </div>

          <button className="btn btn-outline" onClick={handleWhatsAppOrder}>
            Order on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}