import {
  CheckCircle2,
  Heart,
  Sparkles,
} from "lucide-react";

const promises = [
  "Freshly prepared South Indian food",
  "Familiar and traditional flavours",
  "Care and attention for every order",
  "Homely food experience",
  "Support for individual and bulk orders",
  "Growing without losing our roots",
];

export default function PromiseSection() {
  return (
    <section
      id="our-promise"
      className="
        relative
        overflow-hidden
        bg-slate-950
        py-20
        text-white
        sm:py-24
        lg:py-28
      "style={{ padding: "20px" }}
    >
      {/* Background glow */}

      <div
        className="
          absolute
          -left-40
          top-0
          h-96
          w-96
          rounded-full
          bg-orange-500/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-amber-400/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-full
          px-5
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-20
          "
        >
          {/* LEFT */}

          <div>
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-orange-400/20
                bg-orange-500/10
                px-4
                py-2
                text-sm
                font-semibold
                text-orange-300
              "style={{ padding: "5px 20px" }}
            >
              <Heart
                size={16}
                className="fill-orange-400"
              />

              Our Promise
            </span>

            <h2
              className="
                mt-6
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                sm:text-4xl
              "style={{ padding: "5px 0px" }}
            >
              As We Grow,
              <span className="block text-orange-400">
                Our Roots Stay the Same.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-full
                text-base
                leading-8
                text-slate-300
                sm:text-lg
              "
            >
              CookOnStay has been serving since 2022, but the idea
              behind what we do remains simple — prepare familiar
              food with care and create an experience that feels
              close to home.
            </p>

            <p
              className="
                mt-4
                max-w-full
                leading-8
                text-slate-400
              "style={{ padding: "5px 0px" }}
            >
              Whether you visit us for an everyday meal or trust us
              with food for a special occasion, we want the same
              warmth and attention to be part of every order.
            </p>

            {/* Quote */}

            <div
              className="
                mt-9
                border-l-2
                border-orange-500
                pl-5
              "
            >
              <p
                className="
                  text-xl
                  font-semibold
                  leading-8
                  text-white
                  sm:text-2xl
                "
              >
                “It Feels Like Home.”
              </p>

              <p className="mt-2 text-sm text-slate-400" style={{ padding: "5px 0px" }}>
                The promise behind CookOnStay
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              relative
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.06]
              p-6
              backdrop-blur-xl
              sm:p-8
            " style={{ padding: "20px" }}
          >
            {/* Card glow */}

            <div
              className="
                absolute
                right-0
                top-0
                h-40
                w-40
                rounded-full
                bg-orange-500/10
                blur-3xl
              "
            />

            <div className="relative">

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-orange-500
                    text-white
                  "
                >
                  <Sparkles size={21} />
                </div>

                <div>
                  <p className="text-sm text-orange-300">
                    What We Stand For
                  </p>

                  <h3 className="text-xl font-bold sm:text-2xl">
                    Every CookOnStay Order
                  </h3>
                </div>

              </div>

              <div className="mt-8 space-y-3" style={{ padding: "10px 0px" }}>

                {promises.map((promise) => (
                  <div
                    key={promise}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-white/[0.05]
                      px-4
                      py-4
                      transition-all
                      duration-300

                      hover:border-orange-400/20
                      hover:bg-white/[0.08]
                    " style={{ padding: "10px 20px" , margin: "5px 0px" }}
                  >
                    <CheckCircle2
                      size={21}
                      className="
                        shrink-0
                        text-orange-400
                      "
                    />

                    <p
                      className="
                        font-medium
                        text-slate-200
                      "
                    >
                      {promise}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}