import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ArrowRight, Clock, FileText, Users, Shield } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ProcessStep {
  title: string;
  description: string;
  duration: string;
  icon: LucideIcon;
  status?: 'completed' | 'current' | 'upcoming';
}

interface ServiceProcessProps {
  steps: ProcessStep[];
  title?: string;
}

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Users,
  Shield,
  Clock,
  CheckCircle2,
};

export default function ServiceProcess({ steps, title = "How We Handle Your LLC Formation" }: ServiceProcessProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium">
            <Clock className="w-4 h-4 mr-2" />
            Simple & Efficient
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've simplified the complex process of business setup in Saudi Arabia into clear, manageable steps
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30" />
          
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon || CheckCircle2;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className="group border-0 bg-gradient-to-br from-card via-card/98 to-card/95 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 blur transition duration-500" />
                      
                      <CardHeader className="pb-4 relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 shadow-sm">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                Step {index + 1}: {step.title}
                              </h3>
                              <Badge variant="outline" className="text-xs font-medium bg-gradient-to-r from-background/80 to-background/60">
                                {step.duration}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 relative z-10">
                        <p className="text-muted-foreground pl-[68px]">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-background rounded-full items-center justify-center shadow-xl z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      step.status === 'completed' ? 'bg-gradient-to-br from-green-500 to-green-600 shadow-green-500/30' :
                      step.status === 'current' ? 'bg-gradient-to-br from-primary to-primary/80 animate-pulse shadow-primary/30' :
                      'bg-gradient-to-br from-primary/30 to-primary/20'
                    } shadow-lg`}>
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="lg:hidden mt-12">
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30" />
            {steps.map((step, index) => {
              const Icon = step.icon || CheckCircle2;
              
              return (
                <div key={index} className="relative pb-8 last:pb-0">
                  <div className="absolute left-0 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <Card className="ml-6 border-0 bg-gradient-to-br from-card via-card/98 to-card/95 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg shadow-sm">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">Step {index + 1}: {step.title}</h3>
                            <Badge variant="outline" className="text-xs bg-gradient-to-r from-background/80 to-background/60">
                              {step.duration}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="border-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent shadow-xl backdrop-blur-sm">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Ready to Start Your Journey?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our expert team will guide you through each step, ensuring a smooth and successful business setup
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="p-1.5 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg shadow-sm">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-lg">Average completion time: 7-14 days</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
