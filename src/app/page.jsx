import HeroSection from '@/components/HeroSection';
import CategoryList from '@/app/home/ui/CategoryList';
import ProductCard from '@/app/collection/[id]/ui/ProductCard';
import AboutSection from '@/app/home/ui/AboutSection';
import CtaSection from '@/app/home/ui/CtaSection';
import Testimonials from '@/app/home/ui/Testimonials';
import FooterCta from '@/app/home/ui/FooterCta';
import '@/app/home/Home.css';

export default function Home() {
  return (
    <>
      <main className="home-page">
        <HeroSection
          title="Crafted for"
          highlight="Celebrations"
          subtitle="Premium cakes, cookies, and biscuits made with love"
          backgroundImage="/images/herobg.png"
          primaryText="Order Now"
          secondaryText="Order on WhatsApp"
        />
        <CategoryList />

        <section className="featured-products">
          <div className="featured-container">
            <ProductCard
              subtitle="The Masterpiece"
              title="Velvet Noir Cake"
              description="A triple-layered dark cocoa sponge infused with organic bourbon vanilla and enveloped in our signature 70% dark chocolate ganache."
              image="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop"
              reverseLayout={false}
            />
            <ProductCard
              subtitle="Daily Indulgence"
              title="Sea Salt Sensation"
              description="Thick, chewy cookies packed with hand-chopped Belgian chocolate and finished with a delicate dusting of Maldon sea salt flakes."
              image="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1000&auto=format&fit=crop"
              reverseLayout={true}
            />
            <ProductCard
              subtitle="Tea Time Tradition"
              title="Golden Shortbread"
              description="Our heritage recipe uses grass-fed churned butter and stone-ground flour to create a texture that melts instantly on the palate."
              image="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1000&auto=format&fit=crop"
              reverseLayout={false}
            />
          </div>
        </section>

        <AboutSection />
        <CtaSection />
        <Testimonials />
        <FooterCta />
      </main>
    </>
  );
}
