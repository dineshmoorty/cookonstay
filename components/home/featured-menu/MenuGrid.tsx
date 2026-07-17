import { FEATURED_MENU } from "@/constants/menu";
import MenuCard from "./MenuCard";

export default function MenuGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {FEATURED_MENU.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
}