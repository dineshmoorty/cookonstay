import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { MENU_FAQS } from "@/constants/menuFaq";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "South Indian Food Menu in Madurai",
  description:
    "Explore CookOnStay's South Indian food menu in Madurai, including idli, pongal, meals, biryani and rice varieties with listed prices.",
  alternates: {
    canonical: "/menu",
  },
};

const menuSections = [
  {
    title: "Breakfast & Dinner",
    subtitle: "Fresh everyday favourites",
    items: [
      {
        name: "Idly",
        quantity: "1 pc",
        price: 10,
        image: "/images/menu/2-idly.webp",
      },
      {
        name: "Mini Uthappam",
        quantity: "1 pc",
        price: 15,
        image: "/images/menu/2-mini-uthappam.webp",
      },
      {
        name: "Ven Pongal",
        quantity: "",
        price: 49,
        image: "/images/menu/ven-pongal.webp",
      },
      {
        name: "Upma",
        quantity: "",
        price: 40,
        image: "/images/menu/upma.webp",
      },
      {
        name: "Mini Tiffen",
        quantity: "",
        price: 50,
        image: "/images/menu/mini-tiffin.webp",
      },
    ],
  },

  {
    title: "Lunch",
    subtitle: "Wholesome meals for every day",
    items: [
      {
        name: "Veg Meals",
        quantity: "",
        price: 120,
        image: "/images/menu/veg-meals.webp",
      },
      {
        name: "Veg Meals",
        quantity: "Half",
        price: 70,
        image: "/images/menu/veg-meals-half.webp",
      },
      {
        name: "Mushroom Biriyani",
        quantity: "",
        price: 50,
        image: "/images/menu/mushroom-biryani.webp",
      },
      {
        name: "Veg Biriyani",
        quantity: "",
        price: 50,
        image: "/images/menu/veg-biryani.webp",
      },
      {
        name: "Lemon Rice",
        quantity: "",
        price: 40,
        image: "/images/menu/lemon-rice.webp",
      },
      {
        name: "Curd Rice",
        quantity: "",
        price: 40,
        image: "/images/menu/curd-rice.webp",
      },
      {
        name: "Tomato Rice",
        quantity: "",
        price: 40,
        image: "/images/menu/tomato-rice.webp",
      },
      {
        name: "Tamarind Rice",
        quantity: "",
        price: 40,
        image: "/images/menu/tamarind-rice.webp",
      },
    ],
  },

  // {
  //   title: "Snacks & Beverages",
  //   subtitle: "Quick bites & refreshing drinks",
  //   items: [
  //     {
  //       name: "Tea",
  //       quantity: "",
  //       price: 15,
  //       image: "/images/menu/tea.webp",
  //     },
  //     {
  //       name: "Coffee",
  //       quantity: "",
  //       price: 20,
  //       image: "/images/menu/coffee.png",
  //     },
  //     {
  //       name: "Milk",
  //       quantity: "",
  //       price: 15,
  //       image: "/images/menu/milk.webp",
  //     },
  //     {
  //       name: "Badam Milk",
  //       quantity: "",
  //       price: 25,
  //       image: "/images/menu/badam-milk.webp",
  //     },
  //     {
  //       name: "Mushroom Puffs",
  //       quantity: "",
  //       price: 30,
  //       image: "/images/menu/mushroom-puffs.webp",
  //     },
  //     {
  //       name: "Vada",
  //       quantity: "1 pc",
  //       price: 10,
  //       image: "/images/menu/vada.webp",
  //     },
  //   ],
  // },
];

