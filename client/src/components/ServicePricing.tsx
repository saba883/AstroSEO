import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, Zap, Info } from 'lucide-react';
import { Link } from 'wouter';

interface PricingPlan {
  name: string;
  price: string;
  currency?: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

interface ServicePricingProps {
  plans: PricingPlan[];
  serviceName: string;
}

export default function ServicePricing({ plans, serviceName }: ServicePricingProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium">
            <Zap className="w-4 h-4 mr-2" />
            Transparent Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investment Options for <span className="text-primary">{serviceName}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the package that best fits your business needs. All prices include government fees and our professional service charges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 border-0 ${
                plan.highlighted 
                  ? 'shadow-2xl scale-105 bg-gradient-to-br from-primary/10 via-card to-card' 
                  : 'shadow-lg hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-card via-card/98 to-card/95'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-2 shadow-lg text-sm font-semibold">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br ${
                plan.highlighted 
                  ? 'from-primary/20 via-primary/10 to-transparent' 
                  : 'from-primary/10 via-primary/5 to-transparent opacity-50'
              }`} />
              
              <CardHeader className="text-center pb-8 pt-8 relative z-10">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <div className="text-center py-6 bg-gradient-to-r from-background/50 to-background/30 rounded-xl backdrop-blur-sm">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-muted-foreground font-medium">{plan.currency || 'SAR'}</span>
                    <span className="text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-muted-foreground font-medium">/{plan.period}</span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="p-0.5 bg-gradient-to-br from-green-500/30 to-green-600/30 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full shadow-md hover:shadow-lg transition-all duration-300 ${
                    plan.highlighted 
                      ? 'bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80' 
                      : ''
                  }`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                  size="lg"
                  asChild
                >
                  <Link href="/">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Info */}
        <Card className="border-0 bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent shadow-lg backdrop-blur-sm">
          <CardContent className="py-6">
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg shadow-sm">
                <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100">Important Pricing Information</h3>
                <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400">•</span>
                    <span>All prices include VAT and government fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400">•</span>
                    <span>Additional services like visa processing may incur extra charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400">•</span>
                    <span>Custom packages available for enterprise clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400">•</span>
                    <span>100% money-back guarantee if application is rejected</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Need a custom solution or have questions about pricing?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="shadow-sm hover:shadow-md transition-all duration-300" asChild>
              <Link href="/#cost-calculator">
                Use Cost Calculator
              </Link>
            </Button>
            <Button size="lg" className="shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary to-primary/90" asChild>
              <a href="https://wa.me/966507688714" target="_blank" rel="noopener noreferrer">
                Get Custom Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
