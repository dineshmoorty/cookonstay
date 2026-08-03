import type { Metadata } from "next";
import GalleryCollection from "@/components/gallery/collection/GalleryCollection";
import GalleryCTA from "@/components/gallery/cta/GalleryCTA.tsx";
import GalleryHero from "@/components/gallery/hero/GalleryHero";
import MomentsSection from "@/components/gallery/moments/MomentsSection";

export const metadata: Metadata = {
  title: "Food Gallery",
  description:
    "Browse CookOnStay's gallery of freshly prepared South Indian meals, celebrations, and bulk food orders in Madurai.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryCollection />
      <MomentsSection />
      <GalleryCTA />
    </>
  );
}
