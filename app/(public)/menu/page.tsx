import type { Metadata } from "next";
import BulkOrdersSection from "@/components/menu/bulk-orders/BulkOrdersSection";
import MenuSection from "@/components/menu/categories/MenuSection";
import FAQSection from "@/components/menu/faq/FAQSection";
import MenuHero from "@/components/menu/hero/MenuHero";
import MoodSection from "@/components/menu/mood/MoodSection";
import OrderCTA from "@/components/menu/order-cta/OrderCTA";

export const metadata: Metadata = {
  title: "South Indian Menu",
  description:
    "Explore CookOnStay's homemade South Indian menu in Madurai, including daily favourites, bulk orders, and special meals.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <MenuHero />
      <MoodSection />
      <MenuSection />
      <BulkOrdersSection />
      <FAQSection />
      <OrderCTA />
    </>
  );
}
