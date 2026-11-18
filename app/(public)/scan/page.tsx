import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Utensils,
  Heart,
  Flame,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Street Food, Homely Taste",
  description:
    "Discover CookOnStay in Madurai. Explore our menu, order on WhatsApp, find our shop, and share your feedback.",
  alternates: {
    canonical: "/scan",
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: "CookOnStay | Street Food, Homely Taste",
    description:
      "Local street-food charm with the comfort of homemade food.",
    url: "https://cookonstay.com/scan",
    type: "website",
  },
};

const actions = [
  {
    title: "Explore our menu",
    description: "See today's food and prices",
    href: "/menu",
    icon: Utensils,
    style: "primary",
  },
  {
    title: "Recent orders",
    description: "See our recent food highlights",
    href: "/recent-orders",
    icon: Clock3,
    style: "light",
  },
  {
    title: "Order on WhatsApp",
    description: "Ask us about today's menu",
    href: "https://wa.me/919488270932?text=Hi%20CookOnStay%2C%20please%20share%20today%27s%20menu.",
    icon: MessageCircle,
    style: "whatsapp",
  },
  {
    title: "Find our shop",
    description: "Get directions to our Madurai shop",
    href: "https://www.google.com/maps/place/CookOnStay/@9.9117536,78.1198462,17z/data=!3m1!4b1!4m16!1m9!3m8!1s0x3b00c5ebbc50b39b:0x9ef6e6fab2e9657b!2sCookOnStay!8m2!3d9.9117536!4d78.1224211!9m1!1b1!16s%2Fg%2F11s34ghqpq!3m5!1s0x3b00c5ebbc50b39b:0x9ef6e6fab2e9657b!8m2!3d9.9117536!4d78.1224211!16s%2Fg%2F11s34ghqpq?hl=en&authuser=0&entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D",
    icon: MapPin,
    style: "light",
  },
  {
    title: "Feedback & reviews",
    description: "Tell us about your experience",
    href: "mailto:support@cookonstay.com?subject=CookOnStay%20Customer%20Feedback",
    icon: Star,
    style: "light",
  },
] as const;

