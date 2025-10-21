import React from 'react';
import { Shield, Award, Clock, Users, Building2, Globe } from 'lucide-react';

export const TrustSignals: React.FC = () => {
  const signals = [
    {
      icon: Users,
      value: '2,200+',
      label: 'Clients Served',
      color: 'blue',
    },
    {
      icon: Clock,
      value: '2-3 Weeks',
      label: 'Average Setup Time',
      color: 'purple',
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Legal Compliance',
      color: 'orange',
    },
    {
      icon: Award,
      value: '15+ Years',
      label: 'Industry Experience',
      color: 'pink',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {signals.map((signal, index) => {
        const Icon = signal.icon;
        return (
          <div
            key={index}
            className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
              signal.color === 'blue' ? 'from-blue-500 to-blue-600' :
              signal.color === 'purple' ? 'from-purple-500 to-purple-600' :
              signal.color === 'orange' ? 'from-orange-500 to-orange-600' :
              'from-pink-500 to-pink-600'
            } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {signal.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {signal.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const ClientLogos: React.FC = () => {
  const logos = [
    'Tech Corp',
    'Global Industries',
    'Innovation Labs',
    'Future Systems',
    'Digital Solutions',
    'Enterprise Group',
  ];

  return (
    <div className="text-center">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
        Trusted by Leading Companies
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
          >
            <span className="text-xl font-semibold">{logo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SecurityBadges: React.FC = () => {
  const badges = [
    { icon: Shield, label: 'SSL Secured' },
    { icon: Award, label: 'Verified Business' },
    { icon: Building2, label: 'Licensed Provider' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
          >
            <Icon className="w-5 h-5" />
            <span className="text-sm font-medium">{badge.label}</span>
          </div>
        );
      })}
    </div>
  );
};
