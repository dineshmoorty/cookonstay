import Image from "next/image";
import {
  CalendarDays,
  Heart,
  PackageCheck,
  Sparkles,
} from "lucide-react";

const moments = [
  {
    icon: PackageCheck,
    tag: "Bulk Orders",
    title: "Prepared for Bigger Moments",
    description:
      "From a few plates to larger food requirements, we prepare every order with the same attention to freshness, consistency and care.",
    image: "/images/gallery/moments/bulk-order.png",
  },
  {
    icon: Heart,
    tag: "Celebrations",
    title: "Food for Special Occasions",
    description:
      "Birthdays, baby showers and family gatherings become even more memorable with familiar South Indian food shared together.",
    image: "/images/gallery/moments/celebration.png",
  },
  {
    icon: CalendarDays,
    tag: "Seasonal Tradition",
    title: "Purattasi, Every Year",
    description:
      "Purattasi is a recurring part of our journey, with traditional vegetarian food orders returning each year during the special month.",
    image: "/images/gallery/moments/purattasi.png",
  },
];

export default function MomentsSection() {
  return (
    <section
      id="behind-every-order"
      className="
        relative
        overflow-hidden
        bg-slate-950
        py-20
        sm:py-24
        lg:py-28
      "style={{padding: "20px"}}
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -left-40
          top-20
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
        {/* Header */}

        <div
          className="
            grid
            gap-6
            lg:grid-cols-2
            lg:items-end
          "style={{padding: "10px"}}
        >
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
              "style={{padding:"5px 10px"}}
            >
              <Sparkles size={16} />

              Behind Every Order
            </span>

            <h2
              className="
                mt-6
                max-w-full
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                text-white
                sm:text-4xl
              "
            >
              More Than Food.
              <span className="block text-orange-400">
                Part of the Moment.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-xl
              text-base
              leading-8
              text-slate-400
              lg:ml-auto
              sm:text-lg
            "
          >
            CookOnStay has grown through everyday meals,
            recurring seasonal orders and food prepared for
            meaningful family occasions.
          </p>
        </div>

        {/* Moments */}

        <div
          className="
            mt-14
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          " style={{padding: "10px"}}
        >
          {moments.map((moment) => {
            const Icon = moment.icon;

            return (
              <article
                key={moment.title}
                className="
                  group
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.05]
                "style={{padding: "10px"}}
              >
                {/* Image */}

                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-slate-950/70
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Icon */}

                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-orange-500
                      text-white
                      shadow-lg
                    "
                  >
                    <Icon size={21} />
                  </div>
                </div>

                {/* Content */}

                <div className="p-6 sm:p-7">
                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-orange-400
                    "style={{padding:"5px 0"}}
                  >
                    {moment.tag}
                  </p>

                  <h3
                    className="
                      mt-3
                      text-xl
                      font-bold
                      text-white
                      sm:text-2xl
                    "
                  >
                    {moment.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-7
                      text-slate-400
                    "
                  >
                    {moment.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Small Highlight */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-4
            rounded-[24px]
            border
            border-orange-400/15
            bg-orange-500/[0.07]
            p-5
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:p-6
          "style={{padding: "10px"}}
        >
          <div>
            <p className="text-sm font-semibold text-orange-400">
              A memorable milestone
            </p>

            <p className="mt-1 text-lg font-bold text-white">
              400 Idlis prepared for an order on 26 January 2026.
            </p>
          </div>

          <span
            className="
              w-fit
              rounded-full
              bg-orange-500
              px-4
              py-2
              text-sm
              font-bold
              text-white
            "style={{padding: "5px 10px"}}
          >
            400 Idlis
          </span>
        </div>
      </div>
    </section>
  );
}