"use client"

import useInView from '@/hooks/useInView';
import React from 'react';

export default function ProductCard({ subtitle, title, description, image, reverseLayout }) {

  const [ref, visible] = useInView();
  return (
    <article className={`product-card ${reverseLayout ? 'reverse' : ''} `}>
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <div ref={ref} className={`product-info ${reverseLayout ? 'reveal-left' : 'reveal-right'} ${visible ? 'show' : ''}`}>
        <p className="product-subtitle">{subtitle}</p>
        <h2 className="product-title">{title}</h2>
        <p className="product-desc text-variant">{description}</p>
        <button className="btn btn-primary">Order Now</button>
      </div>
    </article>
  );
}
