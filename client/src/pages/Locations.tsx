import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { MapPin, Building2, Users, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const locations = [
  {
    city: 'Riyadh',
    description: 'The heart of Saudi business and government operations',
    image: '/images/locations/riyadh-1.jpg',
    stats: { businesses: '850+', growth: '+32%' },
    features: ['Capital Business Hub', 'Government Headquarters', 'Tech Innovation Center'],
    color: 'blue',
  },
  {
    city: 'Jeddah',
    description: 'International business gateway and commercial center',
    image: '/images/locations/jeddah-1.jpg',
    stats: { businesses: '620+', growth: '+28%' },
    features: ['Gateway to Trade', 'Port City Advantages', 'Tourism Hub'],
    color: 'purple',
  },
  {
    city: 'Dammam',
    description: 'Eastern Province industrial and energy sector hub',
    image: '/images/locations/dammam-1.jpg',
    stats: { businesses: '480+', growth: '+25%' },
    features: ['Industrial Powerhouse', 'Oil & Gas Center', 'Logistics Hub'],
    color: 'orange',
  },
  {
    city: 'Al Khobar',
    description: 'Modern business district with international presence',
    image: '/images/locations/al-khobar-1.jpg',
    stats: { businesses: '350+', growth: '+22%' },
    features: ['Business Excellence', 'Expat Community', 'Modern Infrastructure'],
    color: 'pink',
  },
];

const Locations: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-orange-950/20 opacity-50" />
          </div>
          
          <div className="container-custom relative z-10 py-20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Our Locations</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Strategic Presence Across{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                  Saudi Arabia
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Local expertise in Saudi Arabia's key business centers. Our teams provide 
                on-ground support for seamless business setup in every major city.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="bg-white dark:bg-gray-900 py-12 border-b border-gray-200 dark:border-gray-800">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  4
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Major Cities</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  3,200+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Businesses Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="container-custom py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location) => (
              <div
                key={location.city}
                className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src={location.image}
                    alt={`${location.city} business district`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* City Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-3xl font-bold text-white mb-2">{location.city}</h3>
                    <p className="text-white/90">{location.description}</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  {/* Stats */}
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-gray-400" />
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {location.stats.businesses}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">businesses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-green-600 dark:text-green-400">
                        {location.stats.growth}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">growth</span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {location.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                          location.color === 'blue' ? 'from-blue-500 to-blue-600' :
                          location.color === 'purple' ? 'from-purple-500 to-purple-600' :
                          location.color === 'orange' ? 'from-orange-500 to-orange-600' :
                          'from-pink-500 to-pink-600'
                        }`} />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${
                      location.color === 'blue' ? 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' :
                      location.color === 'purple' ? 'from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800' :
                      location.color === 'orange' ? 'from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800' :
                      'from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800'
                    } text-white rounded-xl`}
                  >
                    <Link href={`/services?location=${location.city.toLowerCase()}`}>
                      Explore {location.city} Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Local Presence Matters */}
        <section className="bg-white dark:bg-gray-900 py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Local Presence Matters
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Our on-ground teams ensure faster processing and better understanding of local requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: 'Local Expertise',
                  description: 'Teams familiar with city-specific regulations and requirements',
                },
                {
                  icon: Building2,
                  title: 'Government Relations',
                  description: 'Strong relationships with local government offices',
                },
                {
                  icon: TrendingUp,
                  title: 'Market Insights',
                  description: 'Deep understanding of local business opportunities',
                },
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Choose Your Location</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Business Journey?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Choose your preferred location and let our local experts guide you through the setup process
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-6 text-base font-medium rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Contact Local Office
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50 px-8 py-6 text-base font-medium rounded-2xl transition-all duration-300"
                >
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Locations;
