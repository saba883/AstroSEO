import React from 'react';
import { Link } from 'wouter';
import { MapPin, Building2, TrendingUp, ArrowRight } from 'lucide-react';

const locations = [
  {
    id: 'riyadh',
    name: 'Riyadh',
    title: 'Capital Business Hub',
    description: 'The heart of Saudi business and government operations',
    stats: { companies: '850+', growth: '+32%' },
    image: '/images/locations/riyadh-1.jpg',
    featured: true,
  },
  {
    id: 'jeddah',
    name: 'Jeddah',
    title: 'Gateway to Trade',
    description: 'International business gateway and commercial center',
    stats: { companies: '620+', growth: '+28%' },
    image: '/images/locations/jeddah-1.jpg',
  },
  {
    id: 'dammam',
    name: 'Dammam',
    title: 'Industrial Powerhouse',
    description: 'Eastern Province industrial and energy sector hub',
    stats: { companies: '480+', growth: '+25%' },
    image: '/images/locations/dammam-1.jpg',
  },
  {
    id: 'al-khobar',
    name: 'Al Khobar',
    title: 'Business Excellence',
    description: 'Modern business district with international presence',
    stats: { companies: '350+', growth: '+22%' },
    image: '/images/locations/al-khobar-1.jpg',
  },
];

const Locations: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Locations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Strategic presence across Saudi Arabia's key business centers
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <Link
              key={location.id}
              href={`/locations/${location.id}`}
              className={`group relative overflow-hidden rounded-2xl ${
                location.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative h-full min-h-[300px] lg:min-h-[400px]">
                <img
                  src={location.image}
                  alt={location.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Location Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/80 text-sm font-medium">{location.title}</span>
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {location.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">
                    {location.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-white/60" />
                      <span className="text-white font-medium">{location.stats.companies}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-white/60" />
                      <span className="text-white font-medium">{location.stats.growth}</span>
                    </div>
                  </div>
                  
                  {/* Hover Arrow */}
                  <div className="absolute bottom-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Business Journey?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Choose your preferred location and let our local experts guide you through the setup process
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-medium rounded-xl transition-all duration-300"
            >
              Contact Local Office
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link
              href="/locations"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-xl border-2 border-gray-200 dark:border-gray-800 transition-all duration-300"
            >
              View All Locations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
