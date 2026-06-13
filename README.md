# Advanced Business System

A professional landing website for **Advanced Business System Pty Ltd** — your trusted technology and electrical solutions partner in Queenstown, South Africa.

**Live Website:** [Visit Site](https://lloydvheremu.github.io/advancedbusinesstems/)

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

### Option 1: Open in Browser (Fastest)
Simply open `index.html` in your web browser:
```bash
# On Linux/Mac
open index.html

# On Windows
start index.html
```

### Option 2: Local Development Server

#### Using Python 3
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

#### Using PHP
```bash
php -S localhost:8000
# Visit http://localhost:8000
```

#### Using Node.js (npx)
```bash
npx http-server -p 8000
# Visit http://localhost:8000
```

#### Using VS Code Live Server Extension
1. Install "Live Server" extension by Ritwick Dey
2. Right-click `index.html` → "Open with Live Server"
3. Browser opens automatically with live reload

---

## 📁 Project Structure

```
advancedbusinesstems/
├── index.html           # Main website (all code in one file)
├── app/                 # React/TypeScript version (development)
│   └── index.html      # React entry point
├── tech-spec.md        # Technical documentation
├── CLAUDE.md           # Development guidelines
└── README.md           # This file
```

### Main Website (`index.html`)
- **Pure HTML5, CSS3, and Vanilla JavaScript** — no build required
- All code in a single file (CSS in `<style>`, JS in `<script>`)
- External dependencies: Google Fonts, Font Awesome (CDN only)
- Mobile-first responsive design

### React Version (`app/`)
- Modern TypeScript + React setup
- Planned improvements with advanced animations
- Components: Navigation, Footer, Sections (Hero, Services, About, Gallery, Contact)
- Build system required (see tech-spec.md for dependencies)

---

## 🎨 Key Features

### Sections
1. **Navbar** - Fixed header with smooth scroll navigation, mobile hamburger menu
2. **Hero** - Full-height section with compelling headline and CTAs
3. **Services** - 5-service grid with icons, descriptions, and call-to-action buttons
4. **About** - Company story, stats (500+ clients, 5+ years experience), decorative SVG
5. **Gallery** - Portfolio showcase (6 items with color gradients, real photos coming)
6. **Contact** - Contact form + contact info card with location, phone, email, WhatsApp
7. **Footer** - Company info, quick links, social media icons
8. **Floating WhatsApp Button** - Fixed corner button with pulse animation

### Design System
**Color Palette (Africa-inspired):**
- Primary: `#C85A00` (Burnt Orange)
- Secondary: `#3E1F00` (Earth Brown)
- Accent: `#F5A623` (Golden Savanna)
- Dark BG: `#1A0A00`
- Light BG: `#FFF8F2`

**Typography:**
- Headings: Bebas Neue (bold, strong)
- Body: Inter (clean, readable)

**UI Elements:**
- Card-based design with hover effects
- Smooth scroll behavior
- Responsive grid layouts
- African geometric patterns (CSS-generated)
- WhatsApp integration

---

## 🔧 Setup & Development

### Clone Repository
```bash
git clone https://github.com/lloydvheremu/advancedbusinesstems.git
cd advancedbusinesstems
```

### Edit the Website
The main website is in `index.html`. Edit directly in any text editor:

**Update Business Info:**
```html
<!-- Find these sections and update with your details -->
<h1>Technology & Electrical Solutions You Can Trust</h1>
<p>Professional computer repair, CCTV, DSTV, solar lighting, and electrical services...</p>
<p>+27 84 890 5690</p>
<p>lastvheremu1@gmail.com</p>
```

**Replace Placeholder Images:**
Gallery items currently use CSS gradients. To add real project photos:
1. Save images to an `images/` folder
2. Update gallery HTML:
```html
<div class="gallery-item" style="background-image: url('images/your-image.jpg');">
    <!-- content -->
</div>
```

**Add/Remove Services:**
Find the Services Grid section and duplicate/modify service cards:
```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3>Service Name</h3>
    <p>Service description...</p>
    <a href="#contact" class="btn btn-primary">Get a Quote</a>
</div>
```

---

## 📱 Responsive Design

The website is **mobile-first** and fully responsive:
- **Desktop** (1200px+) - Full multi-column layouts
- **Tablet** (768px-1199px) - Adjusted spacing and font sizes
- **Mobile** (< 768px) - Single-column layout, hamburger menu, optimized buttons

---

## 🔗 External Dependencies

All loaded from CDN (no npm required):

| Resource | Purpose |
|----------|---------|
| [Google Fonts](https://fonts.google.com/) | Bebas Neue, Inter typefaces |
| [Font Awesome 6.4.0](https://fontawesome.com/) | Icon library |

---

## 📝 Customization Guide

### Change Brand Colors
Edit the CSS variables in `<style>`:
```css
:root {
    --primary: #C85A00;      /* Change this */
    --secondary: #3E1F00;    /* And this */
    --accent: #F5A623;       /* And this */
    --bg-dark: #1A0A00;
    --bg-light: #FFF8F2;
    --text-dark: #FFFFFF;
    --text-light: #1A0A00;
}
```

### Change Fonts
Update Google Fonts import and CSS:
```css
h1, h2, h3 {
    font-family: 'Your Font', sans-serif;
}
body {
    font-family: 'Your Font', sans-serif;
}
```

### Update Contact Form
Current form uses `mailto:` action. For backend processing:
1. Set up a form service (Formspree, EmailJS, etc.)
2. Update form action and method in HTML

### Customize Navbar Links
Edit the nav-links list:
```html
<ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#services">Services</a></li>
    <!-- Add/remove as needed -->
</ul>
```

---

## 🔄 Version History

### Current (HTML Version)
- Single-page landing website
- Vanilla JavaScript (no frameworks)
- Fully responsive mobile design
- Ready to deploy

### In Development (React Version in `app/`)
- TypeScript + React for maintainability
- Advanced GSAP animations (blur-reveal, scroll triggers)
- Reusable components
- Enhanced performance

---

## 📚 Documentation

- **`tech-spec.md`** - Detailed technical specifications, components, animation library
- **`CLAUDE.md`** - Development guidelines for AI-assisted coding

---

## 🚀 Deployment

### Deploy to GitHub Pages (Free)
```bash
git add .
git commit -m "Update website"
git push origin main
```

Then enable GitHub Pages:
1. Go to repository **Settings** → **Pages**
2. Set source to `main` branch
3. Site publishes to `https://lloydvheremu.github.io/advancedbusinesstems/`

### Deploy to Other Hosts
- **Netlify:** Drag-and-drop `index.html`
- **Vercel:** Git integration or file upload
- **Traditional Hosting:** FTP upload to `public_html/`

---

## 🐛 Troubleshooting

### Links Not Working
- Check `href` attributes match section `id` attributes
- Example: `<a href="#services">` links to `<section id="services">`

### Images Not Loading
- Use relative paths: `images/photo.jpg`
- Not absolute URLs or external links

### Form Not Submitting
- Current form uses `mailto:` — may not work on all browsers
- Alternative: Use form service (Formspree, EmailJS)

### Mobile Menu Not Opening
- Check JavaScript is enabled in browser
- Inspect browser console for errors (F12)

---

## 📧 Support & Contact

**For Website Issues:**
- Email: lastvheremu1@gmail.com
- WhatsApp: +27 84 890 5690

**For Services:**
- Phone: +27 84 890 5690
- Hours: Monday–Saturday, 8AM–6PM (Queenstown time)

---

## 📄 License

This website is for **Advanced Business System Pty Ltd**. All rights reserved.

---

## 🎓 Learning Resources

- **HTML/CSS:** [MDN Web Docs](https://developer.mozilla.org/)
- **Font Awesome Icons:** [Icon Gallery](https://fontawesome.com/icons)
- **Google Fonts:** [Font Library](https://fonts.google.com/)
- **Web Design:** [CSS-Tricks](https://css-tricks.com/)

---

**Made with ❤️ for Advanced Business System**  
*Proudly serving Queenstown, South Africa*
