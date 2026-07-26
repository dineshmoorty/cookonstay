import { Phone, MapPin, MessageCircle } from "lucide-react";

export default function ContactButtons() {
  return (
    <div className="mt-10 grid gap-4" style={{"padding": "20px"}}>

      <a
        href="tel:+919488270932"
        className="flex items-center justify-center gap-2 rounded-xl bg-orange-400 px-6 py-4 font-semibold text-white transition hover:bg-orange-600" style={{"padding": "5px"}}
      >
        <Phone size={20} />
        Call Now
      </a>

      <a
        href="https://wa.me/919488270932"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-xl bg-green-400 px-6 py-4 font-semibold text-white transition hover:bg-green-600" style={{"padding": "5px"}}
      >
        <MessageCircle size={20} />
        WhatsApp
      </a>

      {/* <a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-xl border border-orange-500 px-6 py-4 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white" style={{padding:"5px"}}
      >
        <MapPin size={20} />
        Get Directions
      </a> */}

    </div>
  );
}