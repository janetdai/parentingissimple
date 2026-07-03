---
name: Parenting is Simple Modernized
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1b1c1b'
  on-surface-variant: '#424844'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#727973'
  outline-variant: '#c2c8c2'
  surface-tint: '#4c6455'
  primary: '#4c6455'
  on-primary: '#ffffff'
  primary-container: '#8fa998'
  on-primary-container: '#273e31'
  inverse-primary: '#b2cdbb'
  secondary: '#725a41'
  on-secondary: '#ffffff'
  secondary-container: '#ffdcbd'
  on-secondary-container: '#796046'
  tertiary: '#785656'
  on-tertiary: '#ffffff'
  tertiary-container: '#c29999'
  on-tertiary-container: '#4f3132'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cee9d6'
  primary-fixed-dim: '#b2cdbb'
  on-primary-fixed: '#082014'
  on-primary-fixed-variant: '#344c3e'
  secondary-fixed: '#ffdcbd'
  secondary-fixed-dim: '#e1c1a2'
  on-secondary-fixed: '#291805'
  on-secondary-fixed-variant: '#59422b'
  tertiary-fixed: '#ffdad9'
  tertiary-fixed-dim: '#e8bcbc'
  on-tertiary-fixed: '#2d1415'
  on-tertiary-fixed-variant: '#5e3f3f'
  background: '#faf9f6'
  on-background: '#1b1c1b'
  surface-variant: '#e3e2e0'
  sage-green: '#8FA998'
  warm-sand: '#F2E8DF'
  sky-mist: '#D1E3E7'
  calm-navy: '#2C3E50'
  soft-blush: '#F5E1DA'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is built on a "Lifestyle Support System" philosophy, moving away from sterile clinical aesthetics toward a nurturing, minimal, and warm environment. The brand personality is professional yet deeply approachable, acting as a "calm companion" for parents.

The chosen style is **Modern Minimalist with Tactile Warmth**. It emphasizes heavy whitespace to reduce cognitive load for busy parents, utilizing soft "emotionally cooling" tones and significant roundedness to evoke safety and gentleness. The visual narrative shifts from "problem-solving" to "growth-nurturing," creating a stress-free digital sanctuary.

## Colors

The palette is designed for "Emotional Cooling." 
- **Primary (Sage Green):** Represents growth and stability; used for primary actions and brand presence.
- **Secondary (Warm Sand):** Provides a grounding, organic feel for backgrounds and secondary elements.
- **Tertiary (Sky Mist):** A cooling accent for highlights and information banners.
- **Neutral:** A deep navy is used for text to maintain high readability without the harshness of pure black, while soft off-whites replace stark white backgrounds to prevent eye strain.

## Typography

This design system uses a combination of **Plus Jakarta Sans** for headlines and labels—providing a friendly, rounded geometric feel—and **Be Vietnam Pro** for body text to ensure maximum readability and warmth in Traditional Chinese and English contexts.

Typography follows a clear hierarchy to minimize mental load. Large headlines are reserved for brand-building and section anchors, while body text uses generous line-heights (1.6) to ensure a comfortable reading experience for parents who may be multi-tasking.

## Layout & Spacing

The layout follows a **Fixed-Width Centered Grid** on desktop (12 columns) and a **Fluid Single Column** on mobile. 

- **The "Three-Click Trust" Principle:** Information is grouped logically so users can find key services or book a consultation within three clicks.
- **Whitespace as a Feature:** Large vertical gaps (`section-gap`) are used between major content areas to prevent visual clutter and give the content "room to breathe."
- **Content Reflow:** On tablet, the 12-column grid transitions to a 2-column service card layout, maintaining large touch targets for easy navigation.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Soft Ambient Shadows**. 

- **Surface Strategy:** Backgrounds use `Warm Sand` or `Sky Mist` to define areas without using hard lines.
- **Shadows:** Only used on high-priority interactive cards and primary buttons. Shadows are extremely diffused, low-opacity, and tinted with the primary color (Sage Green) rather than gray, creating a "soft-floating" effect.
- **Interaction Depth:** Hover states on cards use a slight upward translation (4px) and an increased shadow spread to simulate a physical, tactile lift.

## Shapes

The shape language is defined by **Soft, Large Radii**. 
- **Large Components:** Cards and main sections use `rounded-xl` (1.5rem/24px) to remove all "clinical" sharpness.
- **Buttons and Chips:** Use `rounded-lg` (1rem/16px) or full pill shapes to feel safe and inviting.
- **Visual Metaphor:** The "Gentle Wave" from the original logo is reinterpreted as a subtle background pattern or a masking shape for images, reinforcing the fluid, organic nature of child development.

## Components

- **Buttons:** Primary buttons are pill-shaped with a solid `Sage Green` fill and white text. Secondary buttons use an outline of `Warm Sand` with a subtle hover fill.
- **Cards (Service Pillars):** Features large image areas with 24px rounded corners. Titles are placed inside the card with significant padding (32px) to ensure a clean, lifestyle-magazine feel.
- **Input Fields:** Soft-tinted backgrounds (Sky Mist) with no borders, using only a subtle bottom line or a change in background intensity on focus to maintain a minimal look.
- **Chips/Tags:** Used for "Parenting Topics" or "Clinical Qualifications," featuring soft pastel backgrounds and rounded-full (pill) shapes.
- **Navigation:** A "sticky" header that transitions from transparent to a semi-transparent `Warm Sand` blur to maintain a lightweight feel throughout the scroll.