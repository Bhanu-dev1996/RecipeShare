"use client"

import { Facebook, Instagram, Youtube } from "lucide-react"

export default function SocialIcons() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
      color: "hover:text-pink-600",
    },
    {
      name: "Pinterest",
      icon: () => (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.372 0 12 0 17.084 3.163 21.426 7.627 23.174c-.105-.949-.2-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.001 24c6.624 0 11.99-5.373 11.99-12C24 5.372 18.627.001 12.001.001z" />
        </svg>
      ),
      href: "https://pinterest.com",
      color: "hover:text-red-600",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com",
      color: "hover:text-red-600",
    },
  ]

  return (
    <div className="fixed left-6 bottom-6 z-40 flex flex-col space-y-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${social.color} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-700`}
          aria-label={social.name}
        >
          {typeof social.icon === "function" ? (
            social.icon() // for custom SVG
          ) : (
            <social.icon className="h-5 w-5" /> // for Lucide icons
          )}
        </a>
      ))}
    </div>
  )
}
