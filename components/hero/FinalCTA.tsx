import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-full">
        <div className="relative overflow-hidden rounded-[32px] bg-[#176b45] px-7 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">

          {/* Decorative shapes */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border-[40px] border-white/5" />

          <div className="pointer-events-none absolute -bottom-28 -left-20 h-60 w-60 rounded-full bg-white/5" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

            {/* Content */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">
                Let&apos;s Work Together
              </span>

              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Have a food requirement?
                <br />
                <span className="text-[#b9dfc8]">
                  Let&apos;s make it happen.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/65 sm:text-[16px]">
                Whether you need everyday meals, catering for your institution,
                an event solution or a custom food requirement, talk to us.
              </p>
            </div>

            {/* Actions */}
            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">

              {/* Primary CTA */}
              <Link
                href="/contact"
                className="inline-flex min-h-[58px] min-w-[220px] items-center justify-center gap-3 rounded-2xl bg-[#E97817] px-7 py-4 text-sm font-extrabold !text-white shadow-[0_10px_25px_rgba(233,120,23,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4660D] hover:shadow-[0_14px_30px_rgba(233,120,23,0.32)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F28C28]"
              >
                Make an Enquiry
                <ArrowUpRight size={18} className="text-white" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/menu"
                className="inline-flex min-h-[58px] min-w-[220px] items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white px-7 py-4 text-sm font-extrabold text-[#10452F] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-[#F1F5F0] hover:text-[#0B3826] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore Menu
                <ArrowUpRight size={18} />
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}