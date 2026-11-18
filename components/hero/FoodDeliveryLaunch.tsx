import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Smartphone, Sparkles } from "lucide-react";

export default function FoodDeliveryLaunch() {
  return (
    <section
      aria-labelledby="food-delivery-title"
      className="relative isolate overflow-hidden bg-[#f8f7f2] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
    >
      <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-[#e8f2ec] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#fff0df] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d9e7de] bg-white/80 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#176b45] shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f28c28] opacity-50 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f28c28]" />
            </span>
            A new CookOnStay experience
          </div>

          <p className="mt-8 text-xs font-black uppercase tracking-[0.24em] text-[#c47b35]">
            Coming soon to Madurai
          </p>
          <h2
            id="food-delivery-title"
            className="mt-4 text-4xl font-black leading-[1.02] tracking-[-0.055em] text-[#172019] sm:text-5xl lg:text-[64px]"
          >
            Your favourites.
            <br />
            <span className="text-[#176b45]">A simpler way to order.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#69736d] sm:text-lg">
            We&apos;re creating a dedicated CookOnStay ordering experience for
            Madurai. Browse our food, choose your favourites and look forward
            to a smoother way to order directly from CookOnStay.
          </p>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">

            {/* Primary CTA */}
            <Link
              href="/menu"
              className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-[#10452F] px-8 py-4 text-sm font-extrabold !text-white shadow-[0_12px_30px_rgba(16,69,47,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3826] hover:shadow-[0_16px_35px_rgba(16,69,47,0.30)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10452F]"
            >
              Explore our menu
              <ArrowUpRight size={18} className="text-white" />
            </Link>

            {/* Coming Soon Badge */}
            <span className="inline-flex min-h-[58px] items-center justify-center gap-2.5 rounded-2xl border border-[#D5E1D8] bg-[#F8FAF7] px-7 py-4 text-sm font-bold text-[#173D2C] shadow-sm">
              <Smartphone size={18} className="text-[#10452F]" />
              App launching soon
            </span>

          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-[#69736d]">
            <Sparkles size={17} className="text-[#c47b35]" />
            <span>One brand. Your food. A better ordering experience.</span>
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[560px] w-full max-w-[520px] items-center justify-center [perspective:1400px] sm:min-h-[650px]">
          <div className="absolute h-[360px] w-[360px] rounded-full bg-[#dceee3]/80 blur-2xl sm:h-[440px] sm:w-[440px]" />
          <div className="absolute right-2 top-16 h-24 w-24 rounded-[28px] border border-white/80 bg-[#f28c28]/10 [transform:rotate(18deg)]" />
          <div className="absolute bottom-20 left-1 h-16 w-16 rounded-full border border-[#d7e6dc] bg-white/70" />

          <div className="phone-float relative z-10 w-[min(72vw,300px)] rounded-[42px] border-[8px] border-[#172019] bg-[#172019] p-[5px] shadow-[0_45px_90px_rgba(23,32,25,0.28)] sm:w-[310px]">
            <div className="overflow-hidden rounded-[31px] bg-[#f8f7f2]">
              <div className="relative aspect-[921/2048] w-full">
                <Image
                  src="/images/app/cookonstay-app-home.jpg"
                  alt="CookOnStay food ordering app home screen preview"
                  fill
                  sizes="(max-width: 640px) 72vw, 310px"
                  className="object-cover object-top"
                  priority={false}
                />
              </div>
            </div>
            <div className="absolute left-1/2 top-[8px] h-[18px] w-[76px] -translate-x-1/2 rounded-full bg-[#172019]" />
          </div>

          <div className="absolute left-0 top-[18%] z-20 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_15px_40px_rgba(23,32,25,0.1)] backdrop-blur">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#8b958e]">Made for</p>
            <p className="mt-1 text-sm font-black text-[#176b45]">Madurai ❤️</p>
          </div>
          <div className="absolute bottom-[17%] right-0 z-20 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_15px_40px_rgba(23,32,25,0.1)] backdrop-blur">
            <p className="text-xs font-extrabold text-[#172019]">CookOnStay</p>
            <p className="mt-1 text-[10px] font-semibold text-[#69736d]">Good food. Good days.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
