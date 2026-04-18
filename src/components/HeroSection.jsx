import React from 'react';


const HeroSection = ({
  title,
  highlight,
  subtitle,
  primaryText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
  backgroundImage,
}) => {
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
            <button className="btn-primary" onClick={onPrimaryClick}>
              {primaryText}
            </button>

            <button className="btn-outline" onClick={onSecondaryClick}>
              {secondaryText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
