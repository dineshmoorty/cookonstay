import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Everyday Food",
    description:
      "Fresh and practical meals designed for everyday dining, with quality and consistency at the centre.",
    href: "/menu",
  },
  {
    number: "02",
    title: "Catering",
    description:
      "Reliable food solutions for colleges, workplaces, events, functions and larger gatherings.",
    href: "/catering",
  },
  {
    number: "03",
    title: "Food Solutions",
    description:
      "Flexible food services built around real requirements, whether it is a regular setup or a special occasion.",
    href: "/enquiry",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-full px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#176b45]">
            What We Do
          </span>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#172019] sm:text-5xl">
            Food made simple.
            <br />
            <span className="text-[#176b45]">Service made reliable.</span>
          </h2>

          <p className="mt-5 max-w-xl text-[16px] leading-7 text-[#69736d] sm:text-[17px]">
            CookOnStay brings food and service together to create dependable
            dining experiences for individuals, institutions and events.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-[26px] border border-[#e4e7e2] bg-[#f8f7f2] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#cbded2] hover:shadow-[0_18px_45px_rgba(23,32,25,0.07)] sm:p-8"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f2ec] text-xs font-black text-[#176b45]">
                  {service.number}
                </span>

                <span className="text-xl text-[#b7c0ba] transition group-hover:translate-x-1 group-hover:text-[#176b45]">
                  →
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-black tracking-[-0.03em] text-[#172019]">
                {service.title}
              </h3>

              <p className="mt-4 min-h-[96px] text-sm leading-7 text-[#69736d]">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="mt-6 inline-flex items-center text-sm font-bold text-[#176b45] transition hover:text-[#0e4f32]"
              >
                Learn more
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-8 rounded-[26px] bg-[#176b45] px-7 py-8 sm:px-10 sm:py-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">
                Our approach
              </p>

              <p className="mt-2 max-w-2xl text-xl font-bold leading-8 tracking-[-0.02em] text-white sm:text-2xl">
                We focus on food that works for people, places and occasions.
              </p>
            </div>

            <Link
              href="/enquiry"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#f28c28] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#d97416]"
            >
              Work With Us
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}