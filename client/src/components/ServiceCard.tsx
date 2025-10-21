import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon: Icon, title, description, href = '#' }: ServiceCardProps) {
  return (
    <Card className="group hover-elevate transition-all duration-300 h-full flex flex-col">
      <CardHeader className="flex-1">
        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <CardTitle className="text-xl mb-3">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button variant="ghost" className="gap-2 px-0 text-primary hover:text-primary" data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          Learn More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}
