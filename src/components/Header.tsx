"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const navLinks = ["Pricing", "Experience", "Portfolio", "Clients", "FAQ"];

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToId = (targetId: string) => {
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
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (!scrollToId(targetId)) {
      router.push(`/#${targetId}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 dark:bg-black/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Left */}
        <div className="w-1/4">
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
        <nav className="flex-1 flex justify-center overflow-hidden">
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
        <div className="w-1/4 flex items-center justify-end gap-4 lg:gap-6 text-sm">
          <Link
            href="/contact"
            className="text-white px-5 py-2 rounded-full font-medium border border-zinc-800 hover:bg-zinc-900 transition-all whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
