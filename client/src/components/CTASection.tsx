import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-chart-2 p-12 md:p-16 text-center">
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Business in Saudi Arabia?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 2,200+ successful companies. Get expert guidance from consultation to company registration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm" 
                data-testid="button-cta-consultation"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm" 
                data-testid="button-cta-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-white">
                <div className="font-mono text-2xl font-bold">2,200+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div className="text-white">
                <div className="font-mono text-2xl font-bold">98%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
              <div className="text-white">
                <div className="font-mono text-2xl font-bold">24h</div>
                <div className="text-sm text-white/80">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
