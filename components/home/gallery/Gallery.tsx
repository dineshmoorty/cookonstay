import GalleryGrid from "./GalleryGrid";
import SectionHeader from "./SectionHeader";
import ViewGalleryButton from "./ViewGalleryButton";

export default function Gallery() {
  return (
    <section className="bg-gray-50 py-24" style={{ padding: "20px" }}>
      <div className="mx-auto max-w-full px-6" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <SectionHeader />
        <GalleryGrid />
        <ViewGalleryButton />
      </div>
    </section>
  );
}