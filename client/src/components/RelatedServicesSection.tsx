import React from 'react';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight,
  FileText,
  Building,
  Briefcase,
  Shield,
  Globe,
  Users
} from 'lucide-react';

interface RelatedService {
  name: string;
  slug: string;
  description: string;
  icon: React.ElementType;
  highlight?: string;
}

interface RelatedServicesSectionProps {
  currentService: string;
}

const RelatedServicesSection: React.FC<RelatedServicesSectionProps> = ({ currentService }) => {
  const allServices: RelatedService[] = [
    {
      name: 'LLC Formation',
      slug: 'llc-formation',
      description: 'Complete LLC setup with 100% foreign ownership options',
      icon: Building,
      highlight: 'Most Popular'
    },
    {
      name: 'MISA License',
      slug: 'misa-license',
      description: 'Investment license for foreign companies in Saudi Arabia',
      icon: FileText,
      highlight: 'Required First'
    },
    {
      name: 'Commercial Registration',
      slug: 'commercial-registration',
      description: 'Official business registration with Ministry of Commerce',
      icon: Briefcase
    },
    {
      name: 'Business Licensing',
      slug: 'business-licensing',
      description: 'Industry-specific licenses and permits',
      icon: Shield
    },
    {
      name: 'Branch Office Setup',
      slug: 'branch-office-setup',
      description: 'Establish a branch of your foreign company',
      icon: Globe
    },
    {
      name: 'PRO Services',
      slug: 'pro-services',
      description: 'Ongoing government relations and compliance support',
      icon: Users
    }
  ];

  // Filter out the current service
  const relatedServices = allServices.filter(service => service.slug !== currentService);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-chart-2/5">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Complete Solutions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Related Business Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of business setup services to ensure complete compliance 
            and smooth operations in Saudi Arabia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedServices.slice(0, 6).map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.slug}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="default" className="bg-gradient-to-r from-primary to-chart-2">
                      {service.highlight}
                    </Badge>
                  </div>
                )}
                
                <CardContent className="py-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group/btn hover:bg-primary/5"
                    asChild
                  >
                    <Link href={`/services/${service.slug}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bundle Offer */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-primary/10 to-chart-2/10 border-primary/20">
            <CardContent className="py-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4">Special Offer</Badge>
                  <h3 className="text-2xl font-bold mb-3">
                    Complete Business Setup Package
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Save time and money with our all-inclusive business setup package. 
                    Get all required licenses and registrations in one streamlined process.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span>MISA License + LLC Formation</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span>Commercial Registration included</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span>Bank account opening assistance</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span>1 year PRO services included</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center md:text-right">
                  <div className="inline-block">
                    <div className="text-sm text-muted-foreground line-through mb-1">
                      Regular Price: SAR 75,000
                    </div>
                    <div className="text-3xl font-bold text-primary mb-4">
                      SAR 59,999
                    </div>
                    <Badge variant="destructive" className="mb-6">
                      Save SAR 15,001
                    </Badge>
                    <div className="space-y-3">
                      <Button className="w-full btn-modern group" asChild>
                        <Link href="/contact">
                          Get Package Quote
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        * Prices exclude government fees
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RelatedServicesSection;
