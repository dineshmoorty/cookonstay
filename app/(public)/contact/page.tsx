import type { Metadata } from "next";
import ContactHero from "@/components/contact/hero/ContactHero";
import LocationSection from "@/components/contact/location/LocationSection";
import ContactMethods from "@/components/contact/methods/ContactMethods";
import BulkOrdersSection from "@/components/contact/bulk-orders/BulkOrdersSection";

export const metadata: Metadata = {
  title: "Contact, Directions & Bulk Orders",
  description:
    "Contact CookOnStay in Madurai for homemade South Indian meals, directions, catering, and bulk food orders.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMethods />
      <LocationSection />
      {/* <BulkOrdersSection /> */}
    </>
  );
}
