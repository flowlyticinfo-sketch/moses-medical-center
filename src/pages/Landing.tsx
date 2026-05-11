import { Nav } from '@/components/landing/Nav';
import { Hero } from '@/components/landing/Hero';
import { EmergencyBanner } from '@/components/landing/EmergencyBanner';
import { Services } from '@/components/landing/Services';
import { Features } from '@/components/landing/Features';
import { Testimonials } from '@/components/landing/Testimonials';
import { FAQ } from '@/components/landing/FAQ';
import { Products } from '@/components/landing/Products';
import { Contact } from '@/components/landing/Contact';
import { Footer } from '@/components/landing/Footer';

export default function Landing() {
  return (
    <div className="bg-bg-dark text-primary" style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)', transition: 'background 0.15s var(--ease), color 0.15s var(--ease)' }}>
      <Nav />
      <main>
        <Hero />
        <EmergencyBanner />
        <Services />
        <Features />
        <Testimonials />
        <FAQ />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
