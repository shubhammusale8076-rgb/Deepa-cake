"use client";

import React from 'react';

export default function CtaSection() {

  const handleWhatsAppMessage = () => {
    const message = `Hello Deepas Chocotales Homebakery,

I’d like to inquire about your cakes.

• Custom cake orders
• Bulk orders
• Available designs

Please assist me. Thank you!`;

    const url = `https://wa.me/917218608016?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }
    
  return (
    <section className="cta-section section-padding bg-surface-lowest">
      <div className="cta-content">
        <h2>Prefer to order directly?</h2>
        <p className="text-variant">
          Chat with our master bakers on WhatsApp for custom orders, bulk inquiries, or personalized gift hampers.
        </p>
        <button className="btn btn-whatsapp" onClick={handleWhatsAppMessage}>CHAT WITH US ON WHATSAPP</button>
      </div>
      <div className="cta-image-wrapper">
        <img src="/images/cta-image.png" alt="" />
      </div>
    </section>
  );
}
