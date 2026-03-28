/*
 * TUCSON TOTS ELC — FOOTER
 * Design: Deep violet background, warm amber accents, organized columns
 * Fixes: Removed phone number, removed founder name, fixed badge overflow
 */

import { Link } from "wouter";
import { GraduationCap, MapPin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "oklch(0.25 0.15 295)" }}>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "oklch(0.78 0.16 65)" }}
              >
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  className="font-black text-white text-base leading-none"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  TUCSON TOTS
                </span>
                <span
                  className="text-xs font-medium leading-none"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "oklch(0.78 0.16 65)",
                  }}
                >
                  Early Learning Center
                </span>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "oklch(0.80 0.03 295)", fontFamily: "'DM Sans', sans-serif" }}
            >
              A professional play-based early learning center in Tucson, AZ, where every child is
              nurtured to grow with confidence, curiosity, and joy.
            </p>
            {/* Value badges — stacked to prevent overflow */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Safety", color: "oklch(0.65 0.18 25)" },
                { label: "Happiness", color: "oklch(0.62 0.22 355)" },
                { label: "Education", color: "oklch(0.62 0.15 145)" },
              ].map(({ label, color }) => (
                <span
                  key={label}
                  className="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                  style={{
                    backgroundColor: "oklch(0.38 0.18 295)",
                    color,
                    fontFamily: "'Poppins', sans-serif",
                    border: `1px solid ${color}40`,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/programs", label: "Our Programs" },
                { href: "/nutrition", label: "Nutrition" },
                { href: "/enrollment", label: "Enrollment" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{
                      color: "oklch(0.75 0.03 295)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Programs
            </h4>
            <ul className="space-y-2.5">
              {[
                "Infant & Toddler Care",
                "Preschool Program",
                "Pre-K Readiness",
                "After-School Care",
                "Summer Enrichment",
                "Parent Resources",
              ].map((prog) => (
                <li key={prog}>
                  <Link
                    href="/programs"
                    className="text-sm transition-colors hover:text-white"
                    style={{
                      color: "oklch(0.75 0.03 295)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {prog}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — no phone number */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: "oklch(0.78 0.16 65)" }}
                />
                <span
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.75 0.03 295)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Tucson, Arizona
                  <br />
                  Near the University of Arizona
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "oklch(0.65 0.18 25)" }}
                />
                <Link
                  href="/contact"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "oklch(0.75 0.03 295)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/enrollment"
                className="inline-block px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:scale-105"
                style={{
                  backgroundColor: "oklch(0.65 0.18 25)",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid oklch(0.38 0.18 295)" }}
        >
          <p
            className="text-xs"
            style={{ color: "oklch(0.60 0.03 295)", fontFamily: "'DM Sans', sans-serif" }}
          >
            © {new Date().getFullYear()} Tucson Tots Early Learning Center. All rights reserved.
          </p>
          <p
            className="text-xs flex items-center gap-1"
            style={{ color: "oklch(0.60 0.03 295)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> in Tucson, AZ
          </p>
        </div>
      </div>
    </footer>
  );
}
