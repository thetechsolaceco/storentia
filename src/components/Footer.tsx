'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

/* Inline SVG social icons — lucide-react doesn't include brand icons */
const TwitterX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const NAV = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Integrations', href: '/integrations' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api' },
      { label: 'Community', href: '/community' },
      { label: 'Status', href: 'https://status.storentia.com', external: true },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
];

const SOCIALS = [
  { Icon: TwitterX, label: 'Twitter / X', href: 'https://twitter.com/storentia' },
  { Icon: GitHubIcon, label: 'GitHub', href: 'https://github.com/storentia' },
  { Icon: LinkedInIcon, label: 'LinkedIn', href: 'https://linkedin.com/company/storentia' },
  { Icon: YouTubeIcon, label: 'YouTube', href: 'https://youtube.com/@storentia' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact-us" className="relative bg-black border-t border-zinc-900 overflow-hidden">

      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-1"
          >
            <Link href="/" className="relative inline-block h-7 w-28 mb-6">
              <Image
                src="/logo-white.png"
                alt="Storentia"
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-zinc-500 text-sm font-roboto leading-relaxed max-w-xs">
              The commerce platform built for speed, scale, and beautiful storefronts.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-8">
              {SOCIALS.map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-white transition-all duration-200"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Nav columns */}
          <div className="lg:col-span-4 flex flex-wrap justify-start sm:justify-end gap-[10px]">
            {NAV.map(({ heading, links }, gi) => (
              <motion.div
                key={heading}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: gi * 0.07,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-col items-start text-left min-w-[140px] sm:min-w-[160px]"
              >
                <p className="text-white text-xs font-medium font-roboto uppercase tracking-widest mb-5">
                  {heading}
                </p>
                <ul className="space-y-3">
                  {links.map(({ label, href, external }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="text-zinc-500 text-sm font-roboto hover:text-white transition-colors duration-200"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-center">
          <p className="text-zinc-600 text-xs font-roboto text-center">
            © {year} Storentia, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
