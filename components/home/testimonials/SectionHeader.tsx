export default function SectionHeader() {
  return (
    <div className="mx-auto mb-12 max-w-full text-center" style={{"paddingTop": "20px", "paddingBottom": "20px"}}>
      <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600" style={{"padding": "10px"}}>
        ⭐ Testimonials
      </span>

      <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl" style={{"paddingTop": "20px"}}>
        Loved by Our Customers
      </h2>

      <p className="mt-5 text-lg text-gray-600" style={{"paddingTop": "20px"}}>
        Real reviews from customers who enjoyed the authentic taste of
        CookOnStay.
      </p>
    </div>
  );
}