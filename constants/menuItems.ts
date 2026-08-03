export type MenuCategory =
  | "Breakfast"
  | "Rice Varieties";

export type MenuItem = {
  id: number;
  name: string;
  category: MenuCategory;
  price: number;
  image: string;
  description: string;
  popular?: boolean;
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Idli",
    category: "Breakfast",
    price: 8,
    image: "/images/menu/idli.webp",
    description:
      "Soft and fluffy steamed idlis, freshly prepared for a classic South Indian breakfast.",
    popular: true,
  },

  {
    id: 2,
    name: "Ven Pongal",
    category: "Breakfast",
    price: 40,
    image: "/images/menu/venpongal.webp",
    description:
      "Comforting ven pongal prepared with rice, moong dal, pepper, cumin and curry leaves.",
    popular: true,
  },

  {
    id: 3,
    name: "Idli & Dosa Maavu",
    category: "Breakfast",
    price: 40,
    image: "/images/menu/idli-dosa-maavu.png",
    description:
      "Freshly prepared batter for soft idlis and crispy homemade dosas.",
  },

  {
    id: 4,
    name: "Lemon Rice",
    category: "Rice Varieties",
    price: 40,
    image: "/images/menu/lemonrice.png",
    description:
      "Bright and tangy lemon rice with traditional South Indian tempering.",
  },

  {
    id: 5,
    name: "Tomato Rice",
    category: "Rice Varieties",
    price: 40,
    image: "/images/menu/Tomato_rice.webp",
    description:
      "Flavorful tomato rice prepared with ripe tomatoes and aromatic spices.",
    popular: true,
  },

  {
    id: 6,
    name: "Tamarind Rice",
    category: "Rice Varieties",
    price: 40,
    image: "/images/menu/tamarind_rice.webp",
    description:
      "Traditional tamarind rice with a rich, tangy South Indian flavor.",
  },

  {
    id: 7,
    name: "Curd Rice",
    category: "Rice Varieties",
    price: 40,
    image: "/images/menu/curdrice.png",
    description:
      "Creamy curd rice finished with a simple traditional tempering.",
  },
];

export const MENU_CATEGORIES = [
  "All",
  "Breakfast",
  "Rice Varieties",
] as const;

export type MenuFilter = (typeof MENU_CATEGORIES)[number];
