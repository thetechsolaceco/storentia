/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ICONS_ROW1 = [
  "https://cdn-icons-png.flaticon.com/512/5968/5968854.png",
  "https://cdn-icons-png.flaticon.com/512/732/732221.png",
  "https://cdn-icons-png.flaticon.com/512/733/733609.png",
  "https://cdn-icons-png.flaticon.com/512/732/732084.png",
  "https://cdn-icons-png.flaticon.com/512/733/733585.png",
  "https://cdn-icons-png.flaticon.com/512/281/281763.png",
  "https://cdn-icons-png.flaticon.com/512/888/888879.png",
];

const ICONS_ROW2 = [
  "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  "https://cdn-icons-png.flaticon.com/512/906/906324.png",
  "https://cdn-icons-png.flaticon.com/512/888/888841.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
  "https://cdn-icons-png.flaticon.com/512/906/906361.png",
  "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  "https://cdn-icons-png.flaticon.com/512/888/888847.png",
];

const repeatedIcons = (icons: string[], repeat = 4) =>
  Array.from({ length: repeat }).flatMap(() => icons);

export default function IntegrationHero() {
  return (
    <section className="relative py-32 overflow-hidden bg-white dark:bg-black">
      {/* Light grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block px-3 py-1 mb-4 text-xs md:text-sm rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white">
          250+ Integrations
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-[1.2]">
          Your store, connected
          <br className="hidden sm:block" /> to everything.
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-500 dark:text-zinc-400 max-w-xl mx-auto">
          Payments, shipping, marketing, analytics — plug in the tools your business already runs
          on. No custom code. No friction.
        </p>
        <Button
          variant="default"
          className="mt-8 px-5 py-2.5 md:px-6 md:py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition text-sm md:text-base"
        >
          Explore integrations
        </Button>

        {/* Carousel */}
        <div className="mt-12 overflow-hidden relative pb-2">
          {/* Row 1 — scrolls left */}
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -1000 }}
            dragTransition={{
              bounceStiffness: 600,
              bounceDamping: 20,
              modifyTarget: (target) => Math.round(target / 104) * 104,
            }}
            className="flex gap-10 whitespace-nowrap md:animate-scroll-left md:drag-none cursor-grab active:cursor-grabbing md:cursor-default"
            style={{ touchAction: "pan-y" }}
          >
            {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
              <div
                key={i}
                className="h-16 w-16 flex-shrink-0 rounded-full bg-white dark:bg-zinc-800 shadow-md flex items-center justify-center border border-zinc-200 dark:border-zinc-800"
              >
                <img src={src} alt="integration icon" className="h-10 w-10 object-contain" />
              </div>
            ))}
          </motion.div>

          {/* Row 2 — scrolls right */}
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -1000 }}
            dragTransition={{
              bounceStiffness: 600,
              bounceDamping: 20,
              modifyTarget: (target) => Math.round(target / 104) * 104,
            }}
            className="flex gap-10 whitespace-nowrap mt-6 md:animate-scroll-right md:drag-none cursor-grab active:cursor-grabbing md:cursor-default"
            style={{ touchAction: "pan-y" }}
          >
            {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
              <div
                key={i}
                className="h-16 w-16 flex-shrink-0 rounded-full bg-white dark:bg-zinc-800 shadow-md flex items-center justify-center border border-zinc-200 dark:border-zinc-800"
              >
                <img src={src} alt="integration icon" className="h-10 w-10 object-contain" />
              </div>
            ))}
          </motion.div>

          {/* Fade overlays */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
