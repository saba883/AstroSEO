import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Play, Star, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950 pt-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-950" />
        
        {/* Minimal Geometric Shapes */}
        <div className="absolute top-1/4 -right-20 w-96 h-96">
          <div className="w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        </div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80">
          <div className="w-full h-full bg-gradient-to-tr from-orange-500/5 to-pink-500/5 rounded-full blur-3xl" />
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2">
              <div className="flex items-center gap-1 px-4 py-2 bg-green-50 dark:bg-green-950/30 rounded-full">
                <Sparkles className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-sm font-medium text-green-600 dark:text-green-400">Trusted by 3,200+ Companies</span>
              </div>
            </div>
            
            {/* Main Heading - Clean Typography */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900 dark:text-white">Business Setup in</span>
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Saudi Arabia
                </span>
                {/* Underline Accent */}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-full" />
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              Your trusted partner for seamless, compliant, and strategic business setup. Fast LLC registration, MISA license, and CR processing with 
              <span className="font-semibold text-gray-900 dark:text-white"> 100% foreign ownership support.</span>
            </p>
            
            {/* CTA Buttons - Modern Style */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-6 text-base font-medium rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Link href="/consultation">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="group border-2 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 px-8 py-6 text-base font-medium rounded-2xl transition-all duration-300">
                <a href="tel:+966507688714">
                  <Play className="w-5 h-5 mr-2" />
                  Call +966 50 768 8714
                </a>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 border-2 border-white dark:border-gray-900" />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-1">4.9/5 from 850+ reviews</p>
              </div>
            </div>
          </div>
          
          {/* Visual Column - Modern Minimal */}
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-orange-100 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-orange-950/20 rounded-[3rem] transform rotate-3" />
              
              {/* Image Container */}
              <div className="relative h-full bg-white dark:bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="/images/general/hero-image-1.jpg"
                  alt="Modern business district in Saudi Arabia"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                
                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Success Rate</p>
                      <p className="text-3xl font-bold text-gray-900 dark:text-white">98%</p>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-[98%] bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full" />
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl opacity-20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
        
        {/* Bottom Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-gray-200 dark:border-gray-800">
          {[
            { value: '2-4 Weeks', label: 'Fast Processing' },
            { value: '100%', label: 'Foreign Ownership' },
            { value: '3,200+', label: 'Happy Clients' },
            { value: '14 Countries', label: 'Clients Served' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
