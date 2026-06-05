"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Perk {
  id: string;
  plan_id: string;
  label: string;
  is_highlighted: boolean;
}

interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  perks: Perk[];
}

export function Pricing() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/plans")
      .then((r) => r.json())
      .then((json) => {
        if (json.success) setPlans(json.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const midIndex = Math.floor((plans.length - 1) / 2);

  return (
    <section
      id="pricing"
      className="relative bg-black py-28 px-6 border-t border-zinc-900 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-20 text-left"
        >
          <p className="text-zinc-500 text-xs font-roboto uppercase tracking-widest font-bold mb-4">
            Pricing
          </p>
          <h2 className="text-5xl md:text-7xl font-bold font-hanken tracking-tight text-white leading-[1.05]">
            Simple, transparent
            <br />
            pricing.
          </h2>
          <p className="mt-6 text-zinc-500 font-roboto text-lg leading-relaxed max-w-2xl">
            No hidden fees. No surprises. Pay only for what you use.{" "}
          </p>
        </motion.div>

        {loading ? (
          <div className="flex flex-wrap justify-center gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="rounded-[2.5rem] border border-zinc-800 bg-zinc-900/40 p-10 animate-pulse h-[500px] w-full max-w-[340px]"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 items-stretch">
            {plans.map((plan, i) => {
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="relative flex flex-col rounded-[2.5rem] p-8 pb-7 transition-all duration-500 border border-white/[0.06] bg-[#090909] w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(25%-1.5rem)] max-w-[310px] min-h-[520px] hover:border-white/[0.12] hover:bg-[#0D0D0D] hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.12)] group/card"
                >
                  {/* Top/Bottom Notches */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/[0.06] bg-black group-hover/card:border-white/[0.12] transition-colors duration-500" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full border border-white/[0.06] bg-black group-hover/card:border-white/[0.12] transition-colors duration-500" />

                  <div className="mb-1">
                    <h3 className="text-2xl font-bold font-hanken tracking-tight text-white mb-0.5">
                      {plan.name}
                    </h3>
                    <p className="text-zinc-500 font-roboto text-[13px] leading-relaxed min-h-[40px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Divider with interlocked side notches */}
                  <div className="relative flex items-center my-6">
                    <div className="absolute -left-[45px] w-7 h-7 rounded-full border border-white/[0.06] bg-black z-10 group-hover/card:border-white/[0.12] transition-colors duration-500" />
                    <div className="flex-1 h-px border-b border-dashed border-zinc-800" />
                    <div className="absolute -right-[45px] w-7 h-7 rounded-full border border-white/[0.06] bg-black z-10 group-hover/card:border-white/[0.12] transition-colors duration-500" />
                  </div>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl font-bold font-hanken text-white tracking-tighter">
                      ₹{plan.price.toFixed(0)}
                    </span>
                    <span className="text-zinc-600 font-roboto text-[13px] font-medium">
                      per month
                    </span>
                  </div>

                  <ul className="flex flex-col gap-3.5 mb-10 flex-1">
                    {plan.perks &&
                      plan.perks.slice(0, 6).map((perk) => (
                        <li key={perk.id} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0 group-hover/card:bg-blue-500/40 transition-colors duration-500" />
                          <span
                            className={`font-roboto text-[13px] leading-tight ${perk.is_highlighted ? "text-zinc-200 font-medium" : "text-zinc-400"}`}
                          >
                            {perk.label}
                          </span>
                        </li>
                      ))}
                  </ul>

                  <Link
                    href="https://app.storentia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative flex items-center justify-between mt-auto"
                  >
                    <span className="text-sm font-bold font-hanken tracking-tight text-zinc-300 group-hover/btn:text-white transition-colors duration-300">
                      {plan.price === 0 ? "Get Started" : "Purchase"}
                    </span>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
