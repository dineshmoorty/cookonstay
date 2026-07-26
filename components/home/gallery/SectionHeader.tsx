export default function SectionHeader() {
  return (
    <div className="mx-auto mb-16 max-w-full text-center">
      <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600" style={{padding: "10px"}}>
        📸 Gallery
      </span>

      <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-4xl" style={{padding: "10px"}}>
        A Taste of CookOnStay
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600" style={{padding: "10px"}}>
        Take a look at our freshly prepared dishes, authentic South Indian
        meals, and the moments that make CookOnStay special.
      </p>
    </div>
  );
}