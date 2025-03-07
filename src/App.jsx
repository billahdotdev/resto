"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Menu from "./components/Menu"
import SpecialOffers from "./components/SpecialOffers"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import FloatingCTA from "./components/FloatingCTA"

function App() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="font-sans">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Menu />
        <SpecialOffers />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingCTA />
    </div>
  )
}

export default App

