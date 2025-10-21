import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/locations', label: 'Locations' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              RegisterInKSA
            </span>
          </Link>

          {/* Desktop Navigation - Clean and Minimal */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  location === item.href
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.label}
                {location === item.href && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+966507688714" 
              className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+966 50 768 8714</span>
            </a>
            
            <ThemeToggle />
            
            <Button 
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-4">
            <ThemeToggle />
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Fullscreen Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white dark:bg-gray-950 transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`} style={{ top: '80px' }}>
        <nav className="container-custom py-8">
          <div className="space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-2xl font-medium transition-colors duration-300 ${
                  location === item.href
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 space-y-4">
            <a 
              href="tel:+966507688714" 
              className="flex items-center justify-center gap-2 text-base font-medium text-gray-600 dark:text-gray-400"
            >
              <Phone className="w-5 h-5" />
              <span>+966 50 768 8714</span>
            </a>
            
            <Button 
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-4 text-base font-medium rounded-xl transition-all duration-300 shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
