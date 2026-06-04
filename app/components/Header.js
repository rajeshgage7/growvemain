"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact Us", href: "#contact" },
    { label: "About", href: "#about" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src={logo}
              alt="Shipment tracking UI preview"
              className="w-full max-w-lg object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
  {navLinks.map((link) => (
    <Link
      key={link.label}
      href={link.href}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        pathname === link.href
          ? "bg-violet-600 text-white"
          : "text-gray-600 hover:text-violet-600 hover:bg-violet-50"
      }`}
    >
      {link.label}
    </Link>
  ))}
</nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-full transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-violet-600 hover:bg-violet-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 space-y-1">
            {navLinks.map((link) => (
             <Link
    key={link.label}
    href={link.href}
    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      pathname === link.href
        ? "bg-violet-600 text-white"
        : "text-gray-600 hover:text-violet-600 hover:bg-violet-50"
    }`}
    onClick={() => setMobileOpen(false)}
  >
    {link.label}
  </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2 px-3">
              <Link
                href="/login"
                className="text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-full transition-colors text-center"
                onClick={() => setMobileOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
