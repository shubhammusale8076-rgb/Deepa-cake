"use client"

import React from 'react';
import { useRouter } from 'next/navigation';


export default function FooterCta() {

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
    <footer className="footer-section parallax-bg ">
      <h2>Make every celebration <br /><span>special</span></h2>
      <div className="footer-actions">
        <button className='btn-primary' onClick={handleClick}>Explore Cakes</button>
        <button className='btn-outline' onClick={handleWhatsAppMessage}>Quick Order on WhatsApp</button>
      </div>
    </footer>
  );
}
