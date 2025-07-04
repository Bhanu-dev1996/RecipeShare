"use client"

import { useState, useEffect } from "react"
import { Globe, ChevronDown } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage" // Ensure this is a JS-compatible hook

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
]

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find((lang) => lang.code === language)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKey)
    }
    return () => window.removeEventListener("keydown", handleKey)
  }, [isOpen])

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select language"
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">{currentLanguage?.flag}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10 bg-black/10"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Dropdown */}
          <div className="absolute top-full mt-2 right-0 z-20 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                  language === lang.code
                    ? "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
