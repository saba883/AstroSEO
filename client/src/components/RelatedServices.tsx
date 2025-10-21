import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
}

interface RelatedServicesProps {
  serviceIds: string[];
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ serviceIds }) => {
  const { data: services = [] } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await fetch('/api/services');
      if (!response.ok) throw new Error('Failed to fetch services');
      return response.json() as Promise<Service[]>;
    },
  });

  // Filter services to only show the related ones
  const relatedServices = services.filter(service => serviceIds.includes(service.id));

  if (relatedServices.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          Related Services
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Get expert assistance with these services mentioned in this article
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {relatedServices.map((service) => (
            <div key={service.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  {service.metaDescription && (
                    <p className="text-sm text-muted-foreground mb-3">
                      {service.metaDescription}
                    </p>
                  )}
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/services/${service.slug}`}>
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t">
          <Button asChild className="w-full">
            <Link href="/">
              Get Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatedServices;
