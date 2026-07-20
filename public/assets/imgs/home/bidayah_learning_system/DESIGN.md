---
name: Bidayah Learning System
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#414751'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#717783'
  outline-variant: '#c1c7d3'
  surface-tint: '#0060ac'
  primary: '#005da7'
  on-primary: '#ffffff'
  primary-container: '#2976c7'
  on-primary-container: '#fdfcff'
  inverse-primary: '#a4c9ff'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fdd73b'
  on-secondary-container: '#715d00'
  tertiary: '#006b28'
  on-tertiary: '#ffffff'
  tertiary-container: '#21863b'
  on-tertiary-container: '#f7fff2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a4c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004883'
  secondary-fixed: '#ffe173'
  secondary-fixed-dim: '#e8c426'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#554500'
  tertiary-fixed: '#96f89f'
  tertiary-fixed-dim: '#7bdb85'
  on-tertiary-fixed: '#002107'
  on-tertiary-fixed-variant: '#00531d'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The brand identity centers on the concept of "new beginnings," blending professional educational standards with a playful, nurturing atmosphere. The design system prioritizes a **Modern-Playful** aesthetic, utilizing high-quality whitespace to ensure information remains clear for parents while incorporating soft, organic shapes that resonate with early childhood development.

The UI should feel:
- **Nurturing:** Soft edges and warm tones that evoke safety and care.
- **Optimistic:** Bright, vibrant accents that symbolize growth and potential.
- **Professional:** Precise alignment and generous spacing to instill trust in the curriculum.

Visuals should feature authentic photography of children engaged in "purposeful play," framed within rounded containers or organic "blob" masks to break the rigidity of standard grids.

## Colors

The palette is inspired by a vibrant classroom environment, balanced against a clean, "Paper White" background (#FFFFFF) to maintain a modern feel.

- **Sky Blue (Primary):** Used for primary actions, navigation, and core branding. It represents stability and calm.
- **Sunny Yellow (Secondary):** Used for highlights, decorative accents, and "Joy" moments. High-contrast text should be used over this color for accessibility.
- **Leaf Green (Tertiary):** Dedicated to growth-related content, health, and outdoor activity sections.
- **Warm Orange (Accent):** Reserved for notifications, urgent calls to action, or small playful details.
- **Neutral:** A deep charcoal instead of pure black is used for typography to keep the interface soft and readable.

## Typography

This design system uses a pairing of **Plus Jakarta Sans** for headlines and **Be Vietnam Pro** for body text. 

Headlines utilize the rounded terminals of Plus Jakarta Sans to feel welcoming yet structured. Weight is used heavily to create a clear information hierarchy. Body text in Be Vietnam Pro provides excellent legibility for long-form parent handbooks and curriculum descriptions. 

For mobile, headlines scale down aggressively to ensure they remain on 2-3 lines max, preventing excessive scrolling. Always use "Optical" kerning and ensure a minimum contrast ratio of 4.5:1 for all text elements.

## Layout & Spacing

The design system utilizes a **Fluid Grid** model with a 12-column structure for desktop and a 4-column structure for mobile. 

Spacing is governed by an 8px linear scale. Large vertical "breathing room" (XL spacing) is encouraged between major sections to mimic the open feel of a modern classroom. 

- **Desktop:** 12 columns, 24px gutters, 64px side margins.
- **Mobile:** 4 columns, 16px gutters, 16px side margins.
- **Alignment:** Center-align marketing content for a friendly, editorial feel; left-align data-heavy portals (like attendance or grades) for professional efficiency.

## Elevation & Depth

To maintain a soft and friendly appearance, the design system avoids harsh, dark shadows. Instead, it uses **Ambient Tonal Shadows**:

1.  **Level 1 (Resting):** Very soft, wide-spread shadows with a hint of the primary blue color in the shadow's tint (e.g., `rgba(74, 144, 226, 0.08)`).
2.  **Level 2 (Hover/Active):** Increased blur and slightly more opacity to simulate the element lifting toward the user.
3.  **Floating Elements:** Use a subtle background blur (10px) behind navigation bars to maintain context of the playful background illustrations.

Avoid using borders for depth; rely on color blocks and soft shadows to define container boundaries.

## Shapes

The shape language is defined by **Rounded (0.5rem base)** corners. This creates a "child-safe" visual metaphor where no sharp edges exist.

- **Standard Buttons & Inputs:** 0.5rem (8px)
- **Cards & Large Containers:** 1rem (16px)
- **Feature Chips & Tags:** Full pill-shape (999px)
- **Illustrations:** Use "Squircle" masks for photos of children to add a premium, modern touch that feels softer than a standard circle.

## Components

### Buttons
Buttons are large (minimum 48px height for mobile tap targets). Use a "bouncy" hover transition (Scale 1.02x). Primary buttons use the Sky Blue; Secondary buttons use a "Ghost" style with a 2px Sky Blue border.

### Cards
Cards should have a white background with a Level 1 shadow. Top corners can occasionally feature a "dog-ear" fold or a small colorful accent strip (Yellow or Green) to categorize content types.

### Input Fields
Inputs should have a light grey fill (#F5F7FA) and a 2px border that turns Sky Blue on focus. Labels always sit above the field in a bold weight for maximum clarity for busy parents.

### Progress Indicators
For child development tracking, use "Sprout" icons or rounded progress bars that transition from Orange to Green as tasks are completed.

### Navigation
The main navigation should use a "Sticky" top bar with a glassmorphism effect, ensuring parents can always access the "Contact" or "Enroll" buttons.