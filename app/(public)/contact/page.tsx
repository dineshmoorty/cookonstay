import type { Metadata } from "next";
import EnquiryForm from "../enquiry/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact CookOnStay | Madurai",
  description:
    "Contact CookOnStay in Madurai for catering, college and campus food, bulk food requirements, workplace food and general enquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <EnquiryForm />;
}
