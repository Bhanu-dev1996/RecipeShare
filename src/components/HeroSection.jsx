"use client"

import { Search } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"

export default function HeroSection({ searchTerm, setSearchTerm }) {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Hero Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t.heroTitle}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {t.heroSubtitle}
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 dark:border-gray-600 rounded-xl leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
              />
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            {t.startCooking}
          </button>

          {/* Hero Image */}
          <div className="mt-16">
            <img
              src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800&h=400"
              alt="Delicious food spread"
              className="mx-auto rounded-2xl shadow-2xl max-w-4xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
