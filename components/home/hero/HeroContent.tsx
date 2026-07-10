import HeroCTA from "./HeroCTA";

export default function HeroContent() {
  return (
    <div>

      <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
        🍽️ Fresh Street Food
      </span>

      <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900 lg:text-7xl">
        Fresh.
        <br />
        Hygienic.
        <br />
        Homemade.
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
        Enjoy authentic South Indian breakfast and homemade meals prepared
        fresh every day with quality ingredients, traditional recipes, and
        affordable prices.
      </p>

      <HeroCTA />

      <div className="mt-12 flex flex-wrap gap-6 text-sm font-medium">

        <span>🧼 Hygienic</span>

        <span>🔥 Fresh Every Morning</span>

        <span>🏠 Homemade</span>

        <span>❤️ Quality Ingredients</span>

      </div>

    </div>
  );
}