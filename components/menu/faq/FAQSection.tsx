import FAQHeader from "./FAQHeader";
import FAQAccordion from "./FAQAccordion";

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
      " style={{ padding: "20px" }}
    >
      {/* Decorative background */}

      <div
        className="
          absolute
          -left-40
          top-20
          h-80
          w-80
          rounded-full
          bg-orange-200/20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-0
          h-80
          w-80
          rounded-full
          bg-amber-200/20
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-full
          px-5
          sm:px-6
          lg:px-8
        "
      >
        <FAQHeader />

        <FAQAccordion />
      </div>
    </section>
  );
}