import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

interface LocationCardProps {
  city: string;
  description: string;
  image: string;
  stats: {
    businesses: string;
    industries: string;
  };
}

export default function LocationCard({ city, description, image, stats }: LocationCardProps) {
  return (
    <Card className="group hover-elevate transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={`${city} business district`} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-2 mb-1">
            <MapPin className="w-4 h-4" />
            <span className="font-semibold">{city}</span>
          </div>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle>{city} Office</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div>
            <div className="font-mono text-2xl font-bold text-primary">{stats.businesses}</div>
            <div className="text-xs text-muted-foreground">Businesses Served</div>
          </div>
          <div>
            <div className="font-mono text-2xl font-bold text-primary">{stats.industries}</div>
            <div className="text-xs text-muted-foreground">Industries</div>
          </div>
        </div>
        
        <Button variant="ghost" className="w-full gap-2" asChild data-testid={`button-view-${city.toLowerCase()}`}>
          <Link href={`/locations#${city.toLowerCase()}`}>
            View {city} Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
