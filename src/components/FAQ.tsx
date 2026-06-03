"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How quickly can I launch my storefront with Storentia?",
    answer:
      "Most stores go live in under a day. Storentia's streamlined setup wizard handles domain, payments, and product catalog in minutes — no developers required. If you're building something custom, our API and developer tools let you ship production-ready storefronts in hours, not weeks.",
  },
  {
    question: "What payment providers does Storentia support?",
    answer:
      "Storentia integrates natively with Stripe, PayPal, Razorpay, and 30+ other payment gateways out of the box. You can enable multiple providers simultaneously, set regional defaults, and configure custom checkout flows — all from one dashboard with zero code.",
  },
  {
    question: "Can I manage multiple storefronts from one account?",
    answer:
      "Yes. Storentia is built for multi-store operations. Manage unlimited storefronts, each with their own products, pricing, domains, and analytics, from a single unified dashboard. Switch between stores in one click and share inventory or customer data across them.",
  },
  {
    question: "Is Storentia suitable for large-scale, high-traffic stores?",
    answer:
      "Absolutely. Storentia's infrastructure is designed to scale horizontally. Whether you're handling 100 or 10 million orders, the platform auto-scales to meet demand. We offer 99.99% uptime SLAs on Business and Enterprise plans, backed by global CDN delivery.",
  },
  {
    question: "How does the API work for developers?",
    answer:
      "Storentia exposes a fully RESTful API and a GraphQL endpoint, both with comprehensive documentation, OpenAPI specs, and SDKs for Node.js, Python, and PHP. You can automate inventory updates, trigger order webhooks, build custom storefronts, or integrate any third-party tool your team already uses.",
  },
  {
    question: "What does Storentia cost? Are there hidden fees?",
    answer:
      "Storentia offers a free tier to get started with no credit card required. Paid plans scale with your business and are billed monthly or annually — annual saves 20%. There are no hidden transaction fees on any plan. You only pay the processing fees charged by your chosen payment provider.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onClick, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "border-b border-zinc-800 transition-colors duration-300",
        isOpen ? "border-zinc-700" : "",
      )}
    >
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "text-base md:text-lg font-medium font-hanken tracking-tight transition-colors duration-300",
            isOpen ? "text-white" : "text-zinc-300 group-hover:text-white",
          )}
        >
          {question}
        </span>

        <span
          className={cn(
            "mt-0.5 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full border transition-all duration-300",
            isOpen
              ? "border-white bg-white text-black rotate-45"
              : "border-zinc-700 bg-transparent text-zinc-500 group-hover:border-zinc-500 group-hover:text-zinc-300",
          )}
        >
          <Plus size={14} strokeWidth={2} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-400 font-roboto leading-relaxed text-base md:text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="relative bg-black py-28 px-6 border-t border-zinc-900 overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16"
        >
          <p className="text-zinc-500 text-sm font-roboto uppercase tracking-widest font-medium mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-6xl font-bold font-hanken tracking-tight text-white leading-[1.1]">
            Everything you
            <br />
            need to know.
          </h2>
          <p className="mt-5 text-zinc-400 font-roboto text-lg leading-relaxed max-w-xl">
            Can't find the answer you're looking for?{" "}
            <a
              href="mailto:contact@techsolace.in"
              className="text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-white transition-all duration-200"
            >
              Reach out to our team.
            </a>
          </p>
        </motion.div>

        {/* Accordion */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              index={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
