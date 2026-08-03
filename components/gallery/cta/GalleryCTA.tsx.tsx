import Link from "next/link";
import {
  ArrowRight,
  Heart,
  MessageCircle,
  UtensilsCrossed,
} from "lucide-react";

export default function GalleryCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-orange-50/60
        to-orange-50
        px-5
        py-20
        sm:px-6
        sm:py-24
        lg:py-28
      " style={{padding: "20px"}}
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -left-40
          top-0
          h-96
          w-96
          rounded-full
          bg-orange-200/30
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
          bg-amber-200/30
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-full
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-orange-100
            bg-white/80
            px-6
            py-14
            text-center
            shadow-[0_25px_80px_rgba(249,115,22,0.10)]
            backdrop-blur-xl

            sm:px-10
            sm:py-16

            lg:px-16
            lg:py-20
          "
        >
          {/* Decorative Glow */}

          <div
            className="
              absolute
              left-1/2
              top-0
              h-60
              w-60
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-orange-300/20
              blur-3xl
            "
          />

          <div className="relative z-10">

            {/* Icon */}

            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-orange-500
                text-white
                shadow-lg
                shadow-orange-500/20
              "style={{margin: "10px"}}
            >
              <Heart
                size={23}
                className="fill-white"
              />
            </div>

            {/* Label */}

            <p
              className="
                mt-6
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-orange-500
              "
            >
              From Our Kitchen to Your Table
            </p>

            {/* Heading */}

            <h2
              className="
                mx-auto
                mt-4
                max-w-full
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                text-slate-900
                sm:text-4xl
              "
            >
              Seen Something That
              <span className="text-orange-500">
                {" "}Made You Hungry?
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-6
                max-w-full
                text-base
                leading-8
                text-slate-600
                sm:text-lg
              "style={{padding: "5px 10px"}}
            >
              Explore our menu for familiar South Indian favourites,
              or get in touch with us for everyday meals, bulk orders
              and special occasions.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-9
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              "style={{padding: "5px 10px"}}
            >
              {/* Menu */}

              <Link
                href="/menu"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-orange-500
                  px-6
                  py-3.5
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-orange-500/20
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-orange-600

                  sm:w-auto
                "style={{padding: "5px 10px"}}
              >
                <UtensilsCrossed size={18} />

                Explore Menu

                <ArrowRight size={17} />
              </Link>

              {/* WhatsApp */}

              <a
                href="https://wa.me/919488270932"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-orange-200
                  bg-white
                  px-6
                  py-3.5
                  font-semibold
                  text-slate-800
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:border-orange-300
                  hover:bg-orange-50

                  sm:w-auto
                "style={{padding: "5px 10px"}}
              >
                <MessageCircle
                  size={18}
                  className="text-orange-500"
                />

                Talk to Us
              </a>

            </div>

            {/* Small closing line */}

            <p
              className="
                mt-8
                text-sm
                font-medium
                text-slate-500
              "style={{padding: "5px 10px"}}
            >
              🍛 Fresh food. Familiar flavours. Made with care.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}