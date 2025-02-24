"use client";
import Image from "next/image";
import logo from "./assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src={logo} alt="Logo" width={100} height={50} />{" "}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-800 hover:text-blue-600">
              Home
            </a>
            <a href="/about" className="text-gray-800 hover:text-blue-600">
              About
            </a>
            <a href="/services" className="text-gray-800 hover:text-blue-600">
              Services
            </a>
            <a href="/contact" className="text-gray-800 hover:text-blue-600">
              Contact
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="bg-[#2989D8] p-2 text-white rounded-sm cursor-pointer">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block text-gray-800 hover:text-blue-600 py-2"
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-gray-800 hover:text-blue-600 py-2"
            >
              About
            </a>
            <a
              href="/services"
              className="block text-gray-800 hover:text-blue-600 py-2"
            >
              Services
            </a>
            <a
              href="/contact"
              className="block text-gray-800 hover:text-blue-600 py-2"
            >
              Contact
            </a>
            <a className="bg-[#2989D8] p-2 text-white rounded-sm cursor-pointer">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
