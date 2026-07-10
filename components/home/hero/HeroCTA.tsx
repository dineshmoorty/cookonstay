import Link from "next/link";

export default function HeroCTA() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <Link
        href="/menu"
        className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
      >
        Explore Menu
      </Link>

      <Link
        href="/contact"
        className="rounded-full border border-gray-300 px-8 py-4 font-semibold transition hover:bg-gray-100"
      >
        Order Now
      </Link>

    </div>
  );
}