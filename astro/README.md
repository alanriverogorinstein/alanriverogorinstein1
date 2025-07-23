# Alan Rivero Gorinstein – Portfolio

A fully custom-coded, modern editorial-style portfolio showcasing UX case studies, built with Astro, Tailwind CSS, and Sanity.

---

## Tech Stack

- **Astro** – Static site generator for fast, component-based development
- **Tailwind CSS (v4)** – Utility-first CSS framework for styling
- **Sanity CMS** – Headless content backend for dynamic project data
- **Typekit / Adobe Fonts** – Custom typography system

---

## Getting Started

Clone the repo:

```bash
git clone https://github.com/alanriverogorinstein/alanriverogorinstein1.git
cd alanriverogorinstein1
npm install
npm run dev

---

## Project structure

alanriverogorinstein1/
├── astro/
│   ├── src/
│   │   ├── components/     → Navbar, Footer, and other UI elements
│   │   ├── layouts/        → SiteShell layout wrapper
│   │   ├── pages/          → index.astro, about.astro, project/[slug].astro
│   │   └── styles/         → global.css (custom + Tailwind styles)
│   ├── public/             → Static assets
│   └── astro.config.mjs    → Astro + Vite configuration
├── studio/                 → Sanity CMS studio project
├── .vscode/                → Recommended editor settings
├── .gitignore              → Git exclusions
├── package.json            → Project dependencies
└── README.md               → This file

---

## Features

Dynamic project pages powered by Sanity and Astro’s file-based routing
Custom SiteShell layout with global font and navigation
Tailwind utility styling with custom serif + sans font stack
Clean responsive design across breakpoints
Tags for safe fallback and versioning
```
