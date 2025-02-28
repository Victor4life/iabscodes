"use client";
import Image from "next/image";
import Link from "next/link"; // Add this import
import logo from "./assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={logo} alt="Logo" width={100} height={50} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-600">
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-blue-600"
            >
              Services
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600">
              Contact
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/get-started"
              className="bg-[#2989D8] p-2 text-white rounded-sm cursor-pointer"
            >
              Get Started
            </Link>
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
            <Link
              href="/"
              className="block text-gray-800 hover:text-blue-600 py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-800 hover:text-blue-600 py-2"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-gray-800 hover:text-blue-600 py-2"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-gray-800 hover:text-blue-600 py-2"
            >
              Contact
            </Link>
            <Link
              href="/get-started"
              className="bg-[#2989D8] p-2 text-white rounded-sm cursor-pointer"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
