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
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/enquiry"
                className="inline-flex min-w-[190px] items-center justify-center rounded-xl bg-[#f28c28] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#d97416]"
              >
                Make an Enquiry
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="/menu"
                className="inline-flex min-w-[190px] items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Explore Menu
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}