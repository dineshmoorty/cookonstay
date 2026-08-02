import {
  HeartHandshake,
  CookingPot,
  Leaf,
  Home,
} from "lucide-react";

const values = [
  {
    icon: CookingPot,
    title: "Freshly Prepared",
    description:
      "We focus on preparing food fresh, keeping everyday meals simple and satisfying.",
  },
  {
    icon: Home,
    title: "Homely Experience",
    description:
      "Familiar South Indian flavors that bring the comfort of a homemade meal.",
  },
  {
    icon: Leaf,
    title: "Simple Ingredients",
    description:
      "Traditional dishes prepared with familiar ingredients and authentic flavors.",
  },
  {
    icon: HeartHandshake,
    title: "Serve with Care",
    description:
      "Whether it is one meal or a bulk order, every customer deserves the same attention and care.",
  },
];

export default function PurposeSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28" style={{ padding: "20px" }}>

      {/* Background glows */}

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-full px-5 sm:px-6 lg:px-8" style={{ padding: "20px" }}>

        {/* Header */}

        <div className="mx-auto max-w-full text-center">

          <span
            className="
              inline-flex
              rounded-full
              border
              border-orange-400/20
              bg-orange-500/10
              px-4
              py-2
              text-sm
              font-semibold
              text-orange-300
            " style={{ padding: "10px 20px" }}
          >
            🎯 Our Purpose
          </span>

          <h2
            className="
              mt-6
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              sm:text-4xl
            " style={{ padding: "10px 0px" }}
          >
            Good Food Doesn&apos;t Have to Be
            <span className="text-orange-400">
              {" "}Complicated.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-full
              text-base
              leading-8
              text-slate-300
              sm:text-lg
            " style={{ padding: "10px 20px" }}
          >
            Our purpose is to make familiar South Indian food
            accessible through fresh preparation, traditional
            flavors and a warm everyday experience.
          </p>

        </div>

        {/* Value cards */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" style={{ padding: "10px" }}>

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="
                  group
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.06]
                  p-7
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-400/30
                  hover:bg-white/[0.09]
                " style={{ padding: "10px 20px" }}
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-orange-500/15
                    text-orange-400
                    transition
                    duration-300
                    group-hover:bg-orange-500
                    group-hover:text-white
                  "
                >
                  <Icon size={25} />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {value.description}
                </p>

              </article>
            );
          })}

        </div>

        {/* Bottom statement */}

        <div
          className="
            mx-auto
            mt-14
            max-w-full
            border-t
            border-white/10
            pt-10
            text-center
          " style={{ padding: "10px 20px" }}
        >
          <p className="text-xl font-medium leading-9 text-slate-200 sm:text-2xl">
            &ldquo;Serve food we&apos;d be happy to serve
            <span className="text-orange-400">
              {" "}at home.
            </span>
            &rdquo;
          </p>

          <p className="mt-3 text-sm font-medium text-slate-500">
            — The CookOnStay Philosophy
          </p>
        </div>

      </div>
    </section>
  );
}