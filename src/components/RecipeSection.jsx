import RecipeGrid from "./RecipeGrid"

export default function RecipeSection({
  t,
  categories,
  selectedCategory,
  setSelectedCategory,
  filteredRecipes,
  setSelectedRecipe,
}) {
  return (
    <section id="recipes" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.ourRecipeCollection}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t.exploreRecipes}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <RecipeGrid recipes={filteredRecipes} onRecipeClick={setSelectedRecipe} />
      </div>
    </section>
  )
}