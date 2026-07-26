import SectionHeader from "./SectionHeader";
import MenuGrid from "./MenuGrid";
import ViewAllButton from "./ViewAllButton";

export default function FeaturedMenu() {
  return (
    <section className="bg-gray-50 py-24" style={{"paddingTop": "20px"}}>
      <div className="mx-auto max-w-full px-6" style={{"padding": "20px"}}>
        <SectionHeader />
        <MenuGrid />
        <ViewAllButton />
      </div>
    </section>
  );
}