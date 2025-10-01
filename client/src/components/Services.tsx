import { Building2, FileText, Briefcase, Globe, Shield, Users } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Building2,
    title: 'LLC Formation',
    description: 'Complete limited liability company registration with 100% foreign ownership support in Saudi Arabia.'
  },
  {
    icon: FileText,
    title: 'MISA License',
    description: 'Fast-track Ministry of Investment licensing for foreign investors with expert guidance and support.'
  },
  {
    icon: Briefcase,
    title: 'Commercial Registration',
    description: 'Streamlined CR processing with government partnerships for faster business setup completion.'
  },
  {
    icon: Globe,
    title: 'Branch Office Setup',
    description: 'Establish your international company branch in Saudi Arabia with complete legal compliance.'
  },
  {
    icon: Shield,
    title: 'Business Licensing',
    description: 'Industry-specific licenses including trading, manufacturing, and e-commerce permits.'
  },
  {
    icon: Users,
    title: 'PRO Services',
    description: 'Complete public relations office services for visa processing and government documentation.'
  }
];

export default function Services() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive business formation solutions tailored for Saudi Arabia's Vision 2030
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
