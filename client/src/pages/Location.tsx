import React from 'react';
import { useParams, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Building2, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Briefcase,
  Globe
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CTASection from '@/components/CTASection';

const locationData = {
  riyadh: {
    city: 'Riyadh',
    title: 'Business Setup in Riyadh',
    description: 'The capital city and business hub of Saudi Arabia',
    heroImage: '/images/locations/riyadh-1.jpg',
    stats: {
      businesses: '850+',
      growth: '+32%',
      avgSetupTime: '2-3 weeks',
      successRate: '99%'
    },
    overview: `Riyadh, the capital of Saudi Arabia, is the country's political and administrative center. As the largest city in the Kingdom, it offers unparalleled opportunities for businesses looking to establish a strong presence in the Middle East. With its modern infrastructure, growing economy, and strategic location, Riyadh is the ideal base for companies targeting the Saudi market.`,
    advantages: [
      {
        title: 'Government Proximity',
        description: 'Direct access to all major government ministries and regulatory bodies'
      },
      {
        title: 'Business Hub',
        description: 'Home to major Saudi corporations and international companies'
      },
      {
        title: 'Infrastructure',
        description: 'World-class infrastructure including King Khalid International Airport'
      },
      {
        title: 'Talent Pool',
        description: 'Access to highly educated workforce and top universities'
      }
    ],
    services: [
      'LLC Formation',
      'MISA License',
      'Commercial Registration',
      'Branch Office Setup',
      'Business Licensing',
      'PRO Services'
    ],
    sectors: [
      'Technology & IT',
      'Financial Services',
      'Healthcare',
      'Construction',
      'Retail & E-commerce',
      'Education'
    ]
  },
  jeddah: {
    city: 'Jeddah',
    title: 'Business Setup in Jeddah',
    description: 'The commercial capital and gateway to international trade',
    heroImage: '/images/locations/jeddah-1.jpg',
    stats: {
      businesses: '620+',
      growth: '+28%',
      avgSetupTime: '2-4 weeks',
      successRate: '98%'
    },
    overview: `Jeddah, known as the "Gateway to Mecca," is Saudi Arabia's commercial capital and the Kingdom's second-largest city. Located on the Red Sea coast, it serves as the primary port of entry for millions of pilgrims and a major commercial hub. Jeddah's strategic location, diverse economy, and cosmopolitan atmosphere make it an attractive destination for international businesses.`,
    advantages: [
      {
        title: 'Port Access',
        description: 'Home to the Islamic Port, the largest seaport on the Red Sea'
      },
      {
        title: 'Tourism Hub',
        description: 'Gateway for religious tourism and growing leisure tourism sector'
      },
      {
        title: 'International Community',
        description: 'Large expatriate community and international business presence'
      },
      {
        title: 'Trade Center',
        description: 'Strategic location for import/export and logistics businesses'
      }
    ],
    services: [
      'LLC Formation',
      'MISA License',
      'Commercial Registration',
      'Branch Office Setup',
      'Business Licensing',
      'PRO Services'
    ],
    sectors: [
      'Import/Export',
      'Tourism & Hospitality',
      'Logistics',
      'Real Estate',
      'Retail',
      'Manufacturing'
    ]
  },
  dammam: {
    city: 'Dammam',
    title: 'Business Setup in Dammam',
    description: 'The industrial powerhouse of the Eastern Province',
    heroImage: '/images/locations/dammam-1.jpg',
    stats: {
      businesses: '480+',
      growth: '+25%',
      avgSetupTime: '3-4 weeks',
      successRate: '97%'
    },
    overview: `Dammam, the capital of the Eastern Province, is the heart of Saudi Arabia's oil industry. As part of the Dammam Metropolitan Area (including Dhahran and Al Khobar), it forms a major administrative and industrial center. The city's proximity to oil fields and industrial facilities makes it ideal for businesses in the energy, petrochemical, and industrial sectors.`,
    advantages: [
      {
        title: 'Oil & Gas Hub',
        description: 'Center of Saudi Arabia\'s petroleum industry and Saudi Aramco operations'
      },
      {
        title: 'Industrial Zones',
        description: 'Multiple industrial cities and free zones with special incentives'
      },
      {
        title: 'Port Facilities',
        description: 'King Abdul Aziz Port provides excellent maritime connectivity'
      },
      {
        title: 'Business Ecosystem',
        description: 'Strong ecosystem for industrial and energy-related businesses'
      }
    ],
    services: [
      'LLC Formation',
      'MISA License',
      'Commercial Registration',
      'Branch Office Setup',
      'Industrial Licensing',
      'PRO Services'
    ],
    sectors: [
      'Oil & Gas',
      'Petrochemicals',
      'Manufacturing',
      'Logistics',
      'Construction',
      'Engineering Services'
    ]
  },
  'al-khobar': {
    city: 'Al Khobar',
    title: 'Business Setup in Al Khobar',
    description: 'Modern business district with international appeal',
    heroImage: '/images/locations/al-khobar-1.jpg',
    stats: {
      businesses: '350+',
      growth: '+22%',
      avgSetupTime: '2-3 weeks',
      successRate: '98%'
    },
    overview: `Al Khobar is a modern, rapidly growing city in the Eastern Province, known for its business-friendly environment and high quality of life. Connected to Bahrain via the King Fahd Causeway, it serves as a gateway between Saudi Arabia and the Gulf states. The city's modern infrastructure and international community make it attractive for foreign businesses.`,
    advantages: [
      {
        title: 'Strategic Location',
        description: 'Gateway to Bahrain and other GCC markets via King Fahd Causeway'
      },
      {
        title: 'Modern Infrastructure',
        description: 'State-of-the-art business districts and residential communities'
      },
      {
        title: 'Expat-Friendly',
        description: 'Large international community and Western-style amenities'
      },
      {
        title: 'Business Services',
        description: 'Concentration of professional services and consultancy firms'
      }
    ],
    services: [
      'LLC Formation',
      'MISA License',
      'Commercial Registration',
      'Branch Office Setup',
      'Business Licensing',
      'PRO Services'
    ],
    sectors: [
      'Professional Services',
      'IT & Technology',
      'Finance & Banking',
      'Real Estate',
      'Retail',
      'Healthcare'
    ]
  },
  mecca: {
    city: 'Mecca',
    title: 'Business Setup in Mecca',
    description: 'The holy city with unique business opportunities',
    heroImage: '/images/locations/mecca.jpg',
    stats: {
      businesses: '280+',
      growth: '+20%',
      avgSetupTime: '3-5 weeks',
      successRate: '96%'
    },
    overview: `Mecca, the holiest city in Islam, presents unique business opportunities centered around religious tourism and pilgrimage services. With millions of visitors annually for Hajj and Umrah, the city has a thriving economy focused on hospitality, retail, and services catering to pilgrims from around the world.`,
    advantages: [
      {
        title: 'Religious Tourism',
        description: 'Millions of annual visitors for Hajj and Umrah pilgrimages'
      },
      {
        title: 'Year-Round Demand',
        description: 'Consistent business throughout the year with peak seasons'
      },
      {
        title: 'Government Support',
        description: 'Special programs and incentives for businesses serving pilgrims'
      },
      {
        title: 'Growth Potential',
        description: 'Expanding infrastructure and Vision 2030 development projects'
      }
    ],
    services: [
      'LLC Formation',
      'MISA License',
      'Commercial Registration',
      'Tourism Licenses',
      'Hospitality Permits',
      'PRO Services'
    ],
    sectors: [
      'Hospitality & Hotels',
      'Transportation',
      'Retail',
      'Food & Beverage',
      'Travel Services',
      'Healthcare'
    ]
  },
  medina: {
    city: 'Medina',
    title: 'Business Setup in Medina',
    description: 'The city of the Prophet with growing business potential',
    heroImage: '/images/locations/medina.jpg',
    stats: {
      businesses: '240+',
      growth: '+18%',
      avgSetupTime: '3-4 weeks',
      successRate: '95%'
    },
    overview: `Medina, the second holiest city in Islam, combines religious significance with modern development. Home to the Prophet's Mosque, it attracts millions of visitors annually. The city is experiencing rapid growth with new infrastructure projects and economic diversification initiatives, creating opportunities beyond religious tourism.`,
    advantages: [
      {
        title: 'Religious Significance',
        description: 'Second holiest site in Islam attracting millions of visitors'
      },
      {
        title: 'Economic Growth',
        description: 'Rapid development and infrastructure improvements'
      },
      {
        title: 'Knowledge Economy',
        description: 'Growing education sector with Islamic University and research centers'
      },
      {
        title: 'Quality of Life',
        description: 'Peaceful environment with modern amenities and services'
      }
    ],
    services: [
      'LLC Formation',
      'MISA License',
      'Commercial Registration',
      'Tourism Licenses',
      'Education Permits',
      'PRO Services'
    ],
    sectors: [
      'Hospitality',
      'Education',
      'Healthcare',
      'Retail',
      'Real Estate',
      'Agriculture'
    ]
  }
};

const Location: React.FC = () => {
  const params = useParams();
  const locationKey = params.location as keyof typeof locationData;
  const location = locationData[locationKey];

  if (!location) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Header />
        <main className="container-custom py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Location Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The location you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link href="/locations">
                View All Locations
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={location.heroImage}
              alt={`${location.city} skyline`}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-orange-900/80" />
          </div>
          
          <div className="container-custom relative z-10 py-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">{location.city}, Saudi Arabia</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {location.title}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {location.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-6 text-base font-medium rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Start Your Business
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50 px-8 py-6 text-base font-medium rounded-2xl transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +966 50 768 8714
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 dark:bg-gray-900/50 py-12 border-b border-gray-200 dark:border-gray-800">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {location.stats.businesses}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Businesses Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {location.stats.growth}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Annual Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  {location.stats.avgSetupTime}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {location.stats.successRate}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="container-custom py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose {location.city} for Your Business?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                {location.overview}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {location.advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {advantage.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <img
                src={location.heroImage}
                alt={`Business in ${location.city}`}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white dark:bg-gray-900 py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Services in {location.city}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Comprehensive business setup solutions tailored for {location.city}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.services.map((service, index) => (
                <Link
                  key={index}
                  href={`/services/${service.toLowerCase().replace(/ /g, '-')}`}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {service}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Professional {service.toLowerCase()} services in {location.city}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Key Sectors */}
        <section className="container-custom py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Key Business Sectors in {location.city}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Industries with high growth potential and opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {location.sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Globe className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {sector}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 dark:bg-gray-900/50 py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Ready to Start Your Business in {location.city}?
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    Get in touch with our local experts for personalized assistance
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white">Call Us</p>
                    <p className="text-gray-600 dark:text-gray-400">+966 50 768 8714</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email Us</p>
                    <p className="text-gray-600 dark:text-gray-400">info@registerinksa.com</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white">Response Time</p>
                    <p className="text-gray-600 dark:text-gray-400">Within 24 hours</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-base font-medium rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Location;
