export default function SectionHeader() {
  return (
    <div className="mb-14 text-center">
      <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600" style={{padding: "5px 10px"}}>
        🍽️ Featured Menu
      </span>

      <h2 className="mt-5 text-4xl font-bold text-gray-900" style={{padding: "5px 10px"}}>
        Our Best Selling Dishes
      </h2>

      <p className="mx-auto mt-4 max-w-full text-gray-600" style={{padding: "5px 10px"}}>
        Freshly prepared every day with authentic South Indian flavors.
      </p>
    </div>
  );
}