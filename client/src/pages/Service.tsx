import React, { useMemo } from 'react';
import { useRoute } from 'wouter';
import { Link } from 'wouter';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Users, Shield, Calculator, FileText, Briefcase, Building2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FAQSection, generateServiceFAQs } from '@/components/StructuredData';
import ServiceHero from '@/components/ServiceHero';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceProcess from '@/components/ServiceProcess';
import ServicePricing from '@/components/ServicePricing';
import ServiceContent from '@/components/ServiceContent';
import ServiceLocations from '@/components/ServiceLocations';
import RelatedServicesSection from '@/components/RelatedServicesSection';
import { allServices, staticServices } from '@/data/staticData';

// Service-specific images
const serviceImages: Record<string, string> = {
  'llc-formation': '/images/services/llc-formation-1.jpg',
  'misa-license': '/images/services/misa-license-1.jpg',
  'commercial-registration': '/images/services/commercial-registration-2.jpg',
  'branch-office-setup': '/images/services/branch-office-setup-1.jpg',
  'business-licensing': '/images/services/business-licensing-1.jpg',
  'pro-services': '/images/services/pro-services-1.jpg',
};

// Location-specific images
const locationImages: Record<string, string> = {
  'riyadh': '/images/locations/riyadh-1.jpg',
  'jeddah': '/images/locations/jeddah-1.jpg',
  'dammam': '/images/locations/dammam-1.jpg',
  'al-khobar': '/images/locations/al-khobar-1.jpg',
  'abha': '/images/locations/abha-1.jpg',
};

// Default fallback image
const defaultServiceImage = '/images/general/business-partnership-1.jpg';







