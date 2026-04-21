import React from 'react';

const testimonials = [
  { 
    id: 1, 
    name: "Priya S.",
    text: "The chocolate truffle cake was the highlight of our anniversary celebration. It looked stunning and tasted even better!" 
  },
  { 
    id: 2, 
    name: "Shubham M.",
    text: "The nankhatai biscuits reminded me of homemade treats from my childhood. Perfect texture and not overly sweet." 
  },
  { 
    id: 3, 
    name: "Anjali K.",
    text: "Ordering via WhatsApp was super convenient. They customized my cake exactly how I wanted for my daughter's birthday." 
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section section-padding">
      <p className='text-subtitle'>Customer Stories</p>
      <h2 className="testimonials-title">Pure Appreciation</h2>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-card">
          <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
            <div className='text-wrapper'>
              <h4 className='text-accent'>{t.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
