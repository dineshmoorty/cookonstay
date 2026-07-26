import { BUSINESS } from "@/constants/business";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6" style={{"padding": "20px"}}>

      <div className="flex items-start gap-4">
        <MapPin className="mt-1 h-6 w-6 text-orange-500" />

        <div>
          <h3 className="font-semibold">Address</h3>
          <p className="mt-1 text-gray-600">
            {BUSINESS.address}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Phone className="h-6 w-6 text-orange-500" />

        <div>
          <h3 className="font-semibold">Phone</h3>
          <p className="text-gray-600">
            {BUSINESS.phone}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mail className="h-6 w-6 text-orange-500" />

        <div>
          <h3 className="font-semibold">Email</h3>
          <p className="text-gray-600">
            {BUSINESS.email}
          </p>
        </div>
      </div>

    </div>
  );
}