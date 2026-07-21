# Raghav Nagpal - Full Stack Developer Portfolio

A modern, minimal, dark-mode personal portfolio built with **React + Vite**, **Tailwind CSS**, **Framer Motion**, **React Router**, and **React Icons**.

## ✨ Features

- Dark mode by default with an elegant blue accent (`#3B82F6`)
- Glassmorphism cards, soft shadows, gradient buttons
- Sticky transparent navbar with scroll-spy active-link highlighting
- Smooth scroll navigation + scroll-to-top button
- Scroll-triggered fade-up reveals, animated stat counters, hero entrance animation
- Fully responsive (mobile / tablet / desktop)
- SEO-ready: semantic HTML, meta tags, Open Graph/Twitter cards, JSON-LD, sitemap.xml, robots.txt, favicon
- Lazy-loaded images, code-split vendor bundles for a lean production build

## 🗂 Structure

```
src/
  components/     # Navbar, Hero, About, Skills, Projects, Education, Contact, Footer, etc.
  pages/          # Home.jsx, NotFound.jsx (React Router)
  data/content.js # All editable content lives here — name, bio, projects, skills, education
  hooks/          # useActiveSection.js (scroll-spy)
  index.css       # Tailwind layers + design tokens
public/
  favicon.svg, robots.txt, sitemap.xml
```

## 🚀 Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build to /dist
npm run preview    # preview the production build
```

## ✏️ Customize

Almost everything you'll want to change — your name, bio, stats, skills, projects, education, socials — lives in **`src/data/content.js`**. Update that file first.

- Replace `profile.resumeUrl` with a real PDF in `public/` if you want a downloadable resume.
- Swap the Unsplash placeholder images in `content.js` and `Hero.jsx` for your own photo/screenshots.
- Update the JSON-LD block and `og-image.png` reference in `index.html` before deploying.
- The contact form currently simulates sending (no backend). Wire it up to an API route, Formspree, or EmailJS to make it functional in production.

## 🌐 Deploying

This project is zero-config for **Vercel** or **Netlify**:

```bash
npm run build
```

Deploy the generated `dist/` folder, or connect the repo directly to Vercel/Netlify for automatic builds.

## ♿ Accessibility & Performance

- Visible keyboard focus states on all interactive elements
- `prefers-reduced-motion` respected — animations are disabled for users who request it
- Semantic landmarks (`header`, `main`, `footer`, `section`) throughout
- Images use `loading="lazy"` and descriptive `alt` text
- Vendor code (`react-dom`, `react-router-dom`) and `framer-motion` are split into separate chunks for faster first paint
