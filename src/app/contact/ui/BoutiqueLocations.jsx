const BOUTIQUES =
{
  name: "Paris Atelier",
  addressLine1: "42 Rue de Rivoli",
  addressLine2: "75004 Paris, France",
  hours: [
    { day: "Monday – Friday", time: "9:00 – 19:00" },
    { day: "Saturday", time: "10:00 – 18:00" },
    { day: "Sunday", time: "By Appointment" },
  ],
}


export default function BoutiqueLocations() {
  return (
    <section className="boutique-section parallax-bg">
      <div className="boutique-section-wrapper">
        <div className="boutique-section-header">
          <p className="boutique-eyebrow">Visit Us Our Boutiques</p>
          <p className="boutique-subtitle">
            Experience the artistry in person. Our doors are open for tastings
            and private consultations.
          </p>
          <h3 className="boutique-card-name">{BOUTIQUES.name}</h3>
          <p className="boutique-card-address">
            {BOUTIQUES.addressLine1}
            <br />
            {BOUTIQUES.addressLine2}
          </p>
        </div>

        <div className="boutique-card">
          <h3>Opening Hours</h3>
          {BOUTIQUES.hours.map((h) => (
            <div key={h.day} className="boutique-hours-row">
              <span className="boutique-hours-day">{h.day}</span>
              <span className="boutique-hours-time">{h.time}</span>
            </div>
          ))}
        </div>

      </div>
      <p className="boutique-appointment-note">
        ✦ Consultation by appointment is recommended for wedding and event
        inquiries. Contact our concierge to reserve your private tasting session.
      </p>
    </section>
  );
}
