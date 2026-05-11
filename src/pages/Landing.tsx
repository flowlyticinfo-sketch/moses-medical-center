import { Nav } from '@/components/landing/Nav';
import { Hero } from '@/components/landing/Hero';
import { Services } from '@/components/landing/Services';
import { Features } from '@/components/landing/Features';
import { Products } from '@/components/landing/Products';
import { Contact } from '@/components/landing/Contact';
import { Footer } from '@/components/landing/Footer';

export default function Landing() {
  return (
    <div className="bg-bg-dark text-primary" style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)', transition: 'background 0.15s var(--ease), color 0.15s var(--ease)' }}>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Features />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
