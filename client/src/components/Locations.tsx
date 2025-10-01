import LocationCard from './LocationCard';
import riyadhImage from '@assets/generated_images/Riyadh_business_district_hero_829f8985.png';
import jeddahImage from '@assets/generated_images/Jeddah_corniche_cityscape_e062d5a2.png';
import handshakeImage from '@assets/generated_images/Business_partnership_handshake_b6ca397b.png';

const locations = [
  {
    city: 'Riyadh',
    description: 'Capital city with the highest concentration of business opportunities and government services',
    image: riyadhImage,
    stats: {
      businesses: '800+',
      industries: '25+'
    }
  },
  {
    city: 'Jeddah',
    description: 'Major commercial hub and gateway to international trade via Red Sea ports',
    image: jeddahImage,
    stats: {
      businesses: '650+',
      industries: '20+'
    }
  },
  {
    city: 'Dammam',
    description: 'Eastern Province center for oil, gas, and industrial business operations',
    image: handshakeImage,
    stats: {
      businesses: '500+',
      industries: '18+'
    }
  }
];

export default function Locations() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Our Locations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Local presence in major Saudi cities for personalized service and support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </div>
      </div>
    </section>
  );
}
