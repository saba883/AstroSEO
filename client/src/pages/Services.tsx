import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Calculator, Sparkles, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { type Service } from '@shared/schema';

const Services: React.FC = () => {
  const { data: services = [], isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await fetch('/api/services');
      if (!response.ok) throw new Error('Failed to fetch services');
      const allServices = await response.json() as Service[];
      // Filter out city-specific services
      return allServices.filter(service => !service.slug.includes('-in-'));
    },
  });

  const getCategoryColor = (title: string) => {
    if (title.toLowerCase().includes('llc')) return 'blue';
    if (title.toLowerCase().includes('misa')) return 'purple';
    if (title.toLowerCase().includes('commercial')) return 'orange';
    if (title.toLowerCase().includes('branch')) return 'pink';
    return 'blue';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Header />
        <main className="container-custom py-24">
          <div className="flex items-center justify-center h-64">
            <div className="text-lg text-gray-600 dark:text-gray-400">Loading services...</div>
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
        <section className="relative bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-orange-950/20 opacity-50" />
          </div>
          
          <div className="container-custom relative z-10 py-20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-full mb-6">
                <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Our Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Business Formation{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Comprehensive business setup solutions across Saudi Arabia. From LLC formation to 
                MISA licensing, we handle everything for your business success.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container-custom py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const color = getCategoryColor(service.title);
              return (
                <div
                  key={service.id}
                  className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Color accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    color === 'blue' ? 'from-blue-500 to-blue-600' :
                    color === 'purple' ? 'from-purple-500 to-purple-600' :
                    color === 'orange' ? 'from-orange-500 to-orange-600' :
                    'from-pink-500 to-pink-600'
                  }`} />
                  
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {service.metaDescription || 'Professional business setup services across Saudi Arabia.'}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                          color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                          color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                          'text-pink-600 dark:text-pink-400'
                        }`} />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Fast processing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                          color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                          color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                          'text-pink-600 dark:text-pink-400'
                        }`} />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Expert guidance</span>
                      </li>
                    </ul>
                    
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group/btn border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <Link href={`/services/${service.slug}`}>
                        View Service Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white dark:bg-gray-900 py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We provide end-to-end business setup solutions with unmatched expertise
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: '3,200+ Businesses',
                  description: 'Successfully established across Saudi Arabia',
                  icon: '🏢',
                },
                {
                  title: '98% Success Rate',
                  description: 'Highest approval rate in the industry',
                  icon: '✅',
                },
                {
                  title: '24h Response',
                  description: 'Quick support for all your queries',
                  icon: '⚡',
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
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
                <span className="text-sm font-medium">Get Started Today</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Business in Saudi Arabia?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Our expert team has helped over 3,200 companies establish their presence in Saudi Arabia. 
                Get personalized assistance for your business setup.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-6 text-base font-medium rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50 px-8 py-6 text-base font-medium rounded-2xl transition-all duration-300"
                >
                  <Link href="/#cost-calculator">
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Setup Cost
                  </Link>
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

export default Services;
