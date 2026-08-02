import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { MENU_FAQS } from "@/constants/menuFaq";

export default function FAQAccordion() {
  return (
    <div className="mx-auto max-w-full">
      <Accordion className="space-y-4" style={{ padding: "10px 0" }}>
        {MENU_FAQS.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={`faq-${faq.id}`}
            className="
              overflow-hidden
              rounded-2xl
              border
              border-orange-100
              bg-white/80
              px-6
              shadow-sm
              backdrop-blur-xl
              transition-all
              duration-300
              data-open:border-orange-200
              data-open:shadow-lg
            " style={{ padding: "10px" , margin: "5px 0px" }}
          >
            <AccordionTrigger
              className="
                py-5
                text-left
                text-base
                font-semibold
                text-slate-900
                hover:text-orange-600
                hover:no-underline
                sm:text-lg
              " style={{ padding: "10px" }}
            >
              {faq.question}
            </AccordionTrigger>

            <AccordionContent
              className="
                pb-5
                pr-6
                text-sm
                leading-7
                text-slate-600
                sm:text-base
              " style={{ padding: "10px" }}
            >
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