export default function ScanPage() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-3 py-5 text-[#173326] sm:px-6 sm:py-9">
      <div className="mx-auto max-w-[460px]">
        <div className="overflow-hidden rounded-[30px] border border-[#e4e8df] bg-[#fffefa] shadow-[0_24px_70px_rgba(20,48,32,0.12)]">
          {/* Brand hero */}
          <header className="relative isolate min-h-[370px] overflow-hidden bg-[#103d2b]">
            <Image
              src="/images/cookonstay-stall.webp"
              alt="CookOnStay's street-side food stall in Madurai"
              fill
              priority
              sizes="(max-width: 480px) 100vw, 460px"
              className="absolute inset-0 -z-20 object-cover object-center"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#071c13]/45 via-[#0b2b1d]/35 to-[#082418]/95" />

            <div className="flex items-center justify-between gap-2 px-5 pt-5 sm:px-6">
              <span className="rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Madurai · Since 2022
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f5c66b] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-[#3c2b0d]">
                <Flame size={12} />
                Local flavour
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 px-6 pb-7 pt-20 text-white sm:px-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-[#f5c66b] backdrop-blur-md">
                <Utensils size={24} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#f5d58e]">
                Street-side happiness
              </p>
              <h1 className="mt-2 text-[40px] font-black leading-none tracking-[-0.065em] sm:text-[44px]">
                Cook<span className="text-[#8bd17d]">On</span>Stay
              </h1>
              <p className="mt-3 text-base font-bold leading-6 text-white">
                Wherever You Stay,
                <br />
                It Feels Like Home.
              </p>
              <p className="mt-3 flex items-center gap-2 text-xs font-medium text-white/85">
                <Heart size={14} className="fill-[#f5c66b] text-[#f5c66b]" />
                Local street-food charm. Homely goodness.
              </p>
            </div>
          </header>

          <div className="space-y-5 px-4 py-5 sm:px-5">
            {/* Rating summary */}
            <section
              aria-label="Zomato rating"
              className="flex items-center justify-between gap-4 rounded-2xl border border-[#e6e9df] bg-white p-4"
            >
              <div className="min-w-0">
                <p className="text-sm font-extrabold text-[#173326]">
                  Cook On Stay
                </p>
                <p className="mt-1 text-xs font-medium text-[#737d72]">
                  Periyar · South Indian
                </p>
                <p className="mt-2 text-[10px] leading-4 text-[#858b80]">
                  Rating shown from our Zomato listing.
                </p>
              </div>
              <a
                href="https://link.zomato.com/xqzv/rshare?id=4853050830563969"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Cook On Stay rating on Zomato"
                className="inline-flex min-h-12 shrink-0 items-center gap-1.5 rounded-xl bg-[#176b45] px-4 py-2.5 text-lg font-black text-white transition hover:bg-[#10452f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176b45]"
              >
                <span className="inline-flex items-center gap-1 text-[#FFD166]">
                  4 <Star size={16} fill="currentColor" stroke="currentColor" />
                </span>
                <span className="ml-1 text-[10px] font-bold uppercase tracking-wide text-white/85">
                  Zomato
                </span>
              </a>
            </section>

            {/* Main actions */}
            <section aria-labelledby="scan-actions-heading">
              <div className="mb-4">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#a36b25]">
                  Your next tasty stop
                </p>
                <h2
                  id="scan-actions-heading"
                  className="mt-1 text-xl font-black tracking-tight text-[#173326]"
                >
                  What would you like to do?
                </h2>
                <p className="mt-1 text-sm text-[#778075]">
                  Choose an option to get started.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {actions.map(({ title, description, href, icon: Icon, style }) => {
                  const external =
                    href.startsWith("http") || href.startsWith("mailto:");

                  const cardClass =
                    style === "primary"
                      ? "border border-[#10452f] bg-[#10452f] text-white shadow-[0_10px_24px_rgba(16,69,47,0.16)] hover:bg-[#0b3826]"
                      : style === "whatsapp"
                        ? "border border-[#c8e5ce] bg-[#eff8f0] text-[#174b2d] hover:border-[#83c497] hover:bg-[#e7f4e9]"
                        : "border border-[#e5e9df] bg-white text-[#173326] hover:border-[#b8cbbb] hover:bg-[#f8faf6]";

                  const iconClass =
                    style === "primary"
                      ? "bg-white/12 text-[#f5d58e]"
                      : style === "whatsapp"
                        ? "bg-white text-[#16813c]"
                        : "bg-[#f1f4ed] text-[#176b45]";

                  const content = (
                    <>
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
                      >
                        <Icon size={21} strokeWidth={2} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block text-sm font-extrabold ${
                            style === "primary" ? "!text-white" : ""
                          }`}
                        >
                          {title}
                        </span>
                        <span
                          className={`mt-1 block text-xs ${
                            style === "primary" ? "text-white/75" : "text-[#788176]"
                          }`}
                        >
                          {description}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={18}
                        className={`shrink-0 opacity-65 ${
                          style === "primary" ? "!text-white" : ""
                        }`}
                      />
                    </>
                  );

                  const sharedClassName = `group flex min-h-[76px] items-center gap-3 rounded-2xl p-3.5 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#176b45] ${cardClass}`;

                  return external ? (
                    <a
                      key={title}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={sharedClassName}
                    >
                      {content}
                    </a>
                  ) : (
                    <Link key={title} href={href} className={sharedClassName}>
                      {content}
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* Location and opening hours */}
            <section className="rounded-2xl border border-[#e8e2d3] bg-[#f8f5ec] p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#176b45] shadow-sm">
                  <MapPin size={19} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8a642d]">
                    Come say vanakkam!
                  </p>
                  <p className="mt-1 text-sm font-bold leading-5 text-[#273b2e]">
                    106A, Panthadi 9th Street,
                    <br />
                    Thavittusandhai, Madurai – 625001
                  </p>
                  <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-[#737b70]">
                    <Clock3 size={13} />
                    7:00 PM – 10:00 PM · Monday–Saturday
                  </p>
                </div>
              </div>
            </section>

            {/* Contact links */}
            <section
              aria-label="Contact CookOnStay"
              className="grid gap-2 border-t border-dashed border-[#e1e5db] pt-4 text-xs"
            >
              <a
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-3 font-bold text-[#405849] transition hover:bg-[#f2f6f0] hover:text-[#10452f]"
                href="tel:+919488270932"
              >
                <Phone size={14} />
                +91 94882 70932
              </a>
              <a
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-3 text-[#405849] transition hover:bg-[#f2f6f0] hover:text-[#10452f]"
                href="mailto:support@cookonstay.com"
              >
                <Mail size={14} />
                support@cookonstay.com
              </a>
              <a
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-3 font-bold text-[#176b45] transition hover:bg-[#f2f6f0] hover:text-[#10452f]"
                href="https://www.cookonstay.com"
              >
                <Globe size={14} />
                www.cookonstay.com
              </a>
            </section>
          </div>

          {/* Footer */}
          <footer className="bg-[#103d2b] px-5 py-5 text-center text-xs font-semibold text-white/85">
            Made with care in Madurai{" "}
            <span className="text-[#f5c66b]">♥</span>
            <p className="mt-1 text-[10px] font-medium text-white/60">
              Real local flavour. A little taste of home.
            </p>
          </footer>
        </div>

        <p className="mx-auto mt-4 max-w-xs text-center text-[11px] leading-5 text-[#7b8175]">
          Scan once. Find your food, directions and ways to connect with
          CookOnStay.
        </p>
      </div>
    </main>
  );
}
