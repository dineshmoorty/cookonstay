export default function SectionHeader() {
  return (
    <div className="mx-auto mb-16 max-w-full text-center" style={{"paddingTop": "20px"}}>
      <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600" style={{"padding": "10px"}}>
        ⭐ Why Choose CookOnStay
      </span>

      <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-4xl" style={{"padding": "10px"}}>
        Fresh Food, Trusted Quality,
        <br />
        Served with Care Every Day
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600" style={{"padding": "10px"}}>
        At CookOnStay, we believe great food starts with fresh ingredients,
        clean preparation, and traditional recipes. Every meal is prepared
        with care to deliver the authentic taste of South India at prices
        everyone can enjoy.
      </p>
    </div>
  );
}