import type { Metadata } from "next";
import LegalPage from "@/components/public/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how CookOnStay handles website enquiry information and future app data.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This notice explains how CookOnStay handles information submitted through this website. It also describes categories of information that may be processed if and when our dedicated ordering application is launched."
      updated="18 November 2026"
      sections={[

{ title: "Scope and current website use", paragraphs: ["This policy applies to the CookOnStay public website and enquiries submitted through its contact form. The current form asks for your name, phone number, optional email address, enquiry type, optional college or organisation, and message. We use these details to understand and respond to the enquiry.", "The website enquiry form is processed through Formspree, a third-party form service. Information submitted through that form may be processed by that provider to transmit the enquiry to CookOnStay. Please review the provider's own privacy information for its handling of submitted data."] },
{ title: "Information for the future ordering application", paragraphs: ["CookOnStay is developing a dedicated food-ordering application. The following describes information categories that may be required if and when those features become available; it does not mean that the application is currently live or that these categories are currently collected by this website."], bullets: ["Account and contact details, such as name, mobile number and email address.", "Delivery details, such as delivery address and order instructions.", "Order information, including items selected, order status and order history.", "Payment references and transaction status supplied by a payment service provider. CookOnStay does not intend to request or store full card numbers, CVV or UPI PINs.", "Location information only if a future feature requests it and you grant the relevant device permission."] },
{ title: "How information may be used", bullets: ["Respond to website enquiries and customer-support requests.", "Coordinate catering or other services requested by you.", "If ordering becomes available, process and communicate about orders, delivery and payment status.", "Maintain service records, prevent misuse, resolve disputes and meet applicable legal obligations."] },
{ title: "Sharing and service providers", paragraphs: ["We do not sell personal information. Information may be shared with service providers only where reasonably needed to operate a requested service, such as website form delivery, hosting, communications, delivery coordination or payment processing, and with authorities where disclosure is required by law. The providers and integrations used for a future app will be identified in an updated policy when those services are selected and launched."] },
{ title: "Retention and security", paragraphs: ["We retain enquiry and service information for as long as reasonably necessary to respond, maintain business records, resolve issues and comply with legal requirements. Retention periods may vary by record type. We use reasonable administrative and technical safeguards, but no internet transmission or storage system can be guaranteed completely secure."] },
{ title: "Your choices and requests", paragraphs: ["You may contact us to request access to, correction of, or deletion of personal information that you have provided, subject to identity verification and records we are required or permitted to retain. You may choose not to provide optional details, although we may be unable to respond fully to an enquiry without the required fields. If a future app requests device permissions, you can manage those permissions through your device settings."] },
{ title: "Children", paragraphs: ["Our website and food services are intended to be used by adults or by minors with the involvement and permission of a parent or legal guardian. Please do not submit a child's personal information unless you are authorised to do so."] },
{ title: "Changes to this policy", paragraphs: ["We may update this policy when our website, services, legal obligations or future application features change. The latest revision date will be shown at the top of this page. Material changes will be reflected in the updated policy before relevant new features are introduced where required."] }

      ]}
    />
  );
}
