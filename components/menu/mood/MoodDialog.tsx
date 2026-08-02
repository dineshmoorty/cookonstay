"use client";

import Image from "next/image";
import { Phone, CheckCircle2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  open: boolean;
  onOpenChange: (value: boolean) => void;
};

export default function MoodDialog({
  mood,
  open,
  onOpenChange,
}: Props) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-h-[80vh] max-w-full overflow-y-auto rounded-3xl border-0 p-0 duration-200 ease-out data-open:slide-in-from-bottom-4 data-closed:slide-out-to-bottom-4" style={{
        maxHeight: "80vh",
        maxWidth: "75%",
        overflowY: "auto",
        borderRadius: "1rem white",
        padding: "5px",
        backgroundColor: "white",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow: "0 8px 32px rgba(31,38,135,0.15)",
      }}>

        <div className="grid lg:grid-cols-2">

          {/* Image */}

          <div className="relative h-50 lg:h-full">

            <Image
              src={mood.image}
              alt={mood.dish}
              fill
              className="object-fit transition duration-500 group-hover:scale-110"
            />

          </div>

          {/* Content */}

          <div className="p-6 lg:p-12" style={{
            padding: "10px"
          }}>

            <DialogHeader>

              <div className="mb-3 text-4xl">
                {mood.emoji}
              </div>

              <DialogTitle className="text-4xl font-bold">
                {mood.dish}
              </DialogTitle>

            </DialogHeader>

            <p className="max-w-md leading-8 text-gray-700">
              {mood.story}
            </p>

            {/* Highlight */}

            <div className="mt-6 inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600" style={{padding: "5px 10px"}}>
              {mood.highlight}
            </div>

            {/* Ingredients */}

            <div className="mt-10" style={{padding: "10px 0px"}}>

              <h3 className="text-xl font-bold" style={{padding: "10px 0px"}}>
                Ingredients
              </h3>

              <div className="mt-4 flex flex-wrap gap-3" >

                {mood.ingredients.map((ingredient) => (
                  <span
                    key={ingredient}
                    className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium" style={{padding: "0 10px"}}
                  >
                    {ingredient}
                  </span>
                ))}

              </div>

            </div>

            {/* Served With */}

            <div className="mt-10" style={{padding: "10px 0px"}}>

              <h3 className="text-xl font-bold">
                Best Served With
              </h3>

              <div className="mt-4 space-y-3">

                {mood.servedWith.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-green-600"
                    />

                    <span>{item}</span>

                  </div>
                ))}

              </div>

            </div>

            {/* Footer */}

            <div className="mt-12 flex flex-wrap items-center justify-between gap-6">

              <div>

                <p className="text-sm text-gray-500">
                  Starting From
                </p>

                <h2 className="text-4xl font-bold text-orange-500">
                  {mood.price}
                </h2>

              </div>

              <a
                href="tel:+919488270932"
                className="inline-flex items-center gap-3 rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600" style={{padding: "10px 20px"}}
              >
                <Phone size={18} />

                Order Now

              </a>

            </div>

          </div>

        </div>

      </DialogContent>
    </Dialog>
  );
}
