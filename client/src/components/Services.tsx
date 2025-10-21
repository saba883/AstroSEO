import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, Check } from 'lucide-react';

const services = [
  {
    id: 'llc-formation',
    title: 'LLC Formation',
    description: 'Complete LLC setup with 100% foreign ownership support in Saudi Arabia',
    features: ['100% Foreign Ownership', 'Fast Processing', 'Full Legal Support', 'Banking Assistance'],
    price: 'SAR 12,000',
    popular: false,
    color: 'blue',
  },
  {
    id: 'misa-license',
    title: 'MISA License',
    description: 'Fast-track Ministry of Investment licensing for foreign investors',
    features: ['Government Relations', 'Document Preparation', 'Quick Approval', 'Expert Guidance'],
    price: 'SAR 15,000',
    popular: true,
    color: 'purple',
  },
  {
    id: 'commercial-registration',
    title: 'Commercial Registration',
    description: 'CR processing with government partnerships for quick approval',
    features: ['Same Day Processing', 'Online Submission', 'Multi-Activity Support', 'Free Updates'],
    price: 'SAR 8,000',
    popular: false,
    color: 'orange',
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose the perfect solution for your business needs in Saudi Arabia
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative group ${
                service.popular ? 'md:-mt-4' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card */}
              <div className={`relative h-full bg-white dark:bg-gray-900 rounded-2xl p-8 transition-all duration-300 ${
                service.popular 
                  ? 'shadow-2xl border-2 border-purple-200 dark:border-purple-800' 
                  : 'shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-800'
              }`}>
                {/* Color Accent */}
                <div className={`absolute top-0 left-8 w-16 h-1 rounded-b-full bg-gradient-to-r ${
                  service.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  service.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  'from-orange-500 to-orange-600'
                }`} />

                {/* Content */}
                <div className="space-y-6">
                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-6 border-y border-gray-200 dark:border-gray-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-gray-600 dark:text-gray-400">From</span>
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{service.price}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${
                          service.color === 'blue' ? 'from-blue-500 to-blue-600' :
                          service.color === 'purple' ? 'from-purple-500 to-purple-600' :
                          'from-orange-500 to-orange-600'
                        } flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href={`/services/${service.id}`}
                    className={`group/btn flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                      service.popular
                        ? 'bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900'
                        : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Need a custom solution for your business?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Contact our experts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
