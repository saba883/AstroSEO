import React from 'react';
import { Link } from 'wouter';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  ArrowRight, 
  Building,
  Users,
  TrendingUp,
  Clock
} from 'lucide-react';

interface ServiceLocationsProps {
  serviceName: string;
  serviceSlug: string;
}

const ServiceLocations: React.FC<ServiceLocationsProps> = ({ serviceName, serviceSlug }) => {
  const locations = [
    {
      name: 'Riyadh',
      slug: 'riyadh',
      description: 'Capital city and business hub',
      features: ['Largest market', 'Government center', 'Tech hub'],
      stats: { companies: '1,200+', avgTime: '7-10 days' }
    },
    {
      name: 'Jeddah',
      slug: 'jeddah',
      description: 'Commercial capital and gateway',
      features: ['Port city', 'Tourism hub', 'Trade center'],
      stats: { companies: '800+', avgTime: '8-12 days' }
    },
    {
      name: 'Dammam',
      slug: 'dammam',
      description: 'Eastern Province industrial center',
      features: ['Oil & Gas hub', 'Industrial zone', 'Port access'],
      stats: { companies: '450+', avgTime: '10-14 days' }
    },
    {
      name: 'Al Khobar',
      slug: 'al-khobar',
      description: 'Business and expat community hub',
      features: ['Business district', 'Expat friendly', 'Modern infrastructure'],
      stats: { companies: '350+', avgTime: '10-14 days' }
    },
    {
      name: 'Mecca',
      slug: 'mecca',
      description: 'Holy city with growing business sector',
      features: ['Religious tourism', 'Hospitality sector', 'Real estate'],
      stats: { companies: '200+', avgTime: '12-16 days' }
    },
    {
      name: 'Medina',
      slug: 'medina',
      description: 'Sacred city with business opportunities',
      features: ['Tourism services', 'Agriculture', 'Education sector'],
      stats: { companies: '150+', avgTime: '12-16 days' }
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium">
            <MapPin className="w-4 h-4 mr-2" />
            Available Locations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get {serviceName} Services Across Saudi Arabia
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide professional {serviceName.toLowerCase()} services in all major Saudi cities. 
            Choose your preferred location for localized support and faster processing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Card 
              key={location.slug} 
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-card via-card/98 to-card/95 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 blur transition duration-500" />
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {serviceName} in {location.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {location.description}
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 shadow-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs font-medium bg-gradient-to-r from-secondary/60 to-secondary/40 hover:from-secondary/80 hover:to-secondary/60 transition-all duration-300"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1.5 mb-1">
                        <div className="p-1 bg-gradient-to-br from-primary/20 to-primary/10 rounded">
                          <Building className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-semibold text-lg bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                          {location.stats.companies}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">Businesses Served</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1.5 mb-1">
                        <div className="p-1 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded">
                          <Clock className="w-4 h-4 text-green-600 dark:text-green-500" />
                        </div>
                        <span className="font-semibold text-lg bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                          {location.stats.avgTime}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">Processing Time</p>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full mt-6 group/btn shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-background to-background/90 hover:from-background/90 hover:to-background/80" 
                  variant="outline"
                  asChild
                >
                  <Link href={`/services/${serviceSlug}/${location.slug}`}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="border-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent shadow-xl backdrop-blur-sm max-w-3xl mx-auto">
            <CardContent className="py-8 text-center relative z-10">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Need {serviceName} in a Different City?
              </h3>
              <p className="text-muted-foreground mb-6">
                We serve all cities across Saudi Arabia. Contact us for assistance in any location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 group" asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" className="shadow-sm hover:shadow-md transition-all duration-300" asChild>
                  <Link href="/locations">
                    View All Locations
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceLocations;
