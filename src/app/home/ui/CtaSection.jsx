import React from 'react';

export default function CtaSection() {
  return (
    <section className="cta-section section-padding bg-surface-lowest">
      <div className="cta-content">
        <h2>Prefer to order directly?</h2>
        <p className="text-variant">
          Chat with our master bakers on WhatsApp for custom orders, bulk inquiries, or personalized gift hampers.
        </p>
        <button className="btn btn-whatsapp">CHAT WITH US ON WHATSAPP</button>
      </div>
      <div className="cta-image-wrapper">
        <img src="/images/cta-image.png" alt="" />
      </div>
    </section>
  );
}
