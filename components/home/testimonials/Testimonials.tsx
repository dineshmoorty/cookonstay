import GoogleRating from "./GoogleRating";
import SectionHeader from "./SectionHeader";
import TestimonialsGrid from "./TestimonialsGrid";

export default function Testimonials() {
  return (
    <section className="bg-white py-24" style={{"padding": "20px"}}>
      <div className="mx-auto max-w-full px-6" style={{"paddingTop": "20px", "paddingBottom": "20px"}}>
        <SectionHeader />
        <GoogleRating />
        <TestimonialsGrid />
      </div>
    </section>
  );
}