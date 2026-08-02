import Image from "next/image";
import { Star } from "lucide-react";

import { MenuItem } from "@/constants/menuItems";

type MenuCardProps = {
  item: MenuItem;
};

export default function MenuCard({
  item,
}: MenuCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[28px]
        border
        border-orange-100
        bg-white/90
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:shadow-[0_20px_50px_rgba(249,115,22,0.12)]
      "
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden sm:h-60" >

        <Image
          src={item.image}
          alt={item.name}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {item.popular && (
          <div
            className="
              absolute
              left-4
              top-4
              flex
              items-center
              gap-1.5
              rounded-full
              bg-white/90
              px-3
              py-1.5
              text-xs
              font-semibold
              text-orange-600
              shadow-sm
              backdrop-blur-md
            " style={{padding: "10px"}}
          >
            <Star
              size={14}
              className="fill-orange-500 text-orange-500"
            />

            Popular
          </div>
        )}

      </div>

      {/* Content */}
      <div className="p-6" style={{padding: "20px"}}>

        <div className="flex items-start justify-between gap-4">

          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-orange-500">
              {item.category}
            </p>

            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
              {item.name}
            </h3>
          </div>

          <span
            className="
              shrink-0
              rounded-full
              bg-orange-50
              px-4
              py-2
              text-lg
              font-bold
              text-orange-600
            " style={{padding: "5px 20px"}}
          >
            ₹{item.price}
          </span>

        </div>

        <p className="mt-4 line-clamp-2 leading-7 text-slate-600">
          {item.description}
        </p>

      </div>
    </article>
  );
}