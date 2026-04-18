import "./Footer.css";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2 className="brand-title">The Deepa's Home Bakery</h2>
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
            <Link href="#" className="social-link" ><FaInstagram /> Instagram</Link>
            <Link href="#" className="social-link" ><FaWhatsapp /> WhatsApp</Link>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} The Cinematic Pâtisserie. All rights reserved.</p>
      </div>
    </footer>
  );
}