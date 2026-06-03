# Mobile Menu Implementation Plan

> **For Gemini:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add responsive mobile menu with full-screen overlay and Framer Motion animations.

**Architecture:** Use `useState` in `Header.tsx` for menu toggle. `AnimatePresence` for overlay. Framer Motion for staggered link animations.

**Tech Stack:** Next.js, Tailwind 4, Framer Motion, Lucide React icons.

---

### Task 1: Setup State and Icons

**Files:**
- Modify: `src/components/Header.tsx`

**Step 1: Import icons and state**
Add `Menu`, `X` from `lucide-react`. Add `isOpen` state.

**Step 2: Add Toggle Button**
Render hamburger icon on mobile (`md:hidden`).

**Step 3: Commit**
`git commit -m "feat(header): add menu state and toggle button"`

---

### Task 2: Mobile Overlay Layout

**Files:**
- Modify: `src/components/Header.tsx`

**Step 1: Add Overlay Component**
Create full-screen `fixed` div visible when `isOpen` true.

**Step 2: Add Mobile Links**
Map `navLinks` inside overlay with large text.

**Step 3: Commit**
`git commit -m "feat(header): add mobile menu overlay layout"`

---

### Task 3: Framer Motion Animations

**Files:**
- Modify: `src/components/Header.tsx`

**Step 1: Wrap with AnimatePresence**
Enable exit animations.

**Step 2: Add Motion to Overlay**
Fade in/out.

**Step 3: Add Staggered Links**
Slide links up with delay.

**Step 4: Commit**
`git commit -m "feat(header): add framer motion animations"`

---

### Task 4: Responsive Styling

**Files:**
- Modify: `src/components/Header.tsx`

**Step 1: Hide Desktop Nav**
Add `hidden md:flex` to existing nav.

**Step 2: Fix Logo/Action visibility**
Adjust widths for mobile.

**Step 3: Commit**
`git commit -m "style(header): finalize responsive visibility"`
