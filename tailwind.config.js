import tailwindAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#0B0F14',
          deep: '#070A0E',
        },
        neon: {
          cyan: '#30F5E0',
          dim: 'rgba(48, 245, 224, 0.2)',
          glow: 'rgba(48, 245, 224, 0.5)',
        },
        surface: {
          dark: '#111A22',
          navy: '#0D1520',
        },
        txt: {
          primary: '#FFFFFF',
          secondary: '#8B9CAD',
          muted: '#4A5A6A',
        },
        'border-subtle': '#1A2A3A',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'neon-sm': '0 0 20px rgba(48, 245, 224, 0.2)',
        'neon-md': '0 0 40px rgba(48, 245, 224, 0.3), 0 0 80px rgba(48, 245, 224, 0.1)',
        'neon-lg': '0 0 60px rgba(48, 245, 224, 0.4), 0 0 120px rgba(48, 245, 224, 0.15)',
        'card-lift': '0 20px 60px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": { height: "var(--radix-accordion-content-height)", to: { height: "0" } },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "scroll-dot": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(32px)", opacity: "0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        "slow-rotate": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "orbit-pulse": {
          "0%, 100%": { r: "6", opacity: "1" },
          "50%": { r: "8", opacity: "0.6" },
        },
        "center-pulse": {
          "0%, 100%": { r: "4", opacity: "1" },
          "50%": { r: "6", opacity: "0.6" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "scroll-dot": "scroll-dot 2s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "slow-rotate": "slow-rotate 60s linear infinite",
        "orbit-pulse": "orbit-pulse 2s ease-in-out infinite",
        "center-pulse": "center-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindAnimate],
}


