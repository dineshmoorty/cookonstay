import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDownRight, ArrowRight, Check, Heart, Leaf, Sparkles, Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "About CookOnStay | Good Food, Good Days in Madurai",
  description:
    "Get to know CookOnStay — our story, values and food services in Madurai, from everyday meals to catering and bulk orders.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    number: "01",
    title: "Quality first",
    description:
      "We believe good food starts with care, consistency and attention to what we serve.",
    icon: Leaf,
  },
  {
    number: "02",
    title: "People matter",
    description:
      "Food is about people. We aim to create experiences that feel welcoming and dependable.",
    icon: Heart,
  },
  {
    number: "03",
    title: "Made for real life",
    description:
      "From everyday meals to group requirements, we keep our food services practical and approachable.",
    icon: Utensils,
  },
];

const services = [
  {
    number: "01",
    title: "Everyday food",
    description: "Explore our menu for familiar meals and food options for everyday cravings.",
    href: "/menu",
    label: "Explore menu",
  },
  {
    number: "02",
    title: "Catering",
    description: "Food packages for family gatherings, celebrations and special occasions.",
    href: "/catering",
    label: "Explore catering",
  },
  {
    number: "03",
    title: "Bulk orders",
    description: "Food requirements for colleges, workplaces, institutions and events.",
    href: "/contact",
    label: "Make an enquiry",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page w-full overflow-hidden bg-[#f8f7f2] text-[#172019]">
      {/* Cinematic brand introduction */}
      <section className="about-hero relative isolate">
        <div className="about-hero-grid mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:px-14 lg:py-24 xl:px-20">
          <div className="relative z-10 max-w-2xl">
            <span className="about-eyebrow inline-flex items-center gap-2 rounded-full border border-[#176b45]/15 bg-white/75 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#176b45]">
              <Sparkles size={13} /> The CookOnStay story
            </span>
            <h1 className="mt-7 text-[clamp(3.2rem,7vw,6.7rem)] font-black leading-[0.91] tracking-[-0.075em]">
              Good food.
              <br />
              <span className="about-heading-accent">Good days.</span>
              <br />
              <span className="text-[#172019]">That&apos;s us.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#69736d] sm:text-lg">
              CookOnStay is built around a simple idea — good food, thoughtful service and practical food solutions for everyday needs, gatherings and communities.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">

              {/* Primary Button */}
              <a
                href="/menu"
                className="about-primary-btn inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border border-[#10452F] bg-[#10452F] px-8 py-4 text-sm font-extrabold !text-white shadow-[0_10px_25px_rgba(16,69,47,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B3826] hover:bg-[#0B3826] hover:shadow-[0_15px_30px_rgba(16,69,47,0.25)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10452F]"
              >
                <span className="!text-white">Discover our food</span>
                <ArrowRight size={17} className="!text-white transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary Button */}
              <a
                href="/catering"
                className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border border-[#D5DED7] bg-[#F8FAF7] px-8 py-4 text-sm font-bold text-[#10452F] transition-all duration-300 hover:-translate-y-1 hover:border-[#10452F] hover:bg-[#EDF3EE] hover:text-[#0B3826] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10452F]"
              >
                Catering services
                <ArrowDownRight size={17} />
              </a>

            </div>
            <div className="mt-12 flex items-center gap-4 border-t border-[#dfe5dd] pt-6">
              <span className="text-3xl font-black tracking-[-0.06em] text-[#176b45]">2022</span>
              <span className="max-w-[180px] text-xs font-semibold leading-5 text-[#7b857e]">The beginning of the CookOnStay journey</span>
            </div>
          </div>

          <div className="about-visual-stage relative mx-auto w-full max-w-[720px]">
            <div className="about-visual-halo" aria-hidden="true" />
            <div className="about-photo-main">
              <Image
                src="/images/about/about-hero.webp"
                alt="CookOnStay kitchen team preparing food"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
            </div>
            <div className="about-photo-float about-photo-float-top" aria-hidden="true">
              <Image src="/images/menu/veg-biryani.webp" alt="" fill sizes="180px" className="object-cover" />
            </div>
            <div className="about-photo-float about-photo-float-bottom" aria-hidden="true">
              <Image src="/images/cookonstay-stall.webp" alt="" fill sizes="220px" className="object-cover" />
            </div>
            <div className="about-image-note">
              <span className="block text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#d7e9dc]">Our promise</span>
              <span className="mt-1 block text-lg font-black tracking-tight text-white">Good food. Good days.</span>
            </div>
          </div>
        </div>
        <div className="about-hero-bottomline" aria-hidden="true" />
      </section>

      {/* Brand story */}
      <section className="relative bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-14 xl:px-20">
          <div className="about-story-visual relative mx-auto w-full max-w-[590px]">
            <div className="about-story-image relative aspect-[4/5] overflow-hidden rounded-[30px] bg-[#e8eee6]">
              <Image src="/images/cookonstay-stall.webp" alt="CookOnStay food service setup" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            </div>
            <div className="about-story-stamp" aria-label="CookOnStay since 2022">
              <span className="text-[9px] font-extrabold uppercase tracking-[0.18em]">Since</span>
              <span className="text-3xl font-black leading-none">2022</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.12em]">CookOnStay</span>
            </div>
            <div className="about-story-orbit" aria-hidden="true" />
          </div>

          <div className="max-w-xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#d78336]">Where it began</span>
            <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              A simple idea.
              <br />
              <span className="text-[#176b45]">A growing purpose.</span>
            </h2>
            <div className="mt-7 space-y-5 text-[15px] leading-8 text-[#69736d]">
              <p>CookOnStay started with a simple focus — making good food more accessible, practical and reliable for everyday requirements.</p>
              <p>Over time, our focus has grown beyond individual meals. We look at food as a complete experience: what people need, how it is prepared, how it is served and how consistently we can deliver it.</p>
              <p>Today, CookOnStay brings together everyday food, catering and flexible food solutions under one growing brand.</p>
            </div>
            <div className="mt-9 flex items-center gap-3 text-sm font-bold text-[#176b45]">
              <span className="h-px w-10 bg-[#f28c28]" />
              Good food brings people together.
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values-section relative py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14 xl:px-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#176b45]">What guides us</span>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">The values behind<br className="hidden sm:block" /> every plate.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#69736d]">The principles that shape how we think about food, service and the people we serve.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {values.map(({ number, title, description, icon: Icon }) => (
              <article key={number} className="about-value-card group rounded-[26px] border border-[#e2e8e0] bg-white p-7 sm:p-9">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-black tracking-[0.2em] text-[#d78336]">{number}</span>
                  <span className="about-value-icon flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf3ec] text-[#176b45]"><Icon size={21} strokeWidth={1.8} /></span>
                </div>
                <h3 className="mt-12 text-2xl font-black tracking-[-0.04em]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#69736d]">{description}</p>
                <div className="mt-8 h-[3px] w-10 rounded-full bg-[#f28c28] transition-all duration-300 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14 xl:px-20">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#d78336]">What we do</span>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">Food for the moments<br className="hidden sm:block" /> that matter.</h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {services.map((service) => (
              <a key={service.number} href={service.href} className="about-service-card group relative flex min-h-[270px] flex-col overflow-hidden rounded-[26px] bg-[#f4f6f0] p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-[0.2em] text-[#176b45]">{service.number}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce5dc] bg-white text-[#176b45] transition group-hover:rotate-[-45deg] group-hover:bg-[#176b45] group-hover:text-white"><ArrowRight size={17} /></span>
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-black tracking-[-0.04em]">{service.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-[#69736d]">{service.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold text-[#176b45]">{service.label}<ArrowRight size={14} /></span>
                </div>
                <span className="about-service-watermark" aria-hidden="true">{service.number}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* What's next — carefully framed as in progress */}
      <section className="about-next-section relative overflow-hidden bg-[#176b45] py-20 text-white sm:py-24">
        <div className="about-next-orb about-next-orb-one" aria-hidden="true" />
        <div className="about-next-orb about-next-orb-two" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-14 xl:px-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#d9ebdf]"><span className="h-2 w-2 rounded-full bg-[#f5b65e]" /> What&apos;s next</span>
            <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.06em] sm:text-5xl lg:text-6xl">Bringing your<br />favourites closer.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/75">We&apos;re working on a CookOnStay online ordering experience for customers in Madurai. More details will be shared as we get ready to launch.</p>
            <a
              href="/menu"
              className="mt-8 inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border border-white/20 bg-white px-8 py-4 text-sm font-extrabold !text-[#10452F] shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFF8EC] hover:shadow-[0_15px_30px_rgba(0,0,0,0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span className="!text-[#10452F]">Explore our menu</span>
              <ArrowRight size={17} className="!text-[#176B45]" />
            </a>
          </div>
          <div className="about-next-card-wrap mx-auto w-full max-w-[390px]">
            <div className="about-next-card">
              <div className="flex items-center justify-between border-b border-[#e8eee8] pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f2ec] text-[#176b45]"><Utensils size={19} /></span>
                  <span><strong className="block text-sm font-black text-[#172019]">CookOnStay</strong><small className="text-[10px] font-semibold tracking-[0.12em] text-[#89928c]">GOOD FOOD. GOOD DAYS.</small></span>
                </div>
                <span className="rounded-full bg-[#fff1df] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#b86c20]">Coming soon</span>
              </div>
              <div className="relative mt-5 aspect-[1.5] overflow-hidden rounded-2xl bg-[#edf2e9]">
                <Image src="/images/menu/veg-meals.webp" alt="CookOnStay vegetarian meal" fill sizes="(max-width: 768px) 80vw, 340px" className="object-cover" />
              </div>
              <div className="mt-5">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#d78336]">A new way to order</span>
                <p className="mt-2 text-2xl font-black tracking-[-0.05em] text-[#172019]">Your CookOnStay favourites, made easier.</p>
                <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#176b45]"><Check size={15} /> Exclusive CookOnStay ordering experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#f8f7f2] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-8 rounded-[30px] border border-[#e3e8e1] bg-white p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#d78336]">Let&apos;s make it happen</span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] sm:text-4xl">Have a food requirement?</h2>
            <p className="mt-4 text-sm leading-7 text-[#69736d] sm:text-base">Tell us what you&apos;re planning. We&apos;d be happy to hear about your everyday, catering or bulk food needs.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">

            {/* Primary CTA */}
            <a
              href="/contact"
              className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border border-[#10452F] bg-[#10452F] px-8 py-4 text-sm font-extrabold !text-white shadow-[0_8px_22px_rgba(16,69,47,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3826] hover:shadow-[0_12px_28px_rgba(16,69,47,0.24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10452F]"
            >
              <span className="!text-white">Make an enquiry</span>
              <ArrowRight size={17} className="!text-white" />
            </a>

            {/* Secondary CTA */}
            <a
              href="/catering"
              className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border border-[#D5DED7] bg-[#F8FAF7] px-8 py-4 text-sm font-bold text-[#10452F] transition-all duration-300 hover:-translate-y-1 hover:border-[#10452F] hover:bg-[#EDF3EE] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10452F]"
            >
              View catering
              <ArrowRight size={17} />
            </a>

          </div>
        </div>
      </section>
    </main>
  );
}
