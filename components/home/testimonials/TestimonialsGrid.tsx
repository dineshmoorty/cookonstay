import { TESTIMONIALS } from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" style={{"paddingTop": "20px", "paddingBottom": "20px"}}>
      {TESTIMONIALS.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
        />
      ))}
    </div>
  );
}