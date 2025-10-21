import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Start Your Business Journey</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Start Your Business
            <br />
            in Saudi Arabia?
          </h2>
          
          {/* Description */}
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join 3,200+ successful companies from 14 countries across 20 industries. Get expert guidance from consultation to company registration.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-10">
            <div>
              <div className="text-3xl font-bold">3,200+</div>
              <div className="text-sm text-white/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-white/80">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24h</div>
              <div className="text-sm text-white/80">Response Time</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-6 text-base font-medium rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Link href="/consultation">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50 px-8 py-6 text-base font-medium rounded-2xl transition-all duration-300"
            >
              <a href="https://wa.me/966507688714" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              SSL Secured
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified Business
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Licensed Provider
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
