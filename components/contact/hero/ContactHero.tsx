import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function ContactHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-orange-50
        via-white
        to-white
        py-20
        sm:py-24
        lg:py-28
      " style={{padding: "20px"}}
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -left-44
          top-16
          h-96
          w-96
          rounded-full
          bg-orange-200/30
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-44
          bottom-0
          h-96
          w-96
          rounded-full
          bg-amber-200/30
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-full
          items-center
          gap-16
          px-5
          sm:px-6
          lg:grid-cols-2
          lg:px-8
        "
      >
        {/* LEFT */}

        <div>

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-orange-100
              px-4
              py-2
              text-sm
              font-semibold
              text-orange-600
            " style={{ padding: "5px 10px" }}
          >
            📞 Contact CookOnStay
          </span>

          <h1
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-slate-900
              sm:text-5xl
            "
          >
            Let's Talk About
            <span className="block text-orange-500">
              Your Next Meal.
            </span>
          </h1>

          <p
            className="
              mt-6
              max-w-full
              text-base
              leading-8
              text-slate-600
              sm:text-lg
            "
            style={{ padding: "5px 10px" }}
          >
            Whether you're planning dinner, a family gathering,
            or a bulk order, we're here to help.
            Reach out through WhatsApp, phone,
            or visit us in Madurai.
          </p>

          {/* Buttons */}

          <div
            className="
              mt-10
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
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
                bg-orange-500
                px-6
                py-3.5
                font-semibold
                text-white
                shadow-lg
                shadow-orange-500/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-orange-600
              " style={{ padding: "10px 20px" }}
            >
              <MessageCircle size={18} />

              WhatsApp Us

              <ArrowRight size={17} />
            </a>

            <a
              href="tel:+919488270932"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-orange-200
                bg-white
                px-6
                py-3.5
                font-semibold
                text-slate-900
                transition-all
                duration-300
                hover:border-orange-400
                hover:bg-orange-50
              " style={{ padding: "10px 20px" }}
            >
              <Phone size={18} />

              Call Now
            </a>
          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div
            className="
              relative
              overflow-hidden
              rounded-[36px]
              shadow-[0_35px_80px_rgba(249,115,22,0.18)]
            "
          >
            <Image
              src="/images/contact/contact-hero.png"
              alt="CookOnStay Contact"
              width={700}
              height={700}
              priority
              className="
                h-[520px]
                w-full
                object-cover
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/50
                via-transparent
                to-transparent
              "
            />

            {/* Floating Card */}

            <div
              className="
                absolute
                bottom-6
                left-6
                right-6
                rounded-2xl
                border
                border-white/20
                bg-white/15
                p-5
                text-white
                backdrop-blur-xl
              "style={{padding: "10px 15px"}}
            >
              <p className="text-sm text-orange-200">
                📍 Visit Us
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                CookOnStay
              </h3>

              <p className="mt-2 text-sm leading-7 text-white/80">
                Homemade South Indian meals,
                prepared fresh every evening
                with warmth and care.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

function InfoChip({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-orange-100
        bg-white
        px-4
        py-2
        text-sm
        font-medium
        text-slate-700
        shadow-sm
      "
    >
      <span className="text-orange-500">
        {icon}
      </span>

      {text}
    </div>
  );
}
