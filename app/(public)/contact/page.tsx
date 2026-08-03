import ContactHero from "@/components/contact/hero/ContactHero";
import LocationSection from "@/components/contact/location/LocationSection";
import ContactMethods from "@/components/contact/methods/ContactMethods";
import BulkOrdersSection from "@/components/contact/bulk-orders/BulkOrdersSection";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactMethods />
      {/* <LocationSection /> */}
      {/* <BulkOrdersSection /> */}
    </main>
  );
}