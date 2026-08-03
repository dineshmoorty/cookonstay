import {
  GraduationCap,
  Baby,
  Cake,
  CalendarHeart,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "School Events",
    description:
      "Breakfast, snacks and special event meals prepared fresh for schools and institutions.",
  },
  {
    icon: Cake,
    title: "Birthday Celebrations",
    description:
      "Celebrate birthdays with traditional South Indian breakfast and dinner favourites.",
  },
  {
    icon: Baby,
    title: "Baby Shower",
    description:
      "Fresh homemade vegetarian meals for memorable family celebrations.",
  },
  {
    icon: CalendarHeart,
    title: "Purattasi Special",
    description:
      "Seasonal vegetarian menu prepared every Purattasi with authentic homemade flavours.",
  },
];

export default function BulkOrdersSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-950
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Background */}

      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-orange-500/20
              bg-orange-500/10
              px-4
              py-2
              text-sm
              font-semibold
              text-orange-300
            "
          >
            🍛 Bulk Orders
          </span>

          <h2
            className="
              mt-6
              text-3xl
              font-bold
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Every Occasion
            <span className="block text-orange-400">
              Deserves Great Food.
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-400
            "
          >
            Whether it's a school function, birthday,
            baby shower or seasonal celebration,
            CookOnStay prepares fresh South Indian food
            with the same homemade care.
          </p>

        </div>

        {/* Cards */}

        <div
          className="
            mt-16
            grid
            gap-6

            md:grid-cols-2

            xl:grid-cols-4
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/5
                  p-7
                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:border-orange-400/40
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-orange-500
                    text-white
                  "
                >
                  <Icon size={26} />
                </div>

                <h3
                  className="
                    mt-6
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-7
                    text-slate-400
                  "
                >
                  {service.description}
                </p>

              </div>
            );
          })}
        </div>

        {/* CTA */}

        <div
          className="
            mt-16
            rounded-[32px]
            bg-gradient-to-r
            from-orange-500
            to-orange-600
            p-8
            text-center
            text-white
            shadow-[0_20px_60px_rgba(249,115,22,0.25)]

            sm:p-10
          "
        >
          <h3
            className="
              text-3xl
              font-bold
            "
          >
            Planning an Event?
          </h3>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-orange-100
              leading-8
            "
          >
            Tell us your date, number of people and preferred menu.
            We'll help you plan a delicious homemade South Indian meal.
          </p>

          <a
            href="https://wa.me/919488270932"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-white
              px-7
              py-3.5
              font-semibold
              text-orange-600

              transition-all
              duration-300

              hover:-translate-y-1
            "
          >
            Chat on WhatsApp

            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}