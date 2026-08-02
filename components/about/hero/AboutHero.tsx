import AboutHeroContent from "./AboutHeroContent";
import AboutHeroImage from "./AboutHeroImage";

export default function AboutHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-orange-50
        via-white
        to-amber-50
        py-20
        sm:py-24
        lg:py-28
      " style={{ padding: "20px" }}
    >
      {/* Background glow */}

      <div
        className="
          absolute
          -left-32
          top-10
          h-80
          w-80
          rounded-full
          bg-orange-300/20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-32
          bottom-0
          h-80
          w-80
          rounded-full
          bg-amber-300/20
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-full
          items-center
          gap-12
          px-5
          sm:px-6
          lg:grid-cols-2
          lg:gap-16
          lg:px-8
        "
      >
        <AboutHeroContent />

        <AboutHeroImage />
      </div>
    </section>
  );
}