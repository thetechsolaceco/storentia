"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FAQ } from "@/components/FAQ";
import { FeatureScroll } from "@/components/FeatureScroll";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { StorefrontGrid } from "@/components/StorefrontGrid";
import IntegrationHero from "@/components/ui/integration-hero";
import { LogoCloud } from "@/components/ui/logo-cloud-2";

export default function Home() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen relative">
      {/* Dynamic background — only active over the storefront grid area */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AnimatePresence>
          {hoveredImage && (
            <motion.div
              key={hoveredImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.12 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${hoveredImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10">
        <Hero />

        <StorefrontGrid onHover={setHoveredImage} />

        {/* Logo Cloud Section */}
        <section id="clients" className="py-24 px-6 border-b border-zinc-900 overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center font-medium text-xl text-zinc-400 tracking-tight md:text-3xl font-hanken">
              Companies we <span className="font-semibold text-white">collaborate</span> with.
            </h2>
            <LogoCloud />
          </div>
        </section>

        {/* Features Scroll Section */}
        <FeatureScroll />

        {/* Integration Hero Section */}
        <IntegrationHero />

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <FAQ />
      </div>
    </main>
  );
}
