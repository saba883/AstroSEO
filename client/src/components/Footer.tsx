import React from 'react';
import { Link } from 'wouter';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  Linkedin,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'LLC Formation', href: '/services/llc-formation' },
      { name: 'MISA License', href: '/services/misa-license' },
      { name: 'Commercial Registration', href: '/services/commercial-registration' },
      { name: 'Branch Office Setup', href: '/services/branch-office-setup' },
      { name: 'Business Licensing', href: '/services/business-licensing' },
      { name: 'PRO Services', href: '/services/pro-services' },
    ],
    locations: [
      { name: 'Riyadh', href: '/locations/riyadh' },
      { name: 'Jeddah', href: '/locations/jeddah' },
      { name: 'Dammam', href: '/locations/dammam' },
      { name: 'Al Khobar', href: '/locations/al-khobar' },
      { name: 'Mecca', href: '/locations/mecca' },
      { name: 'Medina', href: '/locations/medina' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Success Stories', href: '/success-stories' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Guides', href: '/guides' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Support', href: '/support' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/registerinksa', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/registerinksa', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/registerinksa', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@registerinksa', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold text-white">RegisterInKSA</span>
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-sm">
              Your trusted partner for seamless, compliant, and strategic business setup in Saudi Arabia. 
              Helping entrepreneurs and investors turn opportunities into successful ventures.
            </p>
            
            <div className="mb-6">
              <p className="text-white font-medium mb-2">Trusted by 3200+ Clients</p>
              <p className="text-gray-400 text-sm">
                We helped to expand 3200 companies from 14 countries across 20 industries.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Locations</h4>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-800">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p className="text-white font-medium mb-1">Head Office</p>
              <p className="text-gray-400 text-sm">Riyadh, Saudi Arabia</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className="text-white font-medium mb-1">Call Us</p>
              <p className="text-gray-400 text-sm">+966 50 768 8714</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <p className="text-white font-medium mb-1">Email Us</p>
              <p className="text-gray-400 text-sm">info@registerinksa.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} RegisterInKSA. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
