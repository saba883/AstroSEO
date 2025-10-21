import React from 'react';
import { Link } from 'wouter';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Shield, 
  Clock,
  CheckCircle,
  ArrowRight,
  Building,
  Briefcase,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
  Rocket,
  HandshakeIcon,
  MapPin,
  Calendar,
  BarChart3
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs: React.FC = () => {
  const stats = [
    { number: '3,200+', label: 'Companies Formed', icon: Building },
    { number: '14', label: 'Countries Served', icon: Globe },
    { number: '98%', label: 'Success Rate', icon: TrendingUp },
    { number: '15+', label: 'Years Experience', icon: Award },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We build lasting relationships based on transparency, honesty, and ethical business practices.',
    },
    {
      icon: Target,
      title: 'Client-Focused',
      description: 'Your success is our priority. We tailor our services to meet your unique business needs.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously improve our processes and adopt the latest technologies to serve you better.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our multilingual professionals bring deep knowledge of Saudi regulations and business culture.',
    },
  ];

  const milestones = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Started with a vision to simplify business setup in Saudi Arabia',
      icon: Rocket,
    },
    {
      year: '2015',
      title: 'Regional Expansion',
      description: 'Expanded services to cover all major Saudi cities',
      icon: MapPin,
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched online platform for seamless service delivery',
      icon: Globe,
    },
    {
      year: '2024',
      title: '3,200+ Clients',
      description: 'Reached milestone of serving over 3,200 successful businesses',
      icon: BarChart3,
    },
  ];

  const teamHighlights = [
    { number: '50+', label: 'Team Members' },
    { number: '8', label: 'Languages Spoken' },
    { number: '20+', label: 'Industry Experts' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <Helmet>
          <title>About RegisterInKSA | Your Trusted Business Setup Partner</title>
          <meta
            name="description"
            content="Learn about RegisterInKSA - Saudi Arabia's leading business setup consultancy. 15+ years experience, 3200+ successful formations, 98% success rate."
          />
        </Helmet>
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-chart-2/5">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container-custom relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                About RegisterInKSA
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Your Trusted Partner for Business Success in Saudi Arabia
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                For over 15 years, we've been helping international entrepreneurs and investors 
                establish and grow their businesses in the Kingdom of Saudi Arabia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-modern group" asChild>
                  <Link href="/contact">
                    Start Your Journey
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="btn-modern-outline" asChild>
                  <Link href="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="py-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  Our Purpose
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Mission & Vision
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="py-8">
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                      <Target className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To simplify and accelerate business setup in Saudi Arabia by providing 
                      comprehensive, transparent, and efficient services that enable entrepreneurs 
                      and investors to focus on growing their businesses while we handle the complexities 
                      of regulatory compliance.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-chart-2/5 to-chart-2/10 border-chart-2/20">
                  <CardContent className="py-8">
                    <div className="w-14 h-14 bg-chart-2/20 rounded-xl flex items-center justify-center mb-6">
                      <Rocket className="w-7 h-7 text-chart-2" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the most trusted and innovative business setup partner in Saudi Arabia, 
                      recognized for our excellence in service delivery, deep local expertise, and 
                      unwavering commitment to our clients' success in the Kingdom's dynamic economy.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  What Drives Us
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Core Values
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  These principles guide everything we do and shape how we serve our clients
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                      <CardContent className="py-6 text-center">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-16 lg:py-24">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  Our Journey
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Milestones & Achievements
                </h2>
              </div>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  {milestones.map((milestone, index) => {
                    const Icon = milestone.icon;
                    return (
                      <div key={index} className={`relative flex items-center ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}>
                        {/* Content */}
                        <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                          <Card className="ml-20 md:ml-0">
                            <CardContent className="py-6">
                              <Badge variant="outline" className="mb-3">
                                {milestone.year}
                              </Badge>
                              <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                              <p className="text-muted-foreground text-sm">
                                {milestone.description}
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                        
                        {/* Icon */}
                        <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-background border-4 border-primary rounded-full flex items-center justify-center md:-translate-x-1/2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        
                        {/* Spacer */}
                        <div className="flex-1 hidden md:block"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Highlights */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  Our Team
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Powered by Expertise
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our diverse team of professionals brings together local knowledge and international experience
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {teamHighlights.map((highlight, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="py-6">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {highlight.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {highlight.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center">
                <Button size="lg" variant="outline" className="btn-modern-outline" asChild>
                  <Link href="/team">
                    Meet Our Team
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  Why RegisterInKSA
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  The RegisterInKSA Advantage
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Fast Processing</h3>
                  <p className="text-muted-foreground">
                    Average setup time of 7-14 days with our streamlined processes and government relationships
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-chart-2/10 to-chart-2/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-chart-2" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">100% Compliant</h3>
                  <p className="text-muted-foreground">
                    All our services are fully compliant with Saudi regulations and government requirements
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-chart-3/10 to-chart-3/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-chart-3" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
                  <p className="text-muted-foreground">
                    Personal account manager and 24/7 support throughout your business journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-chart-2/5">
          <div className="container-custom">
            <Card className="bg-gradient-to-r from-primary/10 to-chart-2/10 border-primary/20">
              <CardContent className="py-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Start Your Business Journey?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join over 3,200 successful businesses that trust RegisterInKSA for their setup and growth in Saudi Arabia
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="btn-modern group" asChild>
                    <Link href="/contact">
                      Get Free Consultation
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="btn-modern-outline" asChild>
                    <Link href="/success-stories">
                      View Success Stories
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default AboutUs;
