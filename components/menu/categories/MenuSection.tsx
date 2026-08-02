import MenuHeader from "./MenuHeader";
import CategoryTabs from "./CategoryTabs";

export default function MenuSection() {
  return (
    <section
      id="our-menu"
      className="relative overflow-hidden bg-orange-50/40 py-20 sm:py-24" style={{padding: "20px"}}
    >
      {/* Background decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />

      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-full px-5 sm:px-6 lg:px-8" style={{padding: "20px"}}>
        <MenuHeader />

        <CategoryTabs />
      </div>
    </section>
  );
}