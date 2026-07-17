import Image from "next/image";

type MenuItem = {
  id: number;
  name: string;
  price: string;
  image: string;
  badge: string;
};

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-56">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
          {item.badge}
        </span>

        <h3 className="mt-4 text-xl font-bold text-gray-900">
          {item.name}
        </h3>

        <p className="mt-2 text-2xl font-bold text-orange-500">
          {item.price}
        </p>

        <button className="mt-6 w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600">
          Order Now
        </button>
      </div>
    </div>
  );
}