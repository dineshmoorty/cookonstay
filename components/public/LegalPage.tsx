import Link from "next/link";
import { BUSINESS } from "@/constants/business";

type Section = { title: string; paragraphs?: string[]; bullets?: string[] };

export default function LegalPage({ title, intro, updated, sections }: { title: string; intro: string; updated: string; sections: Section[] }) {
  return (
    <main className="min-h-screen bg-[#f8f7f2] px-5 py-12 text-[#172019] sm:px-8 sm:py-16">
      <article className="mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-[#e3e8e0] bg-white shadow-[0_18px_60px_rgba(23,32,25,.06)]">
        <header className="bg-[#10452f] px-6 py-10 text-white sm:px-10 sm:py-14">
          <p className="text-xs font-black uppercase tracking-[.2em] text-[#f5bd7b]">CookOnStay · Legal information</p>
          <h1 className="mt-4 text-3xl font-black tracking-[-.04em] sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">{intro}</p>
          <p className="mt-5 text-xs font-semibold text-white/55">Last updated: {updated}</p>
        </header>
        <div className="space-y-9 px-6 py-9 sm:px-10 sm:py-12">
          <section className="rounded-2xl border border-[#e5ebe5] bg-[#f8faf7] p-5 sm:p-6">
            <h2 className="text-base font-extrabold text-[#10452f]">Business details</h2>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div><dt className="text-xs font-semibold uppercase tracking-wide text-[#78847b]">Business</dt><dd className="mt-1 font-semibold">{BUSINESS.name} (sole proprietorship)</dd></div>
              <div><dt className="text-xs font-semibold uppercase tracking-wide text-[#78847b]">FSSAI licence</dt><dd className="mt-1 font-semibold">22426577000421</dd></div>
              <div><dt className="text-xs font-semibold uppercase tracking-wide text-[#78847b]">Udyam registration</dt><dd className="mt-1 font-semibold">UDYAM-TN-12-0051633</dd></div>
              <div><dt className="text-xs font-semibold uppercase tracking-wide text-[#78847b]">Email</dt><dd className="mt-1 font-semibold"><a className="text-[#176b45] underline underline-offset-4" href="mailto:support@cookonstay.com">support@cookonstay.com</a></dd></div>
              <div className="sm:col-span-2"><dt className="text-xs font-semibold uppercase tracking-wide text-[#78847b]">Business address</dt><dd className="mt-1 font-semibold">106A, Panthadi 9th Street, Thavittusandhai, Madurai - 625001</dd></div>
            </dl>
          </section>
          {sections.map((section, index) => (
            <section key={section.title}>
              <h2 className="text-xl font-extrabold tracking-tight text-[#10452f]">{index + 1}. {section.title}</h2>
              {section.paragraphs?.map((paragraph, i) => <p key={i} className="mt-3 text-sm leading-7 text-[#59665d]">{paragraph}</p>)}
              {section.bullets && <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#59665d]">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
            </section>
          ))}
          <div className="border-t border-[#e7ebe6] pt-6 text-sm leading-7 text-[#68746b]">
            Questions about this page? Contact <a className="font-bold text-[#176b45] underline underline-offset-4" href="mailto:support@cookonstay.com">support@cookonstay.com</a>.
            <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold text-[#176b45]"><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms & Conditions</Link><Link href="/refund-policy">Refund Policy</Link><Link href="/contact">Contact</Link></div>
          </div>
        </div>
      </article>
    </main>
  );
}
