import { redirect } from "next/navigation";

// Keep the previous enquiry URL working while consolidating the public contact page.
export default function EnquiryRedirect() {
  redirect("/contact");
}
