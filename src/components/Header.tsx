'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Pricing', 'Experience', 'Portfolio', 'Clients', 'FAQ'];

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 90; // matches scroll-padding-top
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      const startY = window.scrollY;
      const difference = offsetPosition - startY;
      const duration = 600; // Constant 600ms scroll transition
      const startTime = performance.now();

      const easeInOutCubic = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animateScroll = () => {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startY + difference * ease);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          window.history.pushState(null, '', `#${targetId}`);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const startY = window.scrollY;
    const duration = 600;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animateScroll = () => {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startY * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        window.history.pushState(null, '', '/');
      }
    };

    requestAnimationFrame(animateScroll);
  };

  if (!mounted) return null;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 dark:bg-black/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo - Left */}
          <div className="md:w-1/4 w-auto">
            <Link 
              href="/" 
              onClick={handleLogoClick}
              className="relative h-8 w-24 block"
            >
              <Image
                src="/logo-white.png"
                alt="Storentia Logo"
                fill
                className="object-contain transition-all duration-300"
                priority
              />
            </Link>
          </div>

          {/* Centered Menu - Strictly single line */}
          <nav className="flex-1 hidden md:flex justify-center overflow-hidden">
            <ul className="flex items-center gap-x-6 lg:gap-x-10 text-[13px] font-medium text-zinc-400">
              {navLinks.map((link) => {
                const targetId = link.toLowerCase().replace(/\s+/g, '-');
                return (
                  <li key={link}>
                    <Link 
                      href={`#${targetId}`} 
                      onClick={(e) => handleNavClick(e, targetId)}
                      className="hover:text-white transition-colors whitespace-nowrap"
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          {/* Actions - Right */}
          <div className="md:w-1/4 w-auto flex items-center justify-end gap-4 lg:gap-6 text-sm">
            <Link href="#" className="text-zinc-400 hover:text-white transition-colors hidden sm:block whitespace-nowrap">
              Log in
            </Link>
            <Link 
              href="#" 
              className="text-white px-5 py-2 rounded-full font-medium border border-zinc-800 hover:bg-zinc-900 transition-all hidden sm:block whitespace-nowrap"
            >
              Sign up
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-zinc-400 hover:text-white transition-colors focus:outline-none relative z-[70] ml-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-zinc-950 flex flex-col items-center justify-center"
          >
            {/* Explicit Close Button for Overlay */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col items-center gap-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="flex flex-col items-center gap-8"
              >
                {navLinks.map((link) => {
                  const targetId = link.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <motion.div
                      key={link}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <Link
                        href={`#${targetId}`}
                        onClick={(e) => {
                          setIsOpen(false);
                          handleNavClick(e, targetId);
                        }}
                        className="text-4xl font-medium text-zinc-400 hover:text-white transition-colors"
                      >
                        {link}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="flex flex-col items-center gap-6 mt-8"
                >
                  <Link 
                    href="#" 
                    onClick={() => setIsOpen(false)}
                    className="text-2xl text-zinc-400 hover:text-white transition-colors"
                  >
                    Log in
                  </Link>
                  <Link 
                    href="#" 
                    onClick={() => setIsOpen(false)}
                    className="text-2xl text-white px-8 py-3 rounded-full font-medium border border-zinc-800 hover:bg-zinc-900 transition-all"
                  >
                    Sign up
                  </Link>
                </motion.div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
