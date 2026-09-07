import type { Metadata } from "next";
import EnquiryForm from "./EnquiryForm.tsx";

export const metadata: Metadata = {
  title: "Enquiry",
  description:
    "Contact CookOnStay for catering, college and campus food, bulk food requirements, workplace food and other food service enquiries.",
  alternates: {
    canonical: "/enquiry",
  },
};

export default function EnquiryPage() {
  return <EnquiryForm />;
}