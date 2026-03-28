/*
 * TUCSON TOTS ELC — CONTACT PAGE
 * Fixes: Increased hero top padding, responsive grid improvements
 * Feature: Contact form wired to tRPC backend (saves to DB + notifies owner)
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Mail, Clock, ArrowRight, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "f642c143-997e-4d9e-9be2-7b9917152700",
          subject: `[Tucson Tots] ${form.subject || "General"} from ${form.name}`,
          name: form.name,
          email: form.email,
          phone: form.phone || "N/A",
          topic: form.subject || "General",
          message: form.message,
        }),
      });
      if (res.ok) {
        toast.success("Message sent! We'll get back to you within 24 hours.");
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

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
            Get in Touch
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            We'd Love to Hear From You
          </h1>
          <p
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto px-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Have questions about our programs, enrollment, or anything else? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14">
            {/* Contact Info */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-black mb-8"
                style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
              >
                Contact Information
              </h2>
              <div className="space-y-6 mb-10">
                {[
                  {
                    icon: MapPin,
                    title: "Location",
                    lines: ["Tucson, Arizona"],
                    color: "oklch(0.38 0.18 295)",
                    bg: "oklch(0.97 0.02 295)",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    lines: ["hello@tucsontots.com"],
                    color: "oklch(0.65 0.18 25)",
                    bg: "oklch(0.97 0.04 25)",
                  },
                  {
                    icon: Clock,
                    title: "Hours",
                    lines: ["Monday – Friday: 7:00 AM – 6:00 PM", "Closed on major holidays"],
                    color: "oklch(0.62 0.15 145)",
                    bg: "oklch(0.97 0.03 145)",
                  },
                ].map(({ icon: Icon, title, lines, color, bg }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: bg }}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <div>
                      <p
                        className="font-semibold mb-1"
                        style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
                      >
                        {title}
                      </p>
                      {lines.map((line) => (
                        <p
                          key={line}
                          className="text-gray-600 text-sm"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick actions */}
              <div className="rounded-2xl p-6" style={{ backgroundColor: "oklch(0.97 0.02 295)" }}>
                <h3
                  className="font-bold mb-4"
                  style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
                >
                  Ready to Enroll?
                </h3>
                <p
                  className="text-sm text-gray-600 mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Schedule a tour and see our center firsthand. We'd love to meet your family.
                </p>
                <a
                  href="/enrollment"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
                  style={{ backgroundColor: "oklch(0.65 0.18 25)", fontFamily: "'Nunito', sans-serif" }}
                >
                  Schedule a Tour <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-black mb-8"
                style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
              >
                Send Us a Message
              </h2>

              {submitted ? (
                <div
                  className="rounded-2xl p-8 text-center"
                  style={{ backgroundColor: "oklch(0.97 0.04 145)" }}
                >
                  <CheckCircle2 className="w-14 h-14 mx-auto mb-4" style={{ color: "oklch(0.62 0.15 145)" }} />
                  <h3
                    className="text-xl font-black mb-2"
                    style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
                  >
                    Message Received!
                  </h3>
                  <p className="text-gray-600 text-sm mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
                    style={{ backgroundColor: "oklch(0.38 0.18 295)", fontFamily: "'Nunito', sans-serif" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-sm font-semibold mb-1.5"
                        style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-semibold mb-1.5"
                        style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
                    >
                      Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <option value="">Select a topic</option>
                      <option value="enrollment">Enrollment Inquiry</option>
                      <option value="tour">Schedule a Tour</option>
                      <option value="programs">Program Information</option>
                      <option value="nutrition">Nutrition Questions</option>
                      <option value="pricing">Pricing & Rates</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
                    >
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3.5 rounded-xl text-white font-bold text-base transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ backgroundColor: "oklch(0.38 0.18 295)", fontFamily: "'Nunito', sans-serif" }}
                  >
                    {sending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
