import React, { useState } from 'react';
import { Link } from 'wouter';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  Search,
  HelpCircle,
  FileText,
  Building,
  DollarSign,
  Clock,
  Shield,
  Globe,
  Users,
  ArrowRight,
  MessageSquare,
  Phone
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: HelpCircle,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      questions: [
        {
          question: 'What is RegisterInKSA?',
          answer: 'RegisterInKSA is Saudi Arabia\'s leading business setup consultancy firm. We specialize in helping international entrepreneurs and investors establish their businesses in the Kingdom, providing comprehensive services including LLC formation, licensing, and ongoing support.'
        },
        {
          question: 'Why should I choose RegisterInKSA?',
          answer: 'With over 15 years of experience, 3,200+ successful company formations, and a 98% success rate, we offer unmatched expertise in Saudi business setup. Our multilingual team provides personalized support, fast processing (7-14 days average), and complete transparency throughout the process.'
        },
        {
          question: 'What types of businesses can you help establish?',
          answer: 'We assist with all types of business structures including LLCs, branch offices, representative offices, and joint ventures across various sectors including technology, manufacturing, trading, consulting, and services.'
        },
        {
          question: 'Do you provide services outside of Riyadh?',
          answer: 'Yes, we provide services across all major Saudi cities including Riyadh, Jeddah, Dammam, Al Khobar, Mecca, and Medina. We can handle your business setup remotely regardless of your location.'
        }
      ]
    },
    {
      id: 'llc',
      title: 'LLC Formation',
      icon: Building,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      questions: [
        {
          question: 'Can foreigners own 100% of an LLC in Saudi Arabia?',
          answer: 'Yes, in most business sectors, foreigners can now own 100% of an LLC in Saudi Arabia without requiring a local Saudi partner. This is part of Saudi Vision 2030 initiatives to attract foreign investment.'
        },
        {
          question: 'What is the minimum capital requirement for an LLC?',
          answer: 'The minimum capital requirement for an LLC in Saudi Arabia is SAR 500,000 (approximately USD 133,000). This capital must be fully paid before final registration and can be in cash or in-kind contributions.'
        },
        {
          question: 'How many shareholders are required for LLC formation?',
          answer: 'A minimum of 2 shareholders is required for LLC formation in Saudi Arabia. The second shareholder can hold a minimal stake (even 1%). Maximum allowed is 50 shareholders.'
        },
        {
          question: 'How long does LLC formation take?',
          answer: 'The typical timeline for LLC formation is 2-4 weeks, depending on the completeness of documentation and specific business activities. Our average processing time is 7-14 days with all documents ready.'
        },
        {
          question: 'What documents are required for LLC formation?',
          answer: 'Key documents include passport copies, proof of address, bank statements, business plan, parent company documents (if applicable), and powers of attorney. We provide a complete checklist during consultation.'
        }
      ]
    },
    {
      id: 'licensing',
      title: 'Licensing & Permits',
      icon: FileText,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      questions: [
        {
          question: 'What is a MISA license?',
          answer: 'MISA (Ministry of Investment of Saudi Arabia) license is the primary investment license required for foreign investors to establish a business in Saudi Arabia. It\'s the first step in the company formation process.'
        },
        {
          question: 'What is Commercial Registration (CR)?',
          answer: 'Commercial Registration (CR) is a mandatory registration with the Ministry of Commerce that officially registers your business and allows you to conduct commercial activities in Saudi Arabia.'
        },
        {
          question: 'Do I need industry-specific licenses?',
          answer: 'Yes, certain industries require additional licenses. For example, healthcare requires MOH approval, education needs Ministry of Education license, and industrial activities may need environmental permits.'
        },
        {
          question: 'How often do licenses need to be renewed?',
          answer: 'Most licenses require annual renewal. The Commercial Registration is typically renewed annually, while some specific licenses may have different renewal periods. We provide renewal reminder services.'
        }
      ]
    },
    {
      id: 'costs',
      title: 'Costs & Fees',
      icon: DollarSign,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      questions: [
        {
          question: 'What are the total costs for setting up an LLC?',
          answer: 'Total costs typically range from SAR 545,000 to 610,000, including the minimum capital (SAR 500,000), government fees (SAR 15,000-25,000), and professional service fees (SAR 20,000-35,000).'
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No, we believe in complete transparency. All costs are clearly outlined upfront in our quotation, including government fees, professional charges, and any third-party costs.'
        },
        {
          question: 'Can I pay in installments?',
          answer: 'Yes, we offer flexible payment terms. While government fees and capital must be paid as required by authorities, our professional fees can be structured in installments.'
        },
        {
          question: 'What if my application is rejected?',
          answer: 'We have a 98% success rate. In the rare case of rejection, we offer a money-back guarantee on our professional service fees (government fees are non-refundable).'
        }
      ]
    },
    {
      id: 'operations',
      title: 'Operations & Compliance',
      icon: Shield,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      questions: [
        {
          question: 'Do I need a physical office in Saudi Arabia?',
          answer: 'Yes, a physical office address is required, but virtual offices are accepted for initial registration. We can arrange virtual office services or help you find suitable physical premises.'
        },
        {
          question: 'What are the ongoing compliance requirements?',
          answer: 'Annual requirements include financial statement submission, tax returns filing (corporate and VAT), commercial registration renewal, and maintaining minimum capital requirements.'
        },
        {
          question: 'Can I change my business activities after formation?',
          answer: 'Yes, business activities can be modified, but this requires approval from MISA and updating your Commercial Registration. We can handle this process for you.'
        },
        {
          question: 'Do I need to hire Saudi nationals?',
          answer: 'Yes, Saudization (Nitaqat) requirements mandate hiring a certain percentage of Saudi nationals based on your company size and industry. We help you understand and meet these requirements.'
        }
      ]
    },
    {
      id: 'banking',
      title: 'Banking & Finance',
      icon: Globe,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
      questions: [
        {
          question: 'Can I open a corporate bank account remotely?',
          answer: 'While initial application can be done remotely, most banks require physical presence of at least one authorized signatory for final account activation.'
        },
        {
          question: 'Which banks do you work with?',
          answer: 'We have relationships with all major Saudi banks including NCB (SNB), Samba, SABB, Riyad Bank, and others. We help you choose the best bank for your business needs.'
        },
        {
          question: 'Can I have multi-currency accounts?',
          answer: 'Yes, most Saudi banks offer multi-currency corporate accounts allowing you to hold and transact in major international currencies.'
        },
        {
          question: 'How long does bank account opening take?',
          answer: 'Corporate bank account opening typically takes 1-2 weeks after company formation is complete and all required documents are submitted.'
        }
      ]
    }
  ];

  // Filter FAQs based on search query
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const totalQuestions = faqCategories.reduce((acc, cat) => acc + cat.questions.length, 0);

  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <Helmet>
          <title>FAQ - Frequently Asked Questions | RegisterInKSA</title>
          <meta
            name="description"
            content="Find answers to common questions about business setup in Saudi Arabia. Learn about LLC formation, licensing, costs, and requirements."
          />
        </Helmet>
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-chart-2/5">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container-custom relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                FAQ
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Find answers to common questions about business setup in Saudi Arabia. 
                Can't find what you're looking for? Contact our experts for personalized assistance.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg"
                />
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                {totalQuestions} questions across {faqCategories.length} categories
              </p>
            </div>
          </div>
        </section>

        {/* Category Cards */}
        <section className="py-16 -mt-8 relative z-10">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {faqCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <Card 
                    key={category.id} 
                    className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
                    onClick={() => {
                      const element = document.getElementById(category.id);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <CardContent className="py-6 text-center">
                      <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                        <Icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h3 className="font-semibold text-sm">{category.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {category.questions.length} questions
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 lg:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {searchQuery && filteredCategories.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No results found</h3>
                    <p className="text-muted-foreground mb-6">
                      We couldn't find any questions matching "{searchQuery}"
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setSearchQuery('')}
                    >
                      Clear search
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-12">
                  {(searchQuery ? filteredCategories : faqCategories).map((category) => {
                    const Icon = category.icon;
                    return (
                      <div key={category.id} id={category.id}>
                        <div className="flex items-center gap-3 mb-6">
                          <div className={`w-10 h-10 ${category.bgColor} rounded-xl flex items-center justify-center`}>
                            <Icon className={`w-5 h-5 ${category.color}`} />
                          </div>
                          <h2 className="text-2xl font-bold">{category.title}</h2>
                        </div>
                        
                        <Accordion type="single" collapsible className="space-y-4">
                          {category.questions.map((faq, index) => (
                            <AccordionItem 
                              key={index} 
                              value={`${category.id}-${index}`}
                              className="border rounded-lg px-6 data-[state=open]:bg-muted/50"
                            >
                              <AccordionTrigger className="text-left hover:no-underline py-4">
                                <span className="font-medium pr-4">{faq.question}</span>
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground pb-4">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Need More Help?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our expert team is ready to provide personalized answers and guide you through 
                your business setup journey in Saudi Arabia.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <Card>
                  <CardContent className="py-6 text-center">
                    <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Speak directly with our experts
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="tel:+966507688714">+966 50 768 8714</a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="py-6 text-center">
                    <MessageSquare className="w-10 h-10 text-green-500 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Chat with us instantly
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://wa.me/966507688714" target="_blank" rel="noopener noreferrer">
                        Start Chat
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="py-6 text-center">
                    <Users className="w-10 h-10 text-purple-500 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Consultation</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Get personalized advice
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container-custom">
            <Card className="bg-gradient-to-r from-primary/10 to-chart-2/10 border-primary/20">
              <CardContent className="py-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Start Your Business in Saudi Arabia?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join over 3,200 successful businesses. Get expert guidance and support 
                  throughout your business setup journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="btn-modern group" asChild>
                    <Link href="/contact">
                      Get Started Today
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

export default FAQ;
