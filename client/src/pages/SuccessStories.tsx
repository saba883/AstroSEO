import React, { useState } from 'react';
import { Link } from 'wouter';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building,
  Globe,
  TrendingUp,
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Quote,
  Star,
  Filter,
  Briefcase,
  Factory,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  Cpu
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SuccessStories: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Briefcase },
    { id: 'technology', name: 'Technology', icon: Cpu },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory },
    { id: 'trading', name: 'Trading', icon: ShoppingBag },
    { id: 'healthcare', name: 'Healthcare', icon: Stethoscope },
    { id: 'education', name: 'Education', icon: GraduationCap }
  ];

  const successStories = [
    {
      id: 1,
      company: 'TechVentures International',
      industry: 'technology',
      country: 'United States',
      service: 'LLC Formation',
      timeline: '18 days',
      year: '2024',
      logo: '/images/clients/techventures.jpg',
      quote: 'RegisterInKSA made our LLC formation seamless. From initial consultation to receiving our CR, the entire process took just 18 days. Their expertise in navigating Saudi regulations is unmatched.',
      executive: 'John Smith',
      position: 'CEO',
      results: [
        '100% foreign ownership secured',
        'MISA license approved in 7 days',
        'Bank account opened in 3 days',
        'Now operating in 3 Saudi cities'
      ],
      challenge: 'Needed to establish a tech subsidiary in Saudi Arabia quickly to serve regional clients.',
      solution: 'RegisterInKSA fast-tracked the process, handled all documentation, and provided strategic advice on optimal business structure.'
    },
    {
      id: 2,
      company: 'Global Manufacturing Ltd',
      industry: 'manufacturing',
      country: 'Germany',
      service: 'Industrial License & Setup',
      timeline: '25 days',
      year: '2024',
      logo: '/images/clients/globalmanufacturing.jpg',
      quote: 'We were concerned about the complexity of setting up our manufacturing LLC. RegisterInKSA not only handled all paperwork but also helped us secure additional licenses and find the perfect location in Jubail Industrial City.',
      executive: 'Hans Mueller',
      position: 'Regional Director',
      results: [
        'Industrial license secured',
        'Environmental permits obtained',
        '50,000 sqft facility leased',
        'Saudization requirements met'
      ],
      challenge: 'Complex industrial licensing requirements and need for specialized permits.',
      solution: 'Comprehensive support including site selection, permit acquisition, and ongoing compliance management.'
    },
    {
      id: 3,
      company: 'MedTech Solutions',
      industry: 'healthcare',
      country: 'United Kingdom',
      service: 'Healthcare Business Setup',
      timeline: '30 days',
      year: '2023',
      logo: '/images/clients/medtech.jpg',
      quote: 'The healthcare sector has strict regulations. RegisterInKSA\'s expertise was invaluable in securing our MOH approvals and establishing our medical device distribution business.',
      executive: 'Dr. Sarah Williams',
      position: 'Managing Director',
      results: [
        'MOH approval obtained',
        'SFDA registration completed',
        'Distribution network established',
        '200% growth in first year'
      ],
      challenge: 'Navigate complex healthcare regulations and obtain necessary medical sector approvals.',
      solution: 'Specialized healthcare business setup service with dedicated MOH liaison support.'
    },
    {
      id: 4,
      company: 'EduTech Arabia',
      industry: 'education',
      country: 'Canada',
      service: 'Education License & Setup',
      timeline: '35 days',
      year: '2023',
      logo: '/images/clients/edutech.jpg',
      quote: 'Setting up an education business requires multiple approvals. RegisterInKSA coordinated with the Ministry of Education and helped us launch our training center successfully.',
      executive: 'Michael Chen',
      position: 'Founder',
      results: [
        'Education license secured',
        'Training center accredited',
        '5 programs approved',
        '500+ students enrolled'
      ],
      challenge: 'Obtain education sector licenses and accreditation for professional training programs.',
      solution: 'End-to-end support for education sector licensing and curriculum approval process.'
    },
    {
      id: 5,
      company: 'Global Trading House',
      industry: 'trading',
      country: 'UAE',
      service: 'Trading License & Setup',
      timeline: '14 days',
      year: '2024',
      logo: '/images/clients/globaltrading.jpg',
      quote: 'As a trading company, speed was crucial. RegisterInKSA delivered our complete setup in just 14 days, including import/export licenses and customs registration.',
      executive: 'Ahmed Al Maktoum',
      position: 'CEO',
      results: [
        'Import/export license obtained',
        'Customs registration completed',
        'Multi-currency accounts opened',
        'Operating in 6 GCC countries'
      ],
      challenge: 'Rapid market entry needed to capitalize on time-sensitive opportunities.',
      solution: 'Express setup service with parallel processing of all requirements.'
    },
    {
      id: 6,
      company: 'Innovation Labs',
      industry: 'technology',
      country: 'India',
      service: 'Tech Startup Setup',
      timeline: '20 days',
      year: '2024',
      logo: '/images/clients/innovationlabs.jpg',
      quote: 'RegisterInKSA understood our startup needs perfectly. They helped us structure our business optimally and even connected us with local partners and investors.',
      executive: 'Raj Patel',
      position: 'Co-Founder',
      results: [
        'R&D incentives secured',
        'Tech park office arranged',
        'Local partnerships formed',
        '$2M funding raised'
      ],
      challenge: 'Establish R&D center with access to government incentives and local ecosystem.',
      solution: 'Startup-focused setup with connections to accelerators and funding sources.'
    }
  ];

  const filteredStories = selectedIndustry === 'all' 
    ? successStories 
    : successStories.filter(story => story.industry === selectedIndustry);

  const stats = [
    { number: '3,200+', label: 'Success Stories' },
    { number: '14', label: 'Countries Represented' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '7-14', label: 'Days Average Setup' }
  ];

  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <Helmet>
          <title>Success Stories | Client Case Studies | RegisterInKSA</title>
          <meta
            name="description"
            content="Read success stories from 3,200+ businesses we've helped establish in Saudi Arabia. Real client testimonials and case studies across various industries."
          />
        </Helmet>
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-chart-2/5">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container-custom relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Success Stories
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Real Success Stories from Real Clients
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Discover how we've helped over 3,200 businesses from 14 countries successfully 
                establish and grow their presence in Saudi Arabia.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 -mt-8 relative z-10">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
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

        {/* Industry Filter */}
        <section className="py-8">
          <div className="container-custom">
            <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <Button
                    key={industry.id}
                    variant={selectedIndustry === industry.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedIndustry(industry.id)}
                    className="flex-shrink-0"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {industry.name}
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Stories Grid */}
        <section className="py-16 lg:py-24">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredStories.map((story) => (
                <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-xl flex items-center justify-center">
                          <Building className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{story.company}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            {story.country}
                            <span className="text-muted-foreground">•</span>
                            {story.year}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary">{story.service}</Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{story.timeline}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Quote */}
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                      <p className="text-muted-foreground italic pl-6">
                        "{story.quote}"
                      </p>
                      <p className="text-sm font-medium mt-2 text-right">
                        — {story.executive}, {story.position}
                      </p>
                    </div>
                    
                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Challenge</h4>
                        <p className="text-sm text-muted-foreground">
                          {story.challenge}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Solution</h4>
                        <p className="text-sm text-muted-foreground">
                          {story.solution}
                        </p>
                      </div>
                    </div>
                    
                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Results</h4>
                      <ul className="space-y-1">
                        {story.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredStories.length === 0 && (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">
                    No success stories found for the selected industry.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Testimonial Highlight */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Client Testimonial
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                What Our Clients Say
              </h2>
              <Card className="bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20">
                <CardContent className="py-12">
                  <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
                  <p className="text-xl italic mb-6 leading-relaxed">
                    "RegisterInKSA has been instrumental in our expansion into Saudi Arabia. 
                    Their deep understanding of local regulations, combined with their professional 
                    approach, made what could have been a complex process surprisingly smooth. 
                    We couldn't have asked for a better partner."
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">Maria Rodriguez</p>
                      <p className="text-sm text-muted-foreground">CEO, Global Ventures Inc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container-custom">
            <Card className="bg-gradient-to-r from-primary/10 to-chart-2/10 border-primary/20">
              <CardContent className="py-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of successful businesses that have established their presence 
                  in Saudi Arabia with RegisterInKSA's expert guidance.
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
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default SuccessStories;
