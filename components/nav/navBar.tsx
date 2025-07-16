import React from "react";
import { MobileMenu } from "@/components/mobile-menu";
import NavLinks from "./navLinks";

const navBar = () => {
  return (
    <nav className="bg-white shadow-lg border-b-2 border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div className="absolute -right-2 -bottom-1 w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-md flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">A</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Ketar Aluminum
              </h1>
              <p className="text-sm text-gray-600">
                Premium Aluminum Solutions
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <NavLinks />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileMenu currentPage="home" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navBar;
