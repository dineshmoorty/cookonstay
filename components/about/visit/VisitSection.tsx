import {
  ArrowUpRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function VisitSection() {
  return (
    <section
      id="visit-us"
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-20
        sm:px-6
        sm:py-24
        lg:py-28
      " style={{ padding: "20px" }}
    >
      {/* Background */}

      <div
        className="
          absolute
          -left-40
          bottom-0
          h-80
          w-80
          rounded-full
          bg-orange-200/20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-40
          top-0
          h-80
          w-80
          rounded-full
          bg-amber-200/20
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-full
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[36px]
            bg-gradient-to-br
            from-orange-400
            to-orange-600
            px-6
            py-12
            text-white
            shadow-[0_30px_80px_rgba(249,115,22,0.20)]

            sm:px-10
            sm:py-14

            lg:px-14
            lg:py-16
          "
        >
          {/* Decorative circles */}

          <div
            className="
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              bg-white/10
            "
          />

          <div
            className="
              absolute
              -bottom-28
              left-1/3
              h-64
              w-64
              rounded-full
              bg-amber-300/20
              blur-2xl
            "
          />

          <div
            className="
              relative
              z-10
              grid
              items-center
              gap-12
              lg:grid-cols-[1.1fr_0.9fr]
            "style={{ padding: "20px" }}
          >
            {/* LEFT */}

            <div>
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white/15
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  backdrop-blur-md
                "style={{ padding: "10px 20px" }}
              >
                <MapPin size={16} />

                Visit CookOnStay
              </span>

              <h2
                className="
                  mt-6
                  max-w-2xl
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  sm:text-4xl
                "
              >
                Come Hungry.
                <span className="block text-orange-100">
                  Leave Feeling at Home.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-full
                  text-base
                  leading-8
                  text-orange-50
                  sm:text-lg
                "
              >
                Visit CookOnStay in Madurai for familiar South
                Indian food prepared with the warmth and simplicity
                that have been part of our journey since 2022.
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
                  href="https://www.google.com/maps/search/?api=1&query=106A+Panthadi+9th+Street+Thavittusandhai+Madurai+625001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border-white/25
                    bg-white/10
                    px-6
                    py-3.5
                    font-semibold
                    text-orange-600
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-orange-50
                  "style={{ padding: "10px 20px" }}
                >
                  <MapPin size={18} />

                  Get Directions

                  <ArrowUpRight size={17} />
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
                    border-white/25
                    bg-white/10
                    px-6
                    py-3.5
                    font-semibold
                    text-white
                    backdrop-blur-md
                    transition
                    hover:bg-white/20
                  "style={{ padding: "10px 20px" }}
                >
                  <MessageCircle size={18} />

                  WhatsApp
                </a>
              </div>
            </div>

            {/* RIGHT - LOCATION CARD */}

            <div
              className="
                rounded-[28px]
                border
                border-white/20
                bg-white/15
                p-6
                backdrop-blur-xl
                sm:p-8
              "style={{ padding: "20px" }}
            >
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-orange-100
                "
              >
                Find Us
              </p>

              <h3 className="mt-3 text-2xl font-bold" style={{ padding: "5px 0px" }}>
                CookOnStay
              </h3>

              <div className="my-6 border-t border-white/20" style={{ padding: "5px 0px" }} />

              {/* Address */}

              <div className="flex items-start gap-4">
                <MapPin
                  size={21}
                  className="mt-1 shrink-0 text-orange-100"
                />

                <div>
                  <p className="text-sm text-orange-100">
                    Address
                  </p>

                  <p className="mt-1 leading-7 font-medium">
                    106A, Panthadi 9th Street,
                    <br />
                    Thavittusandhai,
                    <br />
                    Madurai - 625001
                  </p>
                </div>
              </div>

              {/* Phone */}

              <div className="mt-6 flex items-start gap-4">
                <Phone
                  size={21}
                  className="mt-1 shrink-0 text-orange-100"
                />

                <div>
                  <p className="text-sm text-orange-100">
                    Call Us
                  </p>

                  <a
                    href="tel:+919488270932"
                    className="
                      mt-1
                      inline-block
                      font-semibold
                      transition
                      hover:text-orange-100
                    "
                  >
                    +91 94882 70932
                  </a>
                </div>
              </div>

              {/* Hours */}

              <div className="mt-6 flex items-start gap-4" style={{ padding: "10px 0px" }}>
                <Clock3
                  size={21}
                  className="mt-1 shrink-0 text-orange-100"
                />

                <div>
                  <p className="text-sm text-orange-100">
                    Opening Hours
                  </p>

                  <p className="mt-1 font-semibold">
                    7:00 PM – 10:00 PM
                  </p>

                  <p className="mt-1 text-sm text-orange-100">
                    Monday – Saturday
                  </p>
                </div>
              </div>

              <div className="my-6 border-t border-white/20" style={{ padding: "5px 0px" }} />

              <p className="text-sm text-orange-50">
                📍 Madurai, Tamil Nadu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}