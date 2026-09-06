const highlights = [
  {
    value: "2022",
    label: "Journey started",
  },
  {
    value: "Food",
    label: "At our core",
  },
  {
    value: "People",
    label: "Always first",
  },
];

export default function BrandStory() {
  return (
    <section className="bg-[#f8f7f2] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-full px-5 sm:px-8 lg:px-10">

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Story marker */}
          <div className="rounded-[30px] bg-[#172019] p-8 sm:p-10 lg:p-12">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
              Our Journey
            </span>

            <div className="mt-10">
              <div className="text-7xl font-black tracking-[-0.07em] text-white sm:text-8xl">
                2022
              </div>

              <div className="mt-3 h-1 w-12 rounded-full bg-[#f28c28]" />

              <p className="mt-6 max-w-xs text-sm leading-7 text-white/55">
                The year CookOnStay began its journey to create better food
                experiences through quality, service and people.
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="rounded-[30px] border border-[#dfe5df] bg-white p-8 sm:p-10 lg:p-12">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#176b45]">
              Who We Are
            </span>

            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-[-0.045em] text-[#172019] sm:text-4xl lg:text-5xl">
              Building better food experiences,
              <span className="text-[#176b45]"> one step at a time.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#69736d] sm:text-[16px]">
              CookOnStay was built with a simple idea — food should be
              accessible, dependable and enjoyable. What started as a journey
              in 2022 continues to grow through everyday food, catering and
              practical food solutions.
            </p>

            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[#69736d] sm:text-[16px]">
              We continue to learn from the people and communities we serve,
              keeping our focus on quality food, reliable service and
              meaningful experiences.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid border-t border-[#e7eae7] pt-8 sm:grid-cols-3">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={`py-3 sm:px-5 ${
                    index !== 0
                      ? "border-t border-[#e7eae7] sm:border-l sm:border-t-0"
                      : ""
                  }`}
                >
                  <div className="text-2xl font-black tracking-[-0.035em] text-[#176b45]">
                    {item.value}
                  </div>

                  <div className="mt-1 text-xs font-semibold text-[#69736d]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}