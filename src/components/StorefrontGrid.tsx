'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface StorefrontGridProps {
  onHover: (src: string | null) => void;
}

export function StorefrontGrid({ onHover }: StorefrontGridProps) {
  const row1Images = ['/hero/1.png', '/hero/2.png', '/hero/3.png', '/hero/4.png'];
  const row2Images = ['/hero/5.png', '/hero/6.png', '/hero/7.png', '/hero/8.png'];

  const row1Loop = [...row1Images, ...row1Images, ...row1Images];
  const row2Loop = [...row2Images, ...row2Images, ...row2Images];

  return (
    <div id="portfolio" className="relative -mt-10 pb-20 overflow-hidden">
      <div className="flex flex-col gap-2">
        {/* Row 1 - Left to Right */}
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-33.33%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-2 whitespace-nowrap"
        >
          {row1Loop.map((src, i) => (
            <div 
              key={`row1-${i}`} 
              className="relative h-48 md:h-64 w-[320px] md:w-[480px] bg-zinc-950 flex-shrink-0 shadow-2xl cursor-pointer pointer-events-auto"
              onMouseEnter={() => onHover(src)}
              onMouseLeave={() => onHover(null)}
            >
              <Image
                src={src}
                alt={`Storefront Top ${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Right to Left */}
        <motion.div 
          initial={{ x: "-33.33%" }}
          animate={{ x: 0 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-2 whitespace-nowrap"
        >
          {row2Loop.map((src, i) => (
            <div 
              key={`row2-${i}`} 
              className="relative h-48 md:h-64 w-[320px] md:w-[480px] bg-zinc-950 flex-shrink-0 shadow-2xl cursor-pointer pointer-events-auto"
              onMouseEnter={() => onHover(src)}
              onMouseLeave={() => onHover(null)}
            >
              <Image
                src={src}
                alt={`Storefront Bottom ${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Side gradients */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    </div>
  );
}
