import { Check } from "lucide-react";

import HeroCTA from "./HeroCTA";

const promises = ["Made fresh daily", "Carefully prepared", "Comfort in every bite"];

export default function HeroContent() {
  return (
    <div className="relative z-10 mx-auto max-w-[38rem] text-center lg:mx-0 lg:text-left">
      <span className="inline-flex items-center rounded-full border border-orange-200/80 bg-orange-50 px-3.5 py-1.5 text-xs font-semibold tracking-[0.12em] text-orange-700 uppercase shadow-sm shadow-orange-950/[0.03]">
        Fresh South Indian food
      </span>

      <h1 className="mt-6 text-5xl font-semibold tracking-[-0.055em] text-gray-950 sm:text-6xl sm:leading-[1.04] lg:mt-7 lg:text-[4rem] xl:text-[4.35rem]">
        Made with care.
        <span className="block text-green-700">Served like home.</span>
      </h1>

      <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0">
        Authentic South Indian breakfasts and wholesome meals, prepared fresh
        each day with honest ingredients and recipes that feel familiar.
      </p>

      <HeroCTA />

      <div className="mt-10 flex flex-col items-center gap-3 text-sm font-medium text-gray-700 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-3 lg:justify-start">
        {promises.map((promise) => (
          <span key={promise} className="inline-flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Check aria-hidden="true" size={12} strokeWidth={3} />
            </span>
            {promise}
          </span>
        ))}
      </div>
    </div>
  );
}
