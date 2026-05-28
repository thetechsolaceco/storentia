# Storentia Header & Hero Design

**Date:** 2026-05-28
**Topic:** Header and Hero Section Implementation (Framer Clone)

## Overview
Recreate the Framer landing page header and hero section for Storentia using Next.js, Tailwind CSS 4, and Framer Motion.

## Design Specifications

### 1. Global Styles
- **Background**: Deep black (#000000 or --background from globals.css).
- **Foreground**: White for headings, Zinc-400 for secondary text.
- **Typography**: Primary font Hanken Grotesk, Secondary font Roboto.

### 2. Header Component
- **Position**: Sticky/Fixed top, `backdrop-blur-md` background.
- **Logo**: Storentia logo (or placeholder 'F' icon from image) on the left.
- **Navigation**: Centered list of links: Product, Teams, Resources, Community, Support, Enterprise, Pricing.
- **Actions**: Right-aligned "Log in" link and "Sign up" pill-shaped button (White background, black text).

### 3. Hero Section
- **Announcement Bar**: "Introducing the F1 Keyboard — Pre order now" in centered, subtle gray text.
- **Main Heading**: "Build better sites, faster" in large, bold white text. Staggered fade-up animation.
- **Body Text**: Descriptive paragraph about the platform's speed and features, centered Zinc-400 text.
- **CTAs**: 
    - "Start for free": Rounded pill button, white background, black text.
    - "Start with AI": Rounded pill button, bordered/glass effect.

### 4. Interactions
- **Reveal**: Use `framer-motion` to animate elements into view (y-axis translation + opacity).
- **Hover**: Subtle scaling or opacity changes on nav links and buttons.

## Testing Strategy
- **Visual Regression**: Manual comparison with reference image.
- **Component Tests**: Ensure links are present and buttons are clickable.
- **Responsive**: Verify layout holds on mobile (hamburger menu for header).
