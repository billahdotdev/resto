"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, MessageCircle } from "lucide-react"

const phoneNumber = "+8801712345678"
const whatsAppMessage = encodeURIComponent("Hello Resto, I would like to make a reservation.")

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById("mobile-menu")
      const menuButton = document.getElementById("menu-button")

      if (isMenuOpen && mobileMenu && !mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#special-offers", label: "Offers" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#hero" className={`text-2xl font-bold ${isScrolled ? "text-emerald-600" : "text-white"}`}>
            Resto
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isScrolled
                        ? activeSection === link.href.substring(1)
                          ? "text-emerald-600"
                          : "text-gray-700 hover:text-emerald-600"
                        : activeSection === link.href.substring(1)
                          ? "text-white"
                          : "text-gray-200 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Reservation Button */}
          <a
            href={`https://wa.me/${phoneNumber}?text=${whatsAppMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isScrolled
                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                : "bg-white text-emerald-600 hover:bg-gray-100"
            }`}
          >
            Reserve a Table
          </a>

          {/* Mobile Menu Button */}
          <button
            id="menu-button"
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-md ${isScrolled ? "text-gray-700" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg fixed inset-0 top-16 z-50 overflow-y-auto">
          <nav className="container mx-auto px-4 py-6">
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`block py-2 text-lg font-medium ${
                      activeSection === link.href.substring(1)
                        ? "text-emerald-600"
                        : "text-gray-700 hover:text-emerald-600"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-gray-200">
                <a
                  href={`https://wa.me/${phoneNumber}?text=${whatsAppMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-emerald-600 text-white rounded-md text-center font-medium hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  Reserve via WhatsApp
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={`tel:${phoneNumber}`}
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white border border-gray-300 text-gray-700 rounded-md text-center font-medium hover:bg-gray-50 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar

