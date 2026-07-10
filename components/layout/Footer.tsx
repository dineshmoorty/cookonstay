import Image from "next/image";
import Link from "next/link";

import { BUSINESS } from "@/constants/business";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <section>
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/logo/logo.png"
                alt={BUSINESS.name}
                width={60}
                height={60}
              />

              <div>
                <h2 className="text-2xl font-bold">
                  {BUSINESS.name}
                </h2>

                <p className="text-sm text-orange-400">
                  {BUSINESS.tagline}
                </p>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-7 text-gray-300">
              {BUSINESS.description}
            </p>
          </section>

          {/* Contact */}
          <section>
            <h3 className="mb-5 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-gray-300">

              <p>
                 {BUSINESS.phone}
              </p>

              <p>
                 {BUSINESS.email}
              </p>


              <p>
                07:00 PM - 10:00 PM (MON - SAT)
              </p>

            </div>
          </section>

          {/* Address */}
          <section>
            <h3 className="mb-5 text-xl font-semibold">
              Find Us
            </h3>

            <p className="leading-7 text-gray-300">
              {BUSINESS.address}
            </p>

            <Link
              href="https://maps.google.com"
              target="_blank"
              className="mt-5 inline-block text-orange-400 hover:text-orange-300"
            >
              📍 View on Google Maps →
            </Link>
          </section>

        </div>

        {/* Legal */}
        <div className="mt-12 border-t border-white/10 pt-8">

          <div className="flex flex-col gap-4 text-sm text-gray-300 md:flex-row md:items-center md:justify-between">

            <div className="space-y-2">

              <p>
                MSME : {BUSINESS.msme}
              </p>

              <p>
                FSSAI : {BUSINESS.fssai}
              </p>

            </div>

            <p>
              © {new Date().getFullYear()} {BUSINESS.name}. All Rights Reserved.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}