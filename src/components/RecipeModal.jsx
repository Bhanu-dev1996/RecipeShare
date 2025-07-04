"use client"

import { X, Clock, Users } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"

export default function RecipeModal({ recipe, onClose }) {
  const { t } = useLanguage()

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75"
          onClick={onClose}
        />

        {/* Modal panel */}
        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl">
          {/* Header */}
          <div className="relative">
            <img
              src={recipe.image || "/placeholder.svg"}
              alt={recipe.name}
              className="w-full h-64 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
              {/* Left Column */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{recipe.name}</h2>

                <p className="text-gray-600 dark:text-gray-400 mb-6">{recipe.description}</p>

                {/* Recipe Info */}
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700 dark:text-gray-300">{recipe.cookTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700 dark:text-gray-300">4 {t.servings}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {recipe.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Ingredients */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.ingredients}</h3>
                  <ul className="space-y-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:w-1/2 mt-8 lg:mt-0">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.instructions}</h3>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex space-x-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 dark:text-gray-300 pt-1">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
