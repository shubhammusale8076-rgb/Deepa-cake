

import React from 'react';
import Link from 'next/link';
import './CollectionCard.css';

export default function CollectionCard({ id, title, subtitle, image, price, category }) {
 
  return (
    <article className="collection-card">
      <div className="collection-image-wrapper">
        <img src={image} alt={title} className="collection-image" />
        <div className="collection-overlay">
          <Link href={`/collection/${id}`} className="btn btn-primary collection-btn">View Details</Link>
        </div>
      </div>
      <div className="collection-info">
        <div className="collection-info-wrapper">
          <div className="collection-title-link">
            <h3 className="collection-title">{title}</h3>
          </div>
          <p className="collection-subtitle">{subtitle}</p>
        </div>
        <div className="collection-price-wrapper">
          <p className="collection-price">{price}</p>
        </div>
      </div>
    </article>
  );
}
