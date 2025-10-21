import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Clock, Shield } from 'lucide-react';
import { Link } from 'wouter';

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
  stats?: {
    clients?: string;
    successRate?: string;
    processingTime?: string;
  };
}

export default function ServiceHero({ title, description, image, stats }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      {/* Decorative Blobs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full filter blur-3xl" />
      
      <div className="relative container-custom py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1">
                  Professional Service
                </Badge>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">4.9/5 (320+ reviews)</span>
                </div>
              </div>
              
              <h1 className="heading-1 text-gradient">
                {title}
              </h1>
              
              <p className="body-large text-muted-foreground max-w-xl">
                {description}
              </p>
            </div>
            
            {/* Stats */}
            {stats && (
              <div className="grid grid-cols-3 gap-6">
                {stats.clients && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <Users className="w-5 h-5" />
                      <span className="text-2xl font-bold">{stats.clients}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                )}
                {stats.successRate && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <Shield className="w-5 h-5" />
                      <span className="text-2xl font-bold">{stats.successRate}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                )}
                {stats.processingTime && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <Clock className="w-5 h-5" />
                      <span className="text-2xl font-bold">{stats.processingTime}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Processing Time</p>
                  </div>
                )}
              </div>
            )}
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-modern group">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="btn-modern-outline" asChild>
                <Link href="/#cost-calculator">
                  Calculate Cost
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={image} 
                alt={title}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-semibold">100% Compliant</p>
                  <p className="text-sm text-muted-foreground">Government Approved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
