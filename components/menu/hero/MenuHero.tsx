import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function MenuHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 py-20 md:py-28" style={{padding: "2rem"}} >
      <div className="mx-auto grid max-w-full items-center gap-12 px-6 lg:grid-cols-2">

        <HeroContent />

        <HeroImage />

      </div>

      <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />
    </section>
  );
}