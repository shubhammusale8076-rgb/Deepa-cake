const ARTISANS = 
  {
    id: 'julien',
    name: 'Julien Vasseur',
    role: 'Executive Pastry Chef',
    image: '/images/product_truffle_box.png',
    bio: "A master of structural pastry, Julien brings his background in architecture to every towering macaron display and multi-tiered cake.",
    signture:""
  
  }


export default function MeetTheArtisans() {
  return (
    <section className="about-artisans">
      <div className="about-artisans-header">
        <p className="about-artisans-eyebrow">The Creative Minds</p>
        <h2 className="about-artisans-title">Meet the Artisans</h2>
      </div>

          <div className="artisan-card">
            <div className="artisan-img-wrap">
              <img
                src={ARTISANS.image}
                alt={ARTISANS.name}
                className="artisan-img"
              />
              <div className="artisan-img-overlay" aria-hidden="true" />
            </div>

            <div className="artisan-body">
              <p className="artisan-role">{ARTISANS.role}</p>
              <h3 className="artisan-name">{ARTISANS.name}</h3>
              <p className="artisan-bio">{ARTISANS.bio}</p>
              <p className="artisan-signture">{ARTISANS.signture}</p>
            </div>
          </div>
    </section>
  );
}
