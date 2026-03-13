/*
 * TUCSON TOTS ELC — HOME PAGE
 * Design: Joyful Bright Academy
 *   — Schoolbell chalk font for section headings (matches original site's hand-lettered feel)
 *   — Bold color-blocked sections (violet, teal, pink, green alternating)
 *   — Colorful ABC alphabet graphic in hero (signature element from original)
 *   — Single-testimonial slider with prev/next arrows (matches original)
 *   — Clickable accordion for Safety/Happiness/Education
 *   — YouTube video embeds in Parent Resources
 *   — Photo gallery on green background
 *   — No founder name; no fake phone number
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Star,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Palette,
  Sun,
  Music,
  Shield,
  Heart,
  Award,
  Users,
  Leaf,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Play,
} from "lucide-react";

// ─── Intersection Observer hook ───────────────────────────────────────────────
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ─── Counter animation hook ───────────────────────────────────────────────────
function useCounter(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return { count, ref };
}

// ─── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({
  icon: Icon,
  title,
  description,
  circleColor,
  delay = 0,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  circleColor: string;
  delay?: number;
}) {
  const ref = useFadeUp();
  return (
    <div
      ref={ref}
      className="fade-up group bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
        style={{ backgroundColor: circleColor }}
      >
        <Icon className="w-9 h-9 text-white" />
      </div>
      <h3
        className="font-black text-xl mb-3"
        style={{ fontFamily: "'Schoolbell', cursive", color: "oklch(0.25 0.15 295)", fontSize: "1.35rem" }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed text-gray-600 mb-4"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {description}
      </p>
      <Link
        href="/programs"
        className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
        style={{ color: circleColor, fontFamily: "'DM Sans', sans-serif" }}
      >
        More Info <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

// ─── Stat Block ───────────────────────────────────────────────────────────────
function StatBlock({
  target,
  suffix,
  label,
  circleColor,
}: {
  target: number;
  suffix: string;
  label: string;
  circleColor: string;
}) {
  const { count, ref } = useCounter(target);
  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div
        className="w-28 h-28 rounded-full flex flex-col items-center justify-center mb-3 shadow-lg"
        style={{ backgroundColor: circleColor }}
      >
        <span
          className="text-3xl font-black text-white leading-none"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {count}{suffix}
        </span>
      </div>
      <span
        className="text-sm font-bold text-gray-300 max-w-[120px] leading-tight"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── Testimonial Slider ────────────────────────────────────────────────────────
const testimonials = [
  {
    quote: "Tucson Tots has been such a gift for our family. Our daughter feels right at home, and we've seen her confidence and language skills grow so much in just a few months.",
    name: "Maria L.",
    role: "Parent of a 3-year-old",
  },
  {
    quote: "It's the perfect mix of play, structure, and love. We trust the team completely, and our son looks forward to going every single day.",
    name: "James A.",
    role: "Parent of a 4-year-old",
  },
  {
    quote: "The nutrition program alone sold us — real, whole foods every day. But it's the genuine care and the learning environment that keeps us coming back year after year.",
    name: "Sofia R.",
    role: "Parent of twins, ages 2 & 4",
  },
  {
    quote: "We toured several centers before choosing Tucson Tots. The moment we walked in, we knew this was the right place. The educators are warm, knowledgeable, and truly invested in each child.",
    name: "David & Priya K.",
    role: "Parents of a 2-year-old",
  },
];

function TestimonialSlider() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const t = testimonials[idx];
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="flex justify-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-6 h-6 fill-amber-300 text-amber-300" />
        ))}
      </div>
      <p
        className="text-xl md:text-2xl text-white leading-relaxed mb-8 italic min-h-[96px]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        "{t.quote}"
      </p>
      <p
        className="text-2xl font-black text-white mb-1"
        style={{ fontFamily: "'Schoolbell', cursive", fontSize: "1.6rem" }}
      >
        {t.name}
      </p>
      <p className="text-white/70 text-sm mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {t.role}
      </p>
      <div className="flex justify-center gap-3">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-lg border-2 border-white/50 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="w-10 h-10 rounded-lg border-2 border-white/50 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="w-2.5 h-2.5 rounded-full transition-all"
            style={{ backgroundColor: i === idx ? "white" : "rgba(255,255,255,0.35)" }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Tab data ─────────────────────────────────────────────────────────────────
const environmentTabs = [
  {
    id: "indoor",
    label: "Indoor Play Areas",
    icon: BookOpen,
    color: "oklch(0.62 0.22 355)",
    title: "Indoor Play Areas",
    description:
      "Our classrooms are thoughtfully designed learning environments with dedicated zones for dramatic play, sensory exploration, building and construction, art creation, and quiet reading. Every corner is purposefully arranged to spark curiosity and support developmental milestones.",
    features: [
      "Age-appropriate manipulatives and open-ended toys",
      "Sensory bins and science discovery tables",
      "Dramatic play and role-play areas",
      "Cozy reading nooks with diverse book collections",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/c4jnKZGhcYZ8ggbx8aFz7k/hero_elc-UEYarv9h29H8xRXqcDtLva.webp",
  },
  {
    id: "creative",
    label: "Creative Exploration",
    icon: Palette,
    color: "oklch(0.65 0.13 195)",
    title: "Creative Exploration",
    description:
      "Art is central to how young children make sense of the world. Our dedicated art studio provides children with daily opportunities to paint, sculpt, draw, and create — building fine motor skills, self-expression, and a lifelong love of creativity.",
    features: [
      "Daily painting and drawing activities",
      "Sensory art with natural materials",
      "Music, movement, and rhythm exploration",
      "Child-led creative projects on display",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/c4jnKZGhcYZ8ggbx8aFz7k/art_activity-e5ZotZSoMyriozcjXeaaVS.webp",
  },
  {
    id: "calm",
    label: "Calm Corners",
    icon: Sun,
    color: "oklch(0.65 0.18 25)",
    title: "Calm Corners & Rest Spaces",
    description:
      "Balance is essential. Our calm corners and rest spaces give children a quiet retreat to recharge, self-regulate, and enjoy independent reading or gentle play. These spaces are designed with soft textures, warm lighting, and cozy seating.",
    features: [
      "Soft seating and sensory-friendly materials",
      "Quiet reading and reflection areas",
      "Mindfulness and breathing activities",
      "Weather-appropriate outdoor relaxation",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/c4jnKZGhcYZ8ggbx8aFz7k/outdoor_play-iA34YrRzpNCbssizGhQTVE.webp",
  },
  {
    id: "routines",
    label: "Daily Routines",
    icon: Music,
    color: "oklch(0.62 0.15 145)",
    title: "Daily Routines & Rhythms",
    description:
      "Consistent daily routines give children a sense of security and belonging. Our structured yet flexible schedule weaves together learning, play, meals, rest, and outdoor time in a rhythm that supports healthy development and emotional wellbeing.",
    features: [
      "Daily interactive read-alouds and story time",
      "Songs, fingerplays, and morning circle",
      "Structured learning and free play balance",
      "Whole-food meals and healthy snack times",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/c4jnKZGhcYZ8ggbx8aFz7k/storytime-NEp368vqsKVavE2Bhop2JG.webp",
  },
];

// ─── Accordion Item ────────────────────────────────────────────────────────────
function AccordionItem({
  icon: Icon,
  title,
  color,
  content,
  isOpen,
  onToggle,
}: {
  icon: React.ElementType;
  title: string;
  color: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-white font-black text-lg transition-all"
        style={{ backgroundColor: color, fontFamily: "'Schoolbell', cursive", fontSize: "1.3rem" }}
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-white flex-shrink-0" />
          {title}
        </div>
        <ChevronDown
          className="w-5 h-5 text-white transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {isOpen && (
        <div
          className="px-6 py-5 text-sm leading-relaxed"
          style={{ backgroundColor: `${color}18`, color: "oklch(0.25 0.15 295)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {content}
        </div>
      )}
    </div>
  );
}

// ─── YouTube Video Card ────────────────────────────────────────────────────────
function YouTubeCard({
  videoId,
  title,
  description,
  accentColor,
}: {
  videoId: string;
  title: string;
  description: string;
  accentColor: string;
}) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="relative aspect-video bg-gray-900">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 text-white fill-white ml-1" />
              </div>
            </button>
          </>
        )}
      </div>
      <div className="p-5 bg-white">
        <h3
          className="font-black text-base mb-2"
          style={{ fontFamily: "'Schoolbell', cursive", color: accentColor, fontSize: "1.15rem" }}
        >
          {title}
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
      </div>
    </div>
  );
}

// ─── Gallery images ────────────────────────────────────────────────────────────
const galleryImages = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/c4jnKZGhcYZ8ggbx8aFz7k/art_activity-e5ZotZSoMyriozcjXeaaVS.webp",
    alt: "Art activity at Tucson Tots ELC",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/c4jnKZGhcYZ8ggbx8aFz7k/storytime-NEp368vqsKVavE2Bhop2JG.webp",
    alt: "Story time at Tucson Tots ELC",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/c4jnKZGhcYZ8ggbx8aFz7k/outdoor_play-iA34YrRzpNCbssizGhQTVE.webp",
    alt: "Outdoor play at Tucson Tots ELC",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/c4jnKZGhcYZ8ggbx8aFz7k/hero_elc-UEYarv9h29H8xRXqcDtLva.webp",
    alt: "Classroom at Tucson Tots ELC",
  },
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
    alt: "Children learning together",
  },
  {
    src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&q=80",
    alt: "Creative play at early learning center",
  },
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80",
    alt: "Children reading together",
  },
  {
    src: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&q=80",
    alt: "Healthy meal at Tucson Tots",
  },
];

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
export default function Home() {
  const [activeTab, setActiveTab] = useState("indoor");
  const [openAccordion, setOpenAccordion] = useState<string>("Safety");
  const heroRef = useFadeUp();
  const whyRef = useFadeUp();
  const founderRef = useFadeUp();

  const activeEnv = environmentTabs.find((t) => t.id === activeTab)!;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/c4jnKZGhcYZ8ggbx8aFz7k/hero_elc-UEYarv9h29H8xRXqcDtLva.webp"
            alt="Tucson Tots Early Learning Center classroom"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, oklch(0.15 0.18 295 / 0.88) 0%, oklch(0.20 0.18 295 / 0.72) 55%, oklch(0.20 0.15 295 / 0.30) 100%)",
            }}
          />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-24 right-[42%] w-20 h-20 rounded-full opacity-20 hidden lg:block"
          style={{ backgroundColor: "oklch(0.62 0.22 355)" }} />
        <div className="absolute bottom-32 right-[38%] w-14 h-14 rounded-full opacity-25 hidden lg:block"
          style={{ backgroundColor: "oklch(0.78 0.16 65)" }} />

        <div className="container relative z-10 py-20 md:py-28">
          {/* Hero: left-aligned layout for immediate visibility */}
          <div className="flex flex-col items-start text-left">
            <div className="max-w-2xl" ref={heroRef}>
              <div>
                {/* Enrollment badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
                  style={{
                    backgroundColor: "oklch(0.65 0.18 25)",
                    color: "white",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Now Enrolling — Ages 6 Weeks to 5 Years
                </div>

                <h1
                  className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-tight mb-6"
                  style={{ fontFamily: "'Nunito', sans-serif", textShadow: "0 4px 32px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  Where Little
                  <br />
                  <span style={{ color: "oklch(0.78 0.16 65)" }}>
                    Minds Bloom
                  </span>
                </h1>

                <p
                  className="text-lg md:text-xl text-white leading-relaxed mb-8 max-w-2xl mx-auto"
                  style={{ fontFamily: "'DM Sans', sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
                >
                  Tucson Tots Early Learning Center offers a vibrant, play-based education
                  where every child is seen, celebrated, and empowered to grow — in the heart
                  of Tucson, Arizona.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <Link
                    href="/enrollment"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                    style={{
                      backgroundColor: "oklch(0.65 0.18 25)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Schedule a Tour <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/programs"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-base border-2 border-white text-white hover:bg-white/10 transition-all"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Our Programs
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4 mt-8">
                  {[
                    { icon: Shield, text: "Licensed & Certified" },
                    { icon: Award, text: "CPR Trained Staff" },
                    { icon: Leaf, text: "Whole-Food Meals" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-amber-300" />
                      <span className="text-sm text-white/90" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── PURPLE BANNER ────────────────────────────────────────────────── */}
      <section
        className="py-6 text-center"
        style={{ backgroundColor: "oklch(0.38 0.18 295)" }}
      >
        <p
          className="text-xl md:text-2xl font-black text-white"
          style={{ fontFamily: "'Schoolbell', cursive", fontSize: "1.5rem" }}
        >
          Nurturing{" "}
          <span style={{ color: "oklch(0.78 0.16 65)" }}>Childcare</span>
          {" "}for Preschoolers
        </p>
      </section>

      {/* ── FEATURE CARDS ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-5"
          style={{ backgroundColor: "oklch(0.62 0.22 355)" }} />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-5"
          style={{ backgroundColor: "oklch(0.65 0.13 195)" }} />

        <div className="container relative z-10">
          <div className="text-center mb-14">
            <span className="badge-pill mb-4 inline-block"
              style={{ backgroundColor: "oklch(0.97 0.02 295)", color: "oklch(0.38 0.18 295)" }}>
              What We Offer
            </span>
            <h2
              className="text-4xl md:text-5xl font-black mb-2"
              style={{ fontFamily: "'Schoolbell', cursive", color: "oklch(0.25 0.15 295)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              A Complete Early Learning Experience
            </h2>
            <div className="w-16 h-1 rounded-full mx-auto mt-4 mb-5"
              style={{ backgroundColor: "oklch(0.65 0.18 25)" }} />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Our center provides everything young learners need to thrive — from structured
              curriculum to joyful play, nutritious meals to caring educators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon={BookOpen}
              title="Preschool Program"
              description="Our play-based preschool curriculum blends structured learning with child-led exploration, building the cognitive and social foundations children need for kindergarten success."
              circleColor="oklch(0.65 0.13 195)"
              delay={0}
            />
            <FeatureCard
              icon={Users}
              title="Home Environment"
              description="We provide a warm, safe, and childproofed environment filled with engaging activities, cozy spaces, and healthy routines that make every child feel at home."
              circleColor="oklch(0.62 0.22 355)"
              delay={100}
            />
            <FeatureCard
              icon={Heart}
              title="Daily Enrichment"
              description="From art and music to outdoor play and story time, your child will explore, socialize, and thrive every single day."
              circleColor="oklch(0.65 0.18 25)"
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.02 295)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-center">
            <div ref={whyRef} className="fade-up">
              <span className="badge-pill mb-5 inline-block"
                style={{ backgroundColor: "oklch(0.38 0.18 295)", color: "white" }}>
                Why Tucson Tots ELC
              </span>
              <h2
                className="text-4xl md:text-5xl font-black mb-3 leading-tight"
                style={{ fontFamily: "'Schoolbell', cursive", color: "oklch(0.25 0.15 295)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Why Choose{" "}
                <span style={{ color: "oklch(0.65 0.13 195)" }}>Tucson Tots</span>
              </h2>
              <div className="w-14 h-1.5 rounded-full mb-6"
                style={{ backgroundColor: "oklch(0.65 0.13 195)" }} />
              <p className="text-gray-700 leading-relaxed mb-8 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Tucson Tots Early Learning Center was founded on the belief that every child
                deserves a joyful, stimulating, and safe environment where they can grow at
                their own pace. We combine evidence-based early childhood education with the
                warmth and personal attention that families in Tucson have come to trust.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  { text: "Play-based curriculum aligned with Arizona Early Learning Standards", color: "oklch(0.38 0.18 295)" },
                  { text: "Low educator-to-child ratios for personalized attention", color: "oklch(0.65 0.18 25)" },
                  { text: "Whole-food, seed oil-free meals prepared fresh daily", color: "oklch(0.65 0.13 195)" },
                  { text: "Secure, licensed, and fully childproofed facility", color: "oklch(0.62 0.15 145)" },
                  { text: "CPR & First Aid certified educators and staff", color: "oklch(0.62 0.22 355)" },
                  { text: "Background-checked team members", color: "oklch(0.65 0.18 25)" },
                ].map(({ text, color }) => (
                  <li key={text} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color }} />
                    <span className="text-gray-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>{text}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold transition-all hover:scale-105"
                style={{ backgroundColor: "oklch(0.38 0.18 295)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Learn More About Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/c4jnKZGhcYZ8ggbx8aFz7k/storytime-NEp368vqsKVavE2Bhop2JG.webp"
                  alt="Teacher reading to children at Tucson Tots ELC"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-5 max-w-[200px]">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 leading-snug" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  "Loved by Tucson families since day one."
                </p>
                <p className="text-xs font-bold mt-1" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.38 0.18 295)" }}>
                  — Local Parent
                </p>
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-60 hidden lg:block"
                style={{ backgroundColor: "oklch(0.78 0.16 65)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET OUR FOUNDER — teal color block ──────────────────────────── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.65 0.13 195)" }}
      >
        <div className="absolute top-8 right-8 w-40 h-40 rounded-full opacity-20"
          style={{ backgroundColor: "oklch(0.50 0.13 195)" }} />
        <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full opacity-20"
          style={{ backgroundColor: "oklch(0.50 0.13 195)" }} />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/c4jnKZGhcYZ8ggbx8aFz7k/founder_section-hi8CQhB7dQtU9GzjZMBeRw.webp"
                  alt="Founder of Tucson Tots Early Learning Center"
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute top-6 -right-4 bg-white rounded-2xl shadow-xl p-4 hidden lg:block">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" style={{ color: "oklch(0.78 0.16 65)" }} />
                  <span className="text-xs font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.25 0.15 295)" }}>
                    CPR Certified
                  </span>
                </div>
              </div>
            </div>

            <div ref={founderRef} className="fade-up order-1 lg:order-2">
              <span className="badge-pill mb-5 inline-block text-white"
                style={{ backgroundColor: "oklch(0.50 0.13 195)" }}>
                Our Leadership
              </span>
              <h2
                className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight"
                style={{ fontFamily: "'Schoolbell', cursive", fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Meet Our Director
              </h2>
              <div className="w-14 h-1.5 rounded-full mb-4 bg-white/50" />
              <p className="text-lg font-medium mb-6"
                style={{ color: "oklch(0.92 0.04 195)", fontFamily: "'DM Sans', sans-serif" }}>
                Founder &amp; Director, Tucson Tots ELC
              </p>
              <p className="text-white/90 leading-relaxed mb-5 text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Tucson Tots ELC was founded by <strong className="text-white">Ms. Elena Rivera</strong>, a
                passionate early childhood educator with over a decade of experience in child
                development. She built this center on the belief that every child deserves a
                joyful, stimulating, and safe environment — and that families deserve a partner
                they can truly trust.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "M.Ed. Early Childhood Education",
                  "CPR & First Aid Certified",
                  "Background Checked",
                  "Play-Based Learning Focus",
                  "Clean, childproofed setting",
                  "Whole-food, seed oil-free meals",
                ].map((cred) => (
                  <div key={cred} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-sm text-white/90" style={{ fontFamily: "'DM Sans', sans-serif" }}>{cred}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-105 bg-white"
                style={{ color: "oklch(0.50 0.13 195)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Our Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEARNING ENVIRONMENT TABS ─────────────────────────────────────── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-5"
          style={{ backgroundColor: "oklch(0.62 0.22 355)" }} />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="badge-pill mb-4 inline-block"
              style={{ backgroundColor: "oklch(0.97 0.04 25)", color: "oklch(0.65 0.18 25)" }}>
              Our Learning Environment
            </span>
            <h2
              className="text-4xl md:text-5xl font-black mb-2"
              style={{ fontFamily: "'Schoolbell', cursive", color: "oklch(0.25 0.15 295)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Our Learning Environment
            </h2>
            <div className="w-16 h-1.5 rounded-full mx-auto mt-3 mb-5"
              style={{ backgroundColor: "oklch(0.62 0.22 355)" }} />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Every space in our center is intentionally designed to support a different
              dimension of child development — from creative expression to physical movement.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {environmentTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    backgroundColor: isActive ? tab.color : "oklch(0.96 0.01 270)",
                    color: isActive ? "white" : "oklch(0.45 0.03 270)",
                    boxShadow: isActive ? `0 4px 14px ${tab.color}50` : "none",
                    transform: isActive ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            className="rounded-3xl overflow-hidden shadow-xl"
            style={{ backgroundColor: activeEnv.color }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-10">
                <h3
                  className="text-3xl font-black text-white mb-4"
                  style={{ fontFamily: "'Schoolbell', cursive", fontSize: "2rem" }}
                >
                  {activeEnv.title}
                </h3>
                <p className="text-white/90 leading-relaxed mb-6 text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {activeEnv.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {activeEnv.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-white" />
                      <span className="text-white/90" style={{ fontFamily: "'DM Sans', sans-serif" }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-105 bg-white"
                  style={{ color: activeEnv.color, fontFamily: "'DM Sans', sans-serif" }}
                >
                  More Info <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="aspect-video lg:aspect-auto min-h-[280px]">
                <img
                  src={activeEnv.image}
                  alt={activeEnv.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS — dark violet ───────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.25 0.15 295)" }}>
        <div className="container">
          <div className="text-center mb-6">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Loved by Local Families in Tucson
            </p>
            <h2
              className="text-4xl font-black text-white mb-2"
              style={{ fontFamily: "'Schoolbell', cursive", fontSize: "2.5rem" }}
            >
              Families Love Tucson Tots
            </h2>
            <div className="w-16 h-1.5 rounded-full mx-auto mt-3"
              style={{ backgroundColor: "oklch(0.78 0.16 65)" }} />
            <p className="text-white/70 text-lg mt-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Our commitment to excellence is reflected in every number.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mt-10">
            <StatBlock target={100} suffix="%" label="Play-Based Curriculum" circleColor="oklch(0.65 0.13 195)" />
            <StatBlock target={5} suffix=":1" label="Child-to-Educator Ratio" circleColor="oklch(0.62 0.22 355)" />
            <StatBlock target={100} suffix="%" label="Background-Checked Staff" circleColor="oklch(0.65 0.18 25)" />
            <StatBlock target={5} suffix="★" label="Parent Satisfaction" circleColor="oklch(0.62 0.15 145)" />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SLIDER — hot pink ───────────────────────────────── */}
      <section className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.62 0.22 355)" }}>
        <div className="absolute top-8 left-8 w-32 h-32 rounded-full opacity-20"
          style={{ backgroundColor: "oklch(0.50 0.22 355)" }} />
        <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full opacity-20"
          style={{ backgroundColor: "oklch(0.50 0.22 355)" }} />

        <div className="container relative z-10">
          <div className="text-center mb-10">
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-2"
              style={{ fontFamily: "'Schoolbell', cursive", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              What The Parents Say
            </h2>
            <div className="w-16 h-1.5 rounded-full mx-auto mt-3 bg-white/50" />
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* ── YOUR CHILDREN — white with accordion ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-start">
            <div>
              <h2
                className="text-4xl md:text-5xl font-black mb-3 leading-tight"
                style={{ fontFamily: "'Schoolbell', cursive", color: "oklch(0.25 0.15 295)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Your Children
              </h2>
              <div className="w-14 h-1.5 rounded-full mb-6"
                style={{ backgroundColor: "oklch(0.38 0.18 295)" }} />
              <p className="text-gray-700 font-semibold leading-relaxed mb-5 text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                At Tucson Tots, we believe childhood should be full of wonder, warmth, and
                discovery. Our small-group program ensures that every child receives the
                care, attention, and encouragement they need to thrive.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                We focus on nurturing the whole child — building confidence, curiosity, and
                a love for learning through play, connection, and consistent daily rhythms.
              </p>
              <ul className="space-y-3">
                {[
                  "Safe, cozy, childproofed learning environment",
                  "Small groups for personalized care",
                  "Daily play-based activities that support development",
                  "Thoughtfully prepared meals with whole ingredients",
                  "Gentle structure that encourages confidence and joy",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.62 0.22 355)" }} />
                    <span className="text-gray-700 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Accordion */}
            <div className="space-y-3">
              {[
                {
                  icon: Shield,
                  title: "Safety",
                  color: "oklch(0.62 0.22 355)",
                  content: "Our facility is fully childproofed with safety gates, outlet covers, and locked cabinets. Cleanliness, supervision, and peace of mind are built into everything we do.",
                },
                {
                  icon: Heart,
                  title: "Happiness",
                  color: "oklch(0.65 0.13 195)",
                  content: "We create a warm, joyful atmosphere where children feel loved, celebrated, and free to be themselves every single day.",
                },
                {
                  icon: BookOpen,
                  title: "Education",
                  color: "oklch(0.62 0.15 145)",
                  content: "Our play-based curriculum is aligned with Arizona Early Learning Standards, building the academic and social-emotional foundations children need for lifelong success.",
                },
              ].map(({ icon, title, color, content }) => (
                <AccordionItem
                  key={title}
                  icon={icon}
                  title={title}
                  color={color}
                  content={content}
                  isOpen={openAccordion === title}
                  onToggle={() => setOpenAccordion(openAccordion === title ? "" : title)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY — green color block ───────────────────────────────────── */}
      <section className="py-16 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.62 0.15 145)" }}>
        <div className="container">
          <div className="text-center mb-10">
            <h2
              className="text-4xl font-black text-white"
              style={{ fontFamily: "'Schoolbell', cursive", fontSize: "2.5rem" }}
            >
              Gallery
            </h2>
            <div className="w-16 h-1.5 rounded-full mx-auto mt-3 bg-white/50" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NUTRITION HIGHLIGHT — white bg ───────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-black"
              style={{ fontFamily: "'Schoolbell', cursive", color: "oklch(0.25 0.15 295)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Your child's happiness, development,{" "}
              <span style={{ color: "oklch(0.65 0.13 195)" }}>and well-being</span>{" "}
              are our top priorities.
            </h2>
            <div className="w-16 h-1 rounded-full mx-auto mt-4 mb-6"
              style={{ backgroundColor: "oklch(0.65 0.18 25)" }} />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/enrollment"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              style={{ backgroundColor: "oklch(0.38 0.18 295)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Schedule a Tour <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base border-2 transition-all hover:scale-105"
              style={{ borderColor: "oklch(0.38 0.18 295)", color: "oklch(0.38 0.18 295)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── PARENT RESOURCES — YouTube videos ────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.97 0.01 270)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-black mb-2"
              style={{ fontFamily: "'Schoolbell', cursive", color: "oklch(0.25 0.15 295)", fontSize: "2.5rem" }}
            >
              Parent Resources
            </h2>
            <div className="w-16 h-1.5 rounded-full mx-auto mt-3 mb-5"
              style={{ backgroundColor: "oklch(0.65 0.18 25)" }} />
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              We believe in partnering with families. These resources help parents understand
              the importance of quality early childhood education.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            <YouTubeCard
              videoId="ZmxLgFzZB7o"
              title="Quality Matters in Child Care"
              description="By age 5, a child's brain is already 90% developed. This video explores why quality early childhood programs are essential for setting children up for lifelong success."
              accentColor="oklch(0.65 0.13 195)"
            />
            <YouTubeCard
              videoId="O5xDTqRhmYY"
              title="The Power of Early Childhood Education"
              description="Kennedy Krieger Institute experts discuss how the first years of a child's life are a critical window for brain development — and how quality programs make a lasting difference."
              accentColor="oklch(0.62 0.22 355)"
            />
            <YouTubeCard
              videoId="ADrMJ3Rs-QQ"
              title="Why is Preschool So Important?"
              description="Save the Children breaks down why high-quality preschool is one of the most powerful investments a family can make — building language, social skills, and school readiness."
              accentColor="oklch(0.62 0.15 145)"
            />
          </div>
        </div>
      </section>

      {/* ── CTA BANNER — coral ────────────────────────────────────────────── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.65 0.18 25)" }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
          style={{ backgroundColor: "oklch(0.78 0.16 65)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-20"
          style={{ backgroundColor: "oklch(0.55 0.18 25)", transform: "translate(-30%, 30%)" }} />
        <div className="container relative z-10 text-center">
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Your child's happiness, development,<br className="hidden md:block" /> and well-being are our top priorities.
          </h2>
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Schedule a tour of Tucson Tots Early Learning Center and see firsthand why
            Tucson families choose us for their children's early education.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/enrollment"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white font-bold text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              style={{ color: "oklch(0.65 0.18 25)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Schedule a Tour <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-white text-white font-bold text-base hover:bg-white/10 transition-all"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
