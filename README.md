# Advanced Business System - Landing Website

A modern, professional landing website for **Advanced Business System Pty Ltd** — your trusted technology and electrical solutions partner in Queenstown, South Africa.

**Live Website:** [Visit Site](https://lloydvheremu.github.io/advancedbusinesstems/)

---

## 🎯 About Advanced Business System

We provide comprehensive technology and electrical solutions:

- 💻 **Computer Repair** - Diagnostics, hardware fixes, virus removal, system upgrades
- 📹 **CCTV Installation** - Professional security camera solutions with remote monitoring
- 📡 **DSTV Installation** - Expert satellite TV setup and signal optimization
- ☀️ **Solar Lights** - Energy-efficient indoor & outdoor solar lighting
- ⚡ **Electrical Accessories** - Quality electrical fittings and installation services

**📍 Location:** Queenstown, South Africa  
**📞 Phone:** +27 84 890 5690  
**📧 Email:** lastvheremu1@gmail.com  
**💬 WhatsApp:** [Chat with us](https://wa.me/27848905690)

---

## 🚀 Tech Stack

This project is built with modern React technologies:

- **React 18.3.0** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool & dev server
- **Tailwind CSS 3.4.0** - Utility-first styling
- **GSAP 3.12.0** - Advanced animations (ScrollTrigger)
- **Lenis 1.1.0** - Smooth scroll behavior
- **React Fast Marquee** - Services ticker
- **Lucide React** - Icon library

---

## 📁 Project Structure

```
advancedbusinesstems/
├── src/
│   ├── components/           # Reusable components
│   │   ├── Navigation.tsx    # Fixed navbar with mobile menu
│   │   ├── Footer.tsx        # Footer with links & info
│   │   └── FloatingWhatsApp.tsx
│   ├── sections/             # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ServicesTicker.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── AboutSection.tsx
│   │   ├── GallerySection.tsx
│   │   └── ContactSection.tsx
│   ├── hooks/                # Custom React hooks
│   │   ├── useLenis.ts      # Smooth scroll integration
│   │   └── useScrollDirection.ts
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                   # Static assets
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS config
├── tsconfig.json            # TypeScript config
├── package.json             # Dependencies
└── README.md                # This file
```

---

## ✨ Key Features

### Website Sections

1. **Navigation** - Fixed header, hide/show on scroll, mobile overlay menu, smooth-scroll anchor links
2. **Hero Section** - Full-viewport height, gradient background, blur-reveal headline, CTAs, scroll indicator
3. **Services Ticker** - Animated marquee with scroll-triggered illumination
4. **Services Grid** - 5 service cards with hover effects and image previews
5. **About Section** - Two-column layout with company story, stats, decorative SVG
6. **Gallery** - 6-item portfolio grid with Alba CSS-only hover effects
7. **Contact Section** - Contact form + info card with location, phone, email, WhatsApp
8. **Footer** - Company info, links, social icons, copyright
9. **Floating WhatsApp Button** - Fixed corner button with pulse animation

### Design System

**Color Palette (Africa-inspired):**
```
Primary:   #C85A00  (Burnt Orange)
Secondary: #3E1F00  (Earth Brown)
Accent:    #F5A623  (Golden Savanna)
Dark BG:   #1A0A00
Light BG:  #FFF8F2
```

**Typography:**
- Headings: Space Grotesk (Google Fonts)
- Body: Inter (Google Fonts)

**Animations:**
- Blur-reveal text animations (GSAP + ScrollTrigger)
- Scroll-triggered fade-in sections
- Smooth scroll with Lenis
- Hover effects on cards and buttons
- Pulse animations on WhatsApp button
- Staggered entrance animations

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Clone & Install

```bash
# Clone the repository
git clone https://github.com/lloydvheremu/advancedbusinesstems.git
cd advancedbusinesstems

# Install dependencies
npm install
# or
yarn install
```

### Development Server

Start the local development server with hot module reload (HMR):

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. Changes to files will automatically refresh the page.

### Build for Production

```bash
npm run build
# or
yarn build
```

Generates optimized files in the `dist/` folder ready for deployment.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

---

## 📝 Customization Guide

### Update Business Information

Edit `src/App.tsx` and relevant section files:

**Contact Details:**
```typescript
// Update in ContactSection.tsx
const PHONE = "+27 84 890 5690";
const EMAIL = "lastvheremu1@gmail.com";
const WHATSAPP_URL = "https://wa.me/27848905690";
```

**Service Cards:**
Edit `src/sections/ServicesGrid.tsx` to add/remove/modify services:
```typescript
const services = [
  {
    icon: 'icon-name',
    title: 'Service Name',
    description: 'Service description...'
  },
  // Add more services
];
```

### Change Brand Colors

Edit `tailwind.config.js`:
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

### Modify Navigation Links

Edit `src/components/Navigation.tsx`:
```typescript
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  // Add/remove links
];
```

### Update Gallery Images

Replace placeholder images in `src/sections/GallerySection.tsx`:
```typescript
const gallery = [
  {
    id: 1,
    image: '/images/your-image.jpg',
    title: 'Computer Repair'
  },
  // Update images
];
```

### Customize Animations

GSAP animations are configured in individual section components. Adjust:
- Fade duration and delay
- Scroll trigger thresholds
- Stagger values
- Blur amounts

---

## 🚀 Deployment

### Deploy to GitHub Pages

```bash
# Build the project
npm run build

# Push to GitHub
git add .
git commit -m "Update website"
git push origin main
```

Then enable GitHub Pages:
1. Go to repository **Settings** → **Pages**
2. Set source to `gh-pages` branch (if using GitHub Actions)
3. Or set source to `main` branch and `docs` folder

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Traditional Hosting

1. Run `npm run build`
2. Upload the `dist/` folder to your host's `public_html/`
3. Ensure `.htaccess` is configured for SPA routing (if on Apache):

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 📚 Documentation

- **`tech-spec.md`** - Detailed technical specifications, components, animations
- **`CLAUDE.md`** - AI development guidelines

---

## 🎨 Component Documentation

### Navigation Component
- Fixed positioning with hide/show on scroll
- Mobile hamburger menu overlay
- Smooth scroll to sections via Lenis
- Active link highlighting

### Hero Section
- Full viewport height gradient background
- Blur-reveal animated headline
- CTA buttons (View Services, WhatsApp)
- Animated scroll indicator

### Services Ticker
- Continuous marquee animation
- Scroll-triggered word illumination
- Responsive design

### Services Grid
- 5 service cards in responsive grid
- Hover effects with transform & shadow
- Image preview on hover
- Call-to-action buttons

### About Section
- Two-column layout (text + decorative SVG)
- Animated counter statistics
- Blur-reveal text animations
- African geometric pattern SVG

### Gallery Section
- 6-item grid layout
- Alba CSS hover effect (fade siblings)
- Smooth scale transform on hover
- Icon overlays with titles

### Contact Section
- Two-column layout (form + info)
- Form validation (required fields, email)
- Contact info card with icons
- WhatsApp catalogue link

---

## 🔗 External Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP Documentation](https://greensock.com/gsap/)
- [Lenis Smooth Scroll](https://github.com/studio-freight/lenis)
- [Lucide Icons](https://lucide.dev/)
- [Google Fonts](https://fonts.google.com/)

---

## 🐛 Troubleshooting

### Port 5173 Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
- Place images in `public/` folder
- Reference as `/images/filename.jpg` (with leading slash)

### Animations Not Smooth
- Check browser DevTools for performance issues
- Reduce animation complexity or duration
- Ensure GPU acceleration is enabled

### Mobile Menu Not Working
- Check JavaScript is enabled in browser
- Inspect browser console for errors (F12)
- Verify Tailwind breakpoints are correct

---

## 📊 Performance

The website is optimized for:
- ✅ Fast load times with Vite
- ✅ Code splitting & lazy loading
- ✅ Optimized images & assets
- ✅ CSS minification with Tailwind
- ✅ JavaScript minification with Vite

Run performance checks:
```bash
npm run build  # Check bundle size
```

---

## 🔐 SEO & Meta Tags

Update in `index.html`:
```html
<meta name="description" content="Your page description">
<meta name="keywords" content="technology, electrical, solutions">
<meta property="og:title" content="Advanced Business System">
<meta property="og:description" content="Your trusted solutions partner">
<meta property="og:image" content="your-image-url">
```

---

## 📧 Support & Contact

**For Website Issues:**
- Email: lastvheremu1@gmail.com
- WhatsApp: +27 84 890 5690

**For Business Services:**
- Phone: +27 84 890 5690
- Hours: Monday–Saturday, 8AM–6PM (Queenstown, South Africa)

---

## 📄 License

© 2025 Advanced Business System Pty Ltd. All rights reserved.

---

## 🎓 Contributing

To contribute to this project:

1. Create a feature branch (`git checkout -b feature/your-feature`)
2. Make your changes
3. Commit (`git commit -m "Add feature"`)
4. Push (`git push origin feature/your-feature`)
5. Open a Pull Request

---

**Made with ❤️ for Advanced Business System**  
*Proudly serving Queenstown, South Africa*
