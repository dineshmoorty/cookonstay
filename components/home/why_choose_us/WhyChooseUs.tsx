import SectionHeader from "./SectionHeader";
import FeaturesGrid from "./FeaturesGrid";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24" style={{"paddingTop": "20px"}}>
      <div className="mx-auto max-w-full px-6" style={{"padding": "20px"}}>
        <SectionHeader />
        <FeaturesGrid />
      </div>
    </section>
  );
}