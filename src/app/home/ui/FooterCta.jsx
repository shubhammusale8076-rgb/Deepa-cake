import React from 'react';
import Link from 'next/link';

export default function FooterCta() {
  return (
    <footer className="footer-section parallax-bg ">
      <h2>Make every celebration <br /><span>special</span></h2>
      <div className="footer-actions">
          <button className='btn-primary'>Order Now</button>
          <button className='btn-outline'>Order On WhatsApp</button>
      </div>
    </footer>
  );
}
