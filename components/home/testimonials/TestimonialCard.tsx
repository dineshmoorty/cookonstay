
import { Star, Quote } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  rating: number;
  review: string;
};

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl" style={{"padding": "20px"}}>
      <Quote className="mb-4 h-8 w-8 text-orange-500" />

      <div className="mb-4 flex gap-1" style={{"padding": "10px 0"}}>
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 fill-yellow-500 text-yellow-500"
          />
        ))}
      </div>

      <p className="leading-7 text-gray-600" style={{"padding": "10px 0"}}>
        &ldquo;{testimonial.review}&rdquo;
      </p>

      <div className="mt-6 border-t pt-4" style={{"padding": "10px 0"}}>
        <h4 className="font-semibold text-gray-900">
          {testimonial.name}
        </h4>

        <p className="text-sm text-gray-500">
          Google Review
        </p>
      </div>
    </div>
  );
}
