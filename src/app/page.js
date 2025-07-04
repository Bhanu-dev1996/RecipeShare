"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import HeroSectionWrapper from "@/components/HeroSectionWrapper"
import RecipeSection from "@/components/RecipeSection"
import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import RecipeModal from "@/components/RecipeModal"
import ChatAssistant from "@/components/ChatAssistant"
import SocialIcons from "@/components/SocialIcons"
import Footer from "@/components/footer"
import { LanguageProvider, useLanguage } from "@/hooks/useLanguage"
import sampleRecipes from "../data/sampleRecipes"

function MainContent() {
  const { t } = useLanguage()
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isDarkMode, setIsDarkMode] = useState(false)

  const categories = [t.all, t.breakfast, t.lunch, t.dinner, t.dessert]

  const filteredRecipes = sampleRecipes.filter((recipe) => {
    const matchesSearch =
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || recipe.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "dark bg-gray-900" : "bg-white"}`}>
      <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main>
        <HeroSectionWrapper searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <RecipeSection
          t={t}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          filteredRecipes={filteredRecipes}
          setSelectedRecipe={setSelectedRecipe}
        />
        <AboutSection t={t} />
        <ContactSection t={t} />
      </main>

      <Footer />

      {selectedRecipe && <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}

      <ChatAssistant />
      <SocialIcons />
    </div>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  )
}
