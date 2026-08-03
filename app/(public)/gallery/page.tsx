import GalleryCollection from "@/components/gallery/collection/GalleryCollection";
import GalleryCTA from "@/components/gallery/cta/GalleryCTA.tsx";
import GalleryHero from "@/components/gallery/hero/GalleryHero";
import MomentsSection from "@/components/gallery/moments/MomentsSection";

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <GalleryCollection />
      <MomentsSection />
      <GalleryCTA />
    </main>
  );
}