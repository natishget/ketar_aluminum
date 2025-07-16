"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // for conditional classes (optional but clean)

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const navLinks = () => {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex items-center space-x-8">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={clsx(
            pathname === href
              ? "text-gray-900 font-semibold border-b-2 border-green-500 pb-1"
              : "text-gray-600 hover:text-green-600 font-medium transition-colors"
          )}
        >
          {label}
        </Link>
      ))}
      <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg">
        Get Quote
      </Button>
    </div>
  );
};

export default navLinks;
