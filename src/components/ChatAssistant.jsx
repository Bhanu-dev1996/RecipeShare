"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"

export default function ChatAssistant() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your recipe assistant. Ask me about cooking tips, ingredient substitutions, or recipe suggestions!",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const aiResponses = [
    "That's a great question! For best results, I'd recommend trying a lower temperature and longer cooking time.",
    "You can substitute that ingredient with something similar. Would you like some specific suggestions?",
    "Here's a cooking tip: always let your meat rest for a few minutes after cooking for better flavor!",
    "That recipe sounds delicious! Have you considered adding some fresh herbs for extra flavor?",
    "For meal prep, I suggest preparing ingredients in advance and storing them properly in the fridge.",
    "Baking is all about precision! Make sure to measure your ingredients accurately for best results.",
    "That's a healthy choice! You can make it even more nutritious by adding some leafy greens.",
    "Great question about cooking techniques! The key is to control your heat and timing.",
  ]

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")
    setIsTyping(true)

    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 rounded-t-2xl bg-orange-500 text-white">
            <h3 className="font-semibold">{t.chatTitle}</h3>
            <p className="text-sm text-orange-100">{t.chatSubtitle}</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.isUser
                      ? "bg-orange-500 text-white rounded-br-sm"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-2xl rounded-bl-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t.typeMessage}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-colors duration-200"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
