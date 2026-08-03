import Image from "next/image";

export default function AboutHeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        className="
          absolute
          -inset-5
          rounded-[40px]
          bg-orange-300/20
          blur-2xl
        "
      />

      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/60
          bg-white/30
          p-2
          shadow-[0_25px_70px_rgba(249,115,22,0.15)]
          backdrop-blur-xl
        "
      >
        <div className="relative h-[420px] overflow-hidden rounded-[26px] sm:h-[500px]">
          <Image
            src="/images/about/about-hero.webp"
            alt="CookOnStay"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Floating Card */}

      <div
        className="
          absolute
          -bottom-6
          left-4
          rounded-2xl
          border
          border-white/50
          bg-white/90
          px-5
          py-4
          shadow-xl
          backdrop-blur-xl
          sm:left-[-20px]
        " style={{ padding: "10px 20px" }}
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">
          From Madurai
        </p>

        <p className="mt-1 font-bold text-slate-900">
          Made with ❤️ & Tradition
        </p>
      </div>
    </div>
  );
}
