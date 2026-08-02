"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import MoodDialog from "./MoodDialog";

type Mood = {
  id: number;
  emoji: string;
  mood: string;
  dish: string;
  image: string;
  story: string;
  ingredients: string[];
  servedWith: string[];
  price: string;
  highlight: string;
};

type Props = {
  mood: Mood;
};

export default function MoodCard({ mood }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="group overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" style={{padding: "10px", borderRadius: "1rem", border: "1px solid #F97316", backgroundColor: "white", boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"}}>

        <div className="relative h-60 overflow-hidden">

          <Image
            src={mood.image}
            alt={mood.dish}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-3xl shadow-lg">
            {mood.emoji}
          </div>

        </div>

        <div className="p-6">

          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            {mood.mood}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-gray-900">
            {mood.dish}
          </h3>

          <p className="mt-4 line-clamp-3 leading-7 text-gray-600">
            {mood.story}
          </p>

          <div className="mt-6 inline-flex rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
            {mood.highlight}
          </div>

          <button
            onClick={() => setOpen(true)}
            className="mt-8 flex items-center gap-2 font-semibold text-orange-500 transition-all hover:gap-3" style={{marginTop: "10px", display: "flex", alignItems: "center", gap: "5px", fontWeight: "600", color: "#F97316", transition: "all 0.3s ease"}}
          >
            Discover This Dish

            <ArrowRight size={18} />
          </button>

        </div>

      </div>

      <MoodDialog
        open={open}
        onOpenChange={setOpen}
        mood={mood}
      />
    </>
  );
}