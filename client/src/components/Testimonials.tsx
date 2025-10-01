import TestimonialCard from './TestimonialCard';
import testimonial1 from '@assets/generated_images/Client_testimonial_female_headshot_86fd6b62.png';
import testimonial2 from '@assets/generated_images/Client_testimonial_male_headshot_79332471.png';
import testimonial3 from '@assets/generated_images/Client_testimonial_executive_headshot_f7c3aad8.png';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechVenture Inc',
    location: 'Riyadh, Saudi Arabia',
    content: 'Analytix made our business setup incredibly smooth. Their expertise in Saudi regulations saved us months of paperwork and hassle.',
    image: testimonial1
  },
  {
    name: 'Ahmed Al-Rashid',
    role: 'Founder',
    company: 'Gulf Trading Co',
    location: 'Jeddah, Saudi Arabia',
    content: 'Professional service from start to finish. The team handled everything from MISA license to commercial registration efficiently.',
    image: testimonial2
  },
  {
    name: 'Michael Chen',
    role: 'Director',
    company: 'Global Logistics',
    location: 'Dammam, Saudi Arabia',
    content: 'Outstanding support for foreign investors. They guided us through 100% ownership setup with complete transparency and professionalism.',
    image: testimonial3
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join 2,200+ successful businesses who trust Analytix for their Saudi Arabia setup
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
