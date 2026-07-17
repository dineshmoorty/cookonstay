import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-green-950 shadow-[0_24px_60px_-22px_rgba(31,41,55,0.35)] sm:rounded-[2.5rem] w-full" >
      <Image
        src="/images/hero_banner.png"
        alt="CookOnStay Street Food Stall"
          width={1200}
          height={1050}
          priority
          sizes="(min-width: 1024px) 55vw, (min-width: 640px) 80vw, 100vw"
          className=" w-full object-cover  transition duration-700 motion-safe:scale-[1.02] motion-safe:hover:scale-[1.06]" 
      />
    </div>
  );
}