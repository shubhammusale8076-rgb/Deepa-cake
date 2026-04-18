const INGREDIENTS = [
  {
    id: 'chocolate',
    icon: '🍫',
    name: 'Belgian Excellence',
    origin: 'Flanders, Belgium',
    image: '/Images/About-Us/chocolate-img.png',
    description:
      'Our signature 72% dark chocolate is sourced from ethical estates in the heart of Flanders, chosen for its complex notes of red fruit and smoke.',
  },
  {
    id: 'vanilla',
    icon: '🌿',
    name: 'Pure Orchid Vanilla',
    image: '/Images/About-Us/vanilla-img.png',
    origin: 'Madagascar',
    description:
      'Sustainably harvested Madagascar beans, aged to perfection for an aroma that lingers like a classic melody.',
  },
  {
    id: 'flour',
    icon: '🌾',
    name: 'Stone-Ground Flour',
    image: '/Images/About-Us/flour-img.png',
    origin: 'Normandy, France',
    description:
      'Milled using centuries-old techniques to preserve the essential nutrients and rustic character of the grain.',
  },
  {
    id: 'butter',
    icon: '🧈',
    name: 'Grass-Fed Gold',
    image: '/Images/About-Us/butter.png',
    origin: 'Normandy, France',
    description:
      "Cultured butter from Normandy, churned slowly to achieve a fat content that creates the ultimate flaky lamination in our croissants.",
  },
];

export default function Craftsmanship() {
  return (
    <section className="about-craft">
      <div className="about-craft-header">
        <p className="about-craft-eyebrow">The Sourcing</p>
        <h2 className="about-craft-title">The Craftsmanship</h2>
        <p className="about-craft-subtitle">
          Sourcing only the world&apos;s most exceptional raw materials to ensure
          every bite is a masterpiece.
        </p>
      </div>

      <div className="about-craft-grid">
        {INGREDIENTS.map((item) => (
          <div key={item.id} className={`craft-card ${item.id}`}>
            <div className="craft-card-ima-wrapper">
              <img src={item.image} alt="craft-card-image" className="craft-card-image" />
            </div>
            <div className="craft-card-overlay"> </div>
            <div className="craft-card-content">
              <h3 className="craft-card-name">{item.name}</h3>
              <p className="craft-card-desc">{item.description}</p>
            </div>



          </div>
        ))}
      </div>
    </section>
  );
}
