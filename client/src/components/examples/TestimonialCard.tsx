import TestimonialCard from '../TestimonialCard';
import testimonialImage from '@assets/generated_images/Client_testimonial_female_headshot_86fd6b62.png';

export default function TestimonialCardExample() {
  return (
    <div className="p-8 max-w-md">
      <TestimonialCard
        name="Sarah Johnson"
        role="CEO"
        company="TechVenture Inc"
        location="Riyadh, Saudi Arabia"
        content="Analytix made our business setup incredibly smooth. Their expertise in Saudi regulations saved us months of paperwork and hassle."
        image={testimonialImage}
        rating={5}
      />
    </div>
  );
}
