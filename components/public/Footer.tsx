import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Catering", href: "/catering" },
  { label: "About", href: "/about" },
  { label: "Enquiry", href: "/enquiry" },
];

/*
 * Replace these with the real CookOnStay social links.
 */
const socialLinks = {
  instagram: "https://instagram.com/cookonstay_madurai",
  whatsapp: "https://wa.me/919488270932",
  linkedin: "https://linkedin.com/company/cookonstay",
  zomato: "https://www.zomato.com/madurai/cook-on-stay-periyar/order",
};

/*
 * Replace these with the actual registration numbers
 * before publishing the website.
 */
const businessInfo = {
  udyam: "UDYAM-TN-12-0051633",
  fssai: "22426577000421",
};


/* =========================================================
   SOCIAL ICONS
========================================================= */

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}


function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M20.2 11.2a8.2 8.2 0 0 1-12.1 7.2L4 20l1.7-4a8.2 8.2 0 1 1 14.5-4.8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8.8 8.4c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.6.7c.6 1.1 1.5 2 2.6 2.6l.7-.6c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.5.3-1.2.4-1.8.2-2.1-.6-4.1-2-5.5-3.7-1-1.1-1.6-2.3-1.8-3.1-.1-.5 0-1.1.3-1.6Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M5.2 8.4H2.1V21h3.1V8.4ZM3.65 3A1.85 1.85 0 1 0 3.65 6.7 1.85 1.85 0 0 0 3.65 3ZM21.9 13.8c0-3.8-2-5.6-4.8-5.6-2.2 0-3.2 1.2-3.8 2v-1.8h-3.1V21h3.1v-6.2c0-1.6.3-3.2 2.3-3.2 2 0 2 1.9 2 3.3V21h3.1l.1-7.2Z" />
    </svg>
  );
}


function ZomatoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M5 7h13L6 17h13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  return (
    <footer className="border-t border-[#e1e5e1] bg-[#172019] text-white">

      <div className="mx-auto w-full px-5 py-14 sm:px-8 lg:px-10 xl:px-14">

        {/* =================================================
            MAIN FOOTER
        ================================================= */}
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.7fr_0.9fr]">

          {/* =================================================
              BRAND
          ================================================= */}
          <div className="max-w-xl">

            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="CookOnStay home"
            >

              <Image
                src="/icons/icon.png"
                alt="CookOnStay"
                width={68}
                height={68}
                className="h-[64px] w-[64px] object-contain"
                priority
              />

              <div className="leading-none">

                <div className="text-[22px] font-black tracking-[-0.04em] text-white">
                  Cook<span className="text-[#67b58b]">On</span>Stay
                </div>

                <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
                  Food & Catering
                </div>

              </div>

            </Link>


            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              Fresh food, dependable catering and practical food
              solutions for colleges, workplaces, events and
              everyday dining.
            </p>


            {/* SINCE 2022 */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/65">

              <span className="h-2 w-2 rounded-full bg-[#f28c28]" />

              Serving with purpose since 2022

            </div>


            {/* =================================================
                SOCIAL LINKS
            ================================================= */}
            <div className="mt-8">

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                Follow CookOnStay
              </p>


              <div className="mt-4 flex flex-wrap gap-3">

                {/* Instagram */}
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CookOnStay on Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/65 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <InstagramIcon />
                </a>


                {/* WhatsApp */}
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact CookOnStay on WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/65 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <WhatsAppIcon />
                </a>


                {/* LinkedIn */}
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CookOnStay on LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/65 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <LinkedInIcon />
                </a>


                {/* Zomato */}
                <a
                  href={socialLinks.zomato}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CookOnStay on Zomato"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/65 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <ZomatoIcon />
                </a>

              </div>

            </div>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================= */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.16em]">
              Quick Links
            </h3>


            <nav
              className="mt-5 flex flex-col items-start gap-3"
              aria-label="Footer navigation"
            >

              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/55 transition hover:translate-x-1 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

            </nav>

          </div>


          {/* =================================================
              CONTACT
          ================================================= */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.16em]">
              Let&apos;s Connect
            </h3>


            <div className="mt-5 space-y-6">

              {/* EMAIL */}
              <div>

                <p className="text-xs font-semibold uppercase tracking-wider text-white/35">
                  Email
                </p>

                <a
                  href="mailto:storeskuberan@gmail.com"
                  className="mt-1 block text-sm text-white/60 transition hover:text-white"
                >
                  storeskuberan@gmail.com
                </a>

              </div>


              {/* BUSINESS ENQUIRY */}
              <div>

                <p className="text-xs font-semibold uppercase tracking-wider text-white/35">
                  Business Enquiries
                </p>

                <Link
                  href="/enquiry"
                  className="mt-1 inline-block text-sm font-semibold text-[#f28c28] transition hover:text-[#ffad5b]"
                >
                  Start an enquiry →
                </Link>

              </div>


              {/* =================================================
                  BUSINESS REGISTRATION
              ================================================= */}
              <div className="border-t border-white/10 pt-6">

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                  Business Information
                </p>


                <div className="mt-4 space-y-3">

                  {/* UDYAM */}
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
                      UDYAM Registration
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white/70">
                      {businessInfo.udyam}
                    </p>

                  </div>


                  {/* FSSAI */}
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
                      FSSAI License
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white/70">
                      {businessInfo.fssai}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            TRUST / BUSINESS STRIP
        ================================================= */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 sm:px-6">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-sm font-bold text-white/80">
                Food. Service. Reliability.
              </p>

              <p className="mt-1 text-xs leading-5 text-white/40">
                Everyday food and catering solutions designed around
                real requirements.
              </p>

            </div>


            <Link
              href="/enquiry"
              className="inline-flex w-fit items-center rounded-xl bg-[#f28c28] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#d97416]"
            >
              Make an Enquiry
            </Link>

          </div>

        </div>


        {/* =================================================
            BOTTOM
        ================================================= */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} CookOnStay. All rights reserved.
          </p>


          <div className="flex flex-wrap items-center gap-4">

            <Link
              href="/"
              className="transition hover:text-white"
            >
              CookOnStay
            </Link>

            <span className="text-white/15">
              •
            </span>

            <span>
              Better food. Better experiences.
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}