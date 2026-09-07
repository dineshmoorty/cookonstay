const cateringMenu = [
  {
    name: "Ven Pongal",
    price: 1100,
    quantity: "1 Padi",
    serves: "10 persons",
    image: "/images/catering/ven_pongal.png",
    includes: [
      "Chutney",
      "Brinjal Chutney",
      "Veg Sambar",
      "10 Nos Leaf",
    ],
  },
  {
    name: "Tomato Rice",
    price: 1200,
    quantity: "1 Padi",
    serves: "10 persons",
    image: "/images/catering/tomato-rice.png",
    includes: [
      "Chutney",
      "Veg Kuruma",
      "Onion Pachadi",
      "10 Nos Leaf",
    ],
  },
  {
    name: "Lemon Rice",
    price: 1100,
    quantity: "1 Padi",
    serves: "10 persons",
    image: "/images/catering/lemon_rice.png",
    includes: [
      "Chutney",
      "Veg Sambar",
      "10 Nos Leaf",
    ],
  },
  {
    name: "Curd Rice",
    price: 1000,
    quantity: "1 Padi",
    serves: "10 persons",
    image: "/images/catering/curd-rice.png",
    includes: [
      "Chutney",
      "Pickle",
      "10 Nos Leaf",
    ],
  },
  {
    name: "Malli Rice",
    price: 1200,
    quantity: "1 Padi",
    serves: "10 persons",
    image: "/images/catering/malli-rice.png",
    includes: [
      "Chutney",
      "Veg Kuruma",
      "Onion Pachadi",
      "10 Nos Leaf",
    ],
  },
  {
    name: "Tamarind Rice",
    price: 1100,
    quantity: "1 Padi",
    serves: "10 persons",
    image: "/images/catering/tamarind-rice.png",
    includes: [
      "Chutney",
      "Sundal",
      "10 Nos Leaf",
    ],
  },
  {
    name: "Mushroom Biryani",
    price: 1400,
    quantity: "1 Padi",
    serves: "10 persons",
    image: "/images/catering/mushroom_biryani.png",
    includes: [
      "Chutney",
      "Veg Kuruma",
      "Onion Pachadi",
      "10 Nos Leaf",
    ],
  },
  {
    name: "Veg Biryani",
    price: 1300,
    quantity: "1 Padi",
    serves: "10 persons",
    image: "/images/catering/veg_biryani.png",
    includes: [
      "Chutney",
      "Veg Kuruma",
      "Onion Pachadi",
      "10 Nos Leaf",
    ],
  },
  {
    name: "Veg Meals",
    price: 1500,
    quantity: "1 Padi",
    serves: "10 persons",
    image: "/images/catering/veg_meals.png",
    includes: [
      "10 Nos Leaf",
      "Appalam",
      "Curd",
      "Kolambu",
      "Rasam",
      "Pickle",
    ],
  },
];

