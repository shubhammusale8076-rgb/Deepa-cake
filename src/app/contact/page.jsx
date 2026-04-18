import ContactInfoPanel from '@/app/contact/ui/ContactInfoPanel';
import WhatsAppSection from '@/app/contact/ui/WhatsAppSection';
import BoutiqueLocations from '@/app/contact/ui/BoutiqueLocations';
import './contact.css';
import HeroSection from '@/components/HeroSection';

export const metadata = {
  title: 'Contact Us | The Cinematic Pâtisserie',
  description:
    'Reach out for custom orders, celebrations, or private inquiries. Our artisans are at your service.',
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <HeroSection
        title="Connect with the"
        highlight="Pâtisserie"
        subtitle="For custom orders, celebrations, or private inquiries, our artisans are at your service."
        backgroundImage="/images/product_truffle_box.png"
      />
      <ContactInfoPanel />
      <WhatsAppSection />
      <BoutiqueLocations />
    </main>
  );
}
