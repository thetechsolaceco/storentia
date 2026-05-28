# Header & Hero Implementation Plan

> **For Gemini:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a high-fidelity header and hero section matching the Framer landing page.

**Architecture:** Create modular `Header` and `Hero` components in `src/components`. Use `framer-motion` for animations.

**Tech Stack:** Next.js 16, Tailwind CSS 4, Framer Motion, React Icons.

---

### Task 1: Create Header Component

**Files:**
- Create: `src/components/Header.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Write minimal implementation**

```tsx
import Link from 'next/link';

export function Header() {
  const navLinks = ['Product', 'Teams', 'Resources', 'Community', 'Support', 'Enterprise', 'Pricing'];
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/10">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-2xl font-bold">F</Link>
        <nav className="hidden md:flex gap-6 text-sm text-zinc-400">
          {navLinks.map(link => <Link key={link} href="#" className="hover:text-white transition-colors">{link}</Link>)}
        </nav>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <Link href="#" className="text-white">Log in</Link>
        <Link href="#" className="bg-white text-black px-4 py-2 rounded-full font-medium">Sign up</Link>
      </div>
    </header>
  );
}
```

**Step 2: Add to Page**

```tsx
import { Header } from '@/components/Header';
// ... import Hero when ready
```

**Step 3: Commit**

```bash
git add src/components/Header.tsx src/app/page.tsx
git commit -m "feat: add sticky header component"
```

### Task 2: Create Hero Section

**Files:**
- Create: `src/components/Hero.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Implementation with Framer Motion**

```tsx
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
```

**Step 2: Commit**

```bash
git add src/components/Hero.tsx src/app/page.tsx
git commit -m "feat: add hero section with stagger animations"
```
