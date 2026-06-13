# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single-page professional website for **Advanced Business System Pty Ltd**, a technology and electrical solutions company based in Queenstown, South Africa.

**Tech Stack:**
- Pure HTML5, CSS3, Vanilla JavaScript (no frameworks)
- Single `index.html` file with embedded `<style>` and `<script>` tags
- External dependencies: Font Awesome (CDN), Google Fonts (CDN) only
- Mobile-first responsive design

**Architecture:**
- All code lives in a single `index.html` file
- CSS in `<style>` tag within `<head>`
- JavaScript in `<script>` tag before `</body>`
- No build process, no bundlers — pure static HTML

## Running the Project

Simply open `index.html` in a browser. For development with live reload:

```bash
# Using Python (if available)
python3 -m http.server 8000

# Using PHP (if available)
php -S localhost:8000

# Then open http://localhost:8000
```

## Business Information

- **Business Name:** Advanced Business System Pty Ltd
- **Tagline:** "Your Trusted Technology & Electrical Solutions Partner"
- **Location:** Queenstown, South Africa
- **Phone:** +27 84 890 5690
- **Email:** lastvheremu1@gmail.com
- **WhatsApp Catalogue:** https://wa.me/c/27848905690

**Services Offered:**
1. Computer Repair
2. CCTV Installation
3. DSTV Installation
4. Solar Lights (indoor & outdoor)
5. Electrical Accessories

## Design System

### Color Palette (Africa-inspired, bold & modern)
```css
--primary: #C85A00;          /* Deep Burnt Orange */
--secondary: #3E1F00;        /* Rich Earth Brown */
--accent: #F5A623;           /* Golden Savanna */
--bg-dark: #1A0A00;
--bg-light: #FFF8F2;
--text-dark: #FFFFFF;
--text-light: #1A0A00;
```

### Typography
- **Headings:** "Bebas Neue" or "Oswald" (Google Fonts) — bold, strong
- **Body:** "Inter" or "Lato" (Google Fonts) — clean, readable

### Design Principles
- Bold & modern with African warmth
- Subtle African geometric/tribal patterns (CSS-generated or inline SVG)
- Card-based service sections with hover effects (lift shadow + accent border)
- Smooth scroll behavior between sections

## Page Structure

The single-page layout contains these sections in order:

1. **Navbar** — Fixed top navigation with logo, nav links (Home | Services | About | Gallery | Contact), hamburger menu on mobile, sticky with slight blur on scroll

2. **Hero Section** — Full viewport height, headline "Technology & Electrical Solutions You Can Trust", subheadline mentioning Queenstown, two CTA buttons (View Services, WhatsApp), African geometric pattern overlay, animated fade-in

3. **Services Section** — "What We Do" title, 5 service cards in responsive grid (2-3 columns desktop, 1 column mobile), each card has icon, title, 2-sentence description, "Get a Quote" button

4. **About Section** — Two-column layout, "About Advanced Business System" headline, 2-3 paragraphs about the company, 3 stat highlights (e.g., "500+ Clients Served"), decorative African pattern/tech graphic on right

5. **Gallery/Portfolio Section** — "Our Work" title, 6 placeholder cards with CSS gradient backgrounds and Font Awesome icons (labeled: Computer Repair, CCTV Setup, DSTV Install, Solar Lighting, Electrical Work, Security System)
   - **Note:** Contains comment `<!-- Replace gradient placeholders with real project photos -->`

6. **Contact Section** — "Get In Touch" title, two-column layout:
   - **Left:** Contact form (Full Name, Phone, Email, Service dropdown, Message, Submit button)
   - **Right:** Contact info card (phone, email, location, WhatsApp Catalogue link, operating hours: Mon–Sat 8AM–6PM)
   - Form submits via `mailto:lastvheremu1@gmail.com`

7. **Footer** — Logo, business name, quick links, social/contact icons (WhatsApp, Email), copyright "© 2025 Advanced Business System Pty Ltd", tagline "Proudly serving Queenstown, South Africa"

8. **Floating WhatsApp Button** — Fixed bottom-right, green WhatsApp icon, links to https://wa.me/27848905690, pulse animation, tooltip "Chat with us on WhatsApp"

## Logo Requirements

Create an inline SVG logo that:
- Uses the letters "ABS" as a monogram
- Incorporates a subtle circuit board or lightning bolt motif
- Uses brand colors (burnt orange #C85A00 + golden accent #F5A623)
- Works on both dark and light backgrounds
- Appears in navbar and footer

## JavaScript Features

Required interactions (using vanilla JavaScript):
- Smooth scroll for all nav links
- Navbar hides on scroll down, shows on scroll up
- Mobile hamburger menu toggle
- Scroll-triggered fade-in animations for sections (use `IntersectionObserver`)
- Active nav link highlights based on current section in viewport
- Form validation: all fields required before submit

## Code Style

- Add comments throughout for maintainability
- Use semantic HTML5 elements
- Mobile-first CSS (base styles for mobile, `@media` queries for larger screens)
- Keep all code in single `index.html` file
- No external files except CDN links
