# Tech Spec — Advanced Business System

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.0 | UI framework |
| react-dom | ^18.3.0 | DOM renderer |
| gsap | ^3.12.0 | Animation engine (includes ScrollTrigger) |
| lenis | ^1.1.0 | Smooth scroll |
| react-fast-marquee | ^1.6.0 | Services ticker (more reliable than CSS keyframes) |
| lucide-react | ^0.400.0 | Icon library (replaces Font Awesome) |
| tailwindcss | ^3.4.0 | Utility CSS |
| @tailwindcss/typography | ^0.5.0 | Prose styling |

GSAP plugins used: **ScrollTrigger** (included in gsap package, register before use). No Splitting.js — manual word splitting is simpler and sufficient.

---

## Component Inventory

### Layout

| Component | File | Notes |
|-----------|------|-------|
| Navigation | `components/Navigation.tsx` | Fixed header, hide/show on scroll, mobile overlay, smooth-scroll anchor links via Lenis |
| Footer | `components/Footer.tsx` | 4-column layout, staggered entrance |
| FloatingWhatsApp | `components/FloatingWhatsApp.tsx` | Fixed button, pulse ring animation |

### Sections

| Component | File | Notes |
|-----------|------|-------|
| HeroSection | `sections/HeroSection.tsx` | Video background, gradient overlay, blur-reveal headline, CTAs, scroll indicator |
| ServicesTicker | `sections/ServicesTicker.tsx` | react-fast-marquee, scroll-triggered illumination |
| ServicesGrid | `sections/ServicesGrid.tsx` | 5 service cards, 3-col grid, hover lift + image preview |
| AboutSection | `sections/AboutSection.tsx` | Two-col layout, blur-reveal paragraphs, counter stats, orbit SVG |
| GallerySection | `sections/GallerySection.tsx` | 6-item grid, Alba CSS-only hover fade |
| ContactSection | `sections/ContactSection.tsx` | Two-col: form (left) + info card (right) |

### Reusable Components

| Component | File | Used By |
|-----------|------|---------|
| BlurReveal | `components/BlurReveal.tsx` | Hero headline, About paragraphs, section titles |
| SectionHeader | `components/SectionHeader.tsx` | ServicesGrid, About, Gallery, Contact — label + title pattern |
| OrbitGraphic | `components/OrbitGraphic.tsx` | AboutSection — SVG with CSS rotation + dot pulse |
| ScrollIndicator | `components/ScrollIndicator.tsx` | HeroSection — animated line + "SCROLL" text |
| AnimatedCounter | `components/AnimatedCounter.tsx` | AboutSection — counts from 0 to target on scroll |

### Hooks

| Hook | File | Purpose |
|------|------|---------|
| useLenis | `hooks/useLenis.ts` | Initialize Lenis, connect to GSAP ScrollTrigger, expose instance for scroll-to |
| useScrollDirection | `hooks/useScrollDirection.ts` | Track scroll up/down for navbar hide/show |

---

