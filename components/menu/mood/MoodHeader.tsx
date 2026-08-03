export default function MoodHeader() {
  return (
    <div className="mx-auto mb-16 max-w-full text-center">

      <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600" style={{backgroundColor: "#fff7ed", padding: "0.5rem 1rem", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: "600", color: "#f97316"}}>
        😊 Find Your Perfect Plate
      </span>

      <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl" style={{margin: "1rem", fontSize: "2.25rem", fontWeight: "700", color: "#111827"}}>
        What Are You Craving Today?
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600" style={{margin: "1rem", fontSize: "1.125rem", lineHeight: "1.75rem", color: "#4b5563"}}>
        Every traditional South Indian dish has its own unique character.
        Explore our menu and discover the meal that matches your mood and
        today&apos;s craving.
      </p>

    </div>
  );
}
