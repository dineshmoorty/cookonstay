import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative">
      <Image
        src="/images/hero_image.png"
        alt="CookOnStay Street Food"
        width={700}
        height={700}
        priority
        className="rounded-3xl object-cover shadow-2xl"
      />
    </div>
  );
}
