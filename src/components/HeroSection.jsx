"use client"


import { useRouter } from 'next/navigation';
import React from 'react';


const HeroSection = ({
  title,
  highlight,
  subtitle,
  primaryText,
  secondaryText,
  backgroundImage,
}) => {

  const router = useRouter();

  const handleClick = () => {
    router.push('/collection');
  };

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
    <section
      className="hero-section parallax-bg"
      style={{
        "--hero-bg": `url(${backgroundImage})`,
      }}
    >
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">
          {title} <span>{highlight}</span>
        </h1>

        <p className="hero-subtitle">{subtitle}</p>

        {primaryText && secondaryText && (
          <div className="hero-action-wrapper">
            <button className="btn-primary" onClick={handleClick}>
              {primaryText}
            </button>

            <button className="btn-outline" onClick={handleWhatsAppMessage}>
              {secondaryText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
