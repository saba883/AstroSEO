import React from 'react';
import { Link } from 'wouter';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText,
  Scale,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  DollarSign,
  Clock,
  Globe,
  Mail,
  Phone,
  ArrowRight,
  Info,
  Gavel,
  HandshakeIcon,
  Ban
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms: React.FC = () => {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: HandshakeIcon,
      content: [
        {
          subtitle: 'Agreement to Terms',
          items: [
            'By accessing or using RegisterInKSA services, you agree to these Terms',
            'These Terms constitute a legally binding agreement',
            'If you disagree with any part, you may not use our services',
            'We may update these Terms at any time with notice'
          ]
        },
        {
          subtitle: 'Eligibility',
          items: [
            'You must be at least 18 years old to use our services',
            'You must have legal authority to enter into contracts',
            'You must provide accurate and complete information',
            'You must comply with all applicable laws and regulations'
          ]
        }
      ]
    },
    {
      id: 'services',
      title: 'Our Services',
      icon: Gavel,
      content: [
        {
          subtitle: 'Service Scope',
          items: [
            'Business formation and registration services in Saudi Arabia',
            'Licensing and permit acquisition assistance',
            'Ongoing compliance and PRO services',
            'Business consultation and advisory services'
          ]
        },
        {
          subtitle: 'Service Limitations',
          items: [
            'We are not a law firm and do not provide legal advice',
            'We act as facilitators and consultants',
            'Final approval of applications rests with government authorities',
            'We cannot guarantee specific timeframes or outcomes'
          ]
        }
      ]
    },
    {
      id: 'obligations',
      title: 'Your Obligations',
      icon: CheckCircle,
      content: [
        {
          subtitle: 'Client Responsibilities',
          items: [
            'Provide accurate, complete, and timely information',
            'Respond promptly to requests for documentation',
            'Pay all fees and charges as agreed',
            'Comply with Saudi laws and regulations',
            'Maintain confidentiality of account credentials',
            'Notify us of any changes to your information'
          ]
        },
        {
          subtitle: 'Prohibited Activities',
          items: [
            'Providing false or misleading information',
            'Using services for illegal or fraudulent purposes',
            'Attempting to circumvent government regulations',
            'Sharing confidential information without authorization',
            'Interfering with our systems or services',
            'Violating intellectual property rights'
          ]
        }
      ]
    },
    {
      id: 'fees',
      title: 'Fees and Payment',
      icon: DollarSign,
      content: [
        {
          subtitle: 'Fee Structure',
          items: [
            'Service fees are quoted in Saudi Riyals (SAR)',
            'Quotes include government fees and professional charges',
            'Additional services may incur extra charges',
            'Fees are subject to change with notice'
          ]
        },
        {
          subtitle: 'Payment Terms',
          items: [
            'Payment is due upon acceptance of service agreement',
            'Government fees must be paid in advance',
            'Late payments may incur additional charges',
            'Refunds are subject to our refund policy'
          ]
        },
        {
          subtitle: 'Refund Policy',
          items: [
            'Professional fees refundable if application rejected (minus processing costs)',
            'Government fees are generally non-refundable',
            'Refund requests must be made within 30 days',
            'Partial refunds for partially completed services'
          ]
        }
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: Shield,
      content: [
        {
          subtitle: 'Our Property',
          items: [
            'All content, trademarks, and materials belong to RegisterInKSA',
            'You may not use our intellectual property without permission',
            'Our services and methods are proprietary',
            'Client testimonials may be used for marketing (anonymized)'
          ]
        },
        {
          subtitle: 'Your Property',
          items: [
            'You retain ownership of your business information',
            'We have limited license to use your data for service delivery',
            'Your confidential information remains protected',
            'We will not use your data for unauthorized purposes'
          ]
        }
      ]
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: [
        {
          subtitle: 'Service Warranties',
          items: [
            'Services provided "as is" without warranties',
            'We do not guarantee government approval',
            'Timeframes are estimates, not guarantees',
            'We are not liable for government delays or rejections'
          ]
        },
        {
          subtitle: 'Liability Limits',
          items: [
            'Our liability limited to fees paid for specific service',
            'No liability for indirect or consequential damages',
            'No liability for lost profits or opportunities',
            'Force majeure events exempt us from liability'
          ]
        }
      ]
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: Ban,
      content: [
        {
          subtitle: 'Termination Rights',
          items: [
            'Either party may terminate with written notice',
            'We may terminate for breach of terms immediately',
            'Termination does not affect completed services',
            'Obligations regarding confidentiality survive termination'
          ]
        },
        {
          subtitle: 'Effect of Termination',
          items: [
            'No refund for completed services',
            'Pending applications may be affected',
            'You remain liable for outstanding fees',
            'We will return your documents upon request'
          ]
        }
      ]
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: Scale,
      content: [
        {
          subtitle: 'Applicable Law',
          items: [
            'These Terms governed by laws of Saudi Arabia',
            'Disputes subject to Saudi Arabian jurisdiction',
            'We comply with international business standards',
            'English version of Terms prevails in conflicts'
          ]
        },
        {
          subtitle: 'Dispute Resolution',
          items: [
            'Good faith negotiations for initial resolution',
            'Mediation as second step if needed',
            'Arbitration in Riyadh for unresolved disputes',
            'Each party bears own legal costs'
          ]
        }
      ]
    }
  ];

  const lastUpdated = 'October 1, 2024';

  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <Helmet>
          <title>Terms of Service | RegisterInKSA</title>
          <meta
            name="description"
            content="RegisterInKSA Terms of Service. Read our terms and conditions for using our business setup services in Saudi Arabia."
          />
        </Helmet>
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-chart-2/5">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container-custom relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Terms of Service
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Terms of Service Agreement
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Please read these terms carefully before using RegisterInKSA services. 
                These terms govern your use of our business setup and consultation services.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <Info className="w-4 h-4" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 border-b sticky top-0 bg-background z-10">
          <div className="container-custom">
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              <span className="text-sm font-medium text-muted-foreground flex-shrink-0">
                Jump to:
              </span>
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  size="sm"
                  className="flex-shrink-0"
                  onClick={() => {
                    const element = document.getElementById(section.id);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {section.title}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-16 lg:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <Card className="mb-8">
                <CardContent className="py-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Introduction</h2>
                      <p className="text-muted-foreground">
                        These Terms of Service ("Terms") govern your use of RegisterInKSA's services, 
                        website, and any related services (collectively, the "Services"). RegisterInKSA 
                        ("we", "our", or "us") provides business setup and consultation services in the 
                        Kingdom of Saudi Arabia. By using our Services, you agree to be bound by these Terms.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Main Sections */}
              <div className="space-y-12">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <div key={section.id} id={section.id}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-xl flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{section.title}</h2>
                      </div>
                      
                      <div className="space-y-6">
                        {section.content.map((subsection, idx) => (
                          <Card key={idx}>
                            <CardContent className="py-6">
                              <h3 className="font-semibold mb-4">{subsection.subtitle}</h3>
                              <ul className="space-y-2">
                                {subsection.items.map((item, itemIdx) => (
                                  <li key={itemIdx} className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-muted-foreground">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional Terms */}
              <div className="mt-12 space-y-8">
                <Card>
                  <CardContent className="py-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">International Clients</h3>
                        <p className="text-muted-foreground">
                          For clients outside Saudi Arabia, additional terms may apply. You are responsible 
                          for compliance with your local laws regarding international business activities. 
                          We provide services only within the scope of Saudi Arabian regulations.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="py-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Service Timelines</h3>
                        <p className="text-muted-foreground">
                          All timelines provided are estimates based on typical processing times. Actual 
                          timelines may vary due to government processing, document requirements, or other 
                          factors beyond our control. We will keep you informed of any significant delays.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="py-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Confidentiality</h3>
                        <p className="text-muted-foreground">
                          We maintain strict confidentiality of all client information. Your business 
                          details, strategies, and personal information are protected by professional 
                          confidentiality obligations and will not be disclosed except as required by law 
                          or with your explicit consent.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <Card className="mt-12 bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20">
                <CardContent className="py-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">Questions About Our Terms?</h2>
                  <p className="text-muted-foreground text-center mb-8">
                    If you have any questions about these Terms of Service or need clarification 
                    on any points, please don't hesitate to contact us:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">legal@registerinksa.com</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-chart-2/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Phone className="w-6 h-6 text-chart-2" />
                      </div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+966 50 768 8714</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-chart-3/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <FileText className="w-6 h-6 text-chart-3" />
                      </div>
                      <p className="text-sm font-medium">Mail</p>
                      <p className="text-sm text-muted-foreground">Riyadh, Saudi Arabia</p>
                    </div>
                  </div>
                  
                  <div className="text-center mt-8">
                    <Button className="btn-modern group" asChild>
                      <Link href="/contact">
                        Contact Legal Team
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Agreement Notice */}
              <Card className="mt-8 border-primary/20">
                <CardContent className="py-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">By Using Our Services</h3>
                      <p className="text-muted-foreground">
                        By using RegisterInKSA's services, you acknowledge that you have read, understood, 
                        and agree to be bound by these Terms of Service and our Privacy Policy. If you are 
                        using our services on behalf of an organization, you represent that you have the 
                        authority to bind that organization to these Terms.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Terms;
