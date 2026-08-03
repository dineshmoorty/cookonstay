"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Camera,
  Store,
  UtensilsCrossed,
  UsersRound,
  PartyPopper,
} from "lucide-react";

const categories = [
  {
    id: "all",
    label: "All",
    icon: Camera,
  },
  {
    id: "food",
    label: "Food",
    icon: UtensilsCrossed,
  },
  {
    id: "stall",
    label: "Our Stall",
    icon: Store,
  },
  {
    id: "bulk",
    label: "Bulk Orders",
    icon: UsersRound,
  },
  {
    id: "celebrations",
    label: "Celebrations",
    icon: PartyPopper,
  },
];

const galleryItems = [
  {
    id: 1,
    src: "/images/gallery/collection/idli.webp",
    title: "Soft Idlis",
    category: "food",
    size: "large",
  },
  {
    id: 2,
    src: "/images/gallery/collection/pongal.webp",
    title: "Ven Pongal",
    category: "food",
    size: "normal",
  },
  {
    id: 3,
    src: "/images/gallery/collection/stall.webp",
    title: "Our Madurai Stall",
    category: "stall",
    size: "tall",
  },
  {
    id: 4,
    src: "/images/gallery/collection/variety-rice.webp",
    title: "Traditional Variety Rice",
    category: "food",
    size: "normal",
  },
  {
    id: 5,
    src: "/images/gallery/collection/400-idlis.webp",
    title: "400 Idli Order",
    category: "bulk",
    size: "large",
  },
  {
    id: 6,
    src: "/images/gallery/collection/birthday-order.webp",
    title: "Birthday Order",
    category: "celebrations",
    size: "normal",
  },
  {
    id: 7,
    src: "/images/gallery/collection/baby-shower.webp",
    title: "Baby Shower Order",
    category: "celebrations",
    size: "normal",
  },
  {
    id: 8,
    src: "/images/gallery/collection/purattasi.webp",
    title: "Purattasi Special",
    category: "bulk",
    size: "tall",
  },
];

export default function GalleryCollection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28" style={{padding: "20px"}}>

      {/* Background Glow */}

      <div
        className="
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-orange-200/20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-20
          h-96
          w-96
          rounded-full
          bg-amber-200/20
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-full px-5 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-full text-center">

          <span
            className="
              inline-flex
              rounded-full
              bg-orange-100
              px-4
              py-2
              text-sm
              font-semibold
              text-orange-600
            "style={{padding: "5px 10px"}}
          >
            📸 Explore Our Gallery
          </span>

          <h2
            className="
              mt-6
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-4xl
            "style={{padding: "5px 10px"}}
          >
            A Taste of
            <span className="text-orange-500">
              {" "}CookOnStay.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-full
              text-base
              leading-8
              text-slate-600
              sm:text-lg
            "style={{padding: "5px 10px"}}
          >
            From everyday favourites to bulk orders and special
            celebrations, explore moments from our CookOnStay
            journey.
          </p>

        </div>

        {/* Category Filters */}

        <div
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-2
            sm:gap-3
          "style={{padding: "10px"}}
        >
          {categories.map((category) => {
            const Icon = category.icon;

            const isActive =
              activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() =>
                  setActiveCategory(category.id)
                }
                className={`
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        border-orange-500
                        bg-orange-500
                        text-white
                        shadow-lg
                        shadow-orange-500/20
                      `
                      : `
                        border-orange-100
                        bg-white
                        text-slate-600
                        hover:border-orange-300
                        hover:bg-orange-50
                        hover:text-orange-600
                      `
                  }
                `}style={{padding: "5px 10px"}}
              >
                <Icon size={16} />

                {category.label}
              </button>
            );
          })}
        </div>

        {/* Gallery */}

        <div
          className="
            mt-12
            grid
            auto-rows-[220px]
            grid-cols-1
            gap-4

            sm:grid-cols-2

            lg:grid-cols-3
          "
        >
          {filteredItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function GalleryCard({
  item,
}: {
  item: (typeof galleryItems)[number];
}) {
  const sizeClass =
    item.size === "large"
      ? "sm:col-span-2"
      : item.size === "tall"
        ? "sm:row-span-2"
        : "";

  return (
    <article
      className={`
        group
        relative
        overflow-hidden
        rounded-[26px]
        bg-slate-100
        ${sizeClass}
      `}
    >
      <Image
        src={item.src}
        alt={item.title}
        fill
        sizes={
          item.size === "large"
            ? "(min-width: 1024px) 66vw, (min-width: 640px) 100vw, 100vw"
            : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        }
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-black/10
          to-transparent
          opacity-80
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Content */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          p-5
          text-white
          sm:p-6
        "
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-orange-200" style={{padding: "5px 10px"}}>
          {getCategoryLabel(item.category)}
        </p>

        <h3 className="mt-1 text-xl font-bold" style={{padding: "5px 10px"}}>
          {item.title}
        </h3>
      </div>

    </article>
  );
}

function getCategoryLabel(category: string) {
  switch (category) {
    case "food":
      return "Food";

    case "stall":
      return "Our Stall";

    case "bulk":
      return "Bulk Order";

    case "celebrations":
      return "Celebration";

    default:
      return "";
  }
}
