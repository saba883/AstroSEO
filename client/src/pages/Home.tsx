import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Locations from '@/components/Locations';
import CostCalculator from '@/components/CostCalculator';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { TrustSignals, ClientLogos, SecurityBadges } from '@/components/TrustSignals';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* Trust Signals Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <TrustSignals />
          </div>
        </section>
        
        <Services />
        
        {/* Client Logos Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <ClientLogos />
          </div>
        </section>
        
        <WhyChooseUs />
        <Testimonials />
        <Locations />
        <CostCalculator />
        
        {/* Security Badges */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <SecurityBadges />
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
