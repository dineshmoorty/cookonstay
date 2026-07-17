import SectionHeader from "./SectionHeader";
import MenuGrid from "./MenuGrid";
import ViewAllButton from "./ViewAllButton";

export default function FeaturedMenu() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader />
        <MenuGrid />
        <ViewAllButton />
      </div>
    </section>
  );
}