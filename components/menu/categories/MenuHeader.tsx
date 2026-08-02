export default function MenuHeader() {
  return (
    <div className="mx-auto mb-12 max-w-full text-center" style={{padding: "20px"}}>

      <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600" style={{padding: "10px 20px"}}>
        🍽️ Our Menu
      </span>

      <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-4xl" style={{padding: "10px 0px"}}>
        Freshly Prepared Every Day
      </h2>

      <p className="mx-auto mt-5 max-w-full text-base leading-7 text-slate-600 sm:text-lg">
        Explore our South Indian breakfast favorites and traditional
        rice varieties, prepared fresh with familiar homemade flavors.
      </p>

    </div>
  );
}