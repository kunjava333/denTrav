"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import ModeToggle from "./ModeToggle";
import logo from '@../../../public/logo3.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest(".mobile-menu") && !target.closest(".menu-button")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

 

  return (
    <nav className="bg-white dark:bg-gray-950 fixed w-full z-30 top-0 start-0 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center flex gap-2 text-2xl font-bold whitespace-nowrap dark:text-white"> <img src = {logo.src} alt="" className="h-7 w-auto"/> DenTrav </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side (Desktop) */}
        <div className="flex items-center gap-4">
          <ModeToggle />

          {/* Hamburger button (Mobile) */}
          <button
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 menu-button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Mobile menu (side panel) */}
        <div
          className={cn(
            "mobile-menu fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 shadow-xl z-50 md:hidden transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col p-6 space-y-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  "text-xl font-semibold text-gray-700 dark:text-gray-200 transform transition-all duration-300 hover:translate-x-2",
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                )}
                style={{
                  transitionDelay: isOpen ? `${index * 75}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </nav>
  )
}
