import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MessageCircle,
  PackageCheck,
  ShoppingBag,
  Utensils,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bulk Orders | CookOnStay",
  description:
    "A look at CookOnStay's bulk food orders and deliveries in Madurai.",
  alternates: {
    canonical: "/recent-orders",
  },
};

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
    items: [{ name: "Tamarind rice", quantity: "2Padi" } , {name: "idly", quantity: "50 pieces"}],
    status: "Order recorded",
    note: "",
  },
  {
    date: "Last week",
    time: "Delivery",
    items: [{ name: "Mini uthappam", quantity: "44 pieces" }, { name: "Idly", quantity: "88 pieces" } , {name: "Veg Biryani", quantity: "44 Pkts"}],
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

export default function RecentOrdersPage() {
  return (
    <main className="min-h-screen bg-[#f8f3e8] px-4 py-8 text-[#20271f] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/scan"
          className="inline-flex items-center gap-2 rounded-full border border-[#e5dac5] bg-white px-4 py-2 text-sm font-bold text-[#426044] transition hover:bg-[#f4f7ed]"
        >
          <ArrowLeft size={16} />
          Back to CookOnStay
        </Link>

        <section className="mt-6 overflow-hidden rounded-[30px] border border-[#e7ddc9] bg-[#fffdf8] shadow-[0_18px_50px_rgba(57,42,21,0.10)]">
          <header className="relative overflow-hidden bg-[#173c2a] px-6 py-8 text-white sm:px-9 sm:py-10">
            <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full border-[24px] border-white/5" />
            <div className="absolute -bottom-16 right-20 h-36 w-36 rounded-full bg-[#75bd62]/10" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#f5d783]">
                <PackageCheck size={13} />
                Bulk food orders
              </span>
              <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Our Bulk Orders
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
                From family functions to large food orders, CookOnStay prepares
                and delivers homely favourites for your special occasions.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white">
                  Idly
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white">
                  Mini uthappam
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white">
                  Rice varieties
                </span>
              </div>
            </div>
          </header>

          <div className="px-5 py-6 sm:px-9 sm:py-8">
            <div className="mb-5 flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#edf5e8] text-[#24683e]">
                <CalendarDays size={19} />
              </span>
              <div>
                <h2 className="text-lg font-black">Delivery highlights</h2>
                <p className="mt-1 text-sm leading-5 text-[#697064]">
                  A record of the bulk orders you shared. Dates and quantities
                  are shown only where provided.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {bulkOrders.map((order, index) => (
                <article
                  key={`${order.date}-${order.time}-${index}`}
                  className="rounded-2xl border border-[#e9dfcd] bg-white p-4 sm:p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#6d7d50]">
                        {order.date}
                      </p>
                      <h3 className="mt-1 text-base font-extrabold text-[#263127]">
                        {order.time}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#edf6e9] px-2.5 py-1.5 text-[10px] font-extrabold text-[#28643b]">
                      <CheckCircle2 size={13} />
                      {order.status}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    {order.items.map((item) => (
                      <div
                        key={`${item.name}-${item.quantity}`}
                        className="flex items-center gap-3 rounded-xl bg-[#f8f5ed] px-3 py-3"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#397046]">
                          <Utensils size={19} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-extrabold">
                            {item.name}
                          </span>
                          <span className="mt-0.5 block text-xs text-[#73786d]">
                            {item.quantity}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>

                  {order.note ? (
                    <p className="mt-3 text-xs leading-5 text-[#777668]">
                      {order.note}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[#e8d7a9] bg-[#fff6db] p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#8b641b]">
                  <ShoppingBag size={19} />
                </span>
                <div>
                  <h2 className="font-black text-[#4a3b1c]">
                    Planning a function or bulk order?
                  </h2>
                  <p className="mt-1 text-sm leading-5 text-[#766746]">
                    Contact CookOnStay to discuss quantities, menu options,
                    delivery timing, and availability.
                  </p>
                  <a
                    href="https://wa.me/919488270932?text=Hi%20CookOnStay%2C%20I%27d%20like%20to%20enquire%20about%20a%20bulk%20food%20order."
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-green-700 px-4 py-2.5 text-sm font-extrabold text-white transition hover:bg-green-600 sm:px-5 sm:py-3"
                  >
                    <MessageCircle size={17} />
                    Enquire about bulk orders
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-[#777668]">
              <Clock3 size={14} className="mt-0.5 shrink-0" />
              Some order dates and quantities were not provided, so they are
              marked accordingly. Please confirm those details before
              publishing this history publicly.
            </p>
          </div>

          <footer className="border-t border-[#e9dfcd] bg-[#f7f1e4] px-5 py-4 text-center sm:px-9">
            <p className="text-xs font-semibold text-[#596453]">
              CookOnStay · Wherever You Stay, It Feels Like Home.
            </p>
          </footer>
        </section>
      </div>
    </main>
  );
}
