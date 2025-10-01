import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="font-serif text-2xl font-bold text-primary">Analytix</div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors">
              Services
            </Link>
            <Link href="/locations" className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors">
              Locations
            </Link>
            <Link href="/resources" className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors">
              Resources
            </Link>
            <Link href="/blog" className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors">
              Blog
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+966123456789" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Phone className="w-4 h-4" />
              <span>+966 12 345 6789</span>
            </a>
            <ThemeToggle />
            <Button data-testid="button-consultation">Get Free Consultation</Button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="flex flex-col p-4 gap-2">
            <Link href="/" className="px-4 py-2 hover-elevate rounded-md">Home</Link>
            <Link href="/services" className="px-4 py-2 hover-elevate rounded-md">Services</Link>
            <Link href="/locations" className="px-4 py-2 hover-elevate rounded-md">Locations</Link>
            <Link href="/resources" className="px-4 py-2 hover-elevate rounded-md">Resources</Link>
            <Link href="/blog" className="px-4 py-2 hover-elevate rounded-md">Blog</Link>
            <div className="pt-4 border-t mt-2">
              <Button className="w-full" data-testid="button-consultation-mobile">Get Free Consultation</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
