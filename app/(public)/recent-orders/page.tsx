import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MessageCircle,
  PackageCheck,
  Utensils,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bulk Orders & Delivery Highlights | CookOnStay Madurai",
  description:
    "Explore selected CookOnStay bulk food order highlights, from breakfast favourites to rice varieties and event orders in Madurai.",
  alternates: {
    canonical: "/recent-orders",
  },
  robots: { index: false, follow: true },
};

// Keep dates, quantities and statuses aligned with the records supplied for this page.
const bulkOrders = [
  {
    date: "11 Oct 2026",
    time: "Morning",
    items: [{ name: "Tomato rice", quantity: "20 packets" }],
    status: "Delivered / completed",
    note: "",
  },
  {
    date: "10 Oct 2026",
    time: "Morning",
    items: [{ name: "Idly", quantity: "200 pieces" }],
    status: "Delivered",
    note: "",
  },
  {
    date: "10 Oct 2026",
    time: "Evening",
    items: [
      { name: "Tamarind rice", quantity: "2Padi" },
      { name: "idly", quantity: "50 pieces" },
    ],
    status: "Order recorded",
    note: "",
  },
  {
    date: "Last week",
    time: "Delivery",
    items: [
      { name: "Mini uthappam", quantity: "44 pieces" },
      { name: "Idly", quantity: "88 pieces" },
      { name: "Veg Biryani", quantity: "44 Pkts" },
    ],
    status: "Delivered",
    note: "Exact delivery date not provided.",
  },
  {
    date: "Date not provided",
    time: "Baby shower order",
    items: [{ name: "Idly", quantity: "100 pieces" }],
    status: "Delivered",
    note: "Event order.",
  },
  {
    date: "Date not provided",
    time: "Bulk order",
    items: [{ name: "Idly", quantity: "80 pieces" }],
    status: "Delivered",
    note: "Exact delivery date not provided.",
  },
  {
    date: "26 Jan 2026",
    time: "Morning",
    items: [{ name: "Idly", quantity: "400 pieces" }],
    status: "Delivered",
    note: "",
  },
];

const foodVisuals = [
  { src: "/images/catering/veg-biryani.webp", alt: "Vegetable biryani", label: "Rice varieties", className: "orders-visual-main" },
  { src: "/images/catering/ven-pongal.webp", alt: "Ven pongal", label: "Breakfast favourites", className: "orders-visual-top" },
  { src: "/images/catering/tomato-rice.webp", alt: "Tomato rice", label: "Bulk meals", className: "orders-visual-bottom" },
];

