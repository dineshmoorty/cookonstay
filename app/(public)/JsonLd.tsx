export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "CookOnStay",
    url: "https://cookonstay.com",
    logo: "https://cookonstay.com/icons/icon.png",
    description:
      "CookOnStay provides everyday food, catering and practical food solutions.",
    servesCuisine: "Indian",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}