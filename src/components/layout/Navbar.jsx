"use client";

import React, { useState } from 'react';
import './Navbar.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>The Deepa&apos;s ChocoTales</h1>
      </div>

      <button 
        className={`navbar-toggle ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link href="/" className={`navbar-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link href="/collection" className={`navbar-link ${pathname?.startsWith('/collection') ? 'active' : ''}`}>Collection</Link>
        <Link href="/about" className={`navbar-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
        <Link href="/contact" className={`navbar-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        <Link href="/order" className="navbar-link mobile-only">Custom Order</Link>
      </div>
      
      <div className="navbar-actions desktop-only">
          <Link href="/order" className="navbar-icon">Custom Order</Link>
      </div>
    </nav>
  );
}
