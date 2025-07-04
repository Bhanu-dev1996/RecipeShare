"use client"

import { useState } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"

import { useLanguage } from "@/hooks/useLanguage"
import LanguageSwitcher from "@/components/LanguageSwitcher"

export default function Navigation({ isDarkMode, setIsDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { t } = useLanguage()

  const navLinks = [
    { name: t.home, href: "#home" },
    { name: t.recipes, href: "#recipes" },
    { name: t.about, href: "#about" },
    { name: t.contact, href: "#contact" },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }

    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-orange-500">RecipeShare</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Language Switcher & Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-orange-500 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
