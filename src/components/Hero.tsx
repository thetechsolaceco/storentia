'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-6 pt-24 pb-16">

      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Center glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-[700px] h-[300px] md:h-[500px] rounded-full bg-white/[0.04] blur-[80px] md:blur-[120px]" />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full"
      >

        {/* Badge */}
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-1.5 text-zinc-400 text-xs font-medium font-roboto tracking-widest mb-8">
            <span>A product by</span>
            <Image
              src="/logo2.png"
              alt="techsolace"
              width={120}
              height={22}
              className="object-contain h-[32px] md:h-[40px]"
            />
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[96px] font-bold font-hanken tracking-tight leading-[1.1] md:leading-[0.95] text-white"
        >
          Build better<br />
          <span className="text-zinc-500">stores, faster.</span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          variants={item}
          className="mt-8 text-lg md:text-xl text-zinc-400 font-roboto leading-relaxed max-w-2xl"
        >
          Storentia gives merchants and developers everything they need —
          beautiful storefronts, unified commerce, and the integrations
          your business already runs on.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a href="https://app.storentia.com" className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold font-roboto text-sm hover:bg-zinc-100 transition-all duration-200">
            Get Started
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
          <button className="inline-flex items-center gap-2 bg-transparent text-white border border-zinc-800 px-8 py-4 rounded-full font-semibold font-roboto text-sm hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-200">
            View showcase
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}
