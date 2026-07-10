import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroCTA() {
  return (
    <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
      <Link
        href="/menu"
        className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
      >
        Explore Menu
        <ArrowRight aria-hidden="true" size={17} className="transition-transform duration-300 group-hover:translate-x-0.5" />
      </Link>

      <Link
        href="/contact"
        className="inline-flex min-h-12 items-center justify-center rounded-full border border-gray-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-gray-800 transition duration-300 hover:-translate-y-0.5 hover:border-green-200 hover:bg-green-50 hover:text-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
      >
        Order Now
      </Link>
    </div>
  );
}
