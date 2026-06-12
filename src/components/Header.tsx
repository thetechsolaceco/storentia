"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Pricing", "Experience", "Portfolio", "Clients", "FAQ"];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
// Header
  const scrollToId = useCallback((targetId: string) => {
    const element = document.getElementById(targetId);
    if (!element) return false;

    const headerOffset = 90;
    const offsetPosition = element.getBoundingClientRect().top + window.scrollY - headerOffset;
    const startY = window.scrollY;
    const difference = offsetPosition - startY;
    const duration = 600;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

    const animateScroll = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + difference * easeInOutCubic(progress));
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        window.history.pushState(null, "", `#${targetId}`);
      }
    };

    requestAnimationFrame(animateScroll);
    return true;
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      if (!scrollToId(targetId)) {
        router.push(`/#${targetId}`);
      }
    },
    [router, scrollToId],
  );

  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (window.location.pathname !== "/") {
        router.push("/");
        return;
      }

      const startY = window.scrollY;
      const duration = 600;
      const startTime = performance.now();
      const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

      const animateScroll = () => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY * (1 - easeInOutCubic(progress)));
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          window.history.pushState(null, "", "/");
        }
      };

      requestAnimationFrame(animateScroll);
    },
    [router],
  );

  if (!mounted) return null;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 dark:bg-black/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo - Left */}
          <div className="md:w-1/4 w-auto">
            <Link href="/" onClick={handleLogoClick} className="relative h-8 w-24 block">
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
                const targetId = link.toLowerCase().replace(/\s+/g, "-");
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
            <Link
              href="https://dashboard.storentia.com/login"
              className="group inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-semibold text-xs md:text-sm hover:bg-zinc-100 transition-all duration-200 hidden sm:flex whitespace-nowrap"
            >
              Get Started
              <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
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
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="flex flex-col items-center gap-8"
              >
                {navLinks.map((link) => {
                  const targetId = link.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <motion.div
                      key={link}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
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
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex flex-col items-center gap-6 mt-8"
                >
                  <Link
                    href="https://dashboard.storentia.com/login"
                    onClick={() => setIsOpen(false)}
                    className="group inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-all duration-200"
                  >
                    Get Started
                    <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
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
