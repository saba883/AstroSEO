import LocationCard from '../LocationCard';
import riyadhImage from '@assets/generated_images/Riyadh_business_district_hero_829f8985.png';

export default function LocationCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <LocationCard
        city="Riyadh"
        description="Capital city with the highest concentration of business opportunities"
        image={riyadhImage}
        stats={{
          businesses: '800+',
          industries: '25+'
        }}
      />
    </div>
  );
}
