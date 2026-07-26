import { GALLERY } from "@/constants/gallery";
import GalleryCard from "./GalleryCard";

export default function GalleryGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {GALLERY.map((item) => (
        <GalleryCard key={item.id} item={item} />
      ))}
    </div>
  );
}