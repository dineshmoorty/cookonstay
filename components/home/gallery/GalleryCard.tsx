import Image from "next/image";

type GalleryItem = {
  id: number;
  image: string;
  title: string;
};

export default function GalleryCard({
  item,
}: {
  item: GalleryItem;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/50" />

      <div className="absolute bottom-0 left-0 right-0 translate-y-8 p-6 text-white transition duration-300 group-hover:translate-y-0" style={{padding: "10px"}}>
        <h3 className="text-xl font-semibold">
          {item.title}
        </h3>
      </div>
    </div>
  );
}