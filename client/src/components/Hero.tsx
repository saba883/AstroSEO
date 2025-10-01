import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator } from 'lucide-react';
import heroImage from '@assets/generated_images/Riyadh_business_district_hero_829f8985.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-chart-3/10" />
      
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Business Formation Expert in{' '}
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Saudi Arabia
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Expert business formation in Saudi Arabia. Fast LLC registration, MISA license, and CR processing. 100% foreign ownership support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="gap-2" data-testid="button-get-started">
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-calculator">
                <Calculator className="w-4 h-4" />
                Calculate Setup Cost
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-8 border-t">
              <div>
                <div className="font-mono text-3xl md:text-4xl font-bold text-primary" data-testid="text-clients-count">2,200+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
              <div>
                <div className="font-mono text-3xl md:text-4xl font-bold text-primary" data-testid="text-ownership">100%</div>
                <div className="text-sm text-muted-foreground">Foreign Ownership</div>
              </div>
              <div>
                <div className="font-mono text-3xl md:text-4xl font-bold text-primary" data-testid="text-response-time">24h</div>
                <div className="text-sm text-muted-foreground">Fast Processing</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Modern business district in Riyadh, Saudi Arabia" 
                className="w-full h-auto"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
