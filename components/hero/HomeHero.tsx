import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f2]">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#e8f2ec]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#fff0df]" />

      <div className="relative mx-auto grid min-h-[650px] max-w-full items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24">
        
        {/* Left */}
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d9e7de] bg-[#eef6f1] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#176b45]">
            <span className="h-2 w-2 rounded-full bg-[#f28c28]" />
            Food • Catering • Hospitality
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-[#172019] sm:text-6xl lg:text-[76px]">
            Good food.
            <br />
            <span className="text-[#176b45]">Better experiences.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-[17px] leading-8 text-[#69736d] sm:text-[19px]">
            CookOnStay brings fresh food, dependable catering and practical
            food solutions together — built for colleges, workplaces, events
            and everyday dining.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/menu"
              className="rounded-2xl bg-[#176b45] px-7 py-4 text-center text-[15px] font-bold text-white shadow-[0_10px_30px_rgba(23,107,69,0.16)] transition hover:bg-[#0e4f32]"
            >
              Explore Our Menu
            </Link>

            <Link
              href="/enquiry"
              className="rounded-2xl border border-[#d9dfda] bg-white px-7 py-4 text-center text-[15px] font-bold text-[#172019] transition hover:border-[#176b45] hover:text-[#176b45]"
            >
              Talk to CookOnStay
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-[#69736d]">
            <div>
              <strong className="text-[#172019]">Since 2022</strong>
              <span className="ml-2">serving with purpose</span>
            </div>

            <div className="hidden h-5 w-px bg-[#d8ddd9] sm:block" />

            <div>
              <strong className="text-[#172019]">Fresh</strong>
              <span className="ml-2">food-focused</span>
            </div>

            <div className="hidden h-5 w-px bg-[#d8ddd9] sm:block" />

            <div>
              <strong className="text-[#172019]">Reliable</strong>
              <span className="ml-2">service</span>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative hidden min-h-[470px] lg:block">
          
          <div className="absolute right-0 top-10 h-[390px] w-[390px] rounded-[42px] border border-[#dce6df] bg-[#e8f2ec]" />

          <div className="absolute right-10 top-0 w-[330px] rounded-[30px] border border-[#e1e5e1] bg-white p-7 shadow-[0_25px_70px_rgba(23,32,25,0.08)]">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm font-bold text-[#172019]">
                CookOnStay
              </span>

              <span className="rounded-full bg-[#e8f2ec] px-3 py-1 text-[11px] font-bold text-[#176b45]">
                FOOD
              </span>
            </div>

            <div className="rounded-2xl bg-[#f8f7f2] p-5">
              <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#69736d]">
                What we deliver
              </div>

              <div className="mt-5 space-y-4">
                {[
                  "Everyday meals",
                  "College & workplace catering",
                  "Events & bulk orders",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#176b45] text-xs font-black text-white">
                      {index + 1}
                    </div>

                    <span className="text-sm font-semibold text-[#29342d]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs text-[#69736d]">
                Simple. Fresh. Reliable.
              </span>

              <span className="h-3 w-3 rounded-full bg-[#f28c28]" />
            </div>
          </div>

          <div className="absolute bottom-12 left-0 w-[250px] rounded-[26px] border border-[#e1e5e1] bg-white p-6 shadow-[0_20px_50px_rgba(23,32,25,0.08)]">
            <div className="text-3xl font-black tracking-[-0.04em] text-[#176b45]">
              2022
            </div>

            <div className="mt-1 text-sm font-semibold text-[#172019]">
              Where our journey began
            </div>

            <p className="mt-2 text-xs leading-5 text-[#69736d]">
              Growing through food, service and real-world experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}