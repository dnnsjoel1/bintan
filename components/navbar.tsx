"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Villas & Suites", href: "#villas" },
  { name: "Dining", href: "#dining" },
  { name: "Wellness & Spa", href: "#wellness" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMobile()

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "nav-solid py-2" : "nav-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold">
            The Residence
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-gold transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-gold hover:bg-gold-dark text-black font-semibold">Book Now</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
            <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-white"
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <Link href="/" className="font-serif text-2xl font-bold">
                The Residence
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="text-2xl" aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                className="bg-gold hover:bg-gold-dark text-black font-semibold mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </>
  )
}
