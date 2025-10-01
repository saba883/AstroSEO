import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const advantages = [
  '2,200+ successful business setups',
  'Government partnerships for faster processing',
  'Local presence in Riyadh, Jeddah, and Dammam',
  '100% foreign ownership expertise',
  'Average 95% response rate within 1 hour',
  'Complete end-to-end support'
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Why Choose Analytix?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              As Saudi Arabia's leading business formation consultancy, we've helped thousands of 
              international companies establish successful operations under Vision 2030.
            </p>
            
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-chart-4 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{advantage}</span>
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="space-y-8">
                <div>
                  <div className="font-mono text-5xl font-bold text-primary mb-2" data-testid="text-success-rate">98%</div>
                  <div className="text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <div className="font-mono text-5xl font-bold text-primary mb-2" data-testid="text-avg-time">7-14</div>
                  <div className="text-muted-foreground">Days Average Setup Time</div>
                </div>
                <div>
                  <div className="font-mono text-5xl font-bold text-primary mb-2" data-testid="text-experience">25+</div>
                  <div className="text-muted-foreground">Years Combined Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
