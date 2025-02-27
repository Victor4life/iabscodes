import React from "react";
import Image from "next/image";
import logo from "./assets/logo.png";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0661AC8F] text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:flex md:flex-1 gap-8 justify-between">
          <div className="flex-shrink-0">
            <Image src={logo} alt="Logo" width={120} height={100} />
            <div className="flex flex-1 space-x-4 mt-4">
              <a
                href="#"
                className="text-white hover:text-white transition-colors flex items-center gap-2"
                aria-label="number"
              >
                <FaFacebook size={25} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition-colors flex items-center gap-2"
                aria-label="number"
              >
                <FaX size={25} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition-colors flex items-center gap-2"
                aria-label="email"
              >
                <FaInstagram size={25} />
              </a>
            </div>
          </div>
          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-1/3 after:bg-white">
              Services
            </h3>
            <ul className="space-y-2 gap-2 justify-between">
              <li>
                <a
                  href="/"
                  className="text-white hover:text-white transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-white hover:text-white transition-colors"
                >
                  Mobile Development
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-white hover:text-white transition-colors"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  className="text-white hover:text-white transition-colors"
                >
                  Graphics Design
                </a>
              </li>
            </ul>
          </div>
          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-1/3 after:bg-white">
              Quick Links
            </h3>
            <ul className="space-y-2 gap-2 justify-between">
              <li>
                <a
                  href="/"
                  className="text-white hover:text-white transition-colors"
                >
                  API Documentation
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-white hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-white hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  className="text-white hover:text-white transition-colors"
                >
                  Terms and Condition
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links Section with icons */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-2 justify-between">
              <a
                href="#"
                className="text-white hover:text-white transition-colors flex items-center gap-2"
                aria-label="number"
              >
                <FaPhone size={25} /> 08032566178
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition-colors flex items-center gap-2"
                aria-label="number"
              >
                <FaWhatsapp size={25} /> 07053706393
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition-colors flex items-center gap-2"
                aria-label="email"
              >
                <FaEnvelope size={25} /> support@iabcodesltd.com
              </a>
            </div>
          </div>
          {/* Copyright Section 
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-white">
            &copy; {currentYear} Your Company Name. All rights reserved.
          </p>
        </div>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
