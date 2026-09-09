# Jadoo — Next.js Rebuild

A pixel-close Next.js (App Router) rebuild of the ThemeWagon "Jadoo" travel
agency landing page, originally built with Pug.

Live reference: https://themewagon.github.io/jadoo/v1.0.0/

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Folder structure

```
jadoo-nextjs/
├── app/
│   ├── layout.js       # Root layout, fonts, metadata
│   ├── page.js         # Assembles all sections
│   └── globals.css     # Tailwind + global styles
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Services.js
│   ├── Destinations.js
│   ├── Steps.js
│   ├── Booking.js
│   ├── Testimonials.js
│   ├── Partners.js
│   ├── Newsletter.js
│   └── Footer.js
├── lib/
│   └── assets.js        # Base URL for image assets
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
└── package.json
```

## About the images

The original project's images/icons are still referenced directly from the
source site (`https://themewagon.github.io/jadoo/v1.0.0/assets/...`), set as
the `ASSET_BASE` constant in `lib/assets.js`. This was necessary because I
only had access to the live rendered page, not the original Pug project's
raw asset files.

**To self-host the images instead:**
1. Download the `assets/img` folder from the original repo/site
2. Drop it into `public/img` in this project
3. In `lib/assets.js`, change `ASSET_BASE` to an empty string `""` and update
   image paths in components from `${ASSET_BASE}/img/...` to `/img/...`

## Notes on the conversion

- Built with Next.js 14 App Router + Tailwind CSS (the original used
  Bootstrap-style Pug/SCSS — this is a from-scratch Tailwind rebuild matching
  the same layout, sections, and copy)
- Mobile nav toggle, testimonial carousel, and newsletter form are
  interactive client components
- Since I could only access the *compiled/rendered* HTML of the live page
  (not the actual `.pug` source files or original stylesheet), some exact
  pixel details — spacing, exact colors, font weights — are close
  approximations rather than a byte-for-byte match. If you can share the
  original repo or a design file, I can tighten this further.
