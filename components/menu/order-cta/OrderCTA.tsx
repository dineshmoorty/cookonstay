import {
  ArrowRight,
  MapPin,
  MessageCircle,
  Phone,
  UtensilsCrossed,
} from "lucide-react";

export default function OrderCTA() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 sm:py-24" style={{ padding: "20px" }}>
      <div
        className="
          relative
          mx-auto
          max-w-full
          overflow-hidden
          rounded-[32px]
          bg-slate-950
          px-6
          py-12
          text-white
          shadow-[0_30px_80px_rgba(15,23,42,0.18)]
          sm:px-10
          sm:py-14
          lg:px-16
          lg:py-16
        "
      >
        {/* Background Glow */}

        <div
          className="
            absolute
            -left-20
            -top-20
            h-64
            w-64
            rounded-full
            bg-orange-500/20
            blur-3xl
          " style={{ padding: "20px" }}
        />

        <div
          className="
            absolute
            -bottom-32
            right-0
            h-80
            w-80
            rounded-full
            bg-amber-400/10
            blur-3xl
          "
        />

        <div
          className="
            relative
            z-10
            grid
            items-center
            gap-12
            lg:grid-cols-[1.2fr_0.8fr]
          " style={{ padding: "20px" }}
        >
          {/* LEFT */}

          <div>
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-orange-400/20
                bg-orange-500/10
                px-4
                py-2
                text-sm
                font-semibold
                text-orange-300
              " style={{ padding: "5px 20px" }}
            >
              <UtensilsCrossed size={16} />

              Ready to Order?
            </span>

            <h2
              className="
                mt-6
                max-w-2xl
                text-3xl
                font-bold
                leading-tight
                sm:text-4xl
              " style={{ padding: "5px 0px" }}
            >
              Your Next South Indian
              <span className="text-orange-400">
                {" "}Meal Awaits.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-base
                leading-8
                text-slate-300
                sm:text-lg
              " style={{ padding: "5px 0px" }}
            >
              From a simple breakfast to a bulk order for your
              celebration, contact CookOnStay and we&apos;ll help you
              choose the right menu.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:flex-wrap
              "
            >
              <a
                href="tel:+919488270932"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-orange-500
                  px-6
                  py-3.5
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-orange-600
                " style={{ padding: "10px 20px" }}
              >
                <Phone size={18} />

                Call Now

                <ArrowRight size={17} />
              </a>

              <a
                href="https://wa.me/919488270932"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/15
                  bg-white/10
                  px-6
                  py-3.5
                  font-semibold
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:bg-white/15
                " style={{ padding: "10px 20px" }}
              >
                <MessageCircle size={18} />

                WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT ORDER CARD */}

          <div
            className="
              rounded-[28px]
              border
              border-white/10
              bg-white/10
              p-6
              backdrop-blur-xl
              sm:p-8
            " style={{ padding: "20px" }}
          >
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-orange-300
              "
            >
              CookOnStay
            </p>

            <h3 className="mt-3 text-2xl font-bold" style={{ padding: "10px 0px" }}>
              Fresh. Traditional. Made with Care.
            </h3>

            <div className="my-6 border-t border-dashed border-white/15" />

            <div className="space-y-5" style={{ padding: "10px 0px" }}>

              <div className="flex items-start gap-3">
                <Phone
                  size={19}
                  className="mt-1 shrink-0 text-orange-400"
                />

                <div>
                  <p className="text-sm text-slate-400">
                    Call Us
                  </p>

                  <a
                    href="tel:+919488270932"
                    className="font-semibold hover:text-orange-400"
                  >
                    +91 94882 70932
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-orange-400"
                />

                <div>
                  <p className="text-sm text-slate-400">
                    Visit Us
                  </p>

                  <p className="leading-6 text-slate-200">
                    106A, Panthadi 9th Street,
                    <br />
                    Thavittusandhai,
                    <br />
                    Madurai - 625001
                  </p>
                </div>
              </div>

            </div>

            <div className="my-6 border-t border-dashed border-white/15" />

            <p className="text-sm leading-6 text-slate-400">
              Individual orders • Bulk orders • Family functions •
              Special events
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}