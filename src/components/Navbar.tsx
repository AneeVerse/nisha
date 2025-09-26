"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("Home");
  const navLinks = ["Home", "How It Works", "For Ship Owners", "For Inspectors"];

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-black/5">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/images/nav-logo.png" alt="Nisha" width={120} height={36} className="h-10 sm:h-12 md:h-13 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="flex items-center space-x-2 bg-white border border-black/20 text-gray-600 px-2 py-2 rounded-full">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={() => setActiveLink(link)}
                  className={`px-3 xl:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeLink === link ? "bg-gray-100 text-black font-bold shadow-sm" : "text-gray-600 hover:text-black hover:bg-gray-100"
                  }`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button className="px-6 py-2.5">Launch App</Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              className="text-gray-700"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={() => setActiveLink(link)}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                    activeLink === link ? "bg-gradient-to-r from-[#2489be] via-[#89517f] to-[#cb4147] text-white" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {link}
                </a>
              ))}
              <div className="px-2 pt-4">
                <Button className="w-full py-2.5 sm:py-3 text-sm sm:text-base">Launch App</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
