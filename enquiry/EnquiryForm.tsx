"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { BUSINESS } from "@/constants/business";

const enquiryTypes = [
  "General Enquiry",
  "College / Campus",
  "Catering",
  "Bulk Food Requirement",
  "Corporate / Workplace",
  "Other",
];

const inputClass =
  "w-full rounded-2xl border border-[#dfe5dd] bg-[#f8f9f5] px-4 py-3.5 text-base text-[#172019] outline-none transition placeholder:text-[#9aa39d] focus:border-[#176b45] focus:bg-white focus:ring-4 focus:ring-[#176b45]/10";

export default function EnquiryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/xjyvakqr", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      setSubmitted(true);
    } catch {
      setError(
        "We couldn't send your enquiry just now. Please try again or contact us directly on WhatsApp.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const whatsappUrl = `${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi CookOnStay, I would like to make an enquiry.")}`;

  return (
    <main className="contact-page w-full overflow-hidden bg-[#f8f8f3]">
      <section className="contact-hero relative isolate">
        <div className="contact-hero-glow" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1.02fr_.98fr] lg:px-16 lg:py-20 xl:px-24">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#176b45]/15 bg-white/80 px-4 py-2 text-[11px] font-black uppercase tracking-[.2em] text-[#176b45] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#f28c28]" /> We&apos;re here to help
            </span>
            <h1 className="mt-7 max-w-3xl text-[clamp(2.8rem,6.2vw,5.7rem)] font-black leading-[.94] tracking-[-.065em] text-[#172019]">
              Good food starts with a <span className="text-[#176b45]">conversation.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#68736c] sm:text-lg">
              Planning a catering order, arranging food for your college or workplace, or simply have a question? Tell us what you need. The CookOnStay team is ready to help.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">

              {/* Primary CTA */}
              <a
                href="#send-enquiry"
                className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-[#10452F] bg-[#10452F] px-7 py-3.5 text-sm font-extrabold !text-white shadow-[0_10px_25px_rgba(16,69,47,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3826] hover:shadow-[0_14px_30px_rgba(16,69,47,0.25)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10452F]"
              >
                <span className="!text-white">Send an enquiry</span>
                <ArrowUpRight size={17} className="!text-white" />
              </a>

              {/* Secondary CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-[#D5DED7] bg-[#F8FAF7] px-7 py-3.5 text-sm font-bold text-[#10452F] transition-all duration-300 hover:-translate-y-1 hover:border-[#10452F] hover:bg-[#EDF3EE] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10452F]"
              >
                <MessageCircle size={17} />
                WhatsApp us
              </a>

            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold text-[#7a857d]">
              <span className="inline-flex items-center gap-2"><Check size={15} className="text-[#176b45]" /> Catering & bulk orders</span>
              <span className="inline-flex items-center gap-2"><Check size={15} className="text-[#176b45]" /> College & workplace food</span>
            </div>
          </div>

          <div className="contact-visual-stage relative mx-auto w-full max-w-[620px]">
            <div className="contact-visual-ring" aria-hidden="true" />
            <div className="contact-visual-photo">
              <Image
                src="/images/cookonstay-stall.webp"
                alt="CookOnStay food service counter"
                fill
                priority
                sizes="(max-width: 1023px) 90vw, 46vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10251a]/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
                <span className="text-[10px] font-black uppercase tracking-[.22em] text-[#f5c28f]">CookOnStay · Madurai</span>
                <p className="mt-2 text-2xl font-black tracking-[-.04em] sm:text-3xl">Good food. Good days.</p>
              </div>
            </div>
            <div className="contact-floating-card contact-floating-card-top">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f2ec] text-[#176b45]"><MessageCircle size={19} /></span>
              <span><strong>Let&apos;s connect</strong><small>We&apos;re one message away</small></span>
            </div>
            <div className="contact-floating-card contact-floating-card-bottom">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0df] text-[#d97720]"><MapPin size={19} /></span>
              <span><strong>Based in Madurai</strong><small>Serving food needs with care</small></span>
            </div>
          </div>
        </div>
        <div className="contact-hero-stripe" />
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-7 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[.82fr_1.18fr] lg:px-16 lg:py-20 xl:px-24">
        <aside className="contact-info-panel relative overflow-hidden rounded-[30px] bg-[#176b45] p-7 text-white sm:p-9 lg:p-10">
          <div className="contact-info-orb" aria-hidden="true" />
          <div className="relative z-10">
            <span className="text-[11px] font-black uppercase tracking-[.2em] text-[#c3e1ce]">Contact CookOnStay</span>
            <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-.05em] sm:text-4xl">Let&apos;s make your food plans happen.</h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#dceee3]">Choose the contact method that works best for you. For detailed requirements, use the enquiry form and share a few details with us.</p>

            <div className="mt-9 space-y-3">
              <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} className="contact-detail-link">
                <span className="contact-detail-icon"><Phone size={18} /></span>
                <span className="min-w-0"><small>Call us</small><strong>{BUSINESS.phone}</strong></span>
                <ArrowUpRight size={17} className="ml-auto shrink-0 text-white/70" />
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="contact-detail-link">
                <span className="contact-detail-icon"><Mail size={18} /></span>
                <span className="min-w-0"><small>Email us</small><strong className="break-all">{BUSINESS.email}</strong></span>
                <ArrowUpRight size={17} className="ml-auto shrink-0 text-white/70" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="contact-detail-link">
                <span className="contact-detail-icon"><MessageCircle size={18} /></span>
                <span className="min-w-0"><small>WhatsApp</small><strong>Chat with our team</strong></span>
                <ArrowUpRight size={17} className="ml-auto shrink-0 text-white/70" />
              </a>
              <a href={BUSINESS.mapUrl} target="_blank" rel="noreferrer" className="contact-detail-link">
                <span className="contact-detail-icon"><MapPin size={18} /></span>
                <span className="min-w-0"><small>Visit us</small><strong>{BUSINESS.address}</strong></span>
                <ArrowUpRight size={17} className="ml-auto shrink-0 text-white/70" />
              </a>
            </div>

            <div className="mt-8 flex items-start gap-3 border-t border-white/15 pt-6 text-sm leading-6 text-[#dceee3]">
              <Clock3 size={18} className="mt-1 shrink-0 text-[#f5c28f]" />
              <span><strong className="block text-white">Business hours</strong>{BUSINESS.hours}</span>
            </div>
            <p className="mt-4 text-xs leading-5 text-[#c3e1ce]">Please contact us to confirm current availability and service timings.</p>

            {/* Business identity for customer and payment-provider verification */}
            <div className="mt-7 rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="text-[10px] font-black uppercase tracking-[.18em] text-[#c3e1ce]">
                Registered business details
              </p>
              <dl className="mt-3 space-y-3 text-sm">
                <div>
                  <dt className="text-xs text-[#c3e1ce]">Legal business / trade name</dt>
                  <dd className="mt-1 font-bold text-white">COOKONSTAY</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#c3e1ce]">Business constitution</dt>
                  <dd className="mt-1 font-semibold text-white">Proprietorship</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#c3e1ce]">Udyam Registration Number</dt>
                  <dd className="mt-1 font-semibold text-white">{BUSINESS.msme}</dd>
                </div>
              </dl>
            </div>
          </div>
        </aside>

        <div id="send-enquiry" className="scroll-mt-24 rounded-[30px] border border-[#e3e8e0] bg-white p-6 shadow-[0_20px_65px_rgba(23,32,25,.06)] sm:p-9 lg:p-10">
          {!submitted ? (
            <>
              <div className="border-b border-[#e8ece6] pb-6">
                <p className="text-[11px] font-black uppercase tracking-[.2em] text-[#d9822b]">Start a conversation</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-.05em] text-[#172019] sm:text-4xl">How can we help?</h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[#748078]">Share your details and requirement. Fields marked with * are required.</p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <input type="hidden" name="_subject" value="New CookOnStay Website Enquiry" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="form-label">Your name <span>*</span></label>
                    <input id="name" name="name" type="text" autoComplete="name" required maxLength={100} placeholder="Enter your name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label">Phone number <span>*</span></label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required maxLength={20} placeholder="Enter your phone number" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="form-label">Email address <span className="optional-label">(optional)</span></label>
                  <input id="email" name="email" type="email" autoComplete="email" maxLength={150} placeholder="you@example.com" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="type" className="form-label">What is your enquiry about? <span>*</span></label>
                  <select id="type" name="type" required defaultValue="" className={inputClass}>
                    <option value="" disabled>Select an enquiry type</option>
                    {enquiryTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="organisation" className="form-label">College / organisation <span className="optional-label">(optional)</span></label>
                  <input id="organisation" name="organisation" type="text" autoComplete="organization" maxLength={150} placeholder="College, company or organisation name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="message" className="form-label">Tell us about your requirement <span>*</span></label>
                  <textarea id="message" name="message" required minLength={10} maxLength={3000} rows={5} placeholder="Share the food items, approximate quantity, event date, location or any other useful details..." className={`${inputClass} min-h-[150px] resize-y leading-6`} />
                  <p className="mt-2 text-xs text-[#929c94]">Please avoid including payment details or other sensitive information.</p>
                </div>

                {error && <p role="alert" className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">{error}</p>}
                <button type="submit" disabled={isSubmitting} className="group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#f28c28] px-6 py-4 text-sm font-black text-white shadow-[0_12px_25px_rgba(242,140,40,.2)] transition hover:-translate-y-0.5 hover:bg-[#dc781a] disabled:cursor-not-allowed disabled:opacity-65">
                  {isSubmitting ? "Sending your enquiry..." : "Send enquiry"}
                  <Send size={17} className="transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-center text-xs leading-5 text-[#929c94]">By submitting, you agree that CookOnStay may use these details to respond to your enquiry.</p>
              </form>
            </>
          ) : (
            <div className="flex min-h-[560px] items-center justify-center py-12 text-center">
              <div className="max-w-md">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#e8f2ec] text-[#176b45]"><Check size={34} strokeWidth={3} /></div>
                <p className="mt-7 text-[11px] font-black uppercase tracking-[.2em] text-[#d9822b]">Enquiry received</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-.05em] text-[#172019] sm:text-4xl">Thanks for reaching out!</h2>
                <p className="mt-4 text-sm leading-7 text-[#748078]">Your enquiry has been submitted. Our team will use the contact details you provided to respond.</p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a href="/menu" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#176b45] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#105637]">Explore menu</a>
                  <button type="button" onClick={() => setSubmitted(false)} className="min-h-12 rounded-full border border-[#dfe5dd] px-6 py-3 text-sm font-bold text-[#172019] transition hover:border-[#176b45] hover:text-[#176b45]">New enquiry</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="border-y border-[#e5e9e2] bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-0 px-5 sm:px-8 md:grid-cols-3 lg:px-16 xl:px-24">
          {[
            { number: "01", title: "Share your need", copy: "Tell us what kind of food or service you are looking for." },
            { number: "02", title: "Discuss the details", copy: "We can understand your quantity, timing and service requirements." },
            { number: "03", title: "Plan with our team", copy: "Work with CookOnStay to discuss a solution for your requirement." },
          ].map((step, index) => (
            <div key={step.number} className={`contact-step-card py-8 sm:px-7 lg:py-10 ${index < 2 ? "border-b border-[#e8ece6] md:border-b-0 md:border-r" : ""}`}>
              <span className="text-xs font-black tracking-[.18em] text-[#d9822b]">{step.number}</span>
              <h3 className="mt-3 text-xl font-black tracking-[-.03em] text-[#172019]">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[#748078]">{step.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-16 lg:py-16 xl:px-24">
        <div className="contact-location-card flex flex-col gap-6 rounded-[28px] border border-[#e2e8df] bg-[#eef3eb] p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#176b45] shadow-sm"><MapPin size={22} /></span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.2em] text-[#d9822b]">Find CookOnStay</p>
              <h2 className="mt-2 text-xl font-black tracking-[-.03em] text-[#172019]">Visit us in Madurai</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#68736c]">{BUSINESS.address}</p>
            </div>
          </div>
          <a href={BUSINESS.mapUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#176b45] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            Open in Google Maps <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
