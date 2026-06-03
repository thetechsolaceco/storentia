"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type Status = "idle" | "pending" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("pending");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = (await res.json()) as { success?: boolean; error?: string };

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-black text-zinc-300 px-6 pt-32 pb-24">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-zinc-500 hover:text-white transition-colors text-sm font-roboto flex items-center gap-2 mb-10"
        >
          ← Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-hanken tracking-tight text-white mb-4">
            Contact Us
          </h1>
          <p className="text-zinc-500 text-base font-roboto mb-12 max-w-xl">
            Have a question, feedback, or partnership inquiry? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <p className="text-white text-xs font-medium font-roboto uppercase tracking-widest mb-3">
                Email
              </p>
              <a
                href="mailto:info@techsolace.in"
                className="text-zinc-400 text-sm font-roboto hover:text-white transition-colors"
              >
                info@techsolace.in
              </a>
            </div>
            <div>
              <p className="text-white text-xs font-medium font-roboto uppercase tracking-widest mb-3">
                Company
              </p>
              <p className="text-zinc-400 text-sm font-roboto">TechSolace</p>
            </div>
            <div>
              <p className="text-white text-xs font-medium font-roboto uppercase tracking-widest mb-3">
                Response Time
              </p>
              <p className="text-zinc-400 text-sm font-roboto">Within 24 hours</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:col-span-3"
          >
            {status === "success" ? (
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-medium font-hanken text-lg mb-2">Message sent</p>
                <p className="text-zinc-500 text-sm font-roboto">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium font-roboto text-zinc-400 uppercase tracking-widest"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm font-roboto text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium font-roboto text-zinc-400 uppercase tracking-widest"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm font-roboto text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-xs font-medium font-roboto text-zinc-400 uppercase tracking-widest"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What's this about?"
                    className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm font-roboto text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium font-roboto text-zinc-400 uppercase tracking-widest"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us more…"
                    className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm font-roboto text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm font-roboto">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "pending"}
                  className="w-full py-3 px-6 rounded-full bg-white text-black font-medium text-sm font-hanken transition-all duration-200 hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "pending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
