import { Phone, MessageCircle } from "lucide-react";

import { BULK_ORDERS } from "@/constants/bulkOrders";

import BulkOrderHeader from "./BulkOrderHeader";
import BulkOrderCard from "./BulkOrderCard";

export default function BulkOrdersSection() {
  return (
    <section
      id="bulk-orders"
      className="
        relative overflow-hidden
        bg-gradient-to-br
        from-orange-50
        via-white
        to-amber-50
        py-20 sm:py-24
      " style={{ padding: "20px" }}
    >
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-300/15 blur-3xl" style={{ padding: "20px" }} />

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" style={{ padding: "20px" }} />

      <div className="relative z-10 mx-auto max-w-full px-5 sm:px-6 lg:px-8">
        <BulkOrderHeader />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ padding: "20px 0px" }}>
          {BULK_ORDERS.map((order) => (
            <BulkOrderCard
              key={order.id}
              title={order.title}
              description={order.description}
              icon={order.icon}
            />
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-full rounded-[32px] bg-slate-900 p-7 text-center text-white sm:p-10" style={{ padding: "20px" }}>
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400" style={{ padding: "5px 0px" }}>
            Planning a Bulk Order?
          </p>

          <h3 className="mt-3 text-2xl font-bold sm:text-3xl" style={{ padding: "5px 0px" }}>
            Tell us your event, menu and quantity.
          </h3>

          <p className="mx-auto mt-4 max-w-full leading-7 text-slate-300" style={{ padding: "5px 0px" }}>
            Contact CookOnStay to discuss availability and a suitable
            menu for your occasion.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row" style={{ padding: "10px" }}>
            <a
              href="tel:+919488270932"
              className="
                inline-flex items-center justify-center gap-2
                rounded-xl bg-orange-500
                px-6 py-3.5 font-semibold
                transition hover:bg-orange-600
              " style={{ padding: "10px 20px" }}
            >
              <Phone size={18} />
              Call for Bulk Order
            </a>

            <a
              href="https://wa.me/919488270932"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-2
                rounded-xl border border-white/20
                bg-white/10 px-6 py-3.5
                font-semibold backdrop-blur-md
                transition hover:bg-white/20
              " style={{ padding: "10px 20px" }}
            > 
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}