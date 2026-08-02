import DifferenceSection from "@/components/about/difference/DifferenceSection";
import JourneySection from "@/components/about/journey/JourneySection";
import AboutHero from "@/components/about/hero/AboutHero";
import PurposeSection from "@/components/about/purpose/PurposeSection";
import OurStory from "@/components/about/story/OurStory";
import PromiseSection from "@/components/about/promise/PromiseSection";
import VisitSection from "@/components/about/visit/VisitSection";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <PurposeSection />
      <DifferenceSection />
      <JourneySection />
      <PromiseSection />
      <VisitSection />
    </main>
  );
}