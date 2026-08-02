"use client";

import { motion } from "framer-motion";
import {
  Baby,
  CalendarDays,
  CakeSlice,
  Flag,
  School,
  Store,
} from "lucide-react";

const milestones = [
  {
    date: "2022",
    icon: Store,
    title: "The Journey Begins",
    description:
      "CookOnStay began its journey in Madurai in 2022, serving freshly prepared South Indian food with a simple focus on familiar taste, quality and care.",
    highlight: "Established",
  },

  {
    date: "Every Purattasi",
    icon: CalendarDays,
    title: "A Tradition That Returns Every Year",
    description:
      "Purattasi became a special part of the CookOnStay journey, with customers returning every year to place food orders during the traditional month.",
    highlight: "Yearly Orders",
  },

  {
    date: "Growing Journey",
    icon: CakeSlice,
    title: "Birthday Celebration Orders",
    description:
      "CookOnStay gradually became part of customers' special occasions, receiving food orders for birthday celebrations and family gatherings.",
  },

  {
    date: "Growing Journey",
    icon: Baby,
    title: "Baby Shower Orders",
    description:
      "Our journey expanded further as families trusted CookOnStay with food orders for baby showers and other meaningful celebrations.",
  },

  {
    date: "26 Jan 2026",
    icon: School,
    title: "400 Idlis for Sourashtra Boys School",
    description:
      "One of our memorable milestones was preparing and delivering 400 idlis for a Republic Day event at Sourashtra Boys School.",
    highlight: "400 Idlis",
  },

  {
    date: "Today",
    icon: Flag,
    title: "The Journey Continues",
    description:
      "From a local food shop started in 2022 to everyday customers, recurring seasonal orders and special-event bulk orders, every order continues to shape the CookOnStay story.",
    highlight: "Since 2022",
  },
];

type TimelineItem = (typeof milestones)[number];

export default function JourneySection() {
  return (
    <section
      id="our-journey"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-28
      "style={{ padding: "20px" }}
    >
      {/* Background Decorations */}

      <div
        className="
          absolute
          -left-40
          top-40
          h-96
          w-96
          rounded-full
          bg-orange-200/20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-20
          h-96
          w-96
          rounded-full
          bg-amber-200/20
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
        " style={{ padding: "20px" }}
      >
        {/* Header */}

        <div className="mx-auto max-w-full text-center">
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
            🏆 Our Journey
          </span>

          <h2
            className="
              mt-6
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-4xl
            "style={{ padding: "10px 0px" }}
          >
            Serving Since
            <span className="text-orange-500">
              {" "}2022.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-full
              text-base
              leading-8
              text-slate-600
              sm:text-lg
            "style={{ padding: "10px 20px" }}
          >
            What started as a local food shop in Madurai has grown
            through everyday customers, returning seasonal orders
            and memorable celebrations.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mx-auto mt-16 max-w-full" >

          {/* Timeline Line */}

          <motion.div
            className="
              absolute
              left-[23px]
              top-0
              h-full
              w-[2px]
              bg-gradient-to-b
              from-orange-200
              via-orange-500
              to-orange-100
              md:left-1/2
              md:-translate-x-1/2
            "
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-10 md:space-y-14" >
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const leftSide = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.date}-${item.title}`}
                  className="
                    relative
                    grid
                    grid-cols-[48px_1fr]
                    gap-3
                    md:grid-cols-[1fr_80px_1fr]
                    md:gap-8
                  "
                  initial={{ opacity: 0, x: leftSide ? -32 : 32, y: 18 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Desktop Left */}

                  <div className="hidden md:block" >
                    {leftSide && (
                      <div className="flex justify-end">
                        <TimelineCard item={item} />
                      </div>
                    )}
                  </div>

                  {/* Center Icon */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      justify-center
                      md:col-start-2
                    "
                  >
                    <motion.div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border-4
                        border-white
                        bg-orange-500
                        text-white
                        shadow-lg
                        shadow-orange-500/20
                      "
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 20,
                        delay: index * 0.1 + 0.1,
                      }}
                    >
                      <motion.span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full border border-orange-300"
                        animate={{ scale: [1, 1.65], opacity: [0.55, 0] }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: index * 0.16,
                        }}
                      />
                      <Icon size={19} />
                    </motion.div>
                  </div>

                  {/* Mobile Card */}

                  <div className="md:hidden">
                    <TimelineCard item={item} />
                  </div>

                  {/* Desktop Right */}

                  <div className="hidden md:block">
                    {!leftSide && (
                      <div className="flex justify-start">
                        <TimelineCard item={item} />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Since 2022 */}

        <div className="mx-auto mt-16 max-w-full text-center" style={{ padding: "10px 20px" }}>
          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-orange-100
              bg-orange-50
              px-5
              py-3
            "style={{ padding: "10px 20px" }}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />

            <p className="text-sm font-semibold text-slate-700">
              Proudly serving Madurai since 2022
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  item,
}: {
  item: TimelineItem;
}) {
  return (
    <motion.article
      className="
        group
        w-full
        max-w-md
        rounded-[24px]
        border
        border-orange-100
        bg-white/90
        p-6
        text-left
        shadow-sm
        backdrop-blur-xl
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-orange-200
        hover:shadow-[0_18px_45px_rgba(249,115,22,0.10)]
      "
      style={{ padding: "24px", margin: "10px 0px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Date / Highlight */}

      <div className="flex flex-wrap items-center gap-2"  >
        <span
          className="
            rounded-full
            bg-orange-100
            px-3
            py-1
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-orange-600
          "style={{ padding: "5px 10px"}}
        >
          {item.date}
        </span>

        {"highlight" in item && item.highlight && (
          <span
            className="
              rounded-full
              bg-slate-900
              px-3
              py-1
              text-xs
              font-semibold
              text-white
            "style={{ padding: "5px 10px" }}
          >
            {item.highlight}
          </span>
        )}
      </div>

      {/* Title */}

      <h3 className="mt-4 text-xl font-bold text-slate-900" style={{ padding: "10px 0px" }}>
        {item.title}
      </h3>

      {/* Description */}

      <p className="mt-3 leading-7 text-slate-600" >
        {item.description}
      </p>
    </motion.article>
  );
}
