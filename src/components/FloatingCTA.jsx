"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle } from "lucide-react"

const FloatingCTA = () => {
  // Replace with your actual phone number
  const phoneNumber = "+8801712345678"
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const [isContactVisible, setIsContactVisible] = useState(false)

  useEffect(() => {
    const checkVisibility = () => {
      // Check footer visibility
      const footer = document.querySelector("footer")
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const isVisible = footerRect.top < window.innerHeight && footerRect.bottom >= 0
        setIsFooterVisible(isVisible)
      }

      // Check contact section visibility
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        const contactRect = contactSection.getBoundingClientRect()
        const isVisible = contactRect.top < window.innerHeight && contactRect.bottom >= 0
        setIsContactVisible(isVisible)
      }
    }

    window.addEventListener("scroll", checkVisibility)
    // Initial check
    checkVisibility()

    return () => window.removeEventListener("scroll", checkVisibility)
  }, [])

  // Hide floating buttons when footer or contact section is visible
  if (isFooterVisible || isContactVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Phone Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call us"
        className="flex items-center justify-center p-3 rounded-full bg-emerald-600 text-white shadow-lg transition-all hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
      >
        <Phone className="h-5 w-5" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=Hello%20Resto,%20I%20would%20like%20to%20make%20a%20reservation.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="flex items-center justify-center p-3 rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  )
}

export default FloatingCTA

