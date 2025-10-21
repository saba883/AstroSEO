import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';

interface Feature {
  title: string;
  description: string;
  highlights?: string[];
}

interface ServiceFeaturesProps {
  features: Feature[];
  serviceName: string;
}

export default function ServiceFeatures({ features, serviceName }: ServiceFeaturesProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Key Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What's Included in Our <span className="text-primary">{serviceName}</span> Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to ensure your business success in Saudi Arabia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-card via-card/95 to-card/90 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 blur transition duration-500" />
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold flex-1 group-hover:text-primary transition-colors">{feature.title}</h3>
                </div>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                
                {feature.highlights && feature.highlights.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-border/50">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="p-0.5 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full">
                          <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500" />
                        </div>
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="group shadow-lg hover:shadow-xl transition-all duration-300" asChild>
            <Link href="/">
              Explore All Features
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
