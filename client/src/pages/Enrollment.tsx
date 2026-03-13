/*
 * TUCSON TOTS ELC — ENROLLMENT PAGE
 * Fixes: Increased hero top padding, responsive grid improvements
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export default function Enrollment() {
  const [form, setForm] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    program: "",
    startDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success("Thank you! We'll be in touch within 24 hours to schedule your tour.");
      setSubmitted(true);
      setForm({ parentName: "", email: "", phone: "", childName: "", childAge: "", program: "", startDate: "", message: "" });
    },
    onError: () => {
      toast.error("Something went wrong. Please try again or email us directly.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate({
      formType: "enrollment",
      name: form.parentName,
      email: form.email,
      phone: form.phone || undefined,
      childName: form.childName || undefined,
      childAge: form.childAge || undefined,
      startDate: form.startDate || undefined,
      message: `Program Interest: ${form.program || "Not specified"}${form.message ? `\n\n${form.message}` : ""}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24" style={{ backgroundColor: "oklch(0.65 0.18 25)" }}>
        <div className="container text-center">
          <span
            className="badge-pill mb-5 inline-block text-white"
            style={{ backgroundColor: "oklch(0.55 0.18 25)" }}
          >
            Enrollment
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Begin Your Child's Journey
          </h1>
          <p
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto px-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            We'd love to welcome your family to Tucson Tots ELC. Start by scheduling a tour
            or submitting an enrollment inquiry below.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-black mb-4"
              style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
            >
              How Enrollment Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "Submit Inquiry", desc: "Fill out the form below with your family's information and program interest.", color: "oklch(0.38 0.18 295)" },
              { step: "02", title: "Schedule a Tour", desc: "We'll reach out within 24 hours to schedule a personal tour of our center.", color: "oklch(0.65 0.18 25)" },
              { step: "03", title: "Meet the Team", desc: "Visit us, meet our educators, and see the learning environment firsthand.", color: "oklch(0.65 0.13 195)" },
              { step: "04", title: "Enroll & Start", desc: "Complete enrollment paperwork and get ready for your child's first day!", color: "oklch(0.62 0.15 145)" },
            ].map(({ step, title, desc, color }) => (
              <div key={step} className="text-center px-2">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-black text-xl"
                  style={{ backgroundColor: color, fontFamily: "'Nunito', sans-serif" }}
                >
                  {step}
                </div>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Form */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "oklch(0.97 0.02 295)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14">
            {/* Pricing Info */}
            <div>
              <span
                className="badge-pill mb-5 inline-block"
                style={{ backgroundColor: "oklch(0.97 0.04 25)", color: "oklch(0.65 0.18 25)" }}
              >
                Tuition & Rates
              </span>
              <h2
                className="text-2xl md:text-3xl font-black mb-6"
                style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
              >
                Transparent, Competitive Pricing
              </h2>
              <p className="text-gray-700 mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                We believe quality early education should be accessible. Contact us for current
                rates and to discuss payment options that work for your family.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { program: "Infant & Toddler Care", schedule: "Full Day (7am–6pm)", color: "oklch(0.65 0.18 25)" },
                  { program: "Preschool Program", schedule: "Full Day or Half Day", color: "oklch(0.38 0.18 295)" },
                  { program: "Pre-K Readiness", schedule: "Full Day Program", color: "oklch(0.65 0.13 195)" },
                  { program: "After-School Care", schedule: "After School – 6pm", color: "oklch(0.62 0.15 145)" },
                ].map(({ program, schedule, color }) => (
                  <div
                    key={program}
                    className="bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                  >
                    <div>
                      <p
                        className="font-semibold"
                        style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
                      >
                        {program}
                      </p>
                      <p
                        className="text-sm text-gray-500 flex items-center gap-1 mt-1"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <Clock className="w-3.5 h-3.5" /> {schedule}
                      </p>
                    </div>
                    <span
                      className="badge-pill self-start sm:self-auto"
                      style={{ backgroundColor: `${color}20`, color }}
                    >
                      Contact for Rates
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3
                  className="font-bold mb-4"
                  style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
                >
                  What's Included
                </h3>
                <div className="space-y-3">
                  {[
                    { text: "All meals and snacks (whole-food, fresh daily)", color: "oklch(0.62 0.15 145)" },
                    { text: "Full curriculum and educational materials", color: "oklch(0.38 0.18 295)" },
                    { text: "Daily activity reports and photos", color: "oklch(0.65 0.18 25)" },
                    { text: "Parent-teacher conferences", color: "oklch(0.65 0.13 195)" },
                    { text: "Developmental milestone tracking", color: "oklch(0.62 0.15 145)" },
                  ].map(({ text, color }) => (
                    <div key={text} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color }} />
                      <span className="text-sm text-gray-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enrollment Form */}
            <div>
              <span
                className="badge-pill mb-5 inline-block"
                style={{ backgroundColor: "oklch(0.38 0.18 295)", color: "white" }}
              >
                Enrollment Inquiry
              </span>
              <h2
                className="text-2xl md:text-3xl font-black mb-6"
                style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
              >
                Schedule a Tour
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
                    Inquiry Received!
                  </h3>
                  <p className="text-gray-600 text-sm mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Thank you! We'll be in touch within 24 hours to schedule your tour.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
                    style={{ backgroundColor: "oklch(0.65 0.18 25)", fontFamily: "'Nunito', sans-serif" }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
                    >
                      Parent Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.parentName}
                      onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
                    >
                      Child's Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.childName}
                      onChange={(e) => setForm({ ...form, childName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      placeholder="Child's name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      placeholder="your@email.com"
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
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      placeholder="(520) 555-0100"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
                    >
                      Child's Age
                    </label>
                    <select
                      value={form.childAge}
                      onChange={(e) => setForm({ ...form, childAge: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none bg-white"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <option value="">Select age</option>
                      <option value="6w-18m">6 Weeks – 18 Months</option>
                      <option value="18m-2y">18 Months – 2 Years</option>
                      <option value="2-3y">2 – 3 Years</option>
                      <option value="3-4y">3 – 4 Years</option>
                      <option value="4-5y">4 – 5 Years</option>
                      <option value="5-6y">5 – 6 Years (After-School)</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
                    >
                      Program Interest
                    </label>
                    <select
                      value={form.program}
                      onChange={(e) => setForm({ ...form, program: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none bg-white"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <option value="">Select program</option>
                      <option value="infant">Infant & Toddler Care</option>
                      <option value="preschool">Preschool Program</option>
                      <option value="prek">Pre-K Readiness</option>
                      <option value="afterschool">After-School Care</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold mb-1.5"
                    style={{ fontFamily: "'Nunito', sans-serif", color: "oklch(0.25 0.15 295)" }}
                  >
                    Message / Questions
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none resize-none"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    placeholder="Any questions or special considerations..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full py-3.5 rounded-xl text-white font-bold text-base transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ backgroundColor: "oklch(0.65 0.18 25)", fontFamily: "'Nunito', sans-serif" }}
                >
                  {submitMutation.isPending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Enrollment Inquiry
                    </>
                  )}
                </button>
                <p
                  className="text-xs text-center text-gray-500"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  We'll respond within 24 hours to schedule your tour.
                </p>
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
