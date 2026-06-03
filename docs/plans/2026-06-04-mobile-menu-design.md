# Mobile Menu Full-Screen Overlay Design

**Feature:** Responsive Header with Mobile Menu
**Approach:** Full-screen overlay using Framer Motion for smooth entry/exit.

## Layout
- **Mobile (Default):**
  - Logo on left.
  - Hamburger icon (3 lines) on right.
  - Desktop nav links and "Log in" button hidden.
  - "Sign up" button remains (smaller or moved to menu).
- **Overlay:**
  - Active when `isMenuOpen` is true.
  - Covers entire viewport (`fixed inset-0`).
  - Centered navigation links (large font size).
  - "Close" icon (X) at top right.
  - Log in / Sign up buttons at bottom of list.

## Motion (Framer Motion)
- **Overlay:** Fade in/out.
- **Menu Items:** Staggered slide up from bottom.
- **Hamburger to X:** Simple icon swap or animated path transition.

## Implementation Details
- State: `useState` for `isMenuOpen`.
- Body lock: Prevent scrolling when menu open.
- Transitions: Use `AnimatePresence` for exit animations.
