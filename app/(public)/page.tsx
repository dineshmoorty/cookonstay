import Hero from "@/components/home/hero/hero";
import FeaturedMenu from "@/components/home/featured-menu/Featured_Menu";
import WhyChooseUs from "@/components/home/why_choose_us/WhyChooseUs";
import Gallery from "@/components/home/gallery/Gallery";
import Testimonials from "@/components/home/testimonials/Testimonials";
import ContactCTA from "@/components/home/contact-cta/ContactCTA";
import About from "@/components/home/about/About";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedMenu />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <ContactCTA />
      <About />
    </>
  );
}
