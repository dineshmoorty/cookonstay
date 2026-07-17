import AboutFeatures from "./AboutFeatures";

export default function AboutContent() {
  return (
    <div>

      <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700" style={{ backgroundColor: "#D1FAE5", color: "#065F46" , padding: "5px 10px", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: "600" }} >
         About CookOnStay
      </span>

      <h2 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
        Homemade Food
        <br />
        That Feels Like Home
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600" style={{ marginTop: "1.5rem", fontSize: "1.125rem", lineHeight: "1.75rem", color: "#4B5563" }} >
        CookOnStay was started with one simple goal:
        serve fresh, hygienic, and affordable South Indian
        food with the same care and taste as homemade meals.
        Every dish is prepared fresh using quality ingredients
        and traditional recipes.
      </p>

      <AboutFeatures />

    </div>
  );
}