export default function FAQHeader() {
  return (
    <div className="mx-auto mb-12 max-w-full text-center">
      <span
        className="
          inline-flex
          rounded-full
          bg-orange-100
          px-4
          py-2
          text-sm
          font-semibold
          text-orange-600
        " style={{ padding: "10px 20px" }}
      >
        ❓ Frequently Asked Questions
      </span>

      <h2
        className="
          mt-5
          text-3xl
          font-bold
          tracking-tight
          text-slate-900
          sm:text-4xl
          lg:text-4xl
        " style={{ padding: "5px 0px" }}
      >
        Got Questions?
        <span className="text-orange-500"> We&apos;ve Got Answers.</span>
      </h2>

      <p
        className="
          mx-auto
          mt-5
          max-w-full
          text-base
          leading-7
          text-slate-600
          sm:text-lg
        " style={{ padding: "5px 0px" }}
      >
        Find quick answers about our menu, bulk orders and how to
        order from CookOnStay.
      </p>
    </div>
  );
}