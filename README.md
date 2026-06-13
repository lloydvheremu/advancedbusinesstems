# Advanced Business System

A modern, production-ready React landing website for **Advanced Business System Pty Ltd** — your trusted technology and electrical solutions partner in Queenstown, South Africa.

**Live Website:** [Visit Site](https://lloydvheremu.github.io/advancedbusinesstems/)

---

## 🎯 About

Advanced Business System specializes in:
- 💻 **Computer Repair** - Diagnostics, hardware fixes, virus removal, system upgrades
- 📹 **CCTV Installation** - Professional security camera solutions with remote monitoring
- 📡 **DSTV Installation** - Expert satellite TV setup and signal optimization
- ☀️ **Solar Lights** - Energy-efficient indoor & outdoor solar lighting
- ⚡ **Electrical Accessories** - Quality electrical fittings and installation services

**Location:** Queenstown, South Africa  
**Phone:** +27 84 890 5690  
**Email:** lastvheremu1@gmail.com  
**WhatsApp:** [Chat with us](https://wa.me/27848905690)

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 16+ ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/lloydvheremu/advancedbusinesstems.git
cd advancedbusinesstems

# Install dependencies
npm install

# Start development server (with hot module reload)
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
advancedbusinesstems/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Navigation.tsx     # Fixed navbar with mobile menu
│   │   ├── Footer.tsx         # Company footer with links
│   │   ├── FloatingWhatsApp.tsx
│   │   ├── BlurReveal.tsx     # Animated text reveal
│   │   ├── SectionHeader.tsx
│   │   ├── OrbitGraphic.tsx   # SVG decoration
│   │   ├── ScrollIndicator.tsx
│   │   └── AnimatedCounter.tsx
│   │
│   ├── sections/             # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ServicesTicker.tsx # Marquee animation
│   │   ├── ServicesGrid.tsx
│   │   ├── AboutSection.tsx
│   │   ├── GallerySection.tsx
│   │   └── ContactSection.tsx
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── useLenis.ts       # Smooth scroll integration
│   │   └── useScrollDirection.ts
│   │
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # React entry point
│   └── index.css             # Global styles
│
├── public/                   # Static assets
├── index.html                # React DOM mount point
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript config
├── tailwind.config.js        # Tailwind CSS config
├── package.json              # Dependencies & scripts
├── tech-spec.md              # Technical specifications
├── CLAUDE.md                 # Development guidelines
└── README.md                 # This file
```

---

## 🎨 Key Features

### Components & Sections
1. **Navigation** - Fixed header with smooth scroll, mobile overlay menu
2. **Hero Section** - Full-height intro with gradient overlay, blur-reveal headline, CTAs
3. **Services Ticker** - Animated marquee with scroll-triggered illumination
4. **Services Grid** - 5 service cards with hover animations and preview images
5. **About Section** - Two-column layout with blur-reveal text and orbit SVG
6. **Gallery** - 6-item grid with Alba CSS-only hover fade effects
7. **Contact Form** - Two-column layout with form validation
8. **Footer** - Multi-column layout with staggered animations
9. **Floating WhatsApp Button** - Fixed position with pulse ring animation

### Technology Stack
- **React 18.3** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool & dev server
- **Tailwind CSS 3.4** - Utility-first styling
- **GSAP 3.12** - Advanced animations & ScrollTrigger
- **Lenis 1.1** - Smooth scroll library
- **react-fast-marquee 1.6** - Services ticker
- **lucide-react 0.400** - Icon library

### Design System
**Color Palette (Africa-inspired):**
- Primary: `#C85A00` (Burnt Orange)
- Secondary: `#3E1F00` (Earth Brown)
- Accent: `#F5A623` (Golden Savanna)

**Typography:**
- Display: Space Grotesk (geometric sans-serif)
- Body: Inter (clean, readable)

**Key Features:**
- Blur-reveal text animations (GSAP + ScrollTrigger)
- Smooth scroll navigation (Lenis integration)
- Scroll-triggered animations for all sections
- Mobile-first responsive design
- Accessibility-focused (prefers-reduced-motion support)

---

## 🔧 Development

### Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check (TypeScript)
npm run type-check

# Lint code (ESLint)
npm run lint
```

### Customization

#### Change Brand Colors
Update color variables in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#C85A00',
      secondary: '#3E1F00',
      accent: '#F5A623',
    }
  }
}
```

#### Update Business Information
Edit text directly in component files:
- `src/sections/HeroSection.tsx` - Hero headline & subtitle
- `src/sections/AboutSection.tsx` - Company description & stats
- `src/components/Footer.tsx` - Footer content & links
- `src/sections/ContactSection.tsx` - Contact details

#### Add/Remove Services
Modify the services array in `src/sections/ServicesGrid.tsx`:
```typescript
const services = [
  {
    icon: 'Laptop', // lucide-react icon name
    title: 'Service Name',
    description: 'Service description...',
  },
  // Add more services
];
```

#### Customize Navbar Links
Edit navigation links in `src/components/Navigation.tsx`:
```typescript
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  // Add more links
];
```

#### Replace Gallery Images
Update image paths in `src/sections/GallerySection.tsx`:
```typescript
<img src="/images/your-image.jpg" alt="Description" />
```

---

## 📱 Responsive Design

The website is fully responsive with mobile-first approach:
- **Desktop** (1200px+) - Full multi-column layouts, animations enabled
- **Tablet** (768px-1199px) - Adjusted spacing, optimized font sizes
- **Mobile** (< 768px) - Single-column, hamburger menu, touch-optimized

Tested on:
- ✅ Chrome, Firefox, Safari, Edge
- ✅ iOS Safari, Android Chrome
- ✅ Tablets & large mobile devices

---

## 🎬 Animation Details

| Animation | Library | Trigger |
|-----------|---------|---------|
| Blur word reveal | GSAP + ScrollTrigger | On scroll into view |
| Navbar hide/show | CSS + React hook | Scroll direction |
| Service card hover | CSS transitions | Mouse hover |
| Section fade-in | GSAP + ScrollTrigger | Section in viewport |
| Marquee scroll | react-fast-marquee | Auto-play with illumination |
| Stat counter | GSAP + React state | Scroll into About section |
| WhatsApp pulse | CSS keyframes | Continuous animation |
| Gallery hover | CSS only | Alba effect on hover |

---

## 🚀 Deployment

### Deploy to GitHub Pages

```bash
# Build production version
npm run build

# Push to GitHub (Pages auto-deploys from main branch)
git add .
git commit -m "Deploy production build"
git push origin main
```

Site publishes to: `https://lloydvheremu.github.io/advancedbusinesstems/`

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Deploy to Traditional Hosting

1. Run `npm run build`
2. Upload `dist/` folder contents to your host's `public_html/`
3. Configure server to route all requests to `index.html` (for SPA routing)

---

## 📚 Documentation

- **`tech-spec.md`** - Detailed technical specifications, component inventory, animation implementation
- **`CLAUDE.md`** - Development guidelines for AI-assisted coding
- **React Docs:** [react.dev](https://react.dev/)
- **TypeScript Docs:** [typescriptlang.org](https://www.typescriptlang.org/)
- **Vite Docs:** [vitejs.dev](https://vitejs.dev/)
- **GSAP Docs:** [greensock.com](https://greensock.com/)
- **Tailwind Docs:** [tailwindcss.com](https://tailwindcss.com/)

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Build Fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styles Not Applying
- Ensure Tailwind CSS is installed: `npm list tailwindcss`
- Check `tailwind.config.js` includes correct template paths
- Rebuild: `npm run build`

### Animations Not Smooth
- Check browser hardware acceleration is enabled
- Reduce animation complexity in individual components
- Test with `prefers-reduced-motion` enabled for accessibility

### Images Not Loading
- Place images in `public/` folder
- Use paths with leading slash: `<img src="/images/photo.jpg" />`
- For external CDN images, ensure CORS headers are set

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] All navigation links work
- [ ] Mobile menu opens/closes
- [ ] Form validation works
- [ ] Animations play smoothly
- [ ] Images load correctly
- [ ] WhatsApp links work
- [ ] Contact form submits properly
- [ ] Responsive on mobile/tablet/desktop

### Performance Optimization
```bash
# Check bundle size
npm run build
# Review dist/ folder size

# Build analysis
npm install --save-dev rollup-plugin-visualizer
```

---

## 📊 Performance

The website is optimized for:
- ✅ Fast load times with Vite
- ✅ Code splitting & lazy loading
- ✅ Optimized images & assets
- ✅ CSS minification with Tailwind
- ✅ JavaScript minification with Vite

---

## 🔐 SEO & Meta Tags

Update in `index.html`:
```html
<meta name="description" content="Advanced Business System - Your Trusted Technology & Electrical Solutions Partner">
<meta name="keywords" content="computer repair, CCTV, DSTV, solar lights, electrical">
<meta property="og:title" content="Advanced Business System">
<meta property="og:description" content="Your trusted solutions partner in Queenstown, South Africa">
```

---

## 📧 Support & Contact

**For Website Issues:**
- Email: lastvheremu1@gmail.com
- WhatsApp: +27 84 890 5690
- GitHub Issues: [Open an issue](https://github.com/lloydvheremu/advancedbusinesstems/issues)

**For Services:**
- Phone: +27 84 890 5690
- Hours: Monday–Saturday, 8AM–6PM (Queenstown time)

---

## 📄 License

This website is for **Advanced Business System Pty Ltd**. All rights reserved.

---

## 🔄 Version History

### v1.0.0 (Current - Production)
✅ **React 18 + TypeScript**  
✅ **Production-ready deployment**  
✅ **Advanced GSAP animations**  
✅ **Smooth scroll (Lenis)**  
✅ **Fully responsive design**  
✅ **SEO optimized**  
✅ **Performance optimized**

---

## 🎓 Learning Resources

- **React:** [react.dev](https://react.dev/) | [React patterns](https://react.dev/learn)
- **TypeScript:** [typescriptlang.org](https://www.typescriptlang.org/docs/)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com/docs/)
- **GSAP:** [greensock.com](https://greensock.com/docs/) | [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Vite:** [vitejs.dev](https://vitejs.dev/guide/)
- **Web Design:** [CSS-Tricks](https://css-tricks.com/)

---

## 🤝 Contributing

Found a bug or have an improvement idea?
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

**Made with ❤️ for Advanced Business System**  
**Proudly serving Queenstown, South Africa**

*React · TypeScript · Vite · GSAP · Tailwind CSS · Lenis*
