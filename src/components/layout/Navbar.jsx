"use client";

import React from 'react';
import './Navbar.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>The Deepa's Home Bakery</h1>
      </div>
      
      <div className="navbar-links">
        <Link href="/" className={`navbar-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link href="/collection" className={`navbar-link ${pathname?.startsWith('/collection') ? 'active' : ''}`}>Collection</Link>
        <Link href="/about" className={`navbar-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
      
        <Link href="/contact" className={`navbar-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
      </div>
      
      <div className="navbar-actions">
          <Link href="/order" className="navbar-icon">Custom Order</Link>
      </div>
    </nav>
  );
}
