"use client";

import { motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(1); // Default to recommended
  const [viewportWidth, setViewportWidth] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalCards = plans.length + 1; // plans + custom

  useEffect(() => {
    setMounted(true);
    fetch("/api/plans")
      .then((r) => r.json())
      .then((json) => {
        if (json.success) setPlans(json.data);
      })
      .finally(() => setLoading(false));

    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (viewportWidth >= 768) return;
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;

    const children = Array.from(container.children) as HTMLElement[];
    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, index) => {
      if (index >= totalCards) return;

      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const containerCenter = scrollLeft + containerWidth / 2;
      const distance = Math.abs(childCenter - containerCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const scrollToCard = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    const targetChild = children[index];
    if (targetChild) {
      container.scrollTo({
        left: targetChild.offsetLeft - (container.clientWidth - targetChild.clientWidth) / 2,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  }, []);

  // Initial scroll to recommended card
  useEffect(() => {
    if (!loading && plans.length > 0 && viewportWidth > 0 && mounted) {
      const isMobile = viewportWidth < 768;
      if (isMobile) {
        const recommendedIndex = plans.findIndex((p) => p.name.toLowerCase() === "growth");
        const focusIndex = recommendedIndex !== -1 ? recommendedIndex : 1;

        const timer = setTimeout(() => {
          scrollToCard(focusIndex);
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [loading, plans, viewportWidth, mounted, scrollToCard]);

  return (
    <section
      id="pricing"
      className="relative bg-black py-28 px-6 border-t border-zinc-900 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-20 text-center max-w-2xl mx-auto"
        >
          <p className="text-zinc-500 text-[10px] md:text-xs font-roboto uppercase tracking-widest font-bold mb-4">
            Pricing
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-hanken tracking-tight text-white leading-[1.1]">
            Simple, transparent pricing.
          </h2>
          <p className="mt-5 text-zinc-500 font-roboto text-base md:text-lg leading-relaxed">
            No hidden fees. No surprises. Pay only for what you use.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex flex-wrap justify-center gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: loading skeleton is static and won't reorder
                key={`skeleton-${i}`}
                className="rounded-none border border-zinc-800 bg-zinc-900/40 p-10 animate-pulse h-[500px] w-full max-w-[340px]"
              />
            ))}
          </div>
        ) : (
          <div className="relative">
            <div
              ref={containerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none md:flex-wrap justify-start md:justify-center gap-x-6 gap-y-10 items-stretch px-6 md:px-0 pt-8 pb-8 md:pt-0 md:pb-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {plans.map((plan, i) => {
                const isRecommended = plan.name.toLowerCase().trim() === "growth";
                const isAdvanced = plan.name.toLowerCase().trim() === "advanced";
                const isFocused = activeIndex === i;

                const basePerks = plan.perks || [];
                const perks = isAdvanced
                  ? [
                      ...basePerks,
                      {
                        id: "ai-perk-1",
                        label: "AI Storefront Copilot & auto-layout",
                        is_highlighted: true,
                      },
                      {
                        id: "ai-perk-2",
                        label: "Autonomous AI store workflows",
                        is_highlighted: true,
                      },
                    ]
                  : basePerks;

                return (
                  <motion.div
                    key={plan.id}
                    animate={{
                      scale: mounted && viewportWidth < 768 ? (isFocused ? 1.03 : 0.95) : 1,
                      opacity: mounted && viewportWidth < 768 ? (isFocused ? 1 : 0.5) : 1,
                    }}
                    transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="pricing-card snap-center relative flex flex-col rounded-none pt-14 px-8 pb-7 transition-colors duration-500 border border-white/[0.06] bg-[#090909] flex-shrink-0 w-[82vw] sm:w-[310px] md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(25%-1.5rem)] max-w-[310px] min-h-[520px] hover:bg-[#0D0D0D] hover:border-green-500/25 group/card"
                  >
                    {isRecommended && (
                      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-green-500 via-green-600 to-black flex items-center justify-center overflow-hidden z-20">
                        <div
                          className="absolute inset-0 opacity-20 pointer-events-none"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                          }}
                        />
                        <span className="relative z-10 text-white text-[10px] font-black font-roboto uppercase tracking-[0.2em]">
                          Recommended
                        </span>
                      </div>
                    )}

                    {!isRecommended && !isAdvanced && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/[0.06] bg-black group-hover/card:border-white/[0.12] transition-colors duration-500" />
                    )}

                    {isAdvanced && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 animate-[spin_4s_linear_infinite] z-20">
                        <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                          <div
                            style={{ animation: "spin 4s linear infinite reverse" }}
                            className="text-green-400 flex items-center justify-center"
                          >
                            <Sparkles size={16} />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full border border-white/[0.06] bg-black group-hover/card:border-white/[0.12] transition-colors duration-500" />

                    <div className="h-[115px] flex flex-col justify-start mb-1">
                      <h3 className="text-2xl font-bold font-hanken tracking-tight text-white mb-0.5">
                        {plan.name}
                      </h3>
                      <p className="text-zinc-500 font-roboto text-[13px] leading-relaxed">
                        {plan.description}
                      </p>
                      {isAdvanced && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mt-2.5 rounded-full border border-green-500/25 bg-green-500/10 text-green-300 font-roboto text-[10px] uppercase tracking-wider font-semibold w-fit">
                          <Sparkles size={10} className="text-green-400" />
                          AI Features Included
                        </div>
                      )}
                    </div>

                    <div className="relative flex items-center my-6">
                      <div className="absolute -left-[45px] w-7 h-7 rounded-full border border-white/[0.06] bg-black z-10 group-hover/card:border-green-500/25 transition-colors duration-500" />
                      <div className="flex-1 h-px border-b border-dashed border-zinc-800" />
                      <div className="absolute -right-[45px] w-7 h-7 rounded-full border border-white/[0.06] bg-black z-10 group-hover/card:border-green-500/25 transition-colors duration-500" />
                    </div>

                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-5xl font-bold font-hanken text-white tracking-tighter">
                        ₹{plan.price.toFixed(0)}
                      </span>
                      <span className="text-zinc-600 font-roboto text-[13px] font-medium">
                        / per month
                      </span>
                    </div>

                    <ul className="flex flex-col gap-3.5 mb-10 flex-1">
                      {perks.slice(0, 8).map((perk) => (
                        <li key={perk.id} className="flex items-start gap-3">
                          {isAdvanced ? (
                            <Sparkles
                              size={13}
                              className="mt-1 text-green-400 group-hover/card:text-green-300 transition-colors duration-500 shrink-0"
                            />
                          ) : (
                            <Check
                              size={14}
                              className="mt-1 text-zinc-600 group-hover/card:text-green-500 transition-colors duration-500 shrink-0"
                            />
                          )}
                          <span
                            className={`font-roboto text-[13px] leading-tight ${
                              perk.is_highlighted
                                ? "text-green-200 font-medium font-semibold"
                                : "text-zinc-400"
                            }`}
                          >
                            {perk.label}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="https://dashboard.storentia.com/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3 px-6 font-bold font-hanken tracking-tight text-sm transition-all duration-300 mt-auto cursor-pointer border ${
                        isRecommended
                          ? "bg-white text-black border-white hover:bg-green-500 hover:border-green-500 hover:text-white"
                          : isAdvanced
                            ? "bg-[#090909] text-zinc-300 border-green-500/30 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 hover:border-green-500 hover:text-white"
                            : "bg-[#090909] text-zinc-300 border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700 hover:text-white"
                      }`}
                    >
                      <span>
                        {plan.price === 0
                          ? "Get Started"
                          : isRecommended
                            ? "Upgrade to Growth"
                            : isAdvanced
                              ? "Go Advanced with AI"
                              : "Choose Plan"}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 transition-transform duration-300 group-hover/card:translate-x-1"
                      >
                        <title>Arrow Right</title>
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                );
              })}

              {/* Custom Plan */}
              <motion.div
                animate={{
                  scale:
                    mounted && viewportWidth < 768
                      ? activeIndex === plans.length
                        ? 1.03
                        : 0.95
                      : 1,
                  opacity:
                    mounted && viewportWidth < 768 ? (activeIndex === plans.length ? 1 : 0.5) : 1,
                }}
                transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="pricing-card snap-center relative flex flex-col rounded-none pt-14 px-8 pb-7 transition-colors duration-500 border border-white/[0.06] bg-[#090909] flex-shrink-0 w-[82vw] sm:w-[310px] md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(25%-1.5rem)] max-w-[310px] min-h-[520px] hover:border-green-500/25 hover:bg-[#0D0D0D] group/card"
              >
                <div className="h-[115px] flex flex-col justify-start mb-1">
                  <h3 className="text-2xl font-bold font-hanken tracking-tight text-white mb-0.5">
                    Custom
                  </h3>
                  <p className="text-zinc-500 font-roboto text-[13px] leading-relaxed">
                    Bespoke solutions for large-scale operations and unique requirements.
                  </p>
                </div>

                <div className="relative flex items-center my-6">
                  <div className="absolute -left-[45px] w-7 h-7 rounded-full border border-white/[0.06] bg-black z-10 group-hover/card:border-green-500/25 transition-colors duration-500" />
                  <div className="flex-1 h-px border-b border-dashed border-zinc-800" />
                  <div className="absolute -right-[45px] w-7 h-7 rounded-full border border-white/[0.06] bg-black z-10 group-hover/card:border-green-500/25 transition-colors duration-500" />
                </div>

                <div className="flex items-center mb-6 h-[48px]">
                  <span className="text-4xl font-bold font-hanken text-white tracking-tight">
                    Contact Sales
                  </span>
                </div>

                <ul className="flex flex-col gap-3.5 mb-10 flex-1">
                  {[
                    "Unlimited stores",
                    "Dedicated support",
                    "Custom integrations",
                    "SLA guarantees",
                    "White-label options",
                    "Advanced security",
                  ].map((perk) => (
                    <li key={perk} className="flex items-start gap-3">
                      <Check
                        size={14}
                        className="mt-1 text-zinc-600 group-hover/card:text-green-500 transition-colors duration-500 shrink-0"
                      />
                      <span className="font-roboto text-[13px] leading-tight text-zinc-400">
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 font-bold font-hanken tracking-tight text-sm transition-all duration-300 mt-auto cursor-pointer border bg-[#090909] text-zinc-300 border-green-500/25 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 hover:border-green-500 hover:text-white"
                >
                  <span>Contact Sales</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 transition-transform duration-300 group-hover/card:translate-x-1"
                  >
                    <title>Arrow Right</title>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Navigation Arrows (visible only on mobile/tablet) */}
            <div className="hidden sm:flex md:hidden justify-between absolute top-[50%] -translate-y-1/2 left-2 right-2 z-20 pointer-events-none">
              <button
                type="button"
                onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
                className="pointer-events-auto p-3 rounded-full border border-white/[0.08] bg-black/90 hover:bg-zinc-800 text-white transition-all backdrop-blur-md cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={activeIndex === 0}
                aria-label="Previous plan"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => scrollToCard(Math.min(totalCards - 1, activeIndex + 1))}
                className="pointer-events-auto p-3 rounded-full border border-white/[0.08] bg-black/90 hover:bg-zinc-800 text-white transition-all backdrop-blur-md cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={activeIndex === totalCards - 1}
                aria-label="Next plan"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Pagination Dots (visible on mobile/tablet) */}
            <div className="flex justify-center items-center gap-2.5 mt-8 md:hidden">
              {Array.from({ length: totalCards }).map((_, i) => (
                <button
                  type="button"
                  // biome-ignore lint/suspicious/noArrayIndexKey: dots are a static 1D pagination list
                  key={`dot-${i}`}
                  onClick={() => scrollToCard(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === i ? "bg-white w-5" : "bg-zinc-700 w-2"
                  }`}
                  aria-label={`Go to card ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
