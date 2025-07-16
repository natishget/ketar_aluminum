"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"

interface MobileMenuProps {
  currentPage: string
}

export function MobileMenu({ currentPage }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { href: "/", label: "Home", page: "home" },
    { href: "/about", label: "About", page: "about" },
    { href: "/services", label: "Services", page: "services" },
    { href: "/products", label: "Products", page: "products" },
    { href: "/contact", label: "Contact", page: "contact" },
  ]

  return (
    <>
      <Button variant="outline" size="sm" onClick={toggleMenu} className="relative z-50 bg-transparent">
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" onClick={toggleMenu} />}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-24">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-gray-200">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div className="absolute -right-1 -bottom-1 w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">A</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Ketar Aluminum</h3>
              <p className="text-xs text-gray-600">Premium Solutions</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4 mb-8">
            {menuItems.map((item) => (
              <Link
                key={item.page}
                href={item.href}
                onClick={toggleMenu}
                className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                  currentPage === item.page
                    ? "bg-green-50 text-green-600 border-l-4 border-green-500"
                    : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="space-y-4">
            <Button
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
              onClick={toggleMenu}
            >
              Get Free Quote
            </Button>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+251-911-123456</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
