import ContactInfoPanel from '@/app/contact/ui/ContactInfoPanel';
import WhatsAppSection from '@/app/contact/ui/WhatsAppSection';
// import BoutiqueLocations from '@/app/contact/ui/BoutiqueLocations';
import './contact.css';
import HeroSection from '@/components/HeroSection';


export default function ContactPage() {
  return (
    <main className="contact-page">
      <HeroSection
        title="Craft Your"
        highlight="Dream Cake"
        subtitle="For custom orders, celebrations, or private inquiries, our artisans are at your service."
        backgroundImage="/images/product_truffle_box.webp"
      />
      <ContactInfoPanel />
      <WhatsAppSection />
      {/* <BoutiqueLocations /> */}
    </main>
  );
}
