"use client"

import { Clock, Tag } from "lucide-react"

export default function RecipeGrid({ recipes, onRecipeClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          onClick={() => onRecipeClick(recipe)}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden group"
        >
          {/* Recipe Image */}
          <div className="relative overflow-hidden">
            <img
              src={recipe.image || "/placeholder.svg"}
              alt={recipe.name}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-4 right-4">
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                <Clock className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {recipe.cookTime}
                </span>
              </div>
            </div>
          </div>

          {/* Recipe Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors duration-200">
              {recipe.name}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {recipe.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
