import Link from "next/link";
import { BUSINESS } from "@/constants/business";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const contacts = [
  {
    title: "WhatsApp",
    subtitle: "Fastest response",
    value: "+91 94882 70932",
    href: "https://wa.me/919488270932",
    icon: MessageCircle,
    color: "bg-green-500",
  },
  {
    title: "Call Us",
    subtitle: "Talk directly",
    value: "+91 94882 70932",
    href: "tel:+919488270932",
    icon: Phone,
    color: "bg-orange-500",
  },
  {
    title: "Email",
    subtitle: "Send enquiries",
    value: "storeskuberan@gmail.com",
    href: "mailto:storeskuberan@gmail.com",
    icon: Mail,
    color: "bg-blue-500",
  },
  {
    title: "Visit Us",
    subtitle: "Get directions",
    value: "Madurai",
    href: BUSINESS.mapUrl,
    icon: MapPin,
    color: "bg-red-500",
  },
];

export default function ContactMethods() {
  return (
    <section
      className="
        bg-white
        py-20
        sm:py-24
        lg:py-28
      " style={{padding: "20px"}}
    >
      <div
        className="
          mx-auto
          max-w-full
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* Heading */}

        <div className="mx-auto max-w-full text-center" style={{padding: "10px"}}>

          <span
            className="
              rounded-full
              bg-orange-100
              px-4
              py-2
              text-sm
              font-semibold
              text-orange-600
            "style={{padding: "5px 10px"}}
          >
            Contact Options
          </span>

          <h2
            className="
              mt-6
              text-3xl
              font-bold
              text-slate-900
              sm:text-4xl
            " style={{marginTop: "10px"}}
          >
            Reach Us Your Way
          </h2>

          <p
            className="
              mt-4
              text-slate-600
              leading-8
            "style={{marginTop: "10px"}}
          >
            Whether you have a question, want to place
            an order or need catering for an event,
            we&apos;re only one message away.
          </p>

        </div>

        {/* Cards */}

        <div
          className="
            mt-14
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-orange-100
                  bg-white
                  p-7
                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:border-orange-300
                  hover:shadow-xl
                "style={{padding: "10px", borderRadius: "20px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"}}
              >
                {/* Icon */}

                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    text-white

                    ${item.color}
                  `}
                >
                  <Icon size={24} />
                </div>

                <p
                  className="
                    mt-6
                    text-sm
                    font-medium
                    text-orange-500
                  "style={{marginTop: "5px"}}
                >
                  {item.subtitle}
                </p>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    text-slate-900
                  "style={{marginTop: "5px"}}
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-slate-600
                    break-words
                  "
                >
                  {item.value}
                </p>

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-2

                    font-semibold
                    text-orange-500
                  "style={{marginTop: "5px"}}
                >
                  Contact

                  <ArrowUpRight
                    size={18}
                    className="
                      transition-transform
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