export default function RecentOrdersPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f2] px-4 py-6 text-[#172019] sm:px-6 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#e2e8e1] bg-white/90 px-4 py-2 text-sm font-bold text-[#176b45] transition hover:-translate-y-0.5 hover:border-[#176b45]/30 hover:shadow-md"
        >
          <ArrowLeft size={16} />
          Back to CookOnStay
        </Link>

        <section className="orders-hero relative mt-5 overflow-hidden rounded-[30px] bg-[#103f2b] text-white shadow-[0_28px_80px_rgba(16,63,43,.18)] sm:rounded-[38px]">
          <div className="orders-hero-glow" aria-hidden="true" />
          <div className="relative grid items-center gap-8 px-6 py-9 sm:px-10 sm:py-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-4 lg:px-14 lg:py-14">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[10px] font-black uppercase tracking-[.2em] text-[#f6d58d]">
                <PackageCheck size={14} /> CookOnStay · Madurai
              </span>
              <p className="mt-7 text-xs font-black uppercase tracking-[.24em] text-[#f2a34e]">Made for everyday moments & special gatherings</p>
              <h1 className="mt-3 max-w-xl text-[2.65rem] font-black leading-[1.02] tracking-[-.055em] sm:text-6xl">
                Good food.<br /><span className="text-[#a9d5b8]">Shared moments.</span>
              </h1>
              <p className="mt-5 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
                A selection of CookOnStay&apos;s recorded bulk-order highlights — from breakfast favourites to rice varieties and event orders.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#order-highlights"
                  className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-extrabold !text-[#145638] opacity-100 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="!text-[#145638]">Explore order highlights</span>
                  <ArrowRight size={17} className="!text-[#145638]" />
                </a>
                <a
                  href="https://wa.me/919488270932?text=Hi%20CookOnStay%2C%20I%27d%20like%20to%20enquire%20about%20a%20bulk%20food%20order."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-white/15"
                >
                  <MessageCircle size={17} /> Enquire now
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-white/65">
                <span className="inline-flex items-center gap-2"><CheckCircle2 size={14} className="text-[#a9d5b8]" /> Selected order records</span>
                <span className="inline-flex items-center gap-2"><Utensils size={14} className="text-[#f2a34e]" /> Homely food favourites</span>
              </div>
            </div>

            <div className="orders-visual-stage relative mx-auto h-[310px] w-full max-w-[510px] sm:h-[390px]" aria-label="CookOnStay food photography">
              <div className="orders-visual-orbit" aria-hidden="true" />
              {foodVisuals.map((visual) => (
                <div key={visual.src} className={`orders-visual-card ${visual.className}`}>
                  <Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 640px) 42vw, 240px" className="object-cover" priority={visual.className === "orders-visual-main"} />
                  <span>{visual.label}</span>
                </div>
              ))}
              <div className="orders-visual-note" aria-hidden="true">
                <span className="block text-[9px] font-black uppercase tracking-[.18em] text-[#748176]">CookOnStay</span>
                <span className="mt-1 block text-sm font-black text-[#174d34]">Food made to share</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            { value: "07", label: "Order records shown", detail: "Selected highlights" },
            { value: "400", label: "Idly pieces", detail: "Recorded order · 26 Jan 2026" },
            { value: "3", label: "Food categories", detail: "Breakfast · Rice · Event orders" },
          ].map((item) => (
            <div key={item.label} className="orders-stat rounded-2xl border border-[#e5e9e1] bg-white p-5 sm:p-6">
              <p className="text-3xl font-black tracking-tight text-[#176b45]">{item.value}</p>
              <p className="mt-1 text-sm font-extrabold text-[#202a22]">{item.label}</p>
              <p className="mt-1 text-xs text-[#788078]">{item.detail}</p>
            </div>
          ))}
        </section>

        <section id="order-highlights" className="scroll-mt-8 py-12 sm:py-16">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.23em] text-[#d47c2c]">From our order book</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-.04em] text-[#172019] sm:text-4xl">Delivery highlights</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-[#707970]">A clear look at the bulk orders shared with us. Dates and quantities are displayed only where they were provided.</p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#e8f2ec] px-3.5 py-2 text-xs font-extrabold text-[#176b45]"><CalendarDays size={14} /> Selected records</span>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {bulkOrders.map((order, index) => (
              <article key={`${order.date}-${order.time}-${index}`} className="orders-record group rounded-[24px] border border-[#e5e9e1] bg-white p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eaf3ec] text-[#176b45] transition group-hover:rotate-[-5deg] group-hover:scale-105"><CalendarDays size={19} /></span>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[.16em] text-[#8a956f]">{order.date}</p>
                      <h3 className="mt-1 text-base font-black text-[#202a22]">{order.time}</h3>
                    </div>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-extrabold ${order.status === "Order recorded" ? "bg-[#fff4df] text-[#98641b]" : "bg-[#eaf4ec] text-[#246b43]"}`}>
                    {order.status === "Order recorded" ? <Clock3 size={13} /> : <CheckCircle2 size={13} />}
                    {order.status}
                  </span>
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {order.items.map((item) => (
                    <div key={`${item.name}-${item.quantity}`} className="flex min-w-0 items-center gap-3 rounded-2xl bg-[#f7f8f3] p-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#397046] shadow-sm"><Utensils size={18} /></span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-extrabold text-[#273329]">{item.name}</span>
                        <span className="mt-0.5 block text-xs text-[#778078]">{item.quantity}</span>
                      </span>
                    </div>
                  ))}
                </div>
                {order.note ? <p className="mt-3 text-xs leading-5 text-[#85877c]">{order.note}</p> : null}
              </article>
            ))}
          </div>
        </section>

        <section className="orders-cta relative overflow-hidden rounded-[28px] bg-[#f1ead8] p-6 sm:rounded-[34px] sm:p-10">
          <div className="orders-cta-orb" aria-hidden="true" />
          <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[.22em] text-[#c47a2b]">Planning something special?</p>
              <h2 className="mt-2 text-2xl font-black tracking-[-.04em] text-[#1a2a20] sm:text-3xl">Let&apos;s plan your next bulk order.</h2>
              <p className="mt-2 text-sm leading-6 text-[#687166]">Talk to CookOnStay about quantities, menu options, delivery timing and availability for your requirement.</p>
            </div>
            <a
              href="https://wa.me/919488270932?text=Hi%20CookOnStay%2C%20I%27d%20like%20to%20enquire%20about%20a%20bulk%20food%20order."
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#176b45] px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#176b45]/15 transition hover:-translate-y-1 hover:bg-[#105536]"
            >
              <MessageCircle size={17} /> Enquire about bulk orders <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <p className="mx-auto mt-6 flex max-w-4xl items-start justify-center gap-2 px-2 text-center text-[11px] leading-5 text-[#7b8178]">
          <Clock3 size={13} className="mt-0.5 shrink-0" /> Some dates and quantities were not provided and are labelled accordingly. Food photographs are menu illustrations and are not represented as photographs of the specific recorded deliveries. Please confirm order-history details before publishing them as customer case studies.
        </p>

        <footer className="py-8 text-center">
          <p className="text-xs font-semibold text-[#687166]">CookOnStay · Wherever You Stay, It Feels Like Home.</p>
          <Link href="/" className="mt-2 inline-flex items-center gap-1 text-xs font-extrabold text-[#176b45] hover:underline">Visit CookOnStay <ArrowRight size={13} /></Link>
        </footer>
      </div>
    </main>
  );
}
