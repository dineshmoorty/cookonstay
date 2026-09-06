"use client";

import { FormEvent, useState } from "react";

const enquiryTypes = [
  "General Enquiry",
  "College / Campus",
  "Catering",
  "Bulk Food Requirement",
  "Corporate / Workplace",
  "Other",
];

export default function EnquiryPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="w-full bg-[#f8f7f2]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="w-full border-b border-[#e4e7e2] bg-white">
        <div className="px-6 py-16 sm:px-10 lg:px-16 lg:py-20 xl:px-24">

          <div className="max-w-4xl">

            <span className="inline-flex rounded-full bg-[#e8f2ec] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#176b45]">
              Enquiry
            </span>

            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.055em] text-[#172019] sm:text-6xl lg:text-7xl">
              Let&apos;s talk about
              <br />
              <span className="text-[#176b45]">
                your food needs.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#69736d] sm:text-lg">
              Tell us what you&apos;re looking for. Whether it&apos;s
              everyday food, college requirements, catering or a
              custom food requirement, we&apos;d love to hear from you.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          ENQUIRY AREA
      ===================================================== */}
      <section className="w-full px-5 py-12 sm:px-8 lg:px-14 lg:py-20 xl:px-20">

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">

          {/* =================================================
              LEFT INFORMATION
          ================================================= */}
          <aside className="rounded-[28px] bg-[#176b45] p-7 text-white sm:p-9 lg:p-10">

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#bfe0cc]">
              CookOnStay
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
              Tell us what
              <br />
              you need.
            </h2>

            <p className="mt-5 text-sm leading-6 text-[#dceee3]">
              Share a few details about your requirement and our team
              can understand what you&apos;re looking for.
            </p>


            {/* ENQUIRY TYPES */}
            <div className="mt-10">

              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#bfe0cc]">
                We can help with
              </p>

              <div className="mt-4 space-y-2">

                {enquiryTypes.slice(1, 5).map((type) => (
                  <div
                    key={type}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-[#176b45]">
                      ✓
                    </span>

                    <span className="text-sm font-medium text-white">
                      {type}
                    </span>
                  </div>
                ))}

              </div>

            </div>


            {/* CONTACT BLOCK */}
            <div className="mt-10 border-t border-white/15 pt-7">

              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#bfe0cc]">
                Get in touch
              </p>

              <p className="mt-3 text-sm leading-6 text-[#dceee3]">
                Prefer to speak directly? You can also reach out to
                CookOnStay using your preferred contact channel.
              </p>

            </div>

          </aside>


          {/* =================================================
              FORM
          ================================================= */}
          <div className="rounded-[28px] border border-[#e4e7e2] bg-white p-6 shadow-[0_16px_45px_rgba(23,32,25,0.05)] sm:p-9 lg:p-10">

            {!submitted ? (
              <>
                <div className="border-b border-[#e4e7e2] pb-6">

                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f28c28]">
                    Start an Enquiry
                  </p>

                  <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#172019] sm:text-3xl">
                    How can we help?
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#69736d]">
                    Fill in the details below and tell us about your
                    requirement.
                  </p>

                </div>


                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-6"
                >

                  {/* NAME + PHONE */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-bold text-[#172019]"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-[#dfe4df] bg-[#f8f7f2] px-4 py-3.5 text-sm text-[#172019] outline-none transition placeholder:text-[#9aa39d] focus:border-[#176b45] focus:bg-white focus:ring-2 focus:ring-[#176b45]/10"
                      />
                    </div>


                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-bold text-[#172019]"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Enter phone number"
                        className="w-full rounded-xl border border-[#dfe4df] bg-[#f8f7f2] px-4 py-3.5 text-sm text-[#172019] outline-none transition placeholder:text-[#9aa39d] focus:border-[#176b45] focus:bg-white focus:ring-2 focus:ring-[#176b45]/10"
                      />
                    </div>

                  </div>


                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-[#172019]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-[#dfe4df] bg-[#f8f7f2] px-4 py-3.5 text-sm text-[#172019] outline-none transition placeholder:text-[#9aa39d] focus:border-[#176b45] focus:bg-white focus:ring-2 focus:ring-[#176b45]/10"
                    />
                  </div>


                  {/* ENQUIRY TYPE */}
                  <div>
                    <label
                      htmlFor="type"
                      className="mb-2 block text-sm font-bold text-[#172019]"
                    >
                      Enquiry Type
                    </label>

                    <select
                      id="type"
                      name="type"
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-[#dfe4df] bg-[#f8f7f2] px-4 py-3.5 text-sm text-[#172019] outline-none transition focus:border-[#176b45] focus:bg-white focus:ring-2 focus:ring-[#176b45]/10"
                    >
                      <option value="" disabled>
                        Select enquiry type
                      </option>

                      {enquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>


                  {/* ORGANISATION */}
                  <div>
                    <label
                      htmlFor="organisation"
                      className="mb-2 block text-sm font-bold text-[#172019]"
                    >
                      College / Organisation
                      <span className="ml-1 font-normal text-[#9aa39d]">
                        (optional)
                      </span>
                    </label>

                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      placeholder="College, company or organisation name"
                      className="w-full rounded-xl border border-[#dfe4df] bg-[#f8f7f2] px-4 py-3.5 text-sm text-[#172019] outline-none transition placeholder:text-[#9aa39d] focus:border-[#176b45] focus:bg-white focus:ring-2 focus:ring-[#176b45]/10"
                    />
                  </div>


                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-bold text-[#172019]"
                    >
                      Tell Us About Your Requirement
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us about your food requirement, approximate quantity, date or any other details..."
                      className="w-full resize-none rounded-xl border border-[#dfe4df] bg-[#f8f7f2] px-4 py-3.5 text-sm leading-6 text-[#172019] outline-none transition placeholder:text-[#9aa39d] focus:border-[#176b45] focus:bg-white focus:ring-2 focus:ring-[#176b45]/10"
                    />
                  </div>


                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#f28c28] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#d97416] active:scale-[0.99]"
                  >
                    Send Enquiry
                  </button>

                  <p className="text-center text-xs leading-5 text-[#9aa39d]">
                    We&apos;ll use the information you provide only to
                    understand and respond to your enquiry.
                  </p>

                </form>
              </>
            ) : (

              /* =================================================
                 SUCCESS STATE
              ================================================= */
              <div className="flex min-h-[620px] items-center justify-center text-center">

                <div className="max-w-md">

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#e8f2ec]">

                    <span className="text-3xl font-black text-[#176b45]">
                      ✓
                    </span>

                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#f28c28]">
                    Enquiry Received
                  </p>

                  <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#172019] sm:text-4xl">
                    Thanks for reaching out!
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#69736d]">
                    Your enquiry has been submitted. We&apos;ll get back
                    to you using the contact details you provided.
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-3">

                    <a
                      href="/menu"
                      className="rounded-xl bg-[#176b45] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0e4f32]"
                    >
                      Explore Menu
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="rounded-xl border border-[#dfe4df] bg-white px-6 py-3.5 text-sm font-bold text-[#172019] transition hover:border-[#176b45] hover:text-[#176b45]"
                    >
                      New Enquiry
                    </button>

                  </div>

                </div>

              </div>

            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK INFO
      ===================================================== */}
      <section className="w-full border-t border-[#e4e7e2] bg-white">

        <div className="grid w-full sm:grid-cols-3">

          <div className="border-b border-[#e4e7e2] p-7 sm:border-b-0 sm:border-r lg:p-10">

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#f28c28]">
              01
            </span>

            <h3 className="mt-3 text-lg font-black text-[#172019]">
              Share Your Need
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#69736d]">
              Tell us what kind of food or service you are looking for.
            </p>

          </div>


          <div className="border-b border-[#e4e7e2] p-7 sm:border-b-0 sm:border-r lg:p-10">

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#f28c28]">
              02
            </span>

            <h3 className="mt-3 text-lg font-black text-[#172019]">
              Discuss Requirements
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#69736d]">
              We can understand your quantity, timing and service needs.
            </p>

          </div>


          <div className="p-7 lg:p-10">

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#f28c28]">
              03
            </span>

            <h3 className="mt-3 text-lg font-black text-[#172019]">
              Build the Right Solution
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#69736d]">
              Work with us to find a food solution that fits your requirement.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}