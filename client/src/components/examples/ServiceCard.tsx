import ServiceCard from '../ServiceCard';
import { Building2 } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ServiceCard
        icon={Building2}
        title="LLC Formation"
        description="Complete limited liability company registration with 100% foreign ownership support in Saudi Arabia."
      />
    </div>
  );
}
