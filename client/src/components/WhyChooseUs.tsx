import React from 'react';
import { Shield, Clock, Users, Award, CheckCircle, TrendingUp } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: '100% Legal Compliance',
      description: 'Full compliance with Saudi regulations and government requirements',
      color: 'blue',
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Quick turnaround times with expedited government processing',
      color: 'purple',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with deep knowledge of Saudi business law',
      color: 'orange',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: '3,200+ successful business setups across Saudi Arabia',
      color: 'pink',
    },
  ];

  const stats = [
    { value: '98%', label: 'Success Rate' },
    { value: '2-4', label: 'Weeks Average Setup' },
    { value: '15+', label: 'Years Experience' },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose RegisterInKSA?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            As Saudi Arabia's leading business formation consultancy, we've helped over 3,200 
            companies from 14 countries establish successful operations under Vision 2030.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                    feature.color === 'blue' ? 'from-blue-500 to-blue-600' :
                    feature.color === 'purple' ? 'from-purple-500 to-purple-600' :
                    feature.color === 'orange' ? 'from-orange-500 to-orange-600' :
                    'from-pink-500 to-pink-600'
                  } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600 p-1">
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              What Sets Us Apart
            </h3>
            <ul className="space-y-4">
              {[
                '3,200+ successful business setups',
                'Government partnerships for faster processing',
                'Local presence across major Saudi cities',
                '100% foreign ownership expertise',
                'Average 24-hour response time',
                'Complete end-to-end support',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Our Process
            </h3>
            <ul className="space-y-4">
              {[
                'Initial consultation to understand your needs',
                'Document preparation and verification',
                'Government submission and follow-up',
                'License approval and CR processing',
                'Bank account setup assistance',
                'Ongoing support and compliance',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
