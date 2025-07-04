export default function AboutSection({ t }) {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">{t.aboutTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍳</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t.easyRecipes}</h3>
            <p className="text-gray-600 dark:text-gray-400">{t.easyRecipesDesc}</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t.globalCuisine}</h3>
            <p className="text-gray-600 dark:text-gray-400">{t.globalCuisineDesc}</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t.community}</h3>
            <p className="text-gray-600 dark:text-gray-400">{t.communityDesc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}