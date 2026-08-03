import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">

      <div className="absolute h-80 w-80 rounded-full bg-orange-200 blur-3xl opacity-40" />

      <Image
        src="/images/menu/menu-hero.webp"
        alt="CookOnStay Menu"
        width={650}
        height={650}
        priority
        className="relative rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
      />

    </div>
  );
}
