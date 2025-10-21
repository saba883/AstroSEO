import React from "react";
import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  FolderOpen, 
  Settings,
  LogOut,
  Sparkles
} from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [location] = useLocation();

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/services", label: "Services", icon: Briefcase },
    { href: "/admin/blog", label: "Blog Posts", icon: FileText },
    { href: "/admin/blog/categories", label: "Blog Categories", icon: FolderOpen },
    { href: "/admin/content-generator", label: "Content Generator", icon: Sparkles },
  ];

  const isActive = (href: string) => {
    return location === href || (href !== "/admin" && location.startsWith(href));
  };

  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 bg-card border-r border-border">
        <div className="p-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <div>
              <h1 className="text-lg font-bold">Admin Panel</h1>
              <p className="text-xs text-muted-foreground">AstroSEO</p>
            </div>
          </div>
        </div>
        
        <nav className="px-4 pb-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors mb-1 ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Back to Site
          </Link>
        </div>
      </aside>
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
