import ContactButtons from "./ContactButtons";
import ContactInfo from "./ContactInfo";
import SectionHeader from "./SectionHeader";

export default function ContactCTA() {
  return (
    <section className="bg-gray-50 py-24 text-black" style={{"padding": "20px"}}>
      <div className="mx-auto grid max-w-full items-center gap-4 px-6 lg:grid-cols-2" style={{"paddingTop": "20px" , "paddingBottom": "20px"}}>
        <SectionHeader />
        <div className="rounded-3xl bg-white p-8 text-gray-900 shadow-2xl">
          <ContactInfo />
          <ContactButtons />
        </div>
      </div>
    </section>
  );
}