import HomeHero from "@/components/hero/HomeHero";
import WhatWeDo from "@/components/hero/WhatWeDo";
import WhyCookOnStay from "@/components/hero/WhyCookOnStay";
import CateringSection from "@/components/hero/CateringSection";
import BrandStory from "@/components/hero/BrandStory";
import FinalCTA from "@/components/hero/FinalCTA";

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