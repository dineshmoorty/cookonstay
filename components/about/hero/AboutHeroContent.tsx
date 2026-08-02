import { ArrowDown } from "lucide-react";

export default function AboutHeroContent() {
  return (
    <div>
      <span
        className="
          inline-flex
          rounded-full
          bg-orange-100
          px-4
          py-2
          text-sm
          font-semibold
          text-orange-600
        "
      >
        ❤️ Our Story
      </span>

      <h1
        className="
          mt-6
          text-4xl
          font-bold
          leading-tight
          tracking-tight
          text-slate-900
          sm:text-5xl
        "
      >
        Simple Food.
        <span className="block text-orange-500">
          Traditional Taste.
        </span>
        Made with Care.
      </h1>

      <p
        className="
          mt-6
          max-w-full
          text-base
          leading-8
          text-slate-600
          sm:text-lg
        "
      >
        CookOnStay brings familiar South Indian flavors to everyday
        meals, with a focus on freshly prepared food, traditional
        recipes and a warm homemade experience.
      </p>

      <p
        className="
          mt-4
          max-w-full
          text-base
          leading-8
          text-slate-600
        "
      >
        From everyday breakfast to celebrations and bulk orders,
        every order is an opportunity for us to serve food with care.
      </p>

      <a
        href="#our-story"
        className="
          mt-8
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-orange-500
          px-6
          py-3.5
          font-semibold
          text-white
          transition
          duration-300
          hover:bg-orange-600
        " style={{ padding: "10px 20px" }}
      >
        Discover Our Story

        <ArrowDown size={18} />
      </a>
    </div>
  );
}