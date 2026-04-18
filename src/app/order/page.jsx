import HeroSection from '@/components/HeroSection';
import OrderForm from '@/app/order/ui/OrderForm';
import './order.css';

export const metadata = {
  title: 'Bespoke Order | The Cinematic Pâtisserie',
  description:
    'Share your vision for a one-of-a-kind masterpiece. Our master artisans transform your story into an edible work of art.',
};

export default function OrderPage() {
  return (
    <main className="order-page">
      <HeroSection
        title="Bespoke"
        highlight="Creations"
        subtitle="Share your vision for a one-of-a-kind masterpiece. Our master artisans transform your story into an edible work of art."
        backgroundImage="/images/product_ruby_rose.png"
      />
      <OrderForm />
    </main>
  );
}
