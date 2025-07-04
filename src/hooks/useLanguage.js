"use client"

import React, { useState, useEffect, createContext, useContext } from "react"

const translations = {
  en: {
    // Navigation
    home: "Home",
    recipes: "Recipes",
    about: "About",
    contact: "Contact",

    // Hero Section
    heroTitle: "Discover & Share Amazing Recipes",
    heroSubtitle:
      "Explore thousands of delicious recipes from around the world. Share your culinary creations and discover new favorites.",
    searchPlaceholder: "Search recipes by name or ingredient...",
    startCooking: "Start Cooking",

    // Recipe Grid
    ourRecipeCollection: "Our Recipe Collection",
    exploreRecipes: "Explore our curated collection of delicious recipes from around the world",
    cookTime: "Cook Time",
    servings: "servings",

    // Categories
    all: "All",
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    dessert: "Dessert",

    // Recipe Tags
    vegan: "Vegan",
    healthy: "Healthy",
    quick: "Quick",
    spicy: "Spicy",
    asian: "Asian",
    sweet: "Sweet",
    classic: "Classic",
    comfort: "Comfort",
    italian: "Italian",
    vegetarian: "Vegetarian",

    // Recipe Modal
    ingredients: "Ingredients",
    instructions: "Instructions",
    close: "Close",

    // About Section
    aboutTitle: "About RecipeShare",
    easyRecipes: "Easy Recipes",
    easyRecipesDesc: "Simple, step-by-step recipes that anyone can follow and enjoy.",
    globalCuisine: "Global Cuisine",
    globalCuisineDesc: "Discover flavors from around the world with our diverse recipe collection.",
    community: "Community",
    communityDesc: "Join our community of food lovers and share your culinary creations.",

    // Contact Section
    getInTouch: "Get In Touch",
    contactDesc: "Have a question or want to share your favorite recipe? We'd love to hear from you!",
    contactInfo: "Contact Info",
    email: "Email",
    phone: "Phone",
    address: "Address",
    quickMessage: "Quick Message",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourMessage: "Your Message",
    sendMessage: "Send Message",

    // Chat Assistant
    chatTitle: "Recipe Assistant",
    chatSubtitle: "Ask me anything about cooking!",
    typeMessage: "Type your message...",

    // Footer
    footerDesc: "Discover and share amazing recipes from around the world. Join our community of food lovers!",
    madeWith: "Made with",
    forFoodLovers: "for food lovers",
    quickLinks: "Quick Links",
    stayUpdated: "Stay Updated",
    newsletterDesc: "Subscribe to our newsletter for the latest recipes and cooking tips.",
    enterEmail: "Enter your email",
    subscribe: "Subscribe",
    allRightsReserved: "All rights reserved.",

    // Common
    loading: "Loading...",
    error: "Error",
    success: "Success",
  },

  es: {
    home: "Inicio",
    recipes: "Recetas",
    about: "Acerca de",
    contact: "Contacto",
    heroTitle: "Descubre y Comparte Recetas Increíbles",
    heroSubtitle:
      "Explora miles de recetas deliciosas de todo el mundo. Comparte tus creaciones culinarias y descubre nuevos favoritos.",
    searchPlaceholder: "Buscar recetas por nombre o ingrediente...",
    startCooking: "Empezar a Cocinar",
    ourRecipeCollection: "Nuestra Colección de Recetas",
    exploreRecipes: "Explora nuestra colección curada de recetas deliciosas de todo el mundo",
    cookTime: "Tiempo de Cocción",
    servings: "porciones",
    all: "Todas",
    breakfast: "Desayuno",
    lunch: "Almuerzo",
    dinner: "Cena",
    dessert: "Postre",
    vegan: "Vegano",
    healthy: "Saludable",
    quick: "Rápido",
    spicy: "Picante",
    asian: "Asiático",
    sweet: "Dulce",
    classic: "Clásico",
    comfort: "Reconfortante",
    italian: "Italiano",
    vegetarian: "Vegetariano",
    ingredients: "Ingredientes",
    instructions: "Instrucciones",
    close: "Cerrar",
    aboutTitle: "Acerca de RecipeShare",
    easyRecipes: "Recetas Fáciles",
    easyRecipesDesc: "Recetas simples paso a paso que cualquiera puede seguir y disfrutar.",
    globalCuisine: "Cocina Global",
    globalCuisineDesc: "Descubre sabores de todo el mundo con nuestra diversa colección de recetas.",
    community: "Comunidad",
    communityDesc: "Únete a nuestra comunidad de amantes de la comida y comparte tus creaciones culinarias.",
    getInTouch: "Ponte en Contacto",
    contactDesc: "¿Tienes una pregunta o quieres compartir tu receta favorita? ¡Nos encantaría saber de ti!",
    contactInfo: "Información de Contacto",
    email: "Correo",
    phone: "Teléfono",
    address: "Dirección",
    quickMessage: "Mensaje Rápido",
    yourName: "Tu Nombre",
    yourEmail: "Tu Correo",
    yourMessage: "Tu Mensaje",
    sendMessage: "Enviar Mensaje",
    chatTitle: "Asistente de Recetas",
    chatSubtitle: "¡Pregúntame cualquier cosa sobre cocina!",
    typeMessage: "Escribe tu mensaje...",
    footerDesc:
      "Descubre y comparte recetas increíbles de todo el mundo. ¡Únete a nuestra comunidad de amantes de la comida!",
    madeWith: "Hecho con",
    forFoodLovers: "para amantes de la comida",
    quickLinks: "Enlaces Rápidos",
    stayUpdated: "Mantente Actualizado",
    newsletterDesc: "Suscríbete a nuestro boletín para las últimas recetas y consejos de cocina.",
    enterEmail: "Ingresa tu correo",
    subscribe: "Suscribirse",
    allRightsReserved: "Todos los derechos reservados.",
    loading: "Cargando...",
    error: "Error",
    success: "Éxito",
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("recipe-share-language")
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("recipe-share-language", language)
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const value = {
    language,
    setLanguage,
    t: translations[language],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
