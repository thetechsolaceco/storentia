'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
}

export function Pricing() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://apis.storentia.com/v1/public/plans', {
      headers: { accept: 'application/json' },
    })
      .then((r) => r.json())
      .then((json) => {
        if (json.success) setPlans(json.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="pricing" className="relative bg-black py-28 px-6 border-t border-zinc-900 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16"
        >
          <p className="text-zinc-500 text-sm font-roboto uppercase tracking-widest font-medium mb-4">
            Pricing
          </p>
          <h2 className="text-4xl md:text-6xl font-bold font-hanken tracking-tight text-white leading-[1.1]">
            Simple, transparent<br />pricing.
          </h2>
          <p className="mt-5 text-zinc-400 font-roboto text-lg leading-relaxed max-w-xl">
            No hidden fees. No surprises. Pay only for what you use.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex gap-6">
            {[...Array(1)].map((_, i) => (
              <div
                key={i}
                className="flex-1 max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 animate-pulse h-72"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm p-8 flex flex-col gap-6 hover:border-zinc-700 transition-colors duration-300"
              >
                {/* Subtle inner glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent" />

                <div>
                  <p className="text-xs font-roboto uppercase tracking-widest text-zinc-500 mb-2">
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-bold font-hanken text-white tracking-tight">
                      ${plan.price.toFixed(0)}
                    </span>
                    <span className="text-zinc-500 font-roboto mb-2">/mo</span>
                  </div>
                  <p className="mt-3 text-zinc-400 font-roboto text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="h-px bg-zinc-800" />

                <Link
                  href="https://app.storentia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-white text-black text-sm font-medium font-hanken px-6 py-3 rounded-full hover:bg-zinc-100 transition-colors duration-200"
                >
                  Get started
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
