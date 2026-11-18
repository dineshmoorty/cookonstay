import type { Metadata } from "next";
import LegalPage from "@/components/public/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the terms for using the CookOnStay website and enquiring about food and catering services.",
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These terms govern access to the CookOnStay website and enquiries about our food and catering services. Separate or additional terms may apply to ordering features if our application launches."
      updated="18 November 2026"
      sections={[

{ title: "About CookOnStay", paragraphs: ["CookOnStay is a sole proprietorship operating from Madurai, Tamil Nadu. The website provides information about food, catering and related services and allows visitors to contact us. FSSAI licence and Udyam registration details are displayed above for business identification."] },
{ title: "Website information", paragraphs: ["We take reasonable care to keep descriptions, menus, photographs, prices and service information useful and current. Items, ingredients, availability, prices and service areas may change. Website content is informational and does not by itself confirm an order, booking or service engagement."] },
{ title: "Enquiries and bookings", bullets: ["Submitting an enquiry is a request for information or a quotation, not an automatic confirmation of a booking.", "A catering or bulk-service request is confirmed only after CookOnStay communicates acceptance and any applicable details are agreed.", "You are responsible for providing accurate contact details, dates, quantities, location and other information needed to assess your request.", "Please tell us about relevant dietary requirements or allergies before confirming an order. We can discuss requests, but cannot promise an allergen-free environment unless expressly confirmed in writing."] },
{ title: "Future online ordering", paragraphs: ["CookOnStay is developing its own food-ordering application. Ordering, account, delivery, payment, cancellation and order-tracking features are not represented as available through this website unless and until they are expressly enabled and announced. Additional app-specific terms will be published before those features go live."] },
{ title: "Pricing, payment and availability", paragraphs: ["Any quotation or price communicated by CookOnStay will identify the applicable scope and validity where relevant. Prices and availability may change before confirmation. Do not treat a payment request as genuine unless it comes through a channel confirmed by CookOnStay. Never share your UPI PIN, card PIN, CVV or account password with anyone claiming to represent us."] },
{ title: "Customer conduct", bullets: ["Use the website lawfully and do not attempt to disrupt, probe or misuse it.", "Do not submit false, misleading, abusive or unlawful content through our enquiry channels.", "Do not copy or commercially reuse website content, branding or photographs without permission, except where permitted by law."] },
{ title: "Third-party services and links", paragraphs: ["The website may link to third-party platforms such as maps, messaging, food discovery or form services. Those services are operated independently and are subject to their own terms and privacy policies. CookOnStay is not responsible for the availability or content of third-party services."] },
{ title: "Limitation and changes", paragraphs: ["To the extent permitted by applicable law, CookOnStay is not responsible for indirect loss arising from temporary website unavailability or reliance on information that has changed, while retaining any liability that cannot legally be excluded. We may update website content and these terms. The revised date appears at the top of this page."] },
{ title: "Governing law and contact", paragraphs: ["These terms are governed by the laws of India. Subject to applicable law, courts with jurisdiction in Madurai, Tamil Nadu will have jurisdiction over disputes. Please contact support@cookonstay.com first so we can try to resolve concerns."] }

      ]}
    />
  );
}
