const reasons = [
  {
    number: "01",
    title: "Quality First",
    description:
      "We keep quality at the centre of everything we serve, from everyday meals to large-scale catering.",
  },
  {
    number: "02",
    title: "Built for Real Needs",
    description:
      "Our food services are designed around the practical needs of colleges, workplaces, events and communities.",
  },
  {
    number: "03",
    title: "Consistent Service",
    description:
      "Good food matters, but dependable service matters too. We focus on delivering both consistently.",
  },
  {
    number: "04",
    title: "Growing With Purpose",
    description:
      "Since 2022, CookOnStay has been building its journey around food, people and meaningful experiences.",
  },
];

export default function WhyCookOnStay() {
  return (
    <section className="bg-[#f8f7f2] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-full px-5 sm:px-8 lg:px-10">

        {/* Top */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#176b45]">
              Why CookOnStay
            </span>

            <h2 className="mt-4 max-w-xl text-4xl font-black tracking-[-0.045em] text-[#172019] sm:text-5xl lg:text-6xl">
              More than food.
              <br />
              <span className="text-[#176b45]">
                It&apos;s how we serve.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-[16px] leading-8 text-[#69736d] lg:ml-auto lg:text-[17px]">
            We believe great food experiences come from more than what is on
            the plate. Quality, consistency, flexibility and people are all
            part of the CookOnStay approach.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-14 overflow-hidden rounded-[30px] border border-[#dfe5df] bg-white">
          {reasons.map((reason, index) => (
            <div
              key={reason.number}
              className={`grid gap-5 px-6 py-7 sm:px-9 sm:py-8 md:grid-cols-[80px_0.8fr_1.2fr] md:items-center ${
                index !== reasons.length - 1
                  ? "border-b border-[#e7eae7]"
                  : ""
              }`}
            >
              {/* Number */}
              <div className="text-sm font-black text-[#176b45]">
                {reason.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-black tracking-[-0.025em] text-[#172019] sm:text-2xl">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="max-w-xl text-sm leading-7 text-[#69736d] sm:text-[15px]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight */}
        <div className="mt-8 grid gap-5 md:grid-cols-[1.4fr_0.6fr]">

          <div className="rounded-[28px] bg-[#176b45] p-8 sm:p-10">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">
              The CookOnStay mindset
            </span>

            <p className="mt-5 max-w-2xl text-2xl font-black leading-tight tracking-[-0.035em] text-white sm:text-3xl">
              Keep it fresh. Keep it dependable. Keep people at the heart of
              the experience.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#dfe5df] bg-white p-8 sm:p-10">
            <div className="text-5xl font-black tracking-[-0.06em] text-[#176b45]">
              2022
            </div>

            <p className="mt-3 text-sm font-semibold text-[#172019]">
              The beginning of our journey
            </p>

            <p className="mt-2 text-sm leading-6 text-[#69736d]">
              Growing one food experience at a time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}