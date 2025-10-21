import React from 'react';
import { Link } from 'wouter';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Linkedin,
  Mail,
  Globe,
  Award,
  Briefcase,
  GraduationCap,
  Languages,
  ArrowRight,
  Star,
  Building
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Ahmed Al-Rashid',
      role: 'CEO & Founder',
      image: '/images/team/ceo.jpg',
      bio: 'With over 20 years of experience in Saudi business consulting, Ahmed founded RegisterInKSA to simplify business setup for international investors.',
      expertise: ['Business Strategy', 'Government Relations', 'Investment Advisory'],
      languages: ['Arabic', 'English'],
      linkedin: '#'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      image: '/images/team/operations.jpg',
      bio: 'Sarah brings 15+ years of international business experience, specializing in process optimization and client success.',
      expertise: ['Operations Management', 'Process Optimization', 'Client Relations'],
      languages: ['English', 'Arabic', 'French'],
      linkedin: '#'
    },
    {
      name: 'Mohammed Al-Zahrani',
      role: 'Legal Director',
      image: '/images/team/legal.jpg',
      bio: 'Licensed Saudi lawyer with expertise in corporate law, ensuring full compliance with Saudi regulations.',
      expertise: ['Corporate Law', 'Regulatory Compliance', 'Contract Negotiation'],
      languages: ['Arabic', 'English'],
      linkedin: '#'
    },
    {
      name: 'Fatima Al-Harbi',
      role: 'Head of Government Relations',
      image: '/images/team/government.jpg',
      bio: 'Expert in navigating Saudi government procedures with strong relationships across key ministries.',
      expertise: ['Government Relations', 'Licensing', 'Regulatory Affairs'],
      languages: ['Arabic', 'English'],
      linkedin: '#'
    },
    {
      name: 'David Chen',
      role: 'Head of Business Development',
      image: '/images/team/business-dev.jpg',
      bio: 'Specializes in helping international companies expand into the Saudi market with tailored strategies.',
      expertise: ['Market Entry', 'Business Strategy', 'Partnership Development'],
      languages: ['English', 'Mandarin', 'Arabic'],
      linkedin: '#'
    },
    {
      name: 'Aisha Patel',
      role: 'Client Success Manager',
      image: '/images/team/client-success.jpg',
      bio: 'Dedicated to ensuring smooth business setup experiences with personalized support for every client.',
      expertise: ['Client Management', 'Project Coordination', 'Customer Service'],
      languages: ['English', 'Hindi', 'Arabic', 'Urdu'],
      linkedin: '#'
    }
  ];

  const departments = [
    {
      name: 'Legal & Compliance',
      members: 12,
      icon: Briefcase,
      description: 'Expert lawyers and compliance specialists ensuring regulatory adherence'
    },
    {
      name: 'Government Relations',
      members: 8,
      icon: Building,
      description: 'Dedicated team managing relationships with Saudi government entities'
    },
    {
      name: 'Client Services',
      members: 15,
      icon: Users,
      description: 'Multilingual support team providing 24/7 assistance to clients'
    },
    {
      name: 'Business Advisory',
      members: 10,
      icon: Award,
      description: 'Strategic advisors helping businesses succeed in the Saudi market'
    }
  ];

  const teamStats = [
    { number: '50+', label: 'Team Members' },
    { number: '8', label: 'Languages Spoken' },
    { number: '15+', label: 'Years Avg. Experience' },
    { number: '20+', label: 'Industry Experts' }
  ];

  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <Helmet>
          <title>Our Team | Expert Business Setup Consultants | RegisterInKSA</title>
          <meta
            name="description"
            content="Meet the RegisterInKSA team - 50+ multilingual experts dedicated to helping you establish your business in Saudi Arabia. 15+ years average experience."
          />
        </Helmet>
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-chart-2/5">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container-custom relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Our Team
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Meet the Experts Behind Your Success
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Our diverse team of professionals combines local expertise with international experience 
                to deliver exceptional business setup services in Saudi Arabia.
              </p>
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-16 -mt-8 relative z-10">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamStats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="py-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 lg:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Leadership
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experienced professionals leading RegisterInKSA's mission to simplify business setup in Saudi Arabia
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center">
                    <Users className="w-24 h-24 text-primary/20" />
                  </div>
                  <CardContent className="py-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                        <p className="text-primary font-medium">{member.role}</p>
                      </div>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {member.bio}
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Expertise</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Languages className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Languages</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {member.languages.join(', ')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Our Departments
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Specialized Teams for Every Need
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept, index) => {
                const Icon = dept.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="py-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{dept.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {dept.description}
                      </p>
                      <Badge variant="outline">
                        {dept.members} Specialists
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Culture & Values */}
        <section className="py-16 lg:py-24">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  Our Culture
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What Makes Our Team Special
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Global Perspective</h3>
                  <p className="text-muted-foreground">
                    Our team represents diverse backgrounds and cultures, bringing global best practices to Saudi Arabia
                  </p>
                </div>
                
                <div>
                  <div className="w-20 h-20 bg-gradient-to-br from-chart-2/10 to-chart-2/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Star className="w-10 h-10 text-chart-2" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Excellence Driven</h3>
                  <p className="text-muted-foreground">
                    We're committed to delivering exceptional service and exceeding client expectations every time
                  </p>
                </div>
                
                <div>
                  <div className="w-20 h-20 bg-gradient-to-br from-chart-3/10 to-chart-3/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-chart-3" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Client First</h3>
                  <p className="text-muted-foreground">
                    Every team member is dedicated to ensuring our clients' success in the Saudi market
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-chart-2/5">
          <div className="container-custom">
            <Card className="bg-gradient-to-r from-primary/10 to-chart-2/10 border-primary/20">
              <CardContent className="py-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Join Our Growing Team
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We're always looking for talented professionals who share our passion for 
                  helping businesses succeed in Saudi Arabia
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="btn-modern group" asChild>
                    <a href="mailto:careers@registerinksa.com">
                      <Mail className="w-4 h-4 mr-2" />
                      View Open Positions
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="btn-modern-outline" asChild>
                    <Link href="/contact">
                      Contact HR Team
                      <ArrowRight className="w-4 h-4 ml-2" />
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

export default Team;
