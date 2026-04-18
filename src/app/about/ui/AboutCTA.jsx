import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="about-cta ">
      <div className="about-cta-inner">
        <p className="about-cta-eyebrow">Begin the Experience</p>
        <h2 className="about-cta-title">
          Visit Our Boutique Workshops
        </h2>
        <p className="about-cta-subtitle">
          Browse our seasonal premieres online or book a private tasting at one
          of our ateliers. Every visit is a curtain call.
        </p>
        <div className="about-cta-actions">
          <Link href="/collection" className="btn btn-primary">
            Explore Collections
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
