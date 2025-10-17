# Website Style Guide (Memory)

Yeh document hamari website ki look & feel ko yaad rakhne ke liye hai. Isay team regular update karey taki design consistency rahe.

---

## 1) Brand Overview
- Brand Name: [TODO]
- Tagline: [TODO]
- Brand Voice: [Friendly / Professional / Minimal]
- Core Values: [Trust, Speed, Quality]

## 2) Color Palette
Primary aur secondary colors ka istemal consistent rakhein.

- Primary: [#0EA5E9] (Example: Sky Blue)
- Secondary: [#111827] (Example: Dark Gray)
- Accent: [#F59E0B] (Example: Amber)
- Background: [#FFFFFF] (Light) / [#0B1324] (Dark)
- Surface: [#F3F4F6] (Light Gray)
- Text Colors:
  - Heading: [#0F172A]
  - Body: [#334155]
  - Muted: [#64748B]
- State Colors:
  - Success: [#22C55E]
  - Warning: [#F59E0B]
  - Error: [#EF4444]
Notes:
- Contrast ratio AA/AAA maintain (min 4.5:1 for body text).

## 3) Typography
- Font Family: [Inter / Poppins / System UI] (TODO)
- Sizes (Desktop):
  - H1: 48px / 56px
  - H2: 36px / 44px
  - H3: 28px / 36px
  - Body: 16px / 24px
  - Small: 14px / 20px
- Weights: 
  - Headings: 600–700
  - Body: 400–500
- Letter spacing:
  - Headings: -0.01em
  - Body: 0
- Usage:
  - H1 sirf page main title ke liye.
  - H2 section headings.
  - H3 sub-sections.

## 4) Spacing & Layout
- Container Max-Width: 1200px (Desktop), 100% (Mobile)
- Grid: 12-column (Desktop), 4-column (Mobile)
- Spacing Scale: 4, 8, 12, 16, 24, 32, 48, 64
- Section Padding:
  - Desktop: 64px top/bottom
  - Mobile: 32px top/bottom

## 5) Breakpoints
- xs: <480px (Mobile small)
- sm: ≥640px
- md: ≥768px
- lg: ≥1024px
- xl: ≥1280px
- 2xl: ≥1536px
Rules:
- Images responsive, no horizontal scroll.
- Navigation collapse to hamburger at md.

## 6) Components

### Header
- Height: 64px
- Background: Transparent on Hero, Solid [#FFFFFF] on scroll
- Logo Left, Nav Center/Right, CTA Right (Shopify/Contact)
- Sticky: Yes
- Shadow on scroll: subtle (e.g., 0 2px 8px rgba(0,0,0,0.06))

### Navbar
- Links: Home, Services, Shopify Development, About, Blog, Contact
- Hover: Underline or color change to Primary
- Active: Bold + indicator (2px bottom border Primary)

### Hero Section
- Layout: Left content, Right image/illustration
- Title H1, Subtitle body, CTA Buttons: Primary + Secondary
- Background: Light gradient or subtle pattern
- Safe area top-padding to avoid overlapping sticky header

### Buttons
- Primary: Background Primary, Text White, Radius 8px
- Secondary: Outline Primary, Text Primary, Radius 8px
- Hover: Slight scale (1.02) + shadow
- Disabled: opacity 0.6, cursor not-allowed

### Cards
- Surface: White, Radius 12px, Shadow soft
- Padding: 24px
- Hover: Lift 4px, shadow increase

### Forms
- Inputs: Radius 8px, Border [#E5E7EB], Focus ring Primary
- Labels: 14px, Medium
- Validation: Error text [#EF4444], icon optional

### Footer
- Background: [#0B1324], Text [#CBD5E1]
- Columns: About, Links, Resources, Contact
- Bottom bar: © Year Brand. Social icons right.

### Badges/Chips
- Radius: 999px
- Background: [#E0F2FE] for highlights

### Alerts
- Success/Warning/Error per state colors
- Icon + message + close button

## 7) Icons & Imagery
- Icon set: [Lucide / Heroicons] (TODO)
- Line style: 1.5–2px, rounded ends
- Illustration style: Minimal, tech-focused
- Image aspect ratios: 16:9 hero, 1:1 avatars, 4:3 cards
- Do not use heavy stock photos; prefer clean mockups.

## 8) Content Guidelines
- Tone: Friendly + Expert
- Headings short and benefit-focused
- Avoid jargon; explain Shopify features simply
- CTA verbs: “Get a Quote”, “Start Project”, “Talk to Expert”
- List benefits in bullets (3–5 points)

## 9) Interactions & Motion
- Duration: 150–250ms
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Use subtle parallax in hero (optional)
- Reduce motion for prefers-reduced-motion

## 10) Accessibility
- Keyboard focus visible (outline Primary)
- Alt text for all images
- Semantic tags: header, nav, main, section, footer
- Form labels associated with inputs
- Color contrast AA minimum

## 11) SEO Basics
- Unique meta title/description per page
- H1 once per page
- Structured data for Services/Organization (later)
- Performance: optimize images, lazy-load below fold

## 12) Pages Overview

### Home
- Hero: Strong value prop + 2 CTAs
- Highlights: 3–6 cards (services/features)
- Social proof: testimonials/logos
- CTA strip: “Get Started”

### Services
- Grid cards: title + short desc + learn more
- Detail pages with FAQs and CTA

### Shopify Development
- Benefits list (speed, conversions, custom themes)
- Case studies or feature list
- Primary CTA: “Discuss Your Store”

### About
- Mission, team highlights, timeline
- Photo style: minimal, consistent

### Contact
- Form (Name, Email, Message)
- Map (optional), Contact info, WhatsApp link

### Blog (optional)
- List with tags, clean card layout
- Read time shown

## 13) Reusable Content Blocks
- Stats block (numbers + captions)
- Testimonial slider
- Feature list with icons (3-col grid)
- Pricing table (if needed)

## 14) Do’s & Don’ts
- Do: enough whitespace, clear hierarchy
- Don’t: too many font sizes, harsh shadows, low contrast

## 15) Future Notes / TODO
- Finalize font family after team review
- Collect 3 brand images for hero/cards
- Decide icon set (Lucide/Heroicons)
- Add component code snippets later (if needed)

---

## Quick Checklist
- [ ] Header sticky + clean
- [ ] Consistent colors and typography
- [ ] Mobile menus and CTAs clear
- [ ] Cards have uniform padding/radius
- [ ] Forms accessible + validation
- [ ] Footer comprehensive + social
- [ ] Performance & SEO basics covered

Last updated: [Add date]
Owner: [Your Name]