import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Googlemap from "@/components/common/Googlemap";

import { BUSINESS } from "@/constants/business";

const socialLinks = [
  {
    label: "Instagram",
    href: BUSINESS.instagram,
    icon: ({ className }: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm-.19 2A3.57 3.57 0 0 0 4 7.56v8.88A3.57 3.57 0 0 0 7.56 20h8.88A3.57 3.57 0 0 0 20 16.44V7.56A3.57 3.57 0 0 0 16.44 4H7.56ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.2-3.55a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: BUSINESS.facebook,
    icon: ({ className }: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H7.7v3h2.7v8h3.1Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: BUSINESS.whatsapp,
    icon: ({ className }: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M20.5 3.5A11.9 11.9 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.9c0 2.1.6 4.2 1.6 5.9L0 24l6.4-1.7a12 12 0 0 0 5.7 1.5h.1c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.3-6.2-3.6-8.4Zm-8.4 18.3h-.1c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.8 1 1-3.7-.3-.4a9.9 9.9 0 0 1-1.5-5.2c0-5.5 4.5-10 10-10 2.7 0 5.2 1 7.1 2.9a10 10 0 0 1 2.9 7.1c0 5.5-4.4 9.9-9.8 9.9Zm5.5-7.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.8-2.8-1.4-3.9-3.2-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.5l-.9-2.2c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.4 1.6.5.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: BUSINESS.linkedin,
    icon: ({ className }: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M20.5 3h-17A1.5 1.5 0 0 0 2 4.5v15A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20.5 3ZM8 18H5V9h3v9ZM6.5 7.7A1.7 1.7 0 1 1 6.5 4a1.7 1.7 0 0 1 0 3.7ZM19 18h-3v-4.4c0-1.1 0-2.5-1.5-2.5S12.8 12.3 12.8 13.5V18h-3V9h2.9v1.2h.1c.4-.8 1.4-1.6 2.8-1.6 3 0 3.5 2 3.5 4.5V18Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-950 text-white" style={{marginTop: '25px'}}>
      <div aria-hidden="true" className="absolute -left-28 -top-28 -z-10 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-32 -right-24 -z-10 h-96 w-96 rounded-full bg-green-400/10 blur-3xl" />

      <div className="mx-auto max-w-full px-6 py-20 lg:px-8">
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
                  <Icon className="h-[19px] w-[19px]" />
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
