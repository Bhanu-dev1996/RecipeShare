"use client"

import { useState } from "react"
import { Mail, Heart } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"

export default function Footer() {
  const [email, setEmail] = useState("")
  const { t } = useLanguage()

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Subscription logic here
    console.log("Subscribing email:", email)
    setEmail("")
    alert("Thank you for subscribing!")
  }

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">RecipeShare</h3>
            <p className="text-gray-400 mb-4">{t.footerDesc}</p>
            <div className="flex items-center text-gray-400">
              <span>{t.madeWith}</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>{t.forFoodLovers}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              {["Home", "Categories", "About Us", "Contact", "Privacy Policy", "Terms of Service"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.stayUpdated}</h4>
            <p className="text-gray-400 mb-4">{t.newsletterDesc}</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.enterEmail}
                  required
                  className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                {t.subscribe}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 RecipeShare. {t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  )
}
