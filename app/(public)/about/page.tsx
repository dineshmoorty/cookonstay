import type { Metadata } from "next";
import DifferenceSection from "@/components/about/difference/DifferenceSection";
import JourneySection from "@/components/about/journey/JourneySection";
import AboutHero from "@/components/about/hero/AboutHero";
import PurposeSection from "@/components/about/purpose/PurposeSection";
import OurStory from "@/components/about/story/OurStory";
import PromiseSection from "@/components/about/promise/PromiseSection";
import VisitSection from "@/components/about/visit/VisitSection";

export const metadata: Metadata = {
  title: "About Our Homemade South Indian Food",
  description:
    "Learn how CookOnStay brings familiar, homemade South Indian food to Madurai with care, quality, and local flavour.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <PurposeSection />
      <DifferenceSection />
      <JourneySection />
      <PromiseSection />
      <VisitSection />
    </>
  );
}
