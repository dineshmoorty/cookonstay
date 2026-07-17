export default function AboutFeatures() {
  return (
    <div
      className="mt-10 grid gap-6 sm:grid-cols-2"
      style={{
        marginTop: "2.5rem",
        display: "grid",
        gap: "1.5rem",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      }}
    >
      <div
        className="rounded-3xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-green-200 hover:bg-green-50 hover:text-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
        style={{ borderColor: "#E5E7EB", padding: "7px" }}
      >
        <h3 className="font-semibold">🧼 Hygienic Cooking</h3>
        <p className="mt-3 text-sm text-gray-600">
          Freshly prepared in a clean environment.
        </p>
      </div>

      <div
        className="rounded-3xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-green-200 hover:bg-green-50 hover:text-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
        style={{ borderColor: "#E5E7EB", padding: "7px" }}
      >
        <h3 className="font-semibold">🌅 Fresh Every Morning</h3>
        <p className="mt-3 text-sm text-gray-600">
          Prepared daily using quality ingredients.
        </p>
      </div>

      <div
        className="rounded-3xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-green-200 hover:bg-green-50 hover:text-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
        style={{ borderColor: "#E5E7EB", padding: "7px" }}
      >
        <h3 className="font-semibold">🍛 Authentic Taste</h3>
        <p className="mt-3 text-sm text-gray-600">
          Traditional South Indian recipes.
        </p>
      </div>

      <div
        className="rounded-3xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-green-200 hover:bg-green-50 hover:text-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
        style={{ borderColor: "#E5E7EB", padding: "7px" }}
      >
        <h3 className="font-semibold">💚 Affordable Price</h3>
        <p className="mt-3 text-sm text-gray-600">
          Delicious meals at budget-friendly prices.
        </p>
      </div>
    </div>
  );
}
