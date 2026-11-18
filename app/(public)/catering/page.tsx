import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Clock3, Leaf, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Catering Services in Madurai",
  description:
    "Explore CookOnStay catering packages in Madurai for family gatherings, functions, colleges, workplaces and group food requirements. Packages shown serve 10 persons.",
  alternates: { canonical: "/catering" },
};

const cateringMenu = [
  { name: "Ven Pongal", price: 1200, quantity: "1 Padi", serves: "10 persons", image: "/images/catering/ven-pongal.webp", includes: ["Chutney", "Brinjal Chutney", "Veg Sambar", "10 Nos Leaf"] },
  { name: "Tomato Rice", price: 1300, quantity: "1 Padi", serves: "10 persons", image: "/images/catering/tomato-rice.webp", includes: ["Chutney", "Veg Kuruma", "Onion Pachadi", "10 Nos Leaf"] },
  { name: "Lemon Rice", price: 1300, quantity: "1 Padi", serves: "10 persons", image: "/images/catering/lemon-rice.webp", includes: ["Chutney", "Veg Sambar", "10 Nos Leaf"] },
  { name: "Curd Rice", price: 1000, quantity: "1 Padi", serves: "10 persons", image: "/images/catering/curd-rice.webp", includes: ["Chutney", "Pickle", "10 Nos Leaf"] },
  { name: "Malli Rice", price: 1200, quantity: "1 Padi", serves: "10 persons", image: "/images/catering/malli-rice.webp", includes: ["Chutney", "Veg Kuruma", "Onion Pachadi", "10 Nos Leaf"] },
  { name: "Tamarind Rice", price: 1200, quantity: "1 Padi", serves: "10 persons", image: "/images/catering/tamarind-rice.webp", includes: ["Chutney", "Sundal", "10 Nos Leaf"] },
  { name: "Mushroom Biryani", price: 1400, quantity: "1 Padi", serves: "10 persons", image: "/images/catering/mushroom-biryani.webp", includes: ["Chutney", "Veg Kuruma", "Onion Pachadi", "10 Nos Leaf"] },
  { name: "Veg Biryani", price: 1300, quantity: "1 Padi", serves: "10 persons", image: "/images/catering/veg-biryani.webp", includes: ["Chutney", "Veg Kuruma", "Onion Pachadi", "10 Nos Leaf"] },
];

const steps = [
  { number: "01", title: "Choose your menu", description: "Explore the available catering options and their listed accompaniments." },
  { number: "02", title: "Share your requirement", description: "Tell us your occasion, date and the quantity you have in mind." },
  { number: "03", title: "Plan with our team", description: "Our team can follow up about your catering enquiry and requirements." },
];

