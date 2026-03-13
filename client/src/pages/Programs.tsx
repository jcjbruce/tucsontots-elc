/*
 * TUCSON TOTS ELC — PROGRAMS PAGE
 * Fixes: Increased hero top padding, responsive grid improvements
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, Clock, BookOpen, Heart } from "lucide-react";

const programs = [
  {
    title: "Infant & Toddler Care",
    ages: "6 Weeks – 18 Months",
    color: "oklch(0.65 0.18 25)",
    bg: "oklch(0.97 0.04 25)",
    icon: Heart,
    description:
      "Our infant and toddler program provides a nurturing, responsive environment where the youngest learners feel safe, loved, and stimulated. Our educators follow each baby's individual schedule while providing rich sensory experiences that support brain development.",
    features: [
      "Low 3:1 infant-to-educator ratio",
      "Individual feeding and sleep schedules",
      "Sensory play and tummy time",
      "Language-rich environment",
      "Daily parent communication updates",
    ],
    schedule: "Full-day & Part-day options",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/c4jnKZGhcYZ8ggbx8aFz7k/art_activity-e5ZotZSoMyriozcjXeaaVS.webp",
  },
  {
    title: "Preschool Program",
    ages: "2 – 3 Years",
    color: "oklch(0.38 0.18 295)",
    bg: "oklch(0.97 0.02 295)",
    icon: BookOpen,
    description:
      "Our toddler preschool program builds on natural curiosity through play-based learning. Children explore art, music, movement, and early literacy in a warm, structured environment that fosters independence and social skills.",
    features: [
      "Play-based curriculum aligned with AZ standards",
      "Art, music, and movement daily",
      "Early literacy and numeracy foundations",
      "Social-emotional learning focus",
      "Outdoor play and nature exploration",
    ],
    schedule: "Full-day & Part-day options",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/c4jnKZGhcYZ8ggbx8aFz7k/storytime-NEp368vqsKVavE2Bhop2JG.webp",
  },
  {
    title: "Pre-K Readiness",
    ages: "3 – 5 Years",
    color: "oklch(0.65 0.13 195)",
    bg: "oklch(0.97 0.03 195)",
    icon: BookOpen,
    description:
      "Our Pre-K Readiness program prepares children for kindergarten success through a rich blend of structured learning and creative exploration. Children develop the academic, social, and emotional skills they need to thrive in school.",
    features: [
      "Kindergarten readiness curriculum",
      "Phonological awareness and early reading",
      "Math concepts through hands-on activities",
      "Science exploration and discovery",
      "Social skills and conflict resolution",
    ],
    schedule: "Full-day program",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/c4jnKZGhcYZ8ggbx8aFz7k/hero_elc-UEYarv9h29H8xRXqcDtLva.webp",
  },
  {
    title: "After-School Care",
    ages: "5 – 6 Years",
    color: "oklch(0.62 0.15 145)",
    bg: "oklch(0.97 0.03 145)",
    icon: Clock,
    description:
      "A safe, enriching after-school environment for kindergarteners. Children enjoy homework support, creative activities, outdoor play, and healthy snacks in a relaxed, home-like setting.",
    features: [
      "Homework help and reading support",
      "Creative arts and crafts",
      "Outdoor play and physical activity",
      "Healthy whole-food snacks",
      "Flexible pickup times",
    ],
    schedule: "After school until 6:00 PM",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/c4jnKZGhcYZ8ggbx8aFz7k/outdoor_play-iA34YrRzpNCbssizGhQTVE.webp",
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24" style={{ backgroundColor: "oklch(0.38 0.18 295)" }}>
        <div className="container text-center">
          <span
            className="badge-pill mb-5 inline-block text-white"
            style={{ backgroundColor: "oklch(0.52 0.16 295)" }}
          >
            Our Programs
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Programs for Every Stage
          </h1>
          <p
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto px-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            From infants to pre-kindergarteners, we offer thoughtfully designed programs
            that meet children exactly where they are.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 md:gap-20">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={program.title}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center"
                >
                  {/* Content */}
                  <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: program.bg }}
                      >
                        <Icon className="w-6 h-6" style={{ color: program.color }} />
                      </div>
                      <span
                        className="badge-pill"
                        style={{ backgroundColor: program.bg, color: program.color }}
                      >
                        Ages {program.ages}
                      </span>
                    </div>
                    <h2
                      className="text-2xl md:text-3xl font-black mb-4"
                      style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
                    >
                      {program.title}
                    </h2>
                    <p
                      className="text-gray-700 leading-relaxed mb-6"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {program.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2
                            className="w-5 h-5 flex-shrink-0 mt-0.5"
                            style={{ color: program.color }}
                          />
                          <span className="text-gray-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 mb-6">
                      <Clock className="w-4 h-4" style={{ color: program.color }} />
                      <span
                        className="text-sm font-medium text-gray-600"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {program.schedule}
                      </span>
                    </div>
                    <Link
                      href="/enrollment"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold transition-all hover:scale-105"
                      style={{ backgroundColor: program.color, fontFamily: "'Nunito', sans-serif" }}
                    >
                      Enroll in This Program <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Image */}
                  <div
                    className={`rounded-3xl overflow-hidden shadow-xl aspect-[4/3] ${
                      isEven ? "order-2" : "order-2 lg:order-1"
                    }`}
                  >
                    <img
                      src={program.img}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "oklch(0.97 0.02 295)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-black mb-4"
              style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
            >
              A Typical Day at Tucson Tots ELC
            </h2>
            <p
              className="text-gray-600 max-w-xl mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Our daily schedule provides the perfect balance of structure and freedom.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            {[
              { time: "7:00 – 8:30 AM", activity: "Morning Arrival & Free Play", color: "oklch(0.38 0.18 295)" },
              { time: "8:30 – 9:00 AM", activity: "Morning Circle & Calendar Time", color: "oklch(0.65 0.18 25)" },
              { time: "9:00 – 10:00 AM", activity: "Structured Learning Activities", color: "oklch(0.65 0.13 195)" },
              { time: "10:00 – 10:30 AM", activity: "Snack Time (Whole Foods)", color: "oklch(0.62 0.15 145)" },
              { time: "10:30 – 11:30 AM", activity: "Outdoor Play & Gross Motor", color: "oklch(0.65 0.18 25)" },
              { time: "11:30 AM – 12:30 PM", activity: "Lunch (Fresh, Whole-Food Meal)", color: "oklch(0.38 0.18 295)" },
              { time: "12:30 – 2:30 PM", activity: "Rest / Quiet Time", color: "oklch(0.65 0.13 195)" },
              { time: "2:30 – 3:30 PM", activity: "Creative Arts & Exploration", color: "oklch(0.62 0.15 145)" },
              { time: "3:30 – 4:00 PM", activity: "Story Time & Literacy", color: "oklch(0.65 0.18 25)" },
              { time: "4:00 – 6:00 PM", activity: "Afternoon Free Play & Pickup", color: "oklch(0.38 0.18 295)" },
            ].map(({ time, activity, color }) => (
              <div
                key={time}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-3 border-b border-gray-200 last:border-0"
              >
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 hidden sm:block" style={{ backgroundColor: color }} />
                <span
                  className="text-sm font-semibold sm:w-44 flex-shrink-0"
                  style={{ color, fontFamily: "'Nunito', sans-serif" }}
                >
                  {time}
                </span>
                <span className="text-gray-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {activity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.65 0.13 195)" }}>
        <div className="container text-center">
          <h2
            className="text-2xl md:text-3xl font-black text-white mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Find the Right Program for Your Child
          </h2>
          <p
            className="text-white/80 mb-8 text-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Our team is happy to help you choose the best fit for your family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/enrollment"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white font-bold transition-all hover:scale-105"
              style={{ color: "oklch(0.65 0.13 195)", fontFamily: "'Nunito', sans-serif" }}
            >
              Enroll Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl border-2 border-white text-white font-bold transition-all hover:bg-white/10"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
