import Image from "next/image";
import {
  Heart,
  MapPin,
  UtensilsCrossed,
} from "lucide-react";

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28" style={{ padding: "20px" }}
    >
      <div className="mx-auto max-w-full px-5 sm:px-6 lg:px-8" style={{ padding: "20px" }}>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT - IMAGE */}

          <div className="relative">

            <div className="absolute -left-10 -top-10 h-52 w-52 rounded-full bg-orange-200/30 blur-3xl" />

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                bg-orange-50
                p-2
                shadow-[0_25px_70px_rgba(249,115,22,0.12)]
              "
            >
              <div className="relative h-[420px] overflow-hidden rounded-[26px] sm:h-[520px]">

                <Image
                  src="/images/about/hero_banner.png"
                  alt="CookOnStay street food stall in Madurai"
                  fill
                  className="object-cover"
                />

              </div>
            </div>

            {/* Floating location */}

            <div
              className="
                absolute
                -bottom-5
                right-4
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-orange-100
                bg-white/95
                px-5
                py-4
                shadow-xl
                backdrop-blur-xl
                sm:right-[-20px]
              " style={{ padding: "10px 20px" }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <MapPin size={21} />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Our Home
                </p>

                <p className="font-bold text-slate-900">
                  Madurai, Tamil Nadu
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT - STORY */}

          <div>

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-orange-100
                px-4
                py-2
                text-sm
                font-semibold
                text-orange-600
              " style={{ padding: "10px 20px" }}
            >
              <Heart size={16} />

              How It Started
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
              "style={{ padding: "10px 0px" }}
            >
              From a Simple Idea to
              <span className="text-orange-500">
                {" "}CookOnStay.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600 sm:text-lg" style={{ padding: "10px 0px" }}>

              <p>
                CookOnStay began with a simple thought — everyday
                food should feel familiar, freshly prepared and
                comforting.
              </p>

              <p>
                Starting as a local street food venture in Madurai,
                we focused on South Indian dishes people already
                know and love — from soft idlis and ven pongal to
                traditional rice varieties.
              </p>

              <p>
                What started with everyday customers has gradually
                grown into something more. CookOnStay now also
                serves bulk orders for school events, birthdays,
                baby showers and family celebrations.
              </p>

              <p>
                Our goal remains simple: serve food with the warmth
                and familiarity of a homemade meal.
              </p>

            </div>

            {/* Highlight */}

            <div
              className="
                mt-8
                flex
                items-start
                gap-4
                rounded-2xl
                border
                border-orange-100
                bg-orange-50/70
                p-5
              " style={{ padding: "10px" }}
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-orange-500
                  text-white
                "
              >
                <UtensilsCrossed size={20} />
              </div>

              <div>
                <p className="font-bold text-slate-900">
                  It Feels Like Home
                </p>

                <p className="mt-1 leading-6 text-slate-600">
                  More than a tagline — it&apos;s the experience
                  we want every CookOnStay meal to carry.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}