/*
 * TUCSON TOTS ELC — NUTRITION PAGE
 * Fixes: Increased hero top padding, responsive grid improvements
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Nutrition() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24" style={{ backgroundColor: "oklch(0.62 0.15 145)" }}>
        <div className="container text-center">
          <span
            className="badge-pill mb-5 inline-block text-white"
            style={{ backgroundColor: "oklch(0.50 0.15 145)" }}
          >
            Nutrition Program
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Real Food for Growing Minds
          </h1>
          <p
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto px-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            We believe nutrition is foundational to learning. Every meal at Tucson Tots ELC
            is crafted with whole, nutrient-dense ingredients.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-center">
            <div>
              <span
                className="badge-pill mb-5 inline-block"
                style={{ backgroundColor: "oklch(0.97 0.03 145)", color: "oklch(0.45 0.15 145)" }}
              >
                Our Philosophy
              </span>
              <h2
                className="text-3xl md:text-4xl font-black mb-6"
                style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
              >
                Nourishing the Whole Child
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                What children eat directly impacts how they learn, feel, and grow. At Tucson Tots
                ELC, we take nutrition as seriously as we take education. Every meal and snack is
                prepared fresh daily using whole, unprocessed ingredients — free from seed oils,
                artificial additives, and refined sugars.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Our nutrition program is designed to support brain development, stable energy levels,
                and healthy growth — giving children the fuel they need to explore, learn, and thrive
                throughout the day.
              </p>
              <div className="space-y-4">
                {[
                  { text: "100% whole-food ingredients, no processed foods", color: "oklch(0.62 0.15 145)" },
                  { text: "Seed oil-free cooking — we use butter, olive oil, and coconut oil", color: "oklch(0.65 0.18 25)" },
                  { text: "No artificial colors, flavors, or preservatives", color: "oklch(0.65 0.13 195)" },
                  { text: "Allergy-aware menus with parent communication", color: "oklch(0.38 0.18 295)" },
                  { text: "Fresh fruits and vegetables served daily", color: "oklch(0.62 0.15 145)" },
                  { text: "Meals prepared fresh each morning on-site", color: "oklch(0.65 0.18 25)" },
                ].map(({ text, color }) => (
                  <div key={text} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color }} />
                    <span className="text-gray-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] mt-6 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&q=80"
                alt="Healthy meals at Tucson Tots ELC"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sample Menu */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "oklch(0.97 0.03 145)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-black mb-4"
              style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
            >
              Sample Weekly Menu
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              A glimpse at the wholesome, delicious meals our children enjoy each week.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                day: "Monday",
                breakfast: "Oatmeal with berries & honey",
                lunch: "Chicken & veggie soup with sourdough",
                snack: "Apple slices with almond butter",
              },
              {
                day: "Tuesday",
                breakfast: "Scrambled eggs & fruit",
                lunch: "Turkey & avocado wraps with cucumber",
                snack: "Cheese & whole-grain crackers",
              },
              {
                day: "Wednesday",
                breakfast: "Whole-grain pancakes with maple syrup",
                lunch: "Pasta with marinara & ground beef",
                snack: "Carrot sticks with hummus",
              },
              {
                day: "Thursday",
                breakfast: "Yogurt parfait with granola & berries",
                lunch: "Baked salmon with rice & broccoli",
                snack: "Banana & sunflower seed butter",
              },
              {
                day: "Friday",
                breakfast: "Smoothie bowls with fresh fruit",
                lunch: "Bean & cheese quesadillas with salsa",
                snack: "Seasonal fruit salad",
              },
            ].map(({ day, breakfast, lunch, snack }) => (
              <div key={day} className="bg-white rounded-2xl p-5 shadow-sm border border-green-100">
                <h3
                  className="font-bold text-center mb-4 pb-2 border-b border-green-100"
                  style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.45 0.15 145)" }}
                >
                  {day}
                </h3>
                <div className="space-y-3">
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                      style={{ color: "oklch(0.65 0.18 25)", fontFamily: "'Nunito', sans-serif" }}
                    >
                      Breakfast
                    </p>
                    <p className="text-xs text-gray-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {breakfast}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                      style={{ color: "oklch(0.38 0.18 295)", fontFamily: "'Nunito', sans-serif" }}
                    >
                      Lunch
                    </p>
                    <p className="text-xs text-gray-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {lunch}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                      style={{ color: "oklch(0.62 0.15 145)", fontFamily: "'Nunito', sans-serif" }}
                    >
                      Snack
                    </p>
                    <p className="text-xs text-gray-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {snack}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.62 0.15 145)" }}>
        <div className="container text-center">
          <h2
            className="text-2xl md:text-3xl font-black text-white mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Questions About Our Nutrition Program?
          </h2>
          <p
            className="text-white/80 mb-8 text-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            We're happy to discuss dietary needs, allergies, and our meal preparation process.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white font-bold transition-all hover:scale-105"
            style={{ color: "oklch(0.62 0.15 145)", fontFamily: "'Nunito', sans-serif" }}
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