export default function CateringPage() {
  return (
    <main className="catering-page w-full overflow-hidden bg-[#f8f7f2]">
      <section className="catering-hero relative isolate">
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[650px] lg:grid-cols-[1.02fr_.98fr] lg:gap-4 lg:px-14 lg:py-20 xl:px-20">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#176b45]/15 bg-white/75 px-4 py-2 text-[10px] font-black uppercase tracking-[.2em] text-[#176b45] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#f28c28]" /> CookOnStay Catering · Madurai
            </span>
            <h1 className="mt-6 text-[clamp(2.8rem,6vw,5.6rem)] font-black leading-[.98] tracking-[-.065em] text-[#172019]">
              Good food brings <span className="catering-title-accent">everyone</span> together.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#69736d] sm:text-lg">
              Make your gathering easier to plan with CookOnStay catering options. Explore our rice varieties and biryani packages, with each listed package planned for 10 persons.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#catering-menu" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#176b45] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(23,107,69,.2)] transition hover:-translate-y-1 hover:bg-[#125638]">
                Explore packages <ArrowDown size={17} />
              </Link>
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-[#dce3dc] bg-white px-6 py-3 text-sm font-bold text-[#176b45] transition hover:-translate-y-1 hover:border-[#176b45]/40">
                Make an enquiry <ArrowRight size={17} />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#dfe4df] pt-6 text-xs font-semibold text-[#69736d]">
              <span className="inline-flex items-center gap-2"><Users size={16} className="text-[#176b45]" /> Packages for 10 persons</span>
              <span className="inline-flex items-center gap-2"><Leaf size={16} className="text-[#176b45]" /> Vegetarian options</span>
              <span className="inline-flex items-center gap-2"><Clock3 size={16} className="text-[#176b45]" /> Enquiry-based planning</span>
            </div>
          </div>

          <div className="catering-visual-stage relative mx-auto w-full max-w-[620px]" aria-label="CookOnStay catering food photography">
            <div className="catering-visual-orbit" />
            <div className="catering-visual-main">
              <Image src="/images/catering/veg-biryani.webp" alt="CookOnStay vegetable biryani catering option" fill priority sizes="(max-width: 1024px) 90vw, 48vw" className="object-cover" />
              <div className="catering-visual-caption"><span>Made for sharing</span><strong>Gather around good food.</strong></div>
            </div>
            <div className="catering-visual-small catering-visual-small-top">
              <Image src="/images/catering/ven-pongal.webp" alt="Ven pongal catering package" fill sizes="180px" className="object-cover" />
            </div>
            <div className="catering-visual-small catering-visual-small-bottom">
              <Image src="/images/catering/tomato-rice.webp" alt="Tomato rice catering package" fill sizes="200px" className="object-cover" />
            </div>
            <div className="catering-visual-stamp"><span>COOKONSTAY</span><strong>10</strong><span>PERSONS</span></div>
          </div>
        </div>
        <div className="catering-hero-bottomline" />
      </section>

      <section id="catering-menu" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[.2em] text-[#f28c28]">Choose what brings you together</span>
              <h2 className="mt-3 text-3xl font-black tracking-[-.05em] text-[#172019] sm:text-5xl">Our catering menu</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#69736d] sm:text-base">Explore the current packages and see what is included with each option.</p>
            </div>
            <div className="flex w-fit items-center gap-3 rounded-2xl border border-[#dce7de] bg-white px-5 py-3 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#176b45] text-lg font-black text-white">10</span>
              <span><span className="block text-[9px] font-black uppercase tracking-[.16em] text-[#8a938d]">Standard package</span><strong className="mt-1 block text-sm text-[#172019]">Serves 10 persons</strong></span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cateringMenu.map((item, index) => (
              <article key={item.name} className="catering-package-card group overflow-hidden rounded-[25px] border border-[#e4e7e2] bg-white">
                <div className="catering-package-image relative h-[225px] overflow-hidden">
                  <Image src={item.image} alt={`${item.name} catering package`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-700 ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101b14]/65 via-transparent to-[#101b14]/5" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-[#172019]/45 px-3 py-1.5 text-[9px] font-black uppercase tracking-[.15em] text-white backdrop-blur-md">Serves 10</span>
                  <span className="absolute bottom-4 right-4 rounded-xl bg-[#f28c28] px-4 py-2.5 text-sm font-black text-white shadow-lg">₹{item.price.toLocaleString("en-IN")}</span>
                  <span className="absolute bottom-4 left-4 text-[9px] font-black uppercase tracking-[.16em] text-white/85">Package {String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div><h3 className="text-xl font-black tracking-[-.035em] text-[#172019]">{item.name}</h3><p className="mt-1 text-xs font-semibold text-[#8a938d]">{item.quantity} · {item.serves}</p></div>
                  </div>
                  <div className="mt-5 border-t border-[#e8ebe6] pt-4">
                    <p className="text-[9px] font-black uppercase tracking-[.17em] text-[#8a938d]">Included with this package</p>
                    <ul className="mt-3 space-y-2.5">
                      {item.includes.map((include) => <li key={include} className="flex items-center gap-2.5 text-xs font-medium text-[#4f5953]"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f2ec] text-[#176b45]"><Check size={12} strokeWidth={3} /></span>{include}</li>)}
                    </ul>
                  </div>
                  <Link href="/contact" className="mt-5 flex min-h-11 items-center justify-between border-t border-[#e8ebe6] pt-4 text-xs font-black text-[#176b45] transition hover:text-[#f28c28]">
                    Enquire about this package <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-6 text-[#818b84]">Prices and package details are displayed as listed. Please contact CookOnStay through the enquiry form to discuss your event requirements and confirm details.</p>
        </div>
      </section>

      <section className="catering-process-section px-5 py-16 sm:px-8 sm:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-2xl"><span className="text-[10px] font-black uppercase tracking-[.2em] text-[#f28c28]">A simple way to get started</span><h2 className="mt-3 text-3xl font-black tracking-[-.05em] text-[#172019] sm:text-4xl">Plan your gathering in three steps.</h2></div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((step) => <div key={step.number} className="catering-step-card rounded-[24px] border border-[#e2e8e1] bg-white p-7"><span className="text-xs font-black tracking-[.15em] text-[#f28c28]">{step.number}</span><h3 className="mt-5 text-xl font-black tracking-[-.03em] text-[#172019]">{step.title}</h3><p className="mt-3 text-sm leading-7 text-[#69736d]">{step.description}</p></div>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-14 xl:px-20">
        <div className="catering-cta-panel relative mx-auto max-w-[1440px] overflow-hidden rounded-[30px] bg-[#176b45] px-7 py-12 sm:px-10 lg:px-16 lg:py-16">
          <div className="catering-cta-orb catering-cta-orb-one" /><div className="catering-cta-orb catering-cta-orb-two" />
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[.2em] text-[#c5e4d0]">
                Let&apos;s plan something delicious
              </span>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-.05em] text-white sm:text-5xl">
                Have a gathering coming up?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#dceee3] sm:text-base">
                Share your event date, guest count and food preferences with CookOnStay.
                We’ll get in touch about your catering enquiry.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-xl bg-[#f28c28] px-7 py-4 text-sm font-black text-white shadow-[0_15px_35px_rgba(0,0,0,.16)] transition hover:-translate-y-1 hover:bg-[#df7919]"
            >
              Make a catering enquiry <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
