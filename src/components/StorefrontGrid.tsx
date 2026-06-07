"use client";

import { type MotionValue, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface StorefrontGridProps {
  onHover: (src: string | null) => void;
}

export function StorefrontGrid({ onHover }: StorefrontGridProps) {
  const row1Images = ["/hero/1.png", "/hero/2.png", "/hero/3.png", "/hero/4.png"];
  const row2Images = ["/hero/5.png", "/hero/6.png", "/hero/7.png", "/hero/8.png"];

  const row1Loop = [...row1Images, ...row1Images, ...row1Images];
  const row2Loop = [...row2Images, ...row2Images, ...row2Images];

  const x1 = useMotionValue(0);
  const x2 = useMotionValue(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = 280;
  const gap = 8;

  const handleDragEnd = (
    xValue: MotionValue<number>,
    setIndex: (i: number) => void,
    totalItems: number,
  ) => {
    if (viewportWidth >= 768) return;
    const currentX = xValue.get();
    const centerOffset = viewportWidth / 2 - cardWidth / 2;
    const relativeX = currentX - centerOffset;
    const index = Math.round(-relativeX / (cardWidth + gap));
    const clampedIndex = Math.max(0, Math.min(index, totalItems - 1));
    setIndex(clampedIndex);
    const finalX = centerOffset - clampedIndex * (cardWidth + gap);
    xValue.set(finalX);
  };

  return (
    <div id="portfolio" className="relative -mt-10 pb-20 overflow-hidden">
      <div className="flex flex-col gap-2">
        {/* Row 1 - Left to Right */}
        <motion.div
          style={{ x: x1 }}
          drag={viewportWidth < 768 ? "x" : false}
          dragConstraints={{
            left:
              viewportWidth < 768
                ? viewportWidth / 2 - cardWidth / 2 - (row1Loop.length - 1) * (cardWidth + gap)
                : 0,
            right: viewportWidth < 768 ? viewportWidth / 2 - cardWidth / 2 : 0,
          }}
          onDragEnd={() => handleDragEnd(x1, setActiveIndex1, row1Loop.length)}
          className="flex gap-2 whitespace-nowrap md:animate-scroll-left md:drag-none cursor-grab active:cursor-grabbing md:cursor-default"
        >
          {row1Loop.map((src, i) => (
            <motion.div
              key={`row1-${i}`}
              animate={{
                scale: viewportWidth < 768 ? (activeIndex1 === i ? 1.05 : 0.95) : 1,
                opacity: viewportWidth < 768 ? (activeIndex1 === i ? 1 : 0.6) : 1,
              }}
              className="relative h-48 md:h-64 w-[280px] md:w-[480px] bg-zinc-950 flex-shrink-0 shadow-2xl cursor-pointer pointer-events-auto"
              onMouseEnter={() => onHover(src)}
              onMouseLeave={() => onHover(null)}
              onClick={() => onHover(src)}
              style={{ touchAction: "pan-y" }}
            >
              <Image src={src} alt={`Storefront Top ${i}`} fill className="object-cover" />
            </motion.div>
          ))}
        </motion.div>

        {/* Row 2 - Right to Left */}
        <motion.div
          style={{ x: x2 }}
          drag={viewportWidth < 768 ? "x" : false}
          dragConstraints={{
            left:
              viewportWidth < 768
                ? viewportWidth / 2 - cardWidth / 2 - (row2Loop.length - 1) * (cardWidth + gap)
                : 0,
            right: viewportWidth < 768 ? viewportWidth / 2 - cardWidth / 2 : 0,
          }}
          onDragEnd={() => handleDragEnd(x2, setActiveIndex2, row2Loop.length)}
          className="flex gap-2 whitespace-nowrap md:animate-scroll-right md:drag-none cursor-grab active:cursor-grabbing md:cursor-default"
        >
          {row2Loop.map((src, i) => (
            <motion.div
              key={`row2-${i}`}
              animate={{
                scale: viewportWidth < 768 ? (activeIndex2 === i ? 1.05 : 0.95) : 1,
                opacity: viewportWidth < 768 ? (activeIndex2 === i ? 1 : 0.6) : 1,
              }}
              className="relative h-48 md:h-64 w-[280px] md:w-[480px] bg-zinc-950 flex-shrink-0 shadow-2xl cursor-pointer pointer-events-auto"
              onMouseEnter={() => onHover(src)}
              onMouseLeave={() => onHover(null)}
              onClick={() => onHover(src)}
              style={{ touchAction: "pan-y" }}
            >
              <Image src={src} alt={`Storefront Bottom ${i}`} fill className="object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Side gradients */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    </div>
  );
}