export default function MenuPage() {
  const menuStructuredData = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "CookOnStay Menu",
    url: `${SITE_URL}/menu`,
    inLanguage: "en-IN",
    hasMenuSection: menuSections.map((section) => ({
      "@type": "MenuSection",
      name: section.title,
      description: section.subtitle,
      hasMenuItem: section.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        image: `${SITE_URL}${item.image}`,
        offers: {
          "@type": "Offer",
          price: item.price.toFixed(2),
          priceCurrency: "INR",
        },
      })),
    })),
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: MENU_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="w-full bg-[#f8f7f2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(menuStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c"),
        }}
      />


      {/* =====================================================
          MENU INTRO
      ===================================================== */}
      <section
        id="menu"
        className="w-full overflow-hidden border-b border-[#e4e7e2] bg-white"
      >
        <div className="w-full px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:px-14 xl:px-20">

          <div className="menu-intro-panel relative mb-12 overflow-hidden rounded-[30px] bg-[#176b45] px-7 py-10 text-white shadow-[0_24px_70px_rgba(23,107,69,0.16)] sm:px-10 sm:py-14 lg:px-14">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#dceee3]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f6b45f]" /> Made for your everyday cravings
              </span>
              <h1 className="mt-5 max-w-xl text-4xl font-black leading-[1.04] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                Good food. <span className="text-[#f6c987]">Good days.</span>
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
                Explore CookOnStay favourites, from comforting breakfast plates to wholesome everyday meals.
              </p>
              <a
                href="#breakfast-dinner"
                className="mt-7 inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white px-7 py-4 text-sm font-extrabold !text-[#10452F] shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F8D18A] hover:bg-[#FFF8EC] hover:shadow-[0_15px_30px_rgba(0,0,0,0.16)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore the menu
                <span
                  aria-hidden="true"
                  className="text-lg font-bold !text-[#176B45] transition-transform duration-300 group-hover:translate-y-1"
                >
                  ↓
                </span>
              </a>
            </div>
            <div aria-hidden="true" className="menu-intro-orb absolute -right-16 -top-28 h-80 w-80 rounded-full border-[34px] border-white/10 sm:-right-8 sm:h-[26rem] sm:w-[26rem]" />
            <div aria-hidden="true" className="absolute -bottom-24 right-[22%] h-52 w-52 rounded-full bg-[#f28c28]/20 blur-2xl" />
            <div aria-hidden="true" className="absolute bottom-7 right-8 hidden rotate-[-8deg] rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-bold tracking-wide text-white/85 backdrop-blur-md sm:block">COOKONSTAY · MADURAI</div>
          </div>

          <div className="flex flex-col gap-5 border-b border-[#e4e7e2] pb-10 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#f28c28]">
                Our Selection
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#172019] sm:text-4xl">
                Our everyday menu
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#69736d] sm:text-base">
                A simple selection made for everyday dining,
                college requirements, workplace meals and more.
              </p>
            </div>

            <div className="flex w-fit items-center rounded-xl bg-[#f8f7f2] px-5 py-3">
              <span className="text-xs font-bold text-[#69736d]">
                Prices in
              </span>

              <span className="ml-2 text-sm font-black text-[#176b45]">
                INR ₹
              </span>
            </div>

          </div>


          {/* =================================================
              MENU SECTIONS
          ================================================= */}
          <div className="mt-14 space-y-20">

            {menuSections.map((section, sectionIndex) => (
              <section id={sectionIndex === 0 ? "breakfast-dinner" : "lunch"} key={section.title}>

                {/* SECTION HEADER */}
                <div className="mb-7 flex items-end gap-5">

                  <div className="shrink-0">
                    <h3 className="text-2xl font-black tracking-[-0.035em] text-[#172019] sm:text-3xl">
                      {section.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#69736d]">
                      {section.subtitle}
                    </p>
                  </div>

                  <div className="mb-2 h-px flex-1 bg-[#e4e7e2]" />

                </div>


                {/* DISH CARDS */}
                <div className="menu-card-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                  {section.items.map((item, index) => (
                    <article
                      key={`${item.name}-${item.quantity}-${index}`}
                      className="menu-food-card group relative overflow-hidden rounded-[26px] border border-[#e7e9e3] bg-white shadow-[0_8px_30px_rgba(23,32,25,0.045)]"
                    >
                      <div className="menu-food-image relative aspect-[1.18/1] overflow-hidden bg-[#eef2e9]">
                        <Image
                          src={item.image}
                          alt={`${item.name}${item.quantity ? ` ${item.quantity}` : ""} from CookOnStay`}
                          fill
                          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#172019]/35 via-transparent to-white/5" />
                        <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#176b45] shadow-sm backdrop-blur-md">
                          CookOnStay favourite
                        </span>
                        <span className="absolute bottom-4 right-4 rounded-xl bg-[#f28c28] px-3.5 py-2 text-sm font-black text-white shadow-lg shadow-black/10">
                          ₹{item.price}
                        </span>
                      </div>

                      <div className="flex min-h-[98px] items-center justify-between gap-3 px-5 py-4">
                        <div className="min-w-0">
                          <h4 className="truncate text-lg font-extrabold tracking-[-0.025em] text-[#172019]">{item.name}</h4>
                          <p className="mt-1 text-xs font-medium text-[#7b857e]">{item.quantity || "Made fresh for you"}</p>
                        </div>
                        <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#dce9df] bg-[#f1f7f2] text-lg text-[#176b45] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#176b45] group-hover:text-white">↗</span>
                      </div>
                    </article>
                  ))}

                </div>

              </section>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          FOOD CATEGORIES STRIP
      ===================================================== */}
      <section className="w-full bg-[#f8f7f2]">

        <div className="grid w-full lg:grid-cols-3">

          {/* BREAKFAST */}
          <div className="border-b border-[#e4e7e2] px-6 py-12 sm:px-10 lg:border-b-0 lg:border-r lg:px-14 xl:px-20">

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#176b45]">
              Breakfast
            </span>

            <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-[#172019]">
              Start your day right.
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#69736d]">
              Idly, Chappathi, Poori, Uthappam,
              Dosai and more.
            </p>

          </div>


          {/* LUNCH */}
          <div className="border-b border-[#e4e7e2] px-6 py-12 sm:px-10 lg:border-b-0 lg:border-r lg:px-14 xl:px-20">

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#f28c28]">
              Lunch
            </span>

            <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-[#172019]">
              Wholesome everyday meals.
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#69736d]">
              Veg Meals, Biriyani, Lemon Rice,
              Curd Rice and more.
            </p>

          </div>


          {/* SNACKS */}
          <div className="px-6 py-12 sm:px-10 lg:px-14 xl:px-20">

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#176b45]">
              Snacks & Beverages
            </span>

            <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-[#172019]">
              Something for every break.
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#69736d]">
              Tea, Coffee, Milk, Puffs,
              Vada and more.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          BULK / CATERING CTA
      ===================================================== */}
      <section className="w-full bg-white px-5 py-14 sm:px-8 lg:px-14 lg:py-20 xl:px-20">

        <div className="relative overflow-hidden rounded-[30px] bg-[#176b45] px-7 py-12 sm:px-10 lg:px-14 lg:py-14">

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#bfe0cc]">
                Bulk & Catering
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                Need food for a group?
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#dceee3] sm:text-base">
                Planning a college event, workplace meal,
                function or bulk requirement? Talk to CookOnStay
                and let us help you plan the food.
              </p>

            </div>


            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#f28c28] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#d97416]"
            >
              Make an Enquiry
            </a>

          </div>


          {/* DECORATION */}
          <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full border-[30px] border-white/10" />

          <div className="absolute -bottom-28 right-40 h-56 w-56 rounded-full bg-white/5" />

        </div>

      </section>

      <section className="w-full bg-[#f8f7f2] px-5 py-16 sm:px-8 lg:px-14 lg:py-20 xl:px-20" aria-labelledby="menu-faq-heading">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#f28c28]">Helpful information</span>
          <h2 id="menu-faq-heading" className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#172019] sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-[#dfe5df] border-y border-[#dfe5df]">
            {MENU_FAQS.map((faq) => (
              <details key={faq.id} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-[#172019] marker:hidden">
                  {faq.question}
                  <span aria-hidden="true" className="text-xl text-[#176b45] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#69736d]">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-7 text-sm text-[#69736d]">Need food for a group? <Link href="/contact" className="font-bold text-[#176b45] underline underline-offset-4">Contact CookOnStay in Madurai.</Link></p>
        </div>
      </section>

    </main>
  );
}