const ServicePage: React.FC = () => {
  // Try to match the new nested routes first
  const [matchServices, paramsServices] = useRoute('/services/:baseSlug/:citySlug');
  const [matchServiceBase, paramsServiceBase] = useRoute('/services/:baseSlug');
  const [matchOld, paramsOld] = useRoute('/:slug');

  let baseSlug: string | undefined;
  let citySlug: string | undefined;
  let slug: string | undefined;
  let isHubPage = false;

  if (matchServices && paramsServices) {
    // City-specific service page: /services/business-setup/riyadh
    baseSlug = paramsServices.baseSlug;
    citySlug = paramsServices.citySlug;
    slug = `${baseSlug}-in-${citySlug}`;
  } else if (matchServiceBase && paramsServiceBase) {
    // Service hub page: /services/business-setup
    baseSlug = paramsServiceBase.baseSlug;
    isHubPage = true;
  } else if (matchOld && paramsOld) {
    // Old format support: /business-setup-in-riyadh or /business-setup
    slug = paramsOld.slug;
    isHubPage = slug ? !slug.includes('-in-') : false;
    baseSlug = isHubPage ? slug : slug?.split('-in-')[0];
    citySlug = !isHubPage && slug ? slug.split('-in-')[1] : undefined;
  }

  // Define service features based on service type
  const getServiceFeatures = () => {
    const baseFeatures = [
      {
        title: "Complete Documentation",
        description: "We handle all paperwork and government submissions",
        highlights: ["Legal document preparation", "Government form filing", "Translation services"]
      },
      {
        title: "Expert Consultation",
        description: "Professional guidance throughout the entire process",
        highlights: ["Business structure advice", "Legal compliance support", "Strategic planning"]
      },
      {
        title: "Fast Processing",
        description: "Expedited service with priority handling",
        highlights: ["7-14 days average", "Real-time updates", "Dedicated account manager"]
      }
    ];

    if (baseSlug === 'llc-formation') {
      return [
        ...baseFeatures,
        {
          title: "100% Foreign Ownership",
          description: "Full ownership rights for international investors",
          highlights: ["MISA license included", "No local sponsor required", "Complete control"]
        },
        {
          title: "Bank Account Setup",
          description: "Corporate banking solutions with major Saudi banks",
          highlights: ["Multiple bank options", "Online banking setup", "Multi-currency accounts"]
        },
        {
          title: "Office Solutions",
          description: "Flexible workspace options to suit your needs",
          highlights: ["Virtual office available", "Co-working spaces", "Traditional offices"]
        }
      ];
    }
    
    return baseFeatures;
  };

  // Define process steps
  const getProcessSteps = () => {
    return [
      {
        title: "Initial Consultation",
        description: "Free consultation to understand your business needs and provide tailored solutions",
        duration: "30 mins",
        icon: Users,
        status: 'completed' as const
      },
      {
        title: "Document Preparation",
        description: "Our team prepares all required documents and ensures compliance with Saudi regulations",
        duration: "1-2 days",
        icon: FileText,
        status: 'completed' as const
      },
      {
        title: "Government Submission",
        description: "Submit applications to relevant authorities including MISA, MOCI, and other departments",
        duration: "3-5 days",
        icon: Building2,
        status: 'current' as const
      },
      {
        title: "License Approval",
        description: "Track application progress and handle any queries from government authorities",
        duration: "5-7 days",
        icon: Shield,
        status: 'upcoming' as const
      },
      {
        title: "Final Setup",
        description: "Complete company formation with CR issuance, bank account, and operational setup",
        duration: "2-3 days",
        icon: CheckCircle,
        status: 'upcoming' as const
      }
    ];
  };

  // Define pricing plans
  const getPricingPlans = () => {
    if (baseSlug === 'llc-formation') {
      return [
        {
          name: "Basic Package",
          price: "15,000",
          description: "Essential LLC formation services",
          features: [
            "MISA License Application",
            "Commercial Registration",
            "Articles of Association",
            "Government Fees Included",
            "Basic Consultation"
          ]
        },
        {
          name: "Professional Package",
          price: "25,000",
          description: "Complete business setup solution",
          features: [
            "Everything in Basic",
            "Bank Account Assistance",
            "VAT Registration",
            "1 Year Virtual Office",
            "Dedicated Account Manager",
            "Priority Processing"
          ],
          highlighted: true,
          badge: "Most Popular"
        },
        {
          name: "Enterprise Package",
          price: "45,000",
          description: "Premium setup with ongoing support",
          features: [
            "Everything in Professional",
            "Multiple Branch Setup",
            "PRO Services (1 Year)",
            "Visa Processing (2 Visas)",
            "Quarterly Compliance Review",
            "24/7 Priority Support"
          ]
        }
      ];
    }
    
    // Default pricing for other services
    return [
      {
        name: "Standard Service",
        price: "Contact Us",
        description: "Customized pricing based on requirements",
        features: [
          "Initial Consultation",
          "Document Preparation",
          "Government Submission",
          "Process Management",
          "Final Delivery"
        ]
      }
    ];
  };

  // Get service data from static data
  const service = useMemo(() => {
    const searchSlug = slug || baseSlug;
    return allServices.find(s => s.slug === searchSlug);
  }, [slug, baseSlug]);

  // Get city-specific services for hub pages
  const cityServices = useMemo(() => {
    if (!baseSlug || !isHubPage) return [];
    return allServices.filter(s => s.slug.startsWith(`${baseSlug}-in-`));
  }, [baseSlug, isHubPage]);

  const isLoading = false;
  const error = !service && !isHubPage ? new Error('Service not found') : null;

  // Get same service in other locations
  const sameServiceOtherLocations = useMemo(() => {
    return allServices.filter(s => 
      s.slug.startsWith(`${baseSlug}-in-`) && s.slug !== slug
    ).slice(0, 5);
  }, [baseSlug, slug]);

  // Get related services in same location
  const relatedServicesInLocation = useMemo(() => {
    return allServices.filter(s => {
      if (!citySlug || !s.slug.includes('-in-')) return false;
      const serviceCity = s.slug.split('-in-')[1];
      return serviceCity === citySlug && s.slug !== slug;
    }).slice(0, 5);
  }, [citySlug, slug]);

  const formatContent = (content: string) => {
    // Simple markdown-like formatting for display
    return content
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mt-8 mb-4">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-6">$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/^(.*)$/gm, '<p class="mb-4">$1</p>');
  };


  if (!isHubPage && (error || !service)) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The service you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const city = citySlug?.replace(/-/g, ' ') || (slug?.includes('-in-') ? slug?.split('-in-').pop()?.replace(/-/g, ' ') : 'Saudi Arabia');
  const serviceName = service?.title?.split(' in ')[0] || baseSlug?.replace(/-/g, ' ') || 'Business Services';

  // Select appropriate image based on service and location
  const getServiceImage = () => {
    // First try to get service-specific image
    if (baseSlug && serviceImages[baseSlug]) {
      return serviceImages[baseSlug];
    }
    // Fall back to location image if available
    if (citySlug && locationImages[citySlug]) {
      return locationImages[citySlug];
    }
    // Default fallback
    return defaultServiceImage;
  };

  // Get location-specific image
  const getLocationImage = () => {
    if (citySlug && locationImages[citySlug]) {
      return locationImages[citySlug];
    }
    return defaultServiceImage;
  };

  if (isHubPage && service) {
    // If we have service content for the hub page, display it with professional components
    return (
      <HelmetProvider>
        <div className="min-h-screen">
          <Helmet>
            <title>{service.metaTitle || `${serviceName} in Saudi Arabia | RegisterInKSA`}</title>
            <meta
              name="description"
              content={service.metaDescription || `Expert ${serviceName} services across Saudi Arabia. 100% foreign ownership support. Fast processing with 98% success rate. Get started today!`}
            />
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": `RegisterInKSA - ${serviceName}`,
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "SA"
                },
                "description": `Expert ${serviceName} services across Saudi Arabia. Your trusted partner for business setup.`,
                "url": `https://registerinksa.com/services/${baseSlug}`,
                "telephone": "+966507688714",
                "email": "info@registerinksa.com"
              })}
            </script>
          </Helmet>
          <Header />
          
          {/* Hero Section */}
          <ServiceHero
            title={service.title}
            description={service.metaDescription || `Expert ${serviceName} services across Saudi Arabia. Join 3,200+ successful businesses who trust RegisterInKSA for their business setup.`}
            image={getServiceImage()}
            stats={{
              clients: "3,200+",
              successRate: "98%",
              processingTime: "7-14 days"
            }}
          />

          {/* Main Content */}
          <main>
            {/* Service Content Section */}
            <ServiceContent 
              content={service.content || ''} 
              serviceName={serviceName}
            />

            {/* Features Section */}
            <ServiceFeatures 
              features={getServiceFeatures()} 
              serviceName={serviceName || 'Business Services'}
            />

            {/* Process Timeline */}
            <ServiceProcess 
              steps={getProcessSteps()}
              title={`How We Handle Your ${serviceName}`}
            />

            {/* Pricing Section */}
            <ServicePricing 
              plans={getPricingPlans()}
              serviceName={serviceName || 'Business Services'}
            />

            {/* Location-specific Services Section */}
            <ServiceLocations 
              serviceName={serviceName || 'Business Services'}
              serviceSlug={baseSlug || ''}
            />

            {/* Related Services Section */}
            <RelatedServicesSection 
              currentService={baseSlug || ''}
            />

            {/* FAQ Section */}
            <section className="py-16 lg:py-24">
              <div className="container-custom">
                <FAQSection 
                  faqs={generateServiceFAQs(serviceName || 'Business Services', 'Saudi Arabia')} 
                  title={`Frequently Asked Questions about ${serviceName}`}
                />
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24">
              <div className="container-custom">
                <Card className="bg-gradient-to-r from-primary/5 to-chart-2/5 border-primary/20">
                  <CardContent className="py-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      Ready to Get Started with {service.title}?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Our expert team has helped over 3,200 companies from 14 countries establish their presence in Saudi Arabia. 
                      Get personalized assistance for your specific requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="btn-modern group" asChild>
                        <Link href="/">
                          Get Free Consultation
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" className="btn-modern-outline" asChild>
                        <Link href="/#cost-calculator">
                          <Calculator className="w-4 h-4 mr-2" />
                          Calculate Setup Cost
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </HelmetProvider>
    );
  } else if (isHubPage) {
    // Original hub page without service content
    return (
      <HelmetProvider>
        <div className="min-h-screen">
          <Helmet>
            <title>{`${serviceName} in Saudi Arabia | RegisterInKSA`}</title>
            <meta
              name="description"
              content={`Expert ${serviceName} services across Saudi Arabia. 100% foreign ownership support. Fast processing with 98% success rate. Get started today!`}
            />
          </Helmet>
          <Header />
          <main className="max-w-4xl mx-auto px-4 py-16">
            <div className="mb-8">
              <Button variant="outline" asChild>
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {serviceName} Services in Saudi Arabia
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              We offer {serviceName} services in the following cities:
            </p>
            
            {/* Hero Image for Hub Page */}
            <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={baseSlug && serviceImages[baseSlug] ? serviceImages[baseSlug] : defaultServiceImage} 
                alt={`${serviceName} services in Saudi Arabia`}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cityServices?.map((cityService) => {
                const citySlugFromService = cityService.slug.split('-in-')[1];
                return (
                  <Link key={cityService.id} href={`/services/${baseSlug}/${citySlugFromService}`} className="block p-4 border rounded-lg hover:bg-muted transition-colors">
                    {cityService.title}
                  </Link>
                );
              })}
            </div>
          </main>
          <Footer />
        </div>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <Helmet>
          <title>{`${serviceName} in ${city} | 100% Foreign Ownership | RegisterInKSA`}</title>
          <meta
            name="description"
            content={`Expert ${serviceName} in ${city}. 3200+ clients served. Fast LLC registration, MISA license, CR processing. Free consultation. Call +966 50 768 8714`}
          />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": `RegisterInKSA - ${city}`,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": city,
                "addressCountry": "SA"
              },
              "description": `Expert ${serviceName} in ${city}. Your trusted partner for business setup in Saudi Arabia.`,
              "url": `https://registerinksa.com/services/${baseSlug}/${citySlug}`,
              "telephone": "+966507688714",
              "email": "info@registerinksa.com"
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://registerinksa.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": serviceName,
                  "item": `https://registerinksa.com/services/${baseSlug}`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": service?.title,
                  "item": `https://registerinksa.com/services/${baseSlug}/${citySlug}`
                }
              ]
            })}
          </script>
        </Helmet>
        <Header />
        
        {/* Hero Section */}
        <ServiceHero
          title={service?.title || `${serviceName} in ${city}`}
          description={service?.metaDescription || `Expert ${serviceName} services in ${city}. Join 3,200+ successful businesses who trust RegisterInKSA for their Saudi Arabia business setup.`}
          image={getServiceImage()}
          stats={{
            clients: "3,200+",
            successRate: "98%",
            processingTime: "7-14 days"
          }}
        />

        {/* Main Content */}
        <main>
          {/* Service Content Section */}
          <section className="py-16 lg:py-24">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ 
                    __html: formatContent(service?.content || '') 
                  }}
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <ServiceFeatures 
            features={getServiceFeatures()} 
            serviceName={serviceName || 'Business Services'}
          />

          {/* Process Timeline */}
          <ServiceProcess 
            steps={getProcessSteps()}
            title={`How We Handle Your ${serviceName} in ${city}`}
          />

          {/* Pricing Section */}
          <ServicePricing 
            plans={getPricingPlans()}
            serviceName={serviceName || 'Business Services'}
          />

          {/* Location-specific Services Section */}
          <ServiceLocations 
            serviceName={serviceName || 'Business Services'}
            serviceSlug={baseSlug || ''}
          />

          {/* Related Services Section */}
          <RelatedServicesSection 
            currentService={baseSlug || ''}
          />

          {/* FAQ Section */}
          <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
            <div className="container-custom">
              <FAQSection 
                faqs={generateServiceFAQs(serviceName || 'Business Services', city || 'Saudi Arabia')} 
                title={`Frequently Asked Questions about ${serviceName} in ${city}`}
              />
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 lg:py-24">
            <div className="container-custom">
              <Card className="bg-gradient-to-r from-primary/5 to-chart-2/5 border-primary/20">
                <CardContent className="py-12 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to Get Started with {service?.title}?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Our expert team has helped over 3,200 companies from 14 countries establish their presence in Saudi Arabia. 
                    Get personalized assistance for your specific requirements.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="btn-modern group" asChild>
                      <Link href="/">
                        Get Free Consultation
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="btn-modern-outline" asChild>
                      <Link href="/#cost-calculator">
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculate Setup Cost
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      <Footer />
    </div>
    </HelmetProvider>
  );
};

export default ServicePage;
