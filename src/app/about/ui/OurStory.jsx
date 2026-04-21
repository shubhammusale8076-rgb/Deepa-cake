export default function OurStory() {
  return (
    <section className="about-story">
      <div className="about-story-grid">
        {/* Text Column */}
        <div className="about-story-text">
          <p className="about-story-label">Est. 2020</p>
          <h2 className="about-story-title">
            A Legacy of <em>Flour</em> &amp; Cinematic Wonder
          </h2>

          <p className="about-story-body">
            Founded in the heart of a forgotten theater district, The Cinematic
            Pâtisserie was born from a singular vision: to treat every pastry as
            a scene-stealing performance. Our founder, a former set designer
            turned master boulanger, believed that flavor should be as evocative
            as a grand finale.
          </p>

          <p className="about-story-body">
            For over three decades, we have remained committed to the pursuit of
            luxury, blending time-honored French techniques with a modern flair
            for the dramatic. Our ovens haven&apos;t cooled since the first curtain
            rose in 1994.
          </p>

          <blockquote className="about-story-tagline">
            We don&apos;t just bake; we direct the symphony of the senses.
          </blockquote>
        </div>

        {/* Image Column */}
        <div className="about-story-image-wrap">
          <img
            src="/images/herobg.webp"
            alt="The Cinematic Pâtisserie atelier interior"
          />
          <div className="about-story-image-overlay" aria-hidden="true" />
          <div className="about-story-year-badge">
            <span>Founded</span>
            2020
          </div>
        </div>
      </div>
    </section>
  );
}
