import HomeHero from "@/components/hero/HomeHero";
import WhatWeDo from "@/components/hero/WhatWeDo";
import FoodDeliveryLaunch from "@/components/hero/FoodDeliveryLaunch";
import WhyCookOnStay from "@/components/hero/WhyCookOnStay";
import CateringSection from "@/components/hero/CateringSection";
import BrandStory from "@/components/hero/BrandStory";
import FinalCTA from "@/components/hero/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food & Catering in Madurai",
  description:
    "Discover CookOnStay in Madurai for South Indian everyday food, catering packages and bulk food orders for colleges, workplaces and events.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FoodDeliveryLaunch />
      <WhatWeDo />
      <WhyCookOnStay />
      <CateringSection />
      <BrandStory />
      <FinalCTA />
    </>
  );
}