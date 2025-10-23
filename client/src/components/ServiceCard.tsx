import { Button } from '@/components/ui/button';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  color?: 'blue' | 'purple' | 'orange' | 'pink';
}

export default function ServiceCard({ icon: Icon, title, description, href = '#', color = 'blue' }: ServiceCardProps) {
  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col overflow-hidden">
      {/* Color accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
        color === 'blue' ? 'from-blue-500 to-blue-600' :
        color === 'purple' ? 'from-purple-500 to-purple-600' :
        color === 'orange' ? 'from-orange-500 to-orange-600' :
        'from-pink-500 to-pink-600'
      }`} />
      
      <div className="p-8 flex-1 flex flex-col">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
          color === 'blue' ? 'from-blue-500 to-blue-600' :
          color === 'purple' ? 'from-purple-500 to-purple-600' :
          color === 'orange' ? 'from-orange-500 to-orange-600' :
          'from-pink-500 to-pink-600'
        } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">
          {description}
        </p>
        <Button 
          variant="ghost" 
          className="gap-2 px-0 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium" 
          data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}
