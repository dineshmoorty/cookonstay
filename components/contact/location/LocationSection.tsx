import {
  Clock3,
  Mail,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import GoogleMap from "@/components/common/Googlemap";
import { BUSINESS } from "@/constants/business";

export default function LocationSection() {
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
      {/* Background */}

      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-orange-200/20 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-amber-200/20 blur-3xl" />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-full
          px-5
          sm:px-6
          lg:px-8
        ">
      
        <div
          className="
            grid
            gap-10
            lg:grid-cols-[420px_1fr]
            lg:items-center
          "
        >
          {/* LEFT CARD */}

          <div
            className="
              rounded-[32px]
              border
              border-orange-100
              bg-white
              p-8
              shadow-xl
              shadow-orange-100/40
            "style={{padding: "20px"}}
          >
            <span
              className="
                inline-flex
                rounded-full
                bg-orange-100
                px-4
                py-2
                text-sm
                font-semibold
                text-orange-600
              "style={{padding: "5px 10px"}}
            >
              📍 Visit CookOnStay
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900" style={{marginTop: "10px"}}>
              We'd Love
              <span className="block text-orange-500">
                to Welcome You.
              </span>
            </h2>

            <div className="mt-8 space-y-6" style={{margin: "10px 0"}}>

              <Info
                icon={<MapPin size={20} />}
                title="Address"
                value="106A, Panthadi 9th Street,Thavittusandhai,Madurai - 625001"
              />

              <Info
                icon={<Clock3 size={20} />}
                title="Opening Hours"
                value="Monday – Saturday
7:00 PM – 10:00 PM"
              />

              <Info
                icon={<Phone size={20} />}
                title="Phone"
                value="+91 94882 70932"
              />

              <Info
                icon={<Mail size={20} />}
                title="Email"
                value="storeskuberan@gmail.com"
              />

            </div>

            <a
              href={BUSINESS.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-orange-500
                px-6
                py-4
                font-semibold
                text-white
                transition
                hover:bg-orange-600
              "style={{padding: "10px"}}
            >
              <Navigation size={19} />

              Get Directions
            </a>
          </div>

          {/* MAP */}

          <div
            className="
              overflow-hidden
              rounded-[32px]
              border
              border-orange-100
              shadow-xl
            "
          >
            <GoogleMap />
          </div>

        </div>
      </div>
    </section>
  );
}

function Info({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex gap-4">

      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-orange-100
          text-orange-500
          shrink-0
        "
      >
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold text-orange-500">
          {title}
        </p>

        <p className="mt-1 whitespace-pre-line leading-7 text-slate-700">
          {value}
        </p>
      </div>

    </div>
  );
}
