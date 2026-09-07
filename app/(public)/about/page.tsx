import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CookOnStay",
  description:
    "Learn about CookOnStay, our approach to food and service, and our everyday food and catering solutions.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    number: "01",
    title: "Quality First",
    description:
      "We believe good food starts with care, consistency and attention to what we serve.",
  },
  {
    number: "02",
    title: "People Matter",
    description:
      "Food is ultimately about people. We focus on creating experiences that feel welcoming and dependable.",
  },
  {
    number: "03",
    title: "Consistency",
    description:
      "From everyday meals to catering requirements, we aim to keep our food and service dependable.",
  },
  {
    number: "04",
    title: "Keep Improving",
    description:
      "We listen, learn and continuously look for better ways to serve our customers.",
  },
];

const services = [
  {
    number: "01",
    title: "Everyday Food",
    description:
      "Simple, fresh and practical food options for everyday needs.",
  },
  {
    number: "02",
    title: "Catering",
    description:
      "Food packages designed for gatherings, functions and group requirements.",
  },
  {
    number: "03",
    title: "Food Solutions",
    description:
      "Flexible food solutions built around the needs of colleges, workplaces and events.",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-[#f8f7f2]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="w-full overflow-hidden border-b border-[#e4e7e2]">
        <div className="grid min-h-[580px] w-full lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
            <div className="w-full max-w-2xl">

              <span className="inline-flex rounded-full bg-[#e8f2ec] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#176b45]">
                About CookOnStay
              </span>

              <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.055em] text-[#172019] sm:text-6xl lg:text-7xl">
                More than food.
                <br />
                <span className="text-[#176b45]">
                  It&apos;s how we serve.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-[#69736d] sm:text-lg">
                CookOnStay is built around a simple idea — good food,
                thoughtful service and practical food solutions that
                fit real everyday needs.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/menu"
                  className="rounded-xl bg-[#176b45] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0e4f32]"
                >
                  Explore Our Menu
                </a>

                <a
                  href="/enquiry"
                  className="rounded-xl border border-[#dfe4df] bg-white px-6 py-3.5 text-sm font-bold text-[#172019] transition hover:border-[#176b45] hover:text-[#176b45]"
                >
                  Talk to Us
                </a>
              </div>

            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">

            <img
              src="/images/about/about-hero.png"
              alt="CookOnStay"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#172019]/30 via-transparent to-[#172019]/20" />

            {/* FLOATING CARD */}
            <div className="absolute bottom-7 left-7 rounded-2xl border border-white/30 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">

              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#69736d]">
                Our Journey
              </p>

              <p className="mt-1 text-xl font-black text-[#176b45]">
                Since 2022
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}
      <section className="w-full bg-white">
        <div className="grid w-full lg:grid-cols-2">

          {/* IMAGE */}
          <div className="relative min-h-[480px] overflow-hidden">

            <img
              src="/images/about/our-story.png"
              alt="CookOnStay food service"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#172019]/50 to-transparent" />

            <div className="absolute bottom-8 left-8">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                The beginning
              </span>

              <p className="mt-1 text-4xl font-black tracking-[-0.04em] text-white">
                2022
              </p>
            </div>

          </div>


          {/* STORY */}
          <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16 xl:px-24">

            <div className="max-w-xl">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#f28c28]">
                Our Story
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#172019] sm:text-4xl">
                Built with food,
                <br />
                driven by purpose.
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-[#69736d] sm:text-base">

                <p>
                  CookOnStay started with a simple focus — making good
                  food more accessible, practical and reliable for
                  everyday requirements.
                </p>

                <p>
                  Over time, our focus has grown beyond individual
                  meals. We look at food as a complete experience:
                  what people need, how it is prepared, how it is
                  served and how consistently we can deliver it.
                </p>

                <p>
                  Today, CookOnStay brings together everyday food,
                  catering and flexible food solutions under one
                  growing brand.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT WE BELIEVE
      ===================================================== */}
      <section className="w-full bg-[#f8f7f2]">

        <div className="w-full px-5 py-16 sm:px-8 lg:px-14 lg:py-20 xl:px-20">

          <div className="max-w-3xl">

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#176b45]">
              What We Believe
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#172019] sm:text-4xl">
              The principles behind CookOnStay.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#69736d] sm:text-base">
              These simple principles guide the way we think about
              food, service and the people we serve.
            </p>

          </div>


          {/* VALUES */}
          <div className="mt-12 grid border-l border-t border-[#e4e7e2] sm:grid-cols-2">

            {values.map((value) => (
              <div
                key={value.number}
                className="border-b border-r border-[#e4e7e2] bg-white p-7 sm:p-9 lg:p-10"
              >

                <span className="text-xs font-black tracking-[0.15em] text-[#f28c28]">
                  {value.number}
                </span>

                <h3 className="mt-5 text-xl font-black tracking-[-0.025em] text-[#172019] sm:text-2xl">
                  {value.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-[#69736d]">
                  {value.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT WE DO
      ===================================================== */}
      <section className="w-full bg-white">

        <div className="w-full px-5 py-16 sm:px-8 lg:px-14 lg:py-20 xl:px-20">

          <div className="flex flex-col gap-5 border-b border-[#e4e7e2] pb-10 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#f28c28]">
                What We Do
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#172019] sm:text-4xl">
                Food for real-world needs.
              </h2>

            </div>

            <p className="max-w-xl text-sm leading-6 text-[#69736d] sm:text-base">
              From everyday meals to larger requirements, we focus
              on keeping food simple, practical and dependable.
            </p>

          </div>


          {/* SERVICES */}
          <div className="mt-10 grid gap-5 lg:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.number}
                className="group rounded-[24px] border border-[#e4e7e2] bg-[#f8f7f2] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(23,32,25,0.07)] sm:p-8"
              >

                <div className="flex items-center justify-between">

                  <span className="text-xs font-black tracking-[0.15em] text-[#176b45]">
                    {service.number}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-black text-[#176b45] transition group-hover:bg-[#176b45] group-hover:text-white">
                    →
                  </span>

                </div>

                <h3 className="mt-12 text-2xl font-black tracking-[-0.03em] text-[#172019]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#69736d]">
                  {service.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          OUR APPROACH
      ===================================================== */}
      <section className="w-full bg-[#f8f7f2]">

        <div className="grid w-full lg:grid-cols-2">

          {/* CONTENT */}
          <div className="flex items-center bg-[#176b45] px-6 py-16 sm:px-10 lg:px-16 xl:px-24">

            <div className="max-w-xl">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#bfe0cc]">
                Our Approach
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                Keep it simple.
                <br />
                Do it well.
              </h2>

              <p className="mt-6 text-sm leading-7 text-[#dceee3] sm:text-base">
                We believe food doesn&apos;t need to be complicated.
                It needs to be thoughtfully prepared, served with
                care and delivered consistently.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white">
                  Food
                </span>

                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white">
                  People
                </span>

                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white">
                  Service
                </span>

              </div>

            </div>

          </div>


          {/* IMAGE */}
          <div className="relative min-h-[420px] overflow-hidden">

            <img
              src="/images/about/our-approach.png"
              alt="CookOnStay service"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#172019]/15" />

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="w-full bg-white px-5 py-14 sm:px-8 lg:px-14 lg:py-20 xl:px-20">

        <div className="relative overflow-hidden rounded-[30px] bg-[#172019] px-7 py-12 sm:px-10 lg:px-14 lg:py-14">

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#bfe0cc]">
                Let&apos;s Work Together
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                Have a food requirement?
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#cbd4ce] sm:text-base">
                Whether it&apos;s everyday food, catering or a custom
                requirement, tell us what you need.
              </p>

            </div>


            <div className="flex flex-wrap gap-3">

              <a
                href="/enquiry"
                className="inline-flex items-center justify-center rounded-xl bg-[#f28c28] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#d97416]"
              >
                Make an Enquiry
              </a>

              <a
                href="/menu"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white px-7 py-4 text-sm font-bold text-white transition hover:bg-white/100"
              >
                View Menu
              </a>

            </div>

          </div>


          {/* DECORATION */}
          <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full border-[30px] border-[#176b45]" />

          <div className="absolute -bottom-28 right-40 h-56 w-56 rounded-full bg-[#176b45]/30" />

        </div>

      </section>

    </main>
  );
}