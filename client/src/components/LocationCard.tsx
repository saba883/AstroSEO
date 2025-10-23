import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, Building2, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';

interface LocationCardProps {
  city: string;
  description: string;
  image: string;
  stats: {
    businesses: string;
    industries: string;
  };
  color?: 'blue' | 'purple' | 'orange' | 'pink';
}

export default function LocationCard({ city, description, image, stats, color = 'blue' }: LocationCardProps) {
  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={`${city} business district`} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider opacity-90">Saudi Arabia</span>
          </div>
          <h3 className="text-3xl font-bold">{city}</h3>
        </div>
      </div>
      
      <div className="p-8">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {description}
        </p>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="flex items-start gap-3">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
              color === 'blue' ? 'from-blue-500 to-blue-600' :
              color === 'purple' ? 'from-purple-500 to-purple-600' :
              color === 'orange' ? 'from-orange-500 to-orange-600' :
              'from-pink-500 to-pink-600'
            } flex items-center justify-center flex-shrink-0`}>
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.businesses}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Businesses Served</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
              color === 'blue' ? 'from-blue-500 to-blue-600' :
              color === 'purple' ? 'from-purple-500 to-purple-600' :
              color === 'orange' ? 'from-orange-500 to-orange-600' :
              'from-pink-500 to-pink-600'
            } flex items-center justify-center flex-shrink-0`}>
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.industries}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Industries</div>
            </div>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          className="w-full gap-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800" 
          asChild 
          data-testid={`button-view-${city.toLowerCase()}`}
        >
          <Link href={`/locations#${city.toLowerCase()}`}>
            View {city} Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
