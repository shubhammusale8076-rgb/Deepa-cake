import HeroSection from '@/components/HeroSection';
import OurStory from '@/app/about/ui/OurStory';
import Craftsmanship from '@/app/about/ui/Craftsmanship';
import MeetTheArtisans from '@/app/about/ui/MeetTheArtisans';
import AboutCTA from '@/app/about/ui/AboutCTA';
import './about.css';

export const metadata = {
  title: 'About Us | The Cinematic Pâtisserie',
  description:
    'Three decades of luxury pastry craft — born in a forgotten theater district, dedicated to the pursuit of flavor as a grand performance.',
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <HeroSection
        title="The Art of the "
        highlight="Pâtissier"
        subtitle="Founded in the heart of a forgotten theater district — we treat every pastry as a scene-stealing performance."
        backgroundImage="/images/about-us.png"
      />
      <OurStory />
      <Craftsmanship />
      <MeetTheArtisans />
      <AboutCTA />
    </main>
  );
}
