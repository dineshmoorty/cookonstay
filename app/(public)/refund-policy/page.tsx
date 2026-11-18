import type { Metadata } from "next";
import LegalPage from "@/components/public/LegalPage";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "Read CookOnStay cancellation and refund information for direct service arrangements and future app orders.",
  alternates: { canonical: "/refund-policy" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      intro="This policy currently covers website enquiries and service arrangements made directly with CookOnStay. App-based ordering and payment rules will be added before the ordering application is launched."
      updated="18 November 2026"
      sections={[

{ title: "Current website enquiries", paragraphs: ["Submitting the website enquiry form does not create a paid order and does not itself require a refund. If you have paid CookOnStay against a separately confirmed quotation or invoice, the cancellation and refund terms communicated for that specific engagement will apply, subject to applicable law."] },
{ title: "Future application orders", paragraphs: ["CookOnStay's dedicated ordering application is under development. This page does not announce that in-app ordering or in-app refunds are currently available. Before the app launches, this policy will be updated with the actual cancellation window, eligibility rules, payment methods, refund timelines and support process applicable to app orders."] },
{ title: "Failed or duplicate payments", paragraphs: ["If a payment appears to have been debited but you have not received an order confirmation, or if you believe you were charged more than once, contact support@cookonstay.com with the transaction reference, date, amount and the phone number used for the enquiry or order. Do not send card PINs, CVV, UPI PINs or passwords. We will review the details and coordinate with the relevant payment provider where applicable."] },
{ title: "Catering and bulk-service cancellations", paragraphs: ["Catering and bulk requests may involve advance preparation, ingredient procurement, staffing and scheduling. Any deposit, cancellation deadline, deductions or refund arrangement must be communicated and agreed in the quotation or booking confirmation before the engagement is accepted. If the confirmation does not specify a term, contact CookOnStay promptly so the circumstances can be reviewed; no fixed refund amount or timeline is promised by this general policy."] },
{ title: "How to request assistance", paragraphs: ["Email support@cookonstay.com with your name, contact number, relevant quotation or order reference, payment transaction reference (if applicable), and a short explanation. We may request reasonable information to verify the request. We will respond using the contact details provided."] },
{ title: "Policy updates", paragraphs: ["This policy will be revised when the ordering application and its payment, cancellation and refund processes are finalised. The current revision date is shown above. Any mandatory rights available under applicable consumer law remain unaffected."] }

      ]}
    />
  );
}
