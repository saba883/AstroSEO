import { Link } from 'wouter';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-primary" />
              <span className="font-serif text-xl font-bold">Analytix</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Saudi Arabia's leading business formation consultancy. 2,200+ successful setups since 1999.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+966 12 345 6789</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@analytix.sa</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/llc-formation" className="text-muted-foreground hover:text-foreground">LLC Formation</Link></li>
              <li><Link href="/misa-license" className="text-muted-foreground hover:text-foreground">MISA License</Link></li>
              <li><Link href="/commercial-registration" className="text-muted-foreground hover:text-foreground">Commercial Registration</Link></li>
              <li><Link href="/branch-office" className="text-muted-foreground hover:text-foreground">Branch Office</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Locations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/riyadh" className="text-muted-foreground hover:text-foreground">Riyadh Office</Link></li>
              <li><Link href="/jeddah" className="text-muted-foreground hover:text-foreground">Jeddah Office</Link></li>
              <li><Link href="/dammam" className="text-muted-foreground hover:text-foreground">Dammam Office</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get Saudi business insights and updates
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button data-testid="button-subscribe">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 Analytix Business Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
