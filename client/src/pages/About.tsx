/*
 * TUCSON TOTS ELC — ABOUT PAGE
 * Design: Bright Academy — deep violet + amber + teal + coral
 * Fixes: Increased hero top padding, responsive grid improvements
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { CheckCircle2, Award, Heart, Users, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero — pt-40 ensures navbar (80px) + generous breathing room */}
      <section
        className="pt-40 pb-24"
        style={{ backgroundColor: "oklch(0.38 0.18 295)" }}
      >
        <div className="container text-center">
          <span
            className="badge-pill mb-5 inline-block text-white"
            style={{ backgroundColor: "oklch(0.52 0.16 295)" }}
          >
            Our Story
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            About Tucson Tots ELC
          </h1>
          <p
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto px-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            From a vision rooted in love and learning, to a thriving early learning center
            serving Tucson families.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-center">
            <div>
              <span
                className="badge-pill mb-5 inline-block"
                style={{ backgroundColor: "oklch(0.97 0.02 295)", color: "oklch(0.38 0.18 295)" }}
              >
                Our Mission
              </span>
              <h2
                className="text-3xl md:text-4xl font-black mb-6"
                style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
              >
                Nurturing the Whole Child
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                At Tucson Tots Early Learning Center, our mission is to provide an exceptional
                early childhood education experience that honors each child's unique developmental
                journey. We believe that the earliest years of life are the most formative, and
                we take that responsibility seriously.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Our play-based approach is grounded in research and aligned with Arizona Early
                Learning Standards. We combine structured curriculum with child-led exploration,
                ensuring that learning is always joyful, meaningful, and developmentally appropriate.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Heart, text: "Every child is seen, valued, and celebrated", color: "oklch(0.65 0.18 25)" },
                  { icon: Award, text: "Excellence in early childhood education", color: "oklch(0.38 0.18 295)" },
                  { icon: Users, text: "Partnership with families at every step", color: "oklch(0.65 0.13 195)" },
                ].map(({ icon: Icon, text, color }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <span className="font-medium text-gray-800" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] mt-6 lg:mt-0">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/c4jnKZGhcYZ8ggbx8aFz7k/hero_elc-UEYarv9h29H8xRXqcDtLva.webp"
                alt="Tucson Tots ELC classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Deep Dive */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "oklch(0.97 0.02 295)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/c4jnKZGhcYZ8ggbx8aFz7k/founder_section-hi8CQhB7dQtU9GzjZMBeRw.webp"
                  alt="Founder of Tucson Tots Early Learning Center"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span
                className="badge-pill mb-5 inline-block"
                style={{ backgroundColor: "oklch(0.65 0.13 195)", color: "white" }}
              >
                Meet Our Founder
              </span>
              <h2
                className="text-3xl md:text-4xl font-black mb-2"
                style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
              >
                Our Founder &amp; Director
              </h2>
              <p
                className="text-lg font-medium mb-6"
                style={{ color: "oklch(0.65 0.13 195)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Founder &amp; Director, Tucson Tots ELC
              </p>
              <p className="text-gray-700 leading-relaxed mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Tucson Tots was founded with a vision that has grown into a full early
                learning center. As a parent and early childhood advocate, our founder
                built this center from the ground up — designing every space, curating every
                curriculum element, and assembling a team that shares her deep commitment
                to children's wellbeing.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Her philosophy is simple: children learn best when they feel safe, loved,
                and free to explore. Under her leadership, Tucson Tots ELC has become a
                trusted name in Tucson's early childhood education community.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "CPR & First Aid Certified",
                  "Background Checked",
                  "Early Childhood Education",
                  "Play-Based Learning",
                  "Nutrition-Focused",
                  "Community Advocate",
                ].map((cred) => (
                  <div key={cred} className="flex items-center gap-2">
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "oklch(0.65 0.13 195)" }}
                    />
                    <span className="text-sm text-gray-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {cred}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-black mb-4"
              style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Safety First",
                desc: "Every decision we make prioritizes the physical and emotional safety of every child in our care.",
                color: "oklch(0.38 0.18 295)",
                bg: "oklch(0.97 0.02 295)",
              },
              {
                title: "Joyful Learning",
                desc: "We believe learning should be fun. Play is the work of childhood, and we take it seriously.",
                color: "oklch(0.65 0.18 25)",
                bg: "oklch(0.97 0.04 25)",
              },
              {
                title: "Family Partnership",
                desc: "Parents are our partners. We communicate openly, involve families, and celebrate every milestone together.",
                color: "oklch(0.65 0.13 195)",
                bg: "oklch(0.97 0.03 195)",
              },
            ].map(({ title, desc, color, bg }) => (
              <div key={title} className="rounded-2xl p-8 text-center" style={{ backgroundColor: bg }}>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: color }}
                >
                  <span
                    className="text-2xl text-white font-black"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {title[0]}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
                >
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.38 0.18 295)" }}>
        <div className="container text-center">
          <h2
            className="text-2xl md:text-3xl font-black text-white mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Come See Our Center in Person
          </h2>
          <p
            className="text-white/80 mb-8 text-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            We'd love to show you around and answer all your questions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-base transition-all hover:scale-105"
            style={{
              backgroundColor: "oklch(0.65 0.18 25)",
              color: "white",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Schedule a Tour <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
