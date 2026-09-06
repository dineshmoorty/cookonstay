import Link from "next/link";

const cateringTypes = [
  {
    number: "01",
    title: "College & Campus",
    description:
      "Reliable food services designed for students, staff and campus communities.",
  },
  {
    number: "02",
    title: "Corporate & Workplace",
    description:
      "Practical meal and catering solutions for offices, teams and workplace events.",
  },
  {
    number: "03",
    title: "Events & Functions",
    description:
      "Food support for meetings, celebrations, gatherings and special occasions.",
  },
  {
    number: "04",
    title: "Bulk & Custom Orders",
    description:
      "Flexible quantities and food solutions based on your specific requirement.",
  },
];

export default function CateringSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-full px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#176b45]">
              Catering & Business Solutions
            </span>

            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.045em] text-[#172019] sm:text-5xl lg:text-6xl">
              Food solutions that
              <br />
              <span className="text-[#176b45]">scale with you.</span>
            </h2>
          </div>

          <p className="max-w-lg text-[16px] leading-8 text-[#69736d] lg:ml-auto">
            From regular institutional meals to one-time events, we build
            flexible food services around your people, place and requirements.
          </p>
        </div>

        {/* Main Feature */}
        <div className="mt-14 overflow-hidden rounded-[32px] bg-[#176b45]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

            {/* Left */}
            <div className="p-8 sm:p-10 lg:p-14">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg text-white">
                +
              </div>

              <h3 className="mt-8 max-w-2xl text-3xl font-black leading-tight tracking-[-0.035em] text-white sm:text-4xl">
                Need food for a group?
                <br />
                We&apos;ve got you covered.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-[15px]">
                Tell us what you need, how many people you&apos;re serving and
                when you need it. Our team can work with you to create a
                practical food solution.
              </p>

              <Link
                href="/enquiry"
                className="mt-8 inline-flex items-center rounded-xl bg-[#f28c28] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#d97416]"
              >
                Discuss Your Requirement
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Right */}
            <div className="border-t border-white/10 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
                Suitable for
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Regular meal programs",
                  "Institutional catering",
                  "Corporate requirements",
                  "Events & functions",
                  "Bulk food orders",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/10 pb-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs text-white">
                      ✓
                    </span>

                    <span className="text-sm font-semibold text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Categories */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cateringTypes.map((item) => (
            <div
              key={item.number}
              className="rounded-[24px] border border-[#e4e7e2] bg-[#f8f7f2] p-6"
            >
              <span className="text-xs font-black text-[#176b45]">
                {item.number}
              </span>

              <h3 className="mt-6 text-lg font-black tracking-[-0.025em] text-[#172019]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#69736d]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}