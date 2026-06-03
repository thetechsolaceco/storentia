"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Launch Stores Faster",
    description:
      "Build and deploy fully functional online stores in minutes with a streamlined workflow designed for modern businesses and developers.",
    image: "/dashboard/desk1.png",
  },
  {
    title: "Built for Scale",
    description:
      "Manage products, orders, analytics, and multiple storefronts effortlessly with infrastructure designed to grow alongside your business.",
    image: "/dashboard/desk2.png",
  },
  {
    title: "Developer Friendly APIs",
    description:
      "Integrate, customize, and automate every part of your commerce experience using powerful APIs and flexible architecture.",
    image: "/dashboard/desk3.png",
  },
  {
    title: "Unified Commerce Experience",
    description:
      "Control your entire ecosystem from one centralized platform with seamless management across stores, customers, and payments.",
    image: "/dashboard/desk4.png",
  },
];

export function FeatureScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(Math.floor(latest * features.length), features.length - 1);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  return (
    <section id="experience" ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 z-10 h-screen flex items-center overflow-hidden">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Side: Content */}
          <div className="h-full flex flex-col justify-center px-6 lg:px-24 xl:px-32 order-2 lg:order-1">
            <div className="max-w-xl">
              <div className="space-y-4 mb-12">
                <h2 className="text-zinc-500 text-sm font-roboto uppercase tracking-widest font-medium">
                  Platform Features
                </h2>
                <h3 className="text-4xl md:text-6xl font-bold font-hanken text-white tracking-tight leading-[1.1]">
                  Designed for the <br /> modern enterprise.
                </h3>
              </div>

              <div className="space-y-10 relative">
                {/* Progress Line Background */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-zinc-800" />

                {/* Active Progress Line */}
                <motion.div
                  className="absolute left-0 top-0 w-[2px] bg-white z-10"
                  animate={{
                    height: `${((activeIndex + 1) / features.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {features.map((feature, i) => (
                  <div
                    key={i}
                    className={cn(
                      "group relative pl-10 transition-all duration-700",
                      activeIndex === i ? "opacity-100" : "opacity-20",
                    )}
                  >
                    <motion.h4
                      animate={{
                        x: activeIndex === i ? 0 : -10,
                        color: activeIndex === i ? "#ffffff" : "#71717a",
                      }}
                      className="text-2xl font-semibold mb-3 font-hanken tracking-tight"
                    >
                      {feature.title}
                    </motion.h4>
                    <motion.p
                      initial={false}
                      animate={{
                        height: activeIndex === i ? "auto" : 0,
                        opacity: activeIndex === i ? 1 : 0,
                        y: activeIndex === i ? 0 : 10,
                      }}
                      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="text-zinc-400 font-roboto leading-relaxed overflow-hidden text-base md:text-lg"
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Mockup Images */}
          <div className="relative h-[40vh] lg:h-full w-full order-1 lg:order-2 bg-zinc-950 border-l border-zinc-800 overflow-hidden">
            <AnimatePresence mode="wait">
              {features.map(
                (feature, i) =>
                  activeIndex === i && (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: "30%", scale: 1.1, rotateY: -10 }}
                      animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, x: "-10%", scale: 0.95, rotateY: 10 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                        opacity: { duration: 0.4 },
                      }}
                      className="absolute inset-0 preserve-3d"
                      style={{ perspective: "1000px" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover object-left shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
