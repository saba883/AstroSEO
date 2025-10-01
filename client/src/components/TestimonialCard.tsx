import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  location: string;
  content: string;
  image?: string;
  rating?: number;
}

export default function TestimonialCard({ 
  name, 
  role, 
  company, 
  location, 
  content, 
  image,
  rating = 5 
}: TestimonialCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-chart-3 text-chart-3" />
          ))}
        </div>
        
        <p className="text-muted-foreground mb-6" data-testid={`text-testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}>
          "{content}"
        </p>

        <div className="flex items-center gap-3">
          <Avatar>
            {image && <AvatarImage src={image} alt={name} />}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold" data-testid={`text-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>{name}</div>
            <div className="text-sm text-muted-foreground">{role}, {company}</div>
            <div className="text-xs text-muted-foreground">{location}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
