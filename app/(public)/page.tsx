import type { Metadata } from "next";
import Hero from "@/components/home/hero/hero";
import FeaturedMenu from "@/components/home/featured-menu/Featured_Menu";
import WhyChooseUs from "@/components/home/why_choose_us/WhyChooseUs";
import Journey from "@/components/home/journey/Journey";
import Gallery from "@/components/home/gallery/Gallery";
import Testimonials from "@/components/home/testimonials/Testimonials";
import ContactCTA from "@/components/home/contact-cta/ContactCTA";
import About from "@/components/home/about/About";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedMenu />
      <WhyChooseUs />
      <Journey />
      <Gallery />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
