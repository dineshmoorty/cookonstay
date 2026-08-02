import MenuCard from "./MenuCard";
import { MenuItem } from "@/constants/menuItems";

type MenuGridProps = {
  items: MenuItem[];
};

export default function MenuGrid({
  items,
}: MenuGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-3
        sm:grid-cols-2
        lg:grid-cols-3
        xl:gap-6
      "
    >
      {items.map((item) => (
        <MenuCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}