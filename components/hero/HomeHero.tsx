import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Star } from "lucide-react";

const foodCards = [
  {
    src: "/images/menu/veg-biryani.webp",
    alt: "CookOnStay vegetable biryani served with accompaniments",
    label: "A flavourful favourite",
    className: "hero-food-card hero-food-card-main",
  },
  {
    src: "/images/menu/2-idly.webp",
    alt: "Soft South Indian idlis",
    label: "Freshly made",
    className: "hero-food-card hero-food-card-small hero-food-card-top",
  },
  {
    src: "/images/menu/veg-meals.webp",
    alt: "Traditional vegetarian meal from CookOnStay",
    label: "Good food, every day",
    className: "hero-food-card hero-food-card-small hero-food-card-bottom",
  },
];

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8f7f2]">
      <div className="pointer-events-none absolute -left-40 top-12 h-80 w-80 rounded-full bg-[#e8f2ec] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#fff0df] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#dfe8e1] to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:min-h-[690px] lg:grid-cols-[1fr_1fr] lg:gap-8 lg:px-10 lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d9e7de] bg-white/80 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.17em] text-[#176b45] shadow-sm backdrop-blur">
            <MapPin size={14} className="text-[#c47b35]" />
            Made with care in Madurai
          </div>

          <h1 className="max-w-3xl text-[clamp(3.15rem,8vw,5.6rem)] font-black leading-[0.94] tracking-[-0.065em] text-[#172019]">
            Good food.
            <br />
            <span className="text-[#176b45]">Good days.</span>
            <span className="block pt-2 text-[clamp(1.1rem,2.2vw,1.45rem)] font-semibold leading-snug tracking-[-0.025em] text-[#69736d]">
              Made better with CookOnStay.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#69736d] sm:text-lg">
            From everyday South Indian favourites to dependable catering for
            colleges, workplaces and gatherings — discover food made to bring
            people together.
          </p>

          <div className="mt-9 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">

            {/* Explore Menu */}
            <Link
              href="/menu"
              className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-[#10452F] px-5 py-4 text-sm font-extrabold !text-white shadow-[0_10px_25px_rgba(16,69,47,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3826] hover:shadow-[0_15px_30px_rgba(16,69,47,0.25)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10452F]"
            >
              Explore our menu
              <ArrowUpRight size={18} />
            </Link>

            {/* Catering */}
            <Link
              href="/catering"
              className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-[#D7E1D9] bg-[#F8FAF7] px-5 py-4 text-sm font-bold text-[#173D2C] transition-all duration-300 hover:-translate-y-1 hover:border-[#10452F] hover:bg-[#EDF3EE]"
            >
              Explore catering
              <ArrowUpRight size={18} />
            </Link>

            {/* Zomato Order */}
            <a
              href="https://www.zomato.com/madurai/cook-on-stay-periyar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-2xl bg-[#B91F32] px-5 py-3 text-sm font-extrabold !text-white shadow-[0_8px_20px_rgba(185,31,50,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#991B2B]"
            >
              Order on Zomato
              <ArrowUpRight size={16} />
            </a>

            {/* Zomato Rating */}
            <a
              href="https://link.zomato.com/xqzv/rshare?id=4853050830563969"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Cook On Stay rating on Zomato"
              className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-2xl border border-[#E8DDC9] bg-white px-4 py-3 text-sm font-bold text-[#173D2C] transition-all duration-300 hover:-translate-y-1 hover:border-[#B8C9BE] hover:bg-[#F8FAF7]"
            >
              <span className="inline-flex items-center gap-1 rounded-lg bg-[#176B45] px-3 py-1.5 font-extrabold text-white">
                4 <Star size={13} fill="currentColor" />
              </span>
              <span>View us on Zomato</span>
            </a>

          </div>


          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#e4e7e2] pt-6 text-sm text-[#69736d]">
            <div><strong className="text-[#172019]">Since 2022</strong><span className="ml-2">serving with purpose</span></div>
            <span className="hidden h-5 w-px bg-[#d8ddd9] sm:block" />
            <div><strong className="text-[#172019]">Fresh</strong><span className="ml-2">food-focused</span></div>
            <span className="hidden h-5 w-px bg-[#d8ddd9] sm:block" />
            <div><strong className="text-[#172019]">Reliable</strong><span className="ml-2">service</span></div>
          </div>
        </div>

        <div className="hero-food-stage relative mx-auto flex min-h-[390px] w-full max-w-[620px] items-center justify-center sm:min-h-[520px] lg:min-h-[570px]" aria-label="CookOnStay food highlights">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-stage-glow" />
          <div className="hero-stage-caption absolute left-1/2 top-2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/80 bg-white/80 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#176b45] shadow-sm backdrop-blur sm:top-5 sm:text-xs">
            A little something delicious
          </div>

          {foodCards.map((card) => (
            <div className={card.className} key={card.src}>
              <div className="relative h-full w-full overflow-hidden rounded-[inherit]">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 48vw, (max-width: 1024px) 34vw, 360px"
                  className="object-cover"
                  priority={card.className === "hero-food-card hero-food-card-main"}
                />
              </div>
              <span className="hero-food-label">{card.label}</span>
            </div>
          ))}

          <div className="hero-floating-note absolute bottom-3 left-1 z-30 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_18px_45px_rgba(23,32,25,0.12)] backdrop-blur sm:bottom-8 sm:left-2 sm:px-5 sm:py-4">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#9a8064]">Good food</p>
            <p className="mt-1 text-sm font-black text-[#176b45] sm:text-base">Good days.</p>
          </div>
          <div className="hero-floating-dot absolute bottom-10 right-5 z-20 h-5 w-5 rounded-full bg-[#f28c28] shadow-[0_8px_20px_rgba(242,140,40,0.3)] sm:bottom-16 sm:right-8" />
        </div>
      </div>
    </section>
  );
}
