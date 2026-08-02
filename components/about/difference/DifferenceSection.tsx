import {
  MapPin,
  Store,
  UtensilsCrossed,
  UsersRound,
  ArrowUpRight,
} from "lucide-react";

const differences = [
  {
    number: "01",
    icon: Store,
    title: "Street-Vendor Roots",
    description:
      "CookOnStay grew from a local street food setup, keeping us close to the people we serve and the everyday food they enjoy.",
  },
  {
    number: "02",
    icon: UtensilsCrossed,
    title: "South Indian at Heart",
    description:
      "Our menu stays focused on familiar South Indian favorites — from idli and ven pongal to traditional rice varieties.",
  },
  {
    number: "03",
    icon: UsersRound,
    title: "One Meal to Bulk Orders",
    description:
      "Whether it is an everyday meal or food for a school event, birthday or family function, we bring the same care to every order.",
  },
  {
    number: "04",
    icon: MapPin,
    title: "Proudly from Madurai",
    description:
      "CookOnStay is rooted in Madurai, serving our local community with food inspired by the flavors we grew up with.",
  },
];

export default function DifferenceSection() {
  return (
    <section className="relative overflow-hidden bg-orange-50/50 py-20 sm:py-24 lg:py-28" style={{ padding: "20px" }}>

      {/* Background */}

      <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-full px-5 sm:px-6 lg:px-8" style={{ padding: "20px" }}>

        {/* HEADER */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

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
              " style={{ padding: "10px 20px" }}
            >
              ✨ What Makes Us Different
            </span>

            <h2
              className="
                mt-6
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                text-slate-900
                sm:text-4xl
              " style={{ padding: "10px 0px" }}
            >
              Local Roots.
              <span className="block text-orange-500">
                Real Food.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:justify-self-end" style={{ padding: "10px 20px" }}>
            We&apos;re not trying to turn simple South Indian food
            into something complicated. CookOnStay is about familiar
            dishes, local connection and serving people with care.
          </p>

        </div>

        {/* CARDS */}

        <div className="mt-14 grid gap-5 md:grid-cols-2" >

          {differences.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-orange-100
                  bg-white/80
                  p-7
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-200
                  hover:shadow-[0_20px_50px_rgba(249,115,22,0.10)]
                  sm:p-8
                " style={{ padding: "10px 20px" }}
              >
                {/* Number */}

                <span
                  className="
                    absolute
                    right-6
                    top-4
                    text-6xl
                    font-black
                    text-orange-100
                    transition-colors
                    duration-300
                    group-hover:text-orange-200/70
                  "
                >
                  {item.number}
                </span>

                {/* Icon */}

                <div
                  className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-orange-100
                    text-orange-600
                    transition-all
                    duration-300
                    group-hover:bg-orange-500
                    group-hover:text-white
                  "
                >
                  <Icon size={25} />
                </div>

                <div className="relative mt-8">

                  <div className="flex items-center gap-2">

                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                      {item.title}
                    </h3>

                    <ArrowUpRight
                      size={19}
                      className="
                        text-orange-400
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />

                  </div>

                  <p className="mt-4 max-w-xl leading-7 text-slate-600">
                    {item.description}
                  </p>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}