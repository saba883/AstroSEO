import React, { useState } from 'react';
import { Link } from 'wouter';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  ArrowRight,
  Building,
  Globe,
  Headphones,
  Calendar,
  Users,
  Zap,
  Briefcase
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our experts',
      value: '+966 50 768 8714',
      action: 'tel:+966507688714',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get a response within 24 hours',
      value: 'info@registerinksa.com',
      action: 'mailto:info@registerinksa.com',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      description: 'Chat with us instantly',
      value: '+966 50 768 8714',
      action: 'https://wa.me/966507688714',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Meet us at our office',
      value: 'Riyadh, Saudi Arabia',
      action: '#',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  const services = [
    'LLC Formation',
    'MISA License',
    'Commercial Registration',
    'Branch Office Setup',
    'Business Licensing',
    'PRO Services',
    'Other'
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Response',
      description: 'Get expert consultation within 24 hours'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Personal account manager for your journey'
    },
    {
      icon: Globe,
      title: 'Multilingual Team',
      description: 'Support in 8+ languages'
    },
    {
      icon: Headphones,
      title: '24/7 Availability',
      description: 'Round-the-clock assistance'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <Helmet>
          <title>Contact RegisterInKSA | Get Free Business Setup Consultation</title>
          <meta
            name="description"
            content="Contact RegisterInKSA for expert business setup consultation in Saudi Arabia. Call +966 50 768 8714 or email info@registerinksa.com. 24/7 support available."
          />
        </Helmet>
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-chart-2/5">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container-custom relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Get in Touch
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Let's Start Your Business Journey Together
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Our expert team is ready to help you establish and grow your business in Saudi Arabia. 
                Get personalized consultation and support every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 lg:py-24 -mt-16 relative z-10">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardContent className="py-6">
                      <div className={`w-14 h-14 ${method.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                        <Icon className={`w-7 h-7 ${method.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                      {method.action === '#' ? (
                        <p className="font-medium">{method.value}</p>
                      ) : method.action.startsWith('http') ? (
                        <a 
                          href={method.action} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <a 
                          href={method.action}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {method.value}
                        </a>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Contact Form */}
                <div className="lg:col-span-3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                      <p className="text-muted-foreground">
                        Fill out the form below and we'll get back to you within 24 hours
                      </p>
                    </CardHeader>
                    <CardContent>
                      {isSubmitted ? (
                        <div className="py-12 text-center">
                          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-green-500" />
                          </div>
                          <h3 className="text-2xl font-semibold mb-3">Thank You!</h3>
                          <p className="text-muted-foreground">
                            We've received your message and will get back to you soon.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="John Doe"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email Address *</Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="john@example.com"
                              />
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number *</Label>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                placeholder="+966 50 000 0000"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="company">Company Name</Label>
                              <Input
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                placeholder="Your Company"
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="service">Service Interested In *</Label>
                            <select
                              id="service"
                              name="service"
                              value={formData.service}
                              onChange={handleInputChange}
                              required
                              className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                              <option value="">Select a service</option>
                              {services.map((service) => (
                                <option key={service} value={service}>
                                  {service}
                                </option>
                              ))}
                            </select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="message">Message *</Label>
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                              rows={5}
                              placeholder="Tell us about your business needs..."
                            />
                          </div>
                          
                          <Button 
                            type="submit" 
                            size="lg" 
                            className="w-full btn-modern group"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              'Sending...'
                            ) : (
                              <>
                                Send Message
                                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </>
                            )}
                          </Button>
                        </form>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Info */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Office Hours */}
                  <Card>
                    <CardContent className="py-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                            <p>Friday - Saturday: Closed</p>
                            <p className="text-primary font-medium mt-2">24/7 Online Support Available</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Office Location */}
                  <Card>
                    <CardContent className="py-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-chart-2/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Building className="w-6 h-6 text-chart-2" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Head Office</h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p>King Fahd Road, Olaya District</p>
                            <p>Riyadh 12211, Saudi Arabia</p>
                            <a 
                              href="https://maps.google.com" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-block text-primary hover:underline mt-2 text-sm"
                            >
                              Get Directions →
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Links */}
                  <Card>
                    <CardContent className="py-6">
                      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link href="/services">
                            <Briefcase className="w-4 h-4 mr-2" />
                            Browse Services
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link href="/faq">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            View FAQ
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <a href="https://wa.me/966507688714" target="_blank" rel="noopener noreferrer">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            WhatsApp Chat
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-24">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  Why Contact Us
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Expert Support at Every Step
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Card key={index} className="text-center">
                      <CardContent className="py-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
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
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Schedule a free consultation with our experts and discover how we can help you 
                  establish your business in Saudi Arabia
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="btn-modern group" asChild>
                    <a href="tel:+966507688714">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="btn-modern-outline" asChild>
                    <a href="https://wa.me/966507688714" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      WhatsApp Chat
                    </a>
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

export default Contact;
