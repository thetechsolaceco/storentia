'use client';

import { motion } from 'framer-motion';

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
  };

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-black text-white min-h-[80vh] flex flex-col items-center text-center">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.p variants={item} className="text-zinc-500 text-sm mb-8">
          Introducing the F1 Keyboard — Pre order now
        </motion.p>
        
        <motion.h1 variants={item} className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
          Build better<br />sites, faster
        </motion.h1>
        
        <motion.p variants={item} className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed">
          Framer is the site builder trusted by leading startups and Fortune 500 companies. 
          Build fast and scale more easily with an integrated CMS, analytics, localization, and SEO.
        </motion.p>
        
        <motion.div variants={item} className="flex gap-4">
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-200 transition-colors">
            Start for free
          </button>
          <button className="bg-zinc-900 text-white border border-zinc-800 px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-colors">
            Start with AI
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
