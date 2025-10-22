import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface StructuredDataProps {
  type: 'FAQPage' | 'Organization' | 'LocalBusiness' | 'Service' | 'BreadcrumbList';
  data: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const generateSchema = () => {
    switch (type) {
      case 'FAQPage':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.faqs.map((faq: FAQItem) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };
      
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Registerinksa Business Consultants",
          "url": "https://registerinksa.com",
          "logo": "https://analytix.sa/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+966-12-345-6789",
            "contactType": "customer service",
            "areaServed": "SA",
            "availableLanguage": ["English", "Arabic"]
          },
          "sameAs": [
            "https://www.linkedin.com/company/analytix-sa",
            "https://twitter.com/analytix_sa"
          ]
        };
      
      case 'LocalBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": `Registerinksa - ${data.city || 'Saudi Arabia'}`,
          "image": "https://registerinksa.com/office.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": data.streetAddress || "King Fahd Road",
            "addressLocality": data.city || "Riyadh",
            "addressRegion": data.region || "Riyadh Province",
            "postalCode": data.postalCode || "11564",
            "addressCountry": "SA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": data.latitude || 24.7136,
            "longitude": data.longitude || 46.6753
          },
          "url": data.url || "https://analytix.sa",
          "telephone": "+966-12-345-6789",
          "priceRange": "$$",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
              "opens": "09:00",
              "closes": "18:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "2200"
          }
        };
      
      case 'Service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": data.serviceType,
          "provider": {
            "@type": "Organization",
            "name": "Registerinksa Business Consultants"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Saudi Arabia"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `${data.serviceType} Services`,
            "itemListElement": data.offers?.map((offer: any) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": offer.name,
                "description": offer.description
              }
            }))
          }
        };
      
      case 'BreadcrumbList':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.breadcrumbs.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };
      
      default:
        return null;
    }
  };

  const schema = generateSchema();
  
  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

// Helper component for FAQ sections
interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  className?: string;
}

export function FAQSection({ faqs, title = "Frequently Asked Questions", className = "" }: FAQSectionProps) {
  return (
    <>
      <StructuredData type="FAQPage" data={{ faqs }} />
      <div className={`space-y-6 ${className}`}>
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Helper function to generate service-specific FAQs
export function generateServiceFAQs(service: string, city: string): FAQItem[] {
  return [
    {
      question: `What is the cost of ${service} in ${city}?`,
      answer: `The cost of ${service} in ${city} typically ranges from 15,000 to 35,000 SAR, depending on your specific requirements, business activities, and the complexity of your setup. This includes government fees, professional services, and documentation costs.`
    },
    {
      question: `How long does ${service} take in ${city}?`,
      answer: `The ${service} process in ${city} usually takes 2-4 weeks from start to finish. This timeline includes document preparation, government submissions, approvals, and final setup. The exact duration depends on document readiness and government processing times.`
    },
    {
      question: `Can foreigners own 100% of a company through ${service} in ${city}?`,
      answer: `Yes, Saudi Arabia now allows 100% foreign ownership in most sectors. Recent reforms under Vision 2030 have opened numerous industries to full foreign ownership, making it easier for international investors to establish businesses in ${city}.`
    },
    {
      question: `What documents are required for ${service} in ${city}?`,
      answer: `Required documents include valid passports, proof of address, bank reference letters, company documents (for branches), proposed company name, business plan summary, and office lease agreement. All documents must be translated to Arabic and properly attested.`
    },
    {
      question: `Do I need to be physically present in ${city} for ${service}?`,
      answer: `No, you don't need to be physically present throughout the process. With a Power of Attorney, we can handle most procedures on your behalf. You may need to visit once for bank account opening and final signatures, or we can arrange remote solutions where possible.`
    }
  ];
}
