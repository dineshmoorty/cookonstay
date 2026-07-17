import { Clock3, Sparkles } from "lucide-react";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative mx-auto max-w-full pt-3 lg:max-w-none lg:pt-0">
      <div aria-hidden="true" className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-orange-200/60 via-transparent to-green-200/60 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-green-950 shadow-[0_24px_60px_-22px_rgba(31,41,55,0.35)] sm:rounded-[2.5rem]">
        <Image
          src="/images/hero_img.png"
          alt="Fresh idli served on a banana leaf with chutney and sambar"
          width={1200}
          height={1050}
          priority
          sizes="(min-width: 1024px) 55vw, (min-width: 640px) 80vw, 100vw"
          className=" w-full object-cover  transition duration-700 motion-safe:scale-[1.02] motion-safe:hover:scale-[1.06]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-green-950/35 via-transparent to-black/10" />
      </div>

      <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 px-3.5 py-3 shadow-lg shadow-gray-950/10 backdrop-blur-md sm:bottom-6 sm:left-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700" style={{  padding: "7px"}}>
          <Sparkles aria-hidden="true" size={18} />
        </span>
        <span style={{ padding: "7px"}}>
          <span className="block text-xs font-medium text-gray-500">Today&apos;s special</span>
          <span className="block text-sm font-semibold text-gray-900">Steamed idli &amp; sambar</span>
        </span>
      </div>

      <div className="hero-float absolute -right-3 top-7 hidden items-center gap-1 rounded-2xl border border-green-100 bg-white/95 px-3.5 py-3 text-sm font-semibold text-green-800 shadow-lg shadow-green-950/10 backdrop-blur-md sm:flex lg:-right-2.5 lg:top-10" style={{  padding: "7px"}}>
        <Clock3 aria-hidden="true" size={17} className="text-orange-500"  />
        Fresh Every Evening
      </div>
    </div>
  );
}
