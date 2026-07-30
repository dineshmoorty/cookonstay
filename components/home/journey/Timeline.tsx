"use client";

import { motion, MotionConfig, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { TIMELINE } from "@/constants/timeline";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 45%"],
  });
  const timelineProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });
  const markerPosition = useTransform(timelineProgress, [0, 1], ["0%", "100%"]);

  return (
    <MotionConfig reducedMotion="user">
      <div ref={timelineRef} className="relative mx-auto max-w-full space-y-16 px-6 md:space-y-24" style={{padding: "20px"}}>

        <div className="absolute left-6 top-0 h-full w-1 rounded bg-orange-100 md:left-1/2 md:-translate-x-1/2" />
        <motion.div
          aria-hidden="true"
          className="absolute left-6 top-0 h-full w-1 origin-top rounded bg-gradient-to-b from-orange-400 via-orange-500 to-amber-300 shadow-[0_0_12px_rgba(249,115,22,0.45)] md:left-1/2 md:-translate-x-1/2"
          style={{ scaleY: timelineProgress }}
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-6 z-20 flex h-5 w-5 -translate-x-[7px] items-center justify-center rounded-full bg-orange-500 shadow-[0_0_0_6px_rgba(255,237,213,0.9),0_0_18px_rgba(249,115,22,0.75)] md:left-1/2 md:-translate-x-1/2"
          style={{ top: markerPosition }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        </motion.div>

        <div className="space-y-16">
          {TIMELINE.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              reverse={index % 2 === 1}
              index={index}
            />
          ))}
        </div>

      </div>
    </MotionConfig>
  );
}
