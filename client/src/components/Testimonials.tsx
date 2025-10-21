import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechVenture Inc',
    location: 'Riyadh, Saudi Arabia',
    content: 'RegisterInKSA made our business setup incredibly smooth. Their expertise in Saudi regulations saved us months of paperwork and hassle.',
    rating: 5,
    image: '/images/testimonials/sarah-johnson.jpg',
  },
  {
    id: 2,
    name: 'Ahmed Al-Rashid',
    role: 'Founder, Gulf Trading Co',
    location: 'Jeddah, Saudi Arabia',
    content: 'Professional service from start to finish. The team handled everything from MISA license to commercial registration efficiently.',
    rating: 5,
    image: '/images/testimonials/ahmed-rashid.jpg',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Director, Global Logistics',
    location: 'Dammam, Saudi Arabia',
    content: 'Outstanding support for foreign investors. They guided us through 100% ownership setup with complete transparency and professionalism.',
    rating: 5,
    image: '/images/testimonials/michael-chen.jpg',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Join 3,200+ successful businesses who trust RegisterInKSA for their Saudi Arabia setup
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-full">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 border-2 border-white dark:border-gray-900" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Join 3,200+ happy clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
