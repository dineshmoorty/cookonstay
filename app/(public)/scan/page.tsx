import type { Metadata } from "next";
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
  title: "CookOnStay | Street Food, Homely Taste",
  description:
    "Discover CookOnStay in Madurai. Explore our menu, order on WhatsApp, find our shop, and share your feedback.",
  alternates: {
    canonical: "/scan",
  },
  openGraph: {
    title: "CookOnStay | Street Food, Homely Taste",
    description:
      "Local street-food charm with the comfort of homemade food.",
    url: "https://www.cookonstay.com/scan",
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
    title: "Recent Orders",
    description: "View your previous orders",
    href: "/recent-orders",
    icon: Clock3,
    style: "light",
  },
  {
    title: "Order on WhatsApp",
    description: "Message us about today's menu",
    href: "https://wa.me/919488270932?text=Hi%20CookOnStay%2C%20please%20share%20today%27s%20menu.",
    icon: MessageCircle,
    style: "whatsapp",
  },
  {
    title: "Find our shop",
    description: "Get directions to our Madurai stall",
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
    <main className="min-h-screen bg-[#f8f3e8] px-3 py-4 text-[#20271f] sm:px-6 sm:py-8">
      <div className="mx-auto max-w-md overflow-hidden rounded-[30px] border border-[#e7ddc9] bg-[#fffdf8] shadow-[0_20px_60px_rgba(57,42,21,0.14)]">
        {/* Hero Section */}
        <header className="relative isolate min-h-[390px] overflow-hidden bg-[#173c2a]">
          <img
            src="/images/cookonstay-stall.webp"
            alt="CookOnStay's street-side food stall in Madurai"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/35 to-[#10291d]/95" />

          <div className="flex items-center justify-between gap-2 px-5 pt-5">
            <span className="rounded-full border border-white/35 bg-black/25 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
              Madurai · Since 2022
            </span>

            <span className="flex items-center gap-1 rounded-full bg-[#f4bd4f] px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wide text-[#3b2b0d]">
              <Flame size={12} />
              Local flavour
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 px-5 pb-7 pt-20 text-white sm:px-7">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/35 bg-white/15 text-[#f6c75b] backdrop-blur">
              <Utensils size={25} />
            </div>

            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f6d47e]">
              Street-side happiness
            </p>

            <h1 className="mt-2 text-[38px] font-black leading-[0.98] tracking-[-0.06em] sm:text-[42px]">
              Cook<span className="text-[#77c66b]">On</span>Stay
            </h1>

            <p className="mt-3 max-w-[280px] text-base font-bold leading-6">
              Wherever You Stay,
              <br />
              It Feels Like Home.
            </p>

            <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-white/90">
              <Heart
                size={14}
                className="fill-[#f6c75b] text-[#f6c75b]"
              />
              Local street-food charm. Homely goodness.
            </p>
          </div>
        </header>

        {/* Zomato Ratings */}
        <section
          aria-label="Zomato ratings"
          className="mx-4 mt-4 rounded-2xl border border-[#eadfc9] bg-white p-4 sm:mx-5"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm font-extrabold text-[#20271f]">
                Cook On Stay
              </p>
              <p className="mt-1 text-sm text-[#73786d]">Periyar</p>
              <p className="mt-1 text-sm text-[#73786d]">South Indian</p>
            </div>

            <div className="shrink-0 space-y-3 text-xs">
              <div className="flex items-center gap-3">
                <span className="inline-flex min-w-[68px] items-center justify-center gap-1 rounded-xl bg-[#278345] px-3 py-2 text-base font-black text-white">
                  4 <Star size={16} fill="currentColor" />
                </span>
                {/* <span className="text-[#30382e]">
                  <strong className="block text-sm">8</strong>
                  <span>Delivery Reviews</span>
                </span> */}
              </div>

              {/* <div className="flex items-center gap-3">
                <span className="inline-flex min-w-[68px] items-center justify-center gap-1 rounded-xl bg-[#b8b8b8] px-3 py-2 text-base font-black text-white">
                  - <Star size={16} fill="currentColor" />
                </span>
                <span className="text-[#30382e]">Dining Reviews</span>
              </div> */}
            </div>
          </div>
          <p className="mt-3 border-t border-[#eee6d9] pt-3 text-[11px] text-[#858579]">
            Ratings shown as provided from your Zomato listing.
          </p>
        </section>

        {/* Action Buttons */}
        <section className="px-4 pb-5 pt-5 sm:px-5">
          <div className="mb-4">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#6d7d50]">
              Your next tasty stop
            </p>

            <h2 className="mt-1 text-xl font-black tracking-tight">
              What would you like to do?
            </h2>
          </div>

          <div className="space-y-3">
            {actions.map(
              ({ title, description, href, icon: Icon, style }) => {
                const external =
                  href.startsWith("http") ||
                  href.startsWith("mailto:");

                const classes =
                  style === "primary"
                    ? "bg-[#24683e] text-white shadow-[0_8px_18px_rgba(36,104,62,0.18)]"
                    : style === "whatsapp"
                      ? "border border-[#b8dfbf] bg-[#e9f7e9] text-[#175b32]"
                      : "border border-[#e9dfcd] bg-white text-[#263127]";

                const content = (
                  <>
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                        style === "primary"
                          ? "bg-white/15"
                          : style === "whatsapp"
                            ? "bg-white text-[#16813c]"
                            : "bg-[#f6f1e6] text-[#386342]"
                      }`}
                    >
                      <Icon size={22} strokeWidth={2.1} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-[15px] font-extrabold">
                        {title}
                      </span>

                      <span
                        className={`mt-1 block text-xs ${
                          style === "primary"
                            ? "text-white/75"
                            : "text-[#70776d]"
                        }`}
                      >
                        {description}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={19}
                      className="shrink-0 opacity-70"
                    />
                  </>
                );

                return external ? (
                  <a
                    key={title}
                    href={href}
                    target={
                      href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className={`flex min-h-[78px] items-center gap-3 rounded-2xl p-3.5 transition hover:-translate-y-0.5 ${classes}`}
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    key={title}
                    href={href}
                    className={`flex min-h-[78px] items-center gap-3 rounded-2xl p-3.5 transition hover:-translate-y-0.5 ${classes}`}
                  >
                    {content}
                  </Link>
                );
              }
            )}
          </div>

          {/* Shop Address */}
          <div className="mt-5 rounded-2xl border border-[#eadfc9] bg-[#f7f1e4] p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#2c6b40] shadow-sm">
                <MapPin size={19} />
              </span>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#47704a]">
                  Come say vanakkam!
                </p>

                <p className="mt-1 text-sm font-bold leading-5 text-[#30382e]">
                  106A, Panthadi 9th Street,
                  <br />
                  Thavittusandhai, Madurai – 625001
                </p>

                <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-[#697064]">
                  <Clock3 size={13} />
                  7:00 PM – 10:00 PM · Monday–Saturday
                </p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="mt-5 grid grid-cols-1 gap-2 border-t border-dashed border-[#ded4c0] pt-4 text-xs text-[#5d665b]">
            <a
              className="flex items-center justify-center gap-2 font-bold hover:text-[#24683e]"
              href="tel:+919488270932"
            >
              <Phone size={14} />
              +91 94882 70932
            </a>

            <a
              className="flex items-center justify-center gap-2 hover:text-[#24683e]"
              href="mailto:support@cookonstay.com"
            >
              <Mail size={14} />
              support@cookonstay.com
            </a>

            <a
              className="flex items-center justify-center gap-2 font-bold text-[#24683e] hover:underline"
              href="https://www.cookonstay.com"
            >
              <Globe size={14} />
              www.cookonstay.com
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#173c2a] px-5 py-4 text-center text-xs font-semibold text-white/85">
          Made with care in Madurai{" "}
          <span className="text-[#f6c75b]">♥</span>

          <p className="mt-1 text-[10px] font-medium text-white/60">
            Real local flavour. A little taste of home.
          </p>
        </footer>
      </div>

      <p className="mx-auto mt-4 max-w-xs text-center text-[11px] leading-5 text-[#777668]">
        Scan once. Find your food, directions and ways to connect with
        CookOnStay.
      </p>
    </main>
  );
}
