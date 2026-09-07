import HomeHero from "@/components/hero/HomeHero";
import WhatWeDo from "@/components/hero/WhatWeDo";
import WhyCookOnStay from "@/components/hero/WhyCookOnStay";
import CateringSection from "@/components/hero/CateringSection";
import BrandStory from "@/components/hero/BrandStory";
import FinalCTA from "@/components/hero/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food & Catering",
  description:
    "CookOnStay delivers everyday food, catering and practical food solutions for colleges, workplaces, events and group requirements.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhatWeDo />
      <WhyCookOnStay />
      <CateringSection />
      <BrandStory />
      <FinalCTA />
    </>
  );
}