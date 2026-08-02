"use client";

import { useState } from "react";

import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuFilter,
} from "@/constants/menuItems";

import MenuGrid from "./MenuGrid";

export default function CategoryTabs() {
  const [activeCategory, setActiveCategory] =
    useState<MenuFilter>("All");

  const filteredItems =
    activeCategory === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter(
          (item) => item.category === activeCategory
        );

  return (
    <>
      {/* Category Buttons */}
      <div className="mb-12 flex flex-wrap justify-center gap-3" style={{padding: "10px 0px"}}>

        {MENU_CATEGORIES.map((category) => {

          const active = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`
                rounded-full
                border
                px-5
                py-2.5
                text-sm
                font-semibold
                transition-all
                duration-300
                sm:px-6

                ${
                  active
                    ? `
                      border-orange-500
                      bg-orange-500
                      text-white
                      shadow-lg
                      shadow-orange-500/20
                    `
                    : `
                      border-orange-200
                      bg-white/80
                      text-slate-700
                      backdrop-blur-md
                      hover:border-orange-400
                      hover:bg-orange-50
                      hover:text-orange-600
                    `
                }
              `} style={{padding: "5px 20px"}}
            >
              {category}
            </button>
          );
        })}

      </div>

      <MenuGrid items={filteredItems} />
    </>
  );
}