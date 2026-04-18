import React from 'react';

const testimonials = [
  { id: 1, 
    name: "Sarah L.",
    text: "The Velvet Noir was the centerpiece of our anniversary. It didn't just taste divine; it was a piece of art." },
  { id: 2, 
    name: "Mark T.",
    text: "The best biscuits I've had outside of Paris. The texture of the Golden Shortbread is absolutely incomparable." },
  { id: 3, 
    name: "Emily R.",
    text: "The ordering process via WhatsApp was seamless. They customized the cookie box exactly as I requested." }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section section-padding">
      <p className='text-subtitle'>Customer Stories</p>
      <h2 className="testimonials-title">Pure Appreciation</h2>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-card">
            <p className="testimonial-text">"{t.text}"</p>
            <div className='text-wrapper'>
              <h4 className='text-accent'>{t.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
