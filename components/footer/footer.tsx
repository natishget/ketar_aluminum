import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import ketar_logo from "@/assets/ketar_logo2.png";
import Image from "next/image";

const footerBar = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="relative">
                  <Image src={ketar_logo} alt="" className="w-16 shadow-lg" />
                  {/* <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">K</span>
                  </div>
                  <div className="absolute -right-2 -bottom-1 w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div> */}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Ketar Aluminum</h3>
                  <p className="text-gray-400">
                    Product and Service at its best
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
                Leading provider of high-quality aluminum profiles and technical
                services in Ethiopia. Committed to excellence, precision, and
                customer satisfaction since 2006.
              </p>
              <div className="mb-6">
                <p className="text-sm text-gray-400">
                  Founded: October 7, 2006 E.C
                </p>
              </div>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Facebook className="h-6 w-6" />
                </div>
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Twitter className="h-6 w-6" />
                </div>
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Instagram className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-8">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-green-400 transition-colors font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-green-400 transition-colors font-medium"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-green-400 transition-colors font-medium"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-300 hover:text-green-400 transition-colors font-medium"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-green-400 transition-colors font-medium"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quote"
                    className="text-gray-300 hover:text-green-400 transition-colors font-medium"
                  >
                    Get Quote
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-8">Contact Info</h4>
              <div className="space-y-6 ">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-300 font-medium">
                      +251-930-329599 <br />
                      +251-911-690818
                    </div>
                    <div className="text-gray-500 text-sm">
                      Mon-Fri 8AM-5PM <br />
                      Sat 8AM-12AM
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <a
                      href="mailto:ketaraluminumplc@gmail.com"
                      // target="_blank"
                      className="text-gray-300 font-medium text-sm hover:text-green-400 transition-colors"
                    >
                      ketaraluminumplc@gmail.com
                    </a>
                    <div className="text-gray-500 text-sm">24/7 Support</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-300 font-medium">
                      Addis Ababa, Ethiopia
                      <br />
                      Yeka Sub City Megenagna <br /> Shola infront of Sumeya{" "}
                      <br />
                      Mosque
                    </div>
                    <a
                      href="https://maps.app.goo.gl/mQBxswnxp55V8FdT9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 text-sm hover:text-green-400 hover:font-bold transition-colors "
                    >
                      Visit our facility
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Ketar Aluminum. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footerBar;
