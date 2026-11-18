import { BUSINESS } from "@/constants/business";
import { SITE_URL } from "@/lib/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/icons/icon.png`,
    image: `${SITE_URL}/images/og-image.webp`,
    description:
      "CookOnStay offers South Indian everyday food, catering packages and bulk food services in Madurai, Tamil Nadu.",
    servesCuisine: ["South Indian", "Indian"],
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    hasMap: BUSINESS.mapUrl,
    areaServed: {
      "@type": "City",
      name: "Madurai",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "106A, Panthadi 9th Street, Thavittusandhai",
      addressLocality: "Madurai",
      addressRegion: "Tamil Nadu",
      postalCode: "625001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.9117536,
      longitude: 78.1224211,
    },
    sameAs: [BUSINESS.instagram, BUSINESS.facebook, BUSINESS.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