export default function CateringPage() {
  return (
    <main className="w-full bg-[#f8f7f2]">

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="w-full bg-white">
        <div className="w-full px-5 py-14 sm:px-8 lg:px-14 lg:py-18 xl:px-20">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#f28c28]">
                Catering Menu
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#172019] sm:text-4xl">
                Catering made simple.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#69736d] sm:text-base">
                Choose from our selection of rice varieties, biriyani,
                meals and breakfast options. Every package is planned
                for a group of 10 persons.
              </p>
            </div>

            {/* SERVES BADGE */}
            <div className="flex w-fit items-center gap-3 rounded-2xl bg-[#e8f2ec] px-5 py-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b45] text-lg text-white">
                10
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#69736d]">
                  Standard
                </p>

                <p className="text-sm font-black text-[#172019]">
                  Serves 10 Persons
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CATERING MENU
      ===================================================== */}
      <section
        id="catering-menu"
        className="w-full bg-[#f8f7f2]"
      >
        <div className="w-full px-5 py-14 sm:px-8 lg:px-14 lg:py-20 xl:px-20">

          {/* SECTION HEADER */}
          <div className="mb-10 flex items-end gap-5">

            <div className="shrink-0">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#176b45]">
                Our Packages
              </span>

              <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-[#172019] sm:text-4xl">
                Catering Menu
              </h2>
            </div>

            <div className="mb-2 h-px flex-1 bg-[#dfe4df]" />

          </div>


          {/* CARDS */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {cateringMenu.map((item) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-[24px] border border-[#e4e7e2] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,32,25,0.10)]"
              >

                {/* IMAGE */}
                <div className="relative h-[230px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {/* SERVES */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/25 bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                      Serves 10
                    </span>
                  </div>

                  {/* PRICE */}
                  <div className="absolute bottom-4 right-4">
                    <span className="rounded-xl bg-[#f28c28] px-3.5 py-2.5 text-sm font-black text-white shadow-lg">
                      ₹{item.price}
                    </span>
                  </div>

                </div>


                {/* CONTENT */}
                <div className="p-5">

                  <div className="flex items-start justify-between gap-3">

                    <div>
                      <h3 className="text-xl font-black tracking-[-0.025em] text-[#172019]">
                        {item.name}
                      </h3>

                      {item.quantity && (
                        <p className="mt-1 text-xs font-semibold text-[#8a938d]">
                          {item.quantity}
                        </p>
                      )}
                    </div>

                  </div>


                  {/* INCLUDED */}
                  <div className="mt-5 border-t border-[#e4e7e2] pt-4">

                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#69736d]">
                      Includes
                    </p>

                    <ul className="mt-3 space-y-2">

                      {item.includes.map((include) => (
                        <li
                          key={include}
                          className="flex items-center gap-2 text-sm text-[#4f5953]"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f2ec] text-[10px] font-black text-[#176b45]">
                            ✓
                          </span>

                          {include}
                        </li>
                      ))}

                    </ul>

                  </div>


                  {/* FOOTER */}
                  <div className="mt-5 flex items-center justify-between border-t border-[#e4e7e2] pt-4">

                    <span className="text-xs font-bold text-[#8a938d]">
                      CookOnStay Catering
                    </span>

                    <a
                      href="/enquiry"
                      className="text-xs font-black text-[#176b45] transition hover:text-[#f28c28]"
                    >
                      Enquire →
                    </a>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT'S INCLUDED
      ===================================================== */}
      <section className="w-full bg-white">

        <div className="grid w-full lg:grid-cols-3">

          <div className="border-b border-[#e4e7e2] px-6 py-12 sm:px-10 lg:border-b-0 lg:border-r lg:px-14 xl:px-20">

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#176b45]">
              01
            </span>

            <h3 className="mt-3 text-xl font-black text-[#172019]">
              Group Friendly
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#69736d]">
              Catering packages are planned to serve 10 persons,
              making group planning simple.
            </p>

          </div>


          <div className="border-b border-[#e4e7e2] px-6 py-12 sm:px-10 lg:border-b-0 lg:border-r lg:px-14 xl:px-20">

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#f28c28]">
              02
            </span>

            <h3 className="mt-3 text-xl font-black text-[#172019]">
              Complete Accompaniments
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#69736d]">
              Selected catering options include chutney, kuruma,
              sambar, curd, appalam, rasam and more as listed.
            </p>

          </div>


          <div className="px-6 py-12 sm:px-10 lg:px-14 xl:px-20">

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#176b45]">
              03
            </span>

            <h3 className="mt-3 text-xl font-black text-[#172019]">
              Easy Enquiry
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#69736d]">
              Tell us your requirement and get in touch with
              CookOnStay for your catering needs.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="w-full bg-[#f8f7f2] px-5 py-14 sm:px-8 lg:px-14 lg:py-20 xl:px-20">

        <div className="relative overflow-hidden rounded-[30px] bg-[#176b45] px-7 py-12 sm:px-10 lg:px-14 lg:py-14">

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#bfe0cc]">
                Plan Your Catering
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                Have a gathering coming up?
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#dceee3] sm:text-base">
                Share your food requirement with us and let’s
                plan the right catering option for your gathering.
              </p>

            </div>


            <a
              href="/enquiry"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#f28c28] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#d97416]"
            >
              Make an Enquiry
            </a>

          </div>


          {/* DECORATIVE SHAPES */}
          <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full border-[30px] border-white/10" />

          <div className="absolute -bottom-28 right-40 h-56 w-56 rounded-full bg-white/5" />

        </div>

      </section>

    </main>
  );
}