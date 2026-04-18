import React from 'react';
import Link from 'next/link';

export default function FooterCta() {
  return (
    <footer className="footer-section parallax-bg ">
      <h2>Make every celebration <br /><span>special</span></h2>
      <div className="footer-actions">
          <button className='btn-primary'>Explore Cakes</button>
          <button className='btn-outline'>Quick Order on WhatsApp</button>
      </div>
    </footer>
  );
}