## Animation Implementation

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Blur word reveal | GSAP + ScrollTrigger | Manual word splitting into spans, `gsap.fromTo` with stagger on opacity + filter:blur. Reusable `<BlurReveal>` component accepts blur amount, stagger, duration as props. | Medium |
| Navbar hide/show | CSS + hook | `useScrollDirection` hook tracks last scroll position, toggles CSS class. `translateY` transition. | Low |
| Navbar background transition | CSS + ScrollTrigger | ScrollTrigger watches hero bottom, toggles solid bg + backdrop-blur class. | Low |
| Hero entrance sequence | GSAP timeline | Single timeline: label fade (delay 0.5s) → headline blurReveal (delay 0.8s) → subtitle fadeUp (delay 1.5s) → CTAs fadeUp (delay 2s). Plays once on mount. | Medium |
| Scroll indicator | CSS keyframes | Circle translates down line + fades, 2s infinite. Fade-out on scroll via ScrollTrigger. | Low |
| Services ticker | react-fast-marquee | `<Marquee speed={60} gradient={false}>` with duplicated children. Illumination via Intersection Observer on each word — adds `.illuminated` class when near viewport center. | Medium |
| Service card hover | CSS only | `transition` on background, border, transform, box-shadow. Preview image: absolute positioned, opacity 0→0.2 on hover. | Low |
| Services grid entrance | GSAP + ScrollTrigger | `gsap.from` with stagger 0.1s, fade + translateY(40px). | Low |
| About text entrance | GSAP + ScrollTrigger | Left col: staggered fade + translateX(-30px). Right col: fade + scale(0.8→1). | Low |
| About paragraphs blur reveal | `<BlurReveal>` component | Same reusable component as hero, with ScrollTrigger trigger. | Low |
| Stat counter | GSAP + ScrollTrigger | `gsap.to` on a proxy object, `onUpdate` sets React state. ScrollTrigger once. | Medium |
| Orbit graphic rotation | CSS keyframes | `animation: rotate 60s linear infinite` on SVG container. Dot pulse via CSS keyframes on r + opacity. | Low |
| Gallery Alba hover | CSS only | `.gallery-grid:hover .gallery-item { opacity: 0.3 }` + `.gallery-item:hover { opacity: 1 }` with glow border. Pure CSS, no JS. | Low |
| Gallery entrance | GSAP + ScrollTrigger | Stagger 0.08s, fade + translateY(30px). | Low |
| Contact entrance | GSAP + ScrollTrigger | Left: translateX(-30px), right: translateX(30px), both fade. | Low |
| Footer entrance | GSAP + ScrollTrigger | Columns stagger 0.1s, fade + translateY(20px). | Low |
| WhatsApp pulse | CSS keyframes | Ring scales from 1→1.5 + fades, 2s infinite. Button hover: scale(1.1). | Low |
| Smooth scroll | Lenis | `useLenis` hook initializes instance, connects to ScrollTrigger.update. All anchor links call `lenis.scrollTo()`. | Low |
| Mobile nav overlay | CSS + React state | Full-screen overlay, links stagger in via CSS transition delay. | Low |
| Reduced motion | CSS media query + JS | `prefers-reduced-motion: reduce` disables animations, shows content immediately. Check in `useLenis` (disable) and skip GSAP animations. | Low |

---

## State & Logic

### Lenis Integration

Lenis must be initialized once at app root and its scroll events forwarded to GSAP ScrollTrigger. The instance should be accessible for anchor-link smooth scrolling.

- Initialize in `useLenis` hook at App level
- Store instance in ref (not state — doesn't trigger re-renders)
- `lenis.on('scroll', ScrollTrigger.update)` on init
- Expose `scrollTo(target)` method via ref or context
- RAF loop: `requestAnimationFrame` calls `lenis.raf(time)`
- Destroy on unmount

### Scroll Direction for Navbar

Track in `useScrollDirection`:
- Compare `window.scrollY` against previous value
- Maintain threshold (100px delta before toggling)
- At top (scrollY ≤ 0): always show
- Return `"up" | "down"` string
- Debounce or use requestAnimationFrame for performance

### Ticker Illumination

Intersection Observer per word:
- Observer with `threshold: 0` (fires on any visibility change)
- In callback: calculate distance from word center to viewport center
- If distance < 200px: add `illuminated` class
- Else: remove class
- This runs continuously as the marquee scrolls words through viewport

### Form Handling

Contact form:
- Controlled inputs with React state
- Validation on submit (required fields, email regex)
- Visual error states (red border)
- No backend — form uses `mailto:` action as in original, or show "Coming soon" message
- Prevent default, construct mailto URL with form data, `window.location.href = mailtoUrl`

---

## Other Key Decisions

### Font: Clash Display

Clash Display is a premium variable font. For this build, use **Space Grotesk** from Google Fonts as the geometric sans-serif display font — it's freely available, has similar characteristics (geometric, tech-forward), and supports the weight range needed (400–700). Load via Google Fonts CDN with `font-display: swap`.

If Space Grotesk is not acceptable, **Syne** is another strong alternative.

### Video: Poster Fallback

The hero video asset may not generate reliably. Always provide:
1. Video element with WebM/MP4 sources
2. `poster` attribute pointing to a dark gradient image (can be a CSS gradient div as fallback)
3. If video fails to load, the poster/gradient ensures the hero still looks complete

### No Splitting.js

Manual word splitting is sufficient and avoids an extra dependency. The `<BlurReveal>` component handles splitting text into word spans and running GSAP animation.
