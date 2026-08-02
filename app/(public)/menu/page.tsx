import BulkOrdersSection from "@/components/menu/bulk-orders/BulkOrdersSection";
import MenuSection from "@/components/menu/categories/MenuSection";
import FAQSection from "@/components/menu/faq/FAQSection";
import MenuHero from "@/components/menu/hero/MenuHero";
import MoodSection from "@/components/menu/mood/MoodSection";
import OrderCTA from "@/components/menu/order-cta/OrderCTA";

export default function MenuPage() {
  return (
    <main>
      <MenuHero />
      <MoodSection />
      <MenuSection />
      <BulkOrdersSection />
      <FAQSection />
      <OrderCTA />
    </main>
  );
}