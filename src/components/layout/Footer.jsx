import "./Footer.css";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {

  const whatsappMessage = `Hello Deepa's Chocotales Homebakery,

I found your website and I'm interested in your cakes.

Could you please share more details?`;

  const whatsappUrl = `https://wa.me/918766453107?text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2 className="brand-title">The Deepa's Chocotales</h2>
          <p className="brand-tagline">
            Crafted with passion, designed for unforgettable moments.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <Link href="/" className="footer-link">Home</Link>
          <Link href="/collection" className="footer-link">Collection</Link>
          <Link href="/about" className="footer-link">About</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
        </div>

        {/* Social */}
        <div className="footer-social">
          <Link href="https://instagram.com/deepas_chocotales_homebakery"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram /> Instagram
          </Link>
          <Link
           href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaWhatsapp /> WhatsApp
          </Link>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} The Deepa's Chocotales. All rights reserved.</p>
      </div>
    </footer>
  );
}