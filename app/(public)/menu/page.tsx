const menuSections = [
  {
    title: "Breakfast & Dinner",
    subtitle: "Fresh everyday favourites",
    items: [
      {
        name: "Idly",
        quantity: "1 pc",
        price: 10,
        image: "/images/menu/idli.png",
      },
      {
        name: "Chappathi",
        quantity: "2 pcs",
        price: 30,
        image: "/images/menu/chappathi.png",
      },
      {
        name: "Poori",
        quantity: "2 pcs",
        price: 40,
        image: "/images/menu/poori.png",
      },
      {
        name: "Mini Uthappam",
        quantity: "1 pc",
        price: 20,
        image: "/images/menu/mini_uthappam.png",
      },
      {
        name: "Uthappam",
        quantity: "1 pc",
        price: 30,
        image: "/images/menu/Uthappam.png",
      },
      {
        name: "Dosai",
        quantity: "1 pc",
        price: 40,
        image: "/images/menu/dosai.png",
      },
      {
        name: "Ven Pongal",
        quantity: "",
        price: 49,
        image: "/images/menu/ven_pongal.png",
      },
      {
        name: "Upma",
        quantity: "",
        price: 30,
        image: "/images/menu/upma.png",
      },
      {
        name: "Mini Tiffen",
        quantity: "",
        price: 60,
        image: "/images/menu/mini_tiffen.png",
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
        image: "/images/menu/veg_meals.png",
      },
      {
        name: "Veg Meals",
        quantity: "Half",
        price: 70,
        image: "/images/menu/veg_meals_half.png",
      },
      {
        name: "Mushroom Biriyani",
        quantity: "",
        price: 60,
        image: "/images/menu/mushroom_biryani.png",
      },
      {
        name: "Veg Biriyani",
        quantity: "",
        price: 55,
        image: "/images/menu/veg_biryani.png",
      },
      {
        name: "Lemon Rice",
        quantity: "",
        price: 40,
        image: "/images/menu/lemon_rice.png",
      },
      {
        name: "Curd Rice",
        quantity: "",
        price: 40,
        image: "/images/menu/curd-rice.png",
      },
      {
        name: "Tomato Rice",
        quantity: "",
        price: 40,
        image: "/images/menu/tomato-rice.png",
      },
      {
        name: "Tamarind Rice",
        quantity: "",
        price: 40,
        image: "/images/menu/tamarind-rice.png",
      },
    ],
  },

  {
    title: "Snacks & Beverages",
    subtitle: "Quick bites & refreshing drinks",
    items: [
      {
        name: "Tea",
        quantity: "",
        price: 15,
        image: "/images/menu/tea.png",
      },
      {
        name: "Coffee",
        quantity: "",
        price: 20,
        image: "/images/menu/coffee.png",
      },
      {
        name: "Milk",
        quantity: "",
        price: 15,
        image: "/images/menu/milk.png",
      },
      {
        name: "Badam Milk",
        quantity: "",
        price: 25,
        image: "/images/menu/badam-milk.png",
      },
      {
        name: "Veg Puffs",
        quantity: "",
        price: 20,
        image: "/images/menu/veg-puffs.png",
      },
      {
        name: "Egg Puffs",
        quantity: "",
        price: 25,
        image: "/images/menu/egg-puffs.png",
      },
      {
        name: "Mushroom Puffs",
        quantity: "",
        price: 30,
        image: "/images/menu/mushroom-puffs.png",
      },
      {
        name: "Vada",
        quantity: "1 pc",
        price: 10,
        image: "/images/menu/vada.png",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <main className="w-full bg-[#f8f7f2]">




      {/* =====================================================
          MENU INTRO
      ===================================================== */}
      <section
        id="menu"
        className="w-full border-b border-[#e4e7e2] bg-white"
      >
        <div className="w-full px-5 py-16 sm:px-8 lg:px-14 xl:px-20">

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

            {menuSections.map((section) => (
              <section key={section.title}>

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
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                  {section.items.map((item, index) => (
                    <article
                      key={`${item.name}-${item.quantity}-${index}`}
                      className="group relative h-[290px] overflow-hidden rounded-[22px] bg-[#172019] shadow-sm"
                    >

                      {/* FOOD IMAGE */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                      />

                      {/* IMAGE OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />

                      {/* TOP LABEL */}
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                          CookOnStay
                        </span>
                      </div>

                      {/* CONTENT */}
                      <div className="absolute inset-x-0 bottom-0 p-5">

                        <div className="flex items-end justify-between gap-3">

                          <div className="min-w-0">

                            <h4 className="text-xl font-black tracking-[-0.02em] text-white">
                              {item.name}
                            </h4>

                            {item.quantity && (
                              <p className="mt-1 text-sm font-medium text-white/75">
                                {item.quantity}
                              </p>
                            )}

                          </div>

                          {/* PRICE */}
                          <span className="shrink-0 rounded-xl bg-[#f28c28] px-3.5 py-2 text-sm font-black text-white shadow-lg">
                            ₹{item.price}
                          </span>

                        </div>

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
              href="/enquiry"
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

    </main>
  );
}
