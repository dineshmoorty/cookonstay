import {
  ArrowUpRight,
  Camera,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Googlemap from "@/components/common/Googlemap";

import { BUSINESS } from "@/constants/business";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: BUSINESS.instagram, icon: Camera },
  { label: "Facebook", href: BUSINESS.facebook, icon: MessageCircle },
  { label: "WhatsApp", href: BUSINESS.whatsapp, icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-950 text-white" style={{marginTop: '25px'}}>
      <div aria-hidden="true" className="absolute -left-28 -top-28 -z-10 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-32 -right-24 -z-10 h-96 w-96 rounded-full bg-green-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-16" style={{ padding: '15px' }}>

          {/* Company Info */}
          <section className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-4" aria-label={`${BUSINESS.name} home`}>
              <Image
                src="/logo/logo.png"
                alt=""
                width={72}
                height={72}
                className="h-[4.5rem] w-[4.5rem] object-contain"
              />
              <span>
                <span className="block text-3xl font-semibold tracking-[-0.04em]">{BUSINESS.name}</span>
                <span className="mt-1 block text-sm font-medium text-orange-400">{BUSINESS.tagline}</span>
              </span>
            </Link>

            <p className="mt-8 max-w-sm text-base leading-7 text-green-50/80">
              Fresh homemade South Indian meals, prepared with love and quality ingredients.
            </p>
            <p className="text-sm text-green-50/80" style={{ marginTop: '10px' }}>
              MSME: {BUSINESS.msme}
            </p>
            <p className="text-sm text-green-50/80" style={{ marginTop: '10px' }}>
              FSSAI: {BUSINESS.fssai}
            </p>

            <div className=" flex items-center gap-3" style={{ marginTop: '10px' }}>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-orange-400 hover:bg-orange-400 hover:text-green-950"
                >
                  <Icon aria-hidden="true" size={19} />
                </Link>
              ))}
            </div>
          </section>

          {/* Contact Information */}
          <section className="lg:col-span-4">
            <h2 className="text-lg font-semibold">Contact</h2>
            <div className="space-y-4" style={{ marginBottom: '5px' }}>
              <a
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} style={{marginTop : "15px"}}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-white/10" 
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-400/10 text-orange-400" >
                  <Phone aria-hidden="true" size={20} />
                </span>
                <span>
                  <span className="block text-xs font-medium text-green-50/55">Call Us</span>
                  <span className="mt-1 block text-sm font-medium text-white">{BUSINESS.phone}</span>
                </span>
              </a>

              <a
                href={`mailto:${BUSINESS.email}`} style={{marginTop : "15px"}}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-white/10"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-400/10 text-orange-400">
                  <Mail aria-hidden="true" size={20} />
                </span>
                <span className="min-w-0" >
                  <span className="block text-xs font-medium text-green-50/55">Email Us</span>
                  <span className="mt-1 block break-all text-sm font-medium text-white">{BUSINESS.email}</span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-white/10" style={{marginTop : "15px"}}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-400/10 text-orange-400">
                  <Clock3 aria-hidden="true" size={20} />
                </span>
                <span>
                  <span className="mt-1 block text-sm font-medium leading-6 text-white">7 PM – 10 PM<br />Monday – Saturday</span>
                </span>
              </div>
            </div>
          </section>

          <section className="lg:col-span-4">
            <h2 className="mb-5 text-lg font-semibold">Visit Us</h2>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-400/10">
                  <MapPin className="text-orange-400" size={28} />
                </div>

                <div className="flex-1">
                  <address className="not-italic text-green-50/90 leading-7">
                    {BUSINESS.address}
                  </address>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-xl">
                <Googlemap />
              </div>
            </div>
          </section>

        </div>
      </div>
    </footer>
  );
}
