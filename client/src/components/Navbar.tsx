/*
 * TUCSON TOTS ELC — NAVBAR
 * Design: Sticky top nav, deep violet background, white text
 * Mobile: Logo truncated to icon + "TUCSON TOTS" only (no subtitle) to prevent wrapping
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, GraduationCap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/nutrition", label: "Nutrition" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "oklch(0.38 0.18 295)" }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — compact on mobile to prevent wrapping */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div
              className="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0"
              style={{ backgroundColor: "oklch(0.78 0.16 65)" }}
            >
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="font-black text-white text-base md:text-lg leading-none whitespace-nowrap"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                TUCSON TOTS
              </span>
              {/* Hide subtitle on small screens to prevent wrapping */}
              <span
                className="hidden sm:block text-xs font-medium leading-none whitespace-nowrap"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "oklch(0.78 0.16 65)",
                }}
              >
                Early Learning Center
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location === link.href
                    ? "text-white"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  ...(location === link.href
                    ? { backgroundColor: "oklch(0.52 0.16 295)" }
                    : {}),
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2.5 rounded-xl text-sm font-bold text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "oklch(0.65 0.18 25)",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors flex-shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-white/20 py-3"
          style={{ backgroundColor: "oklch(0.32 0.18 295)" }}
        >
          <div className="container flex flex-col gap-0.5 pb-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-white bg-white/15"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 px-5 py-3 rounded-xl text-sm font-bold text-white text-center"
              style={{
                backgroundColor: "oklch(0.65 0.18 25)",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
