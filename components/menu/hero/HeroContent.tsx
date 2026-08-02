import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="relative z-10">

      <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600" style={{padding: "0.5rem 1rem", fontSize: "0.875rem"}}>
        🍽️ Traditional South Indian Menu
      </span>

      <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
        Freshly Prepared
        <span className="block text-orange-500">
          Every Morning
        </span>
      </h1>

      <p className="mt-6 max-w-full text-lg leading-8 text-gray-600" style={{fontSize: "1.125rem", lineHeight: "1.75rem", padding: "1rem 0"}}>
        Discover authentic South Indian breakfast favorites made with
        fresh ingredients, traditional recipes and homemade flavors.
        From soft Idlis to aromatic Ven Pongal and flavorful rice
        varieties, every dish is prepared with care.
      </p>

      <div className="mt-10 flex flex-wrap gap-4" style={{padding: "20px 0"}}>

        <Link
          href="#choose-your-mood"
          className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-xl" style={{backgroundColor: "#f97316", padding: "1rem", fontSize: "1rem"}}
        >
          Explore Menu
          <ArrowRight size={18} />
        </Link>

        <Link
          href="tel:+919488270932"
          className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-4 font-semibold transition-all duration-300 hover:border-orange-500 hover:text-orange-500" style={{borderColor: "#d1d5db", backgroundColor: "#ffffff", padding: "1rem", fontSize: "1rem"}}
        >
          <Phone size={18} />
          Bulk Orders
        </Link>

      </div>

      <div className="mt-12 flex flex-wrap gap-8">

        <div>
          <h3 className="text-3xl font-bold text-orange-500">
            100%
          </h3>
          <p className="text-gray-600">
            Fresh Ingredients
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-orange-500">
            FSSAI
          </h3>
          <p className="text-gray-600">
            Certified Kitchen
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-orange-500">
            MSME
          </h3>
          <p className="text-gray-600">
            Registered Business
          </p>
        </div>

      </div>

    </div>
  );
}