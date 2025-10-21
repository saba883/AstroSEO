import React from 'react';
import { Link } from 'wouter';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield,
  Lock,
  Eye,
  FileText,
  Users,
  Globe,
  Mail,
  Phone,
  ArrowRight,
  Info,
  Cookie,
  Database,
  UserCheck,
  AlertCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy: React.FC = () => {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: [
        {
          subtitle: 'Personal Information',
          items: [
            'Full name and contact details',
            'Email address and phone number',
            'Company name and business details',
            'Passport or ID information (for business setup)',
            'Business registration documents'
          ]
        },
        {
          subtitle: 'Business Information',
          items: [
            'Company structure and ownership details',
            'Business activities and objectives',
            'Financial information required for licensing',
            'Authorized signatory information'
          ]
        },
        {
          subtitle: 'Technical Information',
          items: [
            'IP address and browser type',
            'Device information and operating system',
            'Website usage data and analytics',
            'Cookies and similar technologies'
          ]
        }
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: UserCheck,
      content: [
        {
          subtitle: 'Service Delivery',
          items: [
            'Process your business setup applications',
            'Communicate with government authorities on your behalf',
            'Provide ongoing support and consultation',
            'Manage your account and services'
          ]
        },
        {
          subtitle: 'Communication',
          items: [
            'Send service updates and notifications',
            'Respond to your inquiries and requests',
            'Provide important regulatory updates',
            'Share relevant business opportunities (with consent)'
          ]
        },
        {
          subtitle: 'Legal Compliance',
          items: [
            'Comply with Saudi Arabian laws and regulations',
            'Fulfill government reporting requirements',
            'Prevent fraud and ensure security',
            'Maintain accurate business records'
          ]
        }
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: Users,
      content: [
        {
          subtitle: 'Government Authorities',
          items: [
            'Ministry of Investment (MISA)',
            'Ministry of Commerce',
            'Saudi Central Bank (SAMA)',
            'Other relevant government entities as required'
          ]
        },
        {
          subtitle: 'Service Partners',
          items: [
            'Banking partners for account setup',
            'Legal advisors (with your consent)',
            'Translation services (confidentially bound)',
            'IT service providers (under strict agreements)'
          ]
        },
        {
          subtitle: 'We Never',
          items: [
            'Sell your personal information',
            'Share data for marketing without consent',
            'Disclose information unnecessarily',
            'Transfer data outside legal requirements'
          ]
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: [
        {
          subtitle: 'Security Measures',
          items: [
            'SSL encryption for all data transmission',
            'Secure servers with regular security audits',
            'Access controls and authentication',
            'Regular security training for staff'
          ]
        },
        {
          subtitle: 'Data Retention',
          items: [
            'Keep data only as long as legally required',
            'Secure deletion of unnecessary information',
            'Regular review of data retention policies',
            'Compliance with Saudi data protection laws'
          ]
        }
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: Shield,
      content: [
        {
          subtitle: 'You Have the Right To',
          items: [
            'Access your personal information',
            'Request corrections to your data',
            'Withdraw consent for marketing communications',
            'Request data deletion (subject to legal requirements)',
            'Receive your data in a portable format',
            'Lodge a complaint with authorities'
          ]
        }
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies Policy',
      icon: Cookie,
      content: [
        {
          subtitle: 'We Use Cookies For',
          items: [
            'Essential website functionality',
            'Analytics to improve our services',
            'Remembering your preferences',
            'Security and fraud prevention'
          ]
        },
        {
          subtitle: 'Cookie Management',
          items: [
            'You can control cookies through browser settings',
            'Disabling cookies may affect website functionality',
            'We respect Do Not Track signals',
            'Third-party cookies are clearly identified'
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
          <title>Privacy Policy | RegisterInKSA</title>
          <meta
            name="description"
            content="RegisterInKSA Privacy Policy. Learn how we collect, use, and protect your personal and business information in compliance with Saudi regulations."
          />
        </Helmet>
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-chart-2/5">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container-custom relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Privacy Policy
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Your Privacy Matters to Us
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                We are committed to protecting your personal and business information. 
                This policy explains how we collect, use, and safeguard your data.
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

        {/* Privacy Sections */}
        <section className="py-16 lg:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <Card className="mb-8">
                <CardContent className="py-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-3">Our Commitment</h2>
                      <p className="text-muted-foreground">
                        RegisterInKSA ("we", "our", or "us") is committed to protecting your privacy. 
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                        information when you use our services or visit our website. We comply with all 
                        applicable Saudi Arabian data protection laws and international best practices.
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

              {/* Additional Information */}
              <div className="mt-12 space-y-8">
                <Card>
                  <CardContent className="py-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">International Transfers</h3>
                        <p className="text-muted-foreground">
                          Your information may be transferred to and maintained on servers located outside 
                          of your country. By using our services, you consent to the transfer of information 
                          to countries outside of your country of residence, which may have different data 
                          protection rules.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="py-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Changes to This Policy</h3>
                        <p className="text-muted-foreground">
                          We may update this Privacy Policy from time to time. We will notify you of any 
                          changes by posting the new Privacy Policy on this page and updating the "Last Updated" 
                          date. You are advised to review this Privacy Policy periodically for any changes.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <Card className="mt-12 bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20">
                <CardContent className="py-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">Contact Us About Privacy</h2>
                  <p className="text-muted-foreground text-center mb-8">
                    If you have any questions about this Privacy Policy or our data practices, 
                    please contact our Data Protection Officer:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">privacy@registerinksa.com</p>
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
                        Contact Privacy Team
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
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

export default Privacy;
