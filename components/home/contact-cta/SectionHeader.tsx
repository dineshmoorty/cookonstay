export default function SectionHeader() {
  return (
    <div>
      <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold" style={{"padding": "10px"}}>
        📍 Visit CookOnStay
      </span>

      <h2 className="mt-6 text-4xl font-bold leading-tight md:text-4xl" style={{"padding": "10px 0"}}>
        Ready to Enjoy
        <br />
        Fresh Homemade
        <br />
        South Indian Food?
      </h2>

      <p className="mt-6 max-w-full text-lg leading-8 text-black" style={{"padding": "10px 0"}}>
        Visit CookOnStay today and enjoy freshly prepared South Indian
        breakfast and variety rice made with quality ingredients,
        authentic taste, and affordable prices.
      </p>
    </div>
  );
}