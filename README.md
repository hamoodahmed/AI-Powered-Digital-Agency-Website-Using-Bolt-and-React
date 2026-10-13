# NexaAI — AI-Powered Digital Agency Website

> A premium, production-ready single-page application for a modern digital agency specializing in AI automation, web design, and digital marketing. Built with React, TypeScript, and Tailwind CSS.

---

## Table of Contents

- [Introduction](#introduction)
- [About the Project](#about-the-project)
- [Live Demo](#live-demo)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Project Architecture](#project-architecture)
- [Getting Started](#getting-started)
- [Deployment Guide](#deployment-guide)
  - [Step 1: Upload to GitHub](#step-1-upload-to-github)
  - [Step 2: Deploy to Vercel](#step-2-deploy-to-vercel)
- [LinkedIn Post Template](#linkedin-post-template)
- [License](#license)

---

## Introduction

**NexaAI** is a fully functional, visually stunning digital agency website designed and developed from the ground up to showcase what a modern, tech-forward agency looks like online. The project demonstrates advanced front-end engineering practices — component-based architecture, strict TypeScript typing, responsive design, and thoughtful user experience patterns — all wrapped in a sleek, dark-themed interface with electric blue and vivid purple gradient accents.

This is not a template. Every section, interaction, and animation was purpose-built to deliver a premium feel that rivals professionally designed agency sites.

---

## About the Project

### The Concept

NexaAI positions itself as a cutting-edge digital agency at the intersection of artificial intelligence and creative design. The brand identity is built around three core pillars:

1. **AI Automation** — Intelligent workflows, automated pipelines, and AI-driven solutions
2. **Web Design & Development** — Modern, performant, conversion-optimized websites
3. **Digital Marketing** — Data-driven SEO, paid advertising, and growth strategies

### Design Philosophy

| Principle | Implementation |
|---|---|
| **Dark-first aesthetic** | Near-black base (`#050510`) with layered depth using glassmorphism and subtle transparency |
| **Gradient-driven branding** | Blue-to-purple gradients on CTAs, headings, and interactive elements |
| **Glow effects** | Box-shadow and drop-shadow glows on cards, buttons, and hover states |
| **Micro-interactions** | Hover lifts, animated scroll indicators, floating gradient orbs, scroll-spy navigation |
| **Responsive-first** | Mobile, tablet, and desktop breakpoints with fluid layouts throughout |
| **Accessibility** | Semantic HTML, ARIA labels, keyboard navigation, sufficient color contrast |

### Sections at a Glance

| Section | Purpose |
|---|---|
| **Navigation** | Fixed bar with backdrop blur, scroll-spy active links, animated mobile menu |
| **Hero** | Full-viewport landing with animated gradient orbs, stat cards, dual CTAs |
| **Services** | Four service cards with icons, feature lists, and hover glow effects |
| **Why Choose Us** | Six differentiators with an animated stats panel |
| **Portfolio** | Six projects with CSS-generated visuals and functional category filtering |
| **Testimonials** | Three client testimonials with star ratings and gradient initials avatars |
| **Pricing** | Three tiers with a working monthly/annual billing toggle |
| **Contact** | Validated contact form with inline errors and animated success state |
| **Footer** | Multi-column layout with navigation, social links, and contact details |

---

## Live Demo

Once deployed, your live site will be available at:

```
https://ai-powered-digital-agency-website-u.vercel.app/
```

---

## Technology Stack

| Technology | Version | Role |
|---|---|---|
| **React** | 18.3+ | UI framework — component-based architecture |
| **TypeScript** | 5.5+ | Type safety — strict mode enabled throughout |
| **Tailwind CSS** | 3.4+ | Utility-first styling — custom theme with animations |
| **Vite** | 5.4+ | Build tooling — fast HMR and optimized production builds |
| **Lucide React** | 0.446+ | Icon library — clean, consistent SVG icons |
| **PostCSS** | 8.4+ | CSS processing — Tailwind and Autoprefixer pipeline |
| **ESLint** | 9.9+ | Code linting — React Hooks and TypeScript rules |

### Why This Stack?

- **React + TypeScript** provides a robust, type-safe foundation that scales well and catches errors at compile time rather than runtime.
- **Tailwind CSS** enables rapid, consistent styling without leaving the component file. Custom theme extensions handle brand-specific colors, animations, and glow effects.
- **Vite** offers an order-of-magnitude faster development experience compared to traditional bundlers, with optimized production builds out of the box.
- **Lucide React** delivers a unified icon set with tree-shakeable imports, keeping the bundle size lean.

---

## Features

### Interactive Functionality

- **Smooth scroll navigation** — All nav links smoothly scroll to their target sections
- **Scroll-spy active highlighting** — The active section is detected via Intersection Observer and the corresponding nav link is highlighted in real time
- **Animated mobile menu** — Full-screen overlay with staggered link animations and body scroll lock when open
- **Portfolio category filtering** — Functional filter tabs (All, Web Design, AI, Marketing) that filter project cards instantly
- **Pricing billing toggle** — A working monthly/annual switch that updates prices and displays a 20% savings badge for annual billing
- **Contact form validation** — Real-time field validation with inline error messages for required fields, email format, and minimum message length
- **Animated success state** — On valid form submission, a checkmark animation confirms the message was received, then the form auto-resets

### Visual Design

- **CSS-only animated background** — Floating gradient orbs with slow pulse animations and a subtle grid overlay in the hero section
- **Gradient text headings** — Blue-to-purple gradient text on key headline words using CSS background-clip
- **Glow effects** — Box-shadow glows on cards, buttons, and interactive elements using blue and purple color channels
- **CSS-generated project previews** — Each portfolio card features a unique gradient background with geometric shapes (circles, grids, waves, triangles, hexagons, splines) — no external images
- **Gradient initials avatars** — Testimonial avatars are generated from client initials with unique gradient backgrounds
- **Hover states everywhere** — Every interactive element has a clear hover and focus state with smooth transitions

### Performance

| Metric | Value |
|---|---|
| JavaScript bundle (gzipped) | ~59 KB |
| CSS bundle (gzipped) | ~6 KB |
| Build time | ~11 seconds |
| Lighthouse-ready | Semantic HTML, no unused dependencies |

---

## Project Architecture

```
nexaai-website/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Fixed nav with scroll-spy + mobile menu
│   │   │   └── Footer.tsx          # Multi-column footer with socials
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Full-viewport hero with animated orbs
│   │   │   ├── Services.tsx        # 4 service cards with hover glow
│   │   │   ├── WhyUs.tsx           # 6 differentiators + stats panel
│   │   │   ├── Portfolio.tsx       # 6 projects with filter tabs
│   │   │   ├── Testimonials.tsx    # 3 testimonials with star ratings
│   │   │   ├── Pricing.tsx         # 3 tiers with billing toggle
│   │   │   └── Contact.tsx         # Validated form with success state
│   │   └── ui/
│   │       ├── Button.tsx          # Reusable button (3 variants)
│   │       ├── Card.tsx            # Reusable card with hover glow
│   │       ├── Badge.tsx           # Pill label component
│   │       └── SectionHeading.tsx  # Gradient section heading
│   ├── hooks/
│   │   └── useScrollSpy.ts         # Intersection Observer hook
│   ├── types/
│   │   └── index.ts                # Shared TypeScript interfaces
│   ├── App.tsx                     # Root component — section composition
│   ├── main.tsx                    # React entry point
│   └── index.css                   # Tailwind + custom utilities
├── index.html                      # HTML with SEO meta tags
├── tailwind.config.js              # Custom theme (colors, animations)
├── vite.config.ts                  # Vite config with path alias
├── tsconfig.json                   # TypeScript config
├── package.json
└── .gitignore                      # Security-focused ignore rules
```

### Component Design Principles

- **Single Responsibility** — Each component handles one clear purpose
- **Reusability** — UI primitives (Button, Card, Badge, SectionHeading) are shared across sections
- **Type Safety** — Shared interfaces in `types/index.ts` ensure consistent data shapes
- **Custom Hook** — `useScrollSpy` encapsulates Intersection Observer logic for nav highlighting
- **Path Aliasing** — `@/` maps to `src/` for clean, depth-invariant imports

---

## Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm** (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/hamoodahmed/AI-Powered-Digital-Agency-Website-Using-Bolt-and-React.git

# Navigate into the project directory
cd nexaai-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server starts at `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run TypeScript type checking without emitting files |
| `npm run lint` | Run ESLint across the codebase |

---

## Deployment Guide

This section walks you through uploading the project to GitHub and deploying it live on Vercel. Follow every step in order.

---

### Step 1: Upload to GitHub

#### 1.1 Create a New Repository on GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in the top-right corner and select **New repository**
3. Set the following:
   - **Repository name:** `nexaai-website`
   - **Description:** `AI-powered digital agency website built with React, TypeScript, and Tailwind CSS`
   - **Visibility:** Public (so recruiters and hiring managers can view it)
   - **Do NOT** check "Add a README file" — we already have one
   - **Do NOT** add a `.gitignore` — we already have one
4. Click **Create repository**

#### 1.2 Initialize Git and Push from Your Terminal

Run these commands one by one in your terminal, from the project folder:

```bash
# Initialize a new Git repository
git init

# Stage all files for commit
git add .

# Create your first commit
git commit -m "Initial commit — NexaAI digital agency website

- React 18 + TypeScript + Tailwind CSS + Vite
- 7 sections: Hero, Services, WhyUs, Portfolio, Testimonials, Pricing, Contact
- Scroll-spy navigation, animated mobile menu, portfolio filtering
- Pricing billing toggle, validated contact form with success state
- Responsive design with dark futuristic aesthetic"

# Rename the default branch to 'main'
git branch -M main

# Link your GitHub repository (replace YOUR_USERNAME)
git remote add origin https://github.com/hamoodahmed/AI-Powered-Digital-Agency-Website-Using-Bolt-and-React.git

# Push the code to GitHub
git push -u origin main
```

> **Important:** Replace `YOUR_USERNAME` in the command above with your actual GitHub username.

#### 1.3 Verify the Upload

1. Go back to your repository on GitHub
2. You should see all your project files listed
3. The `.gitignore` file ensures that `node_modules/`, `.env`, `dist/`, and other sensitive files are NOT uploaded
4. Click on the `.gitignore` file to confirm it lists all the protected paths

---

### Step 2: Deploy to Vercel

#### 2.1 Connect Vercel to GitHub

1. Go to [vercel.com](https://vercel.com) and click **Sign Up** (or **Log In**)
2. Choose **Continue with GitHub** to link your GitHub account
3. Authorize Vercel to access your repositories when prompted

#### 2.2 Import the Project

1. On the Vercel dashboard, click **Add New** > **Project**
2. You will see a list of your GitHub repositories
3. Find `nexaai-website` and click **Import**

#### 2.3 Configure and Deploy

1. Vercel auto-detects Vite — the following settings should appear automatically:

   | Setting | Value |
   |---|---|
   | Framework Preset | Vite |
   | Build Command | `npm run build` |
   | Output Directory | `dist` |
   | Install Command | `npm install` |

2. If any of these are blank, fill them in manually using the table above
3. Click **Deploy**
4. Wait 1–2 minutes for the build to complete
5. You will see a **Congratulations** screen with your live URL

#### 2.4 Your Site Is Live

Your website is now deployed at a URL like:

```
https://ai-powered-digital-agency-website-u.vercel.app/
```

> **Automatic deployments:** Every time you push new code to the `main` branch on GitHub, Vercel automatically rebuilds and deploys the updated site. No manual steps needed.

#### 2.5 Optional — Add a Custom Domain

1. In your Vercel project dashboard, go to **Settings** > **Domains**
2. Click **Add Domain**
3. Enter your custom domain (e.g., `nexaai.com`)
4. Follow the DNS configuration instructions Vercel provides

---

### Quick Reference — All Commands in One Place

```bash
# --- GitHub Setup ---
git init
git add .
git commit -m "Initial commit — NexaAI digital agency website"
git branch -M main
git remote add origin https://github.com/hamoodahmed/AI-Powered-Digital-Agency-Website-Using-Bolt-and-React.git
git push -u origin main

# --- Future Updates (after initial push) ---
git add .
git commit -m "Describe your changes here"
git push
```

---

## LinkedIn Post Template

Here is a ready-to-use LinkedIn post. Copy it, make any personal edits, and share it with the live demo link.

---

**Subject: Built a production-ready AI agency website from scratch**

I just built and deployed NexaAI — a premium digital agency website that showcases modern front-end engineering and design.

Here is what went into it:

**Tech Stack:**
React 18 + TypeScript (strict mode) + Tailwind CSS + Vite + Lucide React

**What I built:**
A complete single-page application with 7 fully functional sections:
- Hero with animated CSS gradient orbs and floating stat cards
- Services grid with hover glow effects
- Why Choose Us section with 6 differentiators and a stats panel
- Portfolio with 6 CSS-generated project visuals and working category filters
- Testimonials with star ratings and gradient initials avatars
- Pricing section with a functional monthly/annual billing toggle
- Contact form with real-time validation and an animated success state

**Key engineering details:**
- Custom scroll-spy hook using Intersection Observer for active nav highlighting
- Fully responsive from mobile to desktop with a 6-color design system
- Animated mobile menu with body scroll lock
- Reusable, type-safe component architecture with shared TypeScript interfaces
- CSS-only visuals — no external image dependencies, everything is generated
- Zero build errors, optimized bundle (~59 KB gzipped JS)

**Live Demo:** [https://ai-powered-digital-agency-website-u.vercel.app/]
**Source Code:** [https://github.com/hamoodahmed/AI-Powered-Digital-Agency-Website-Using-Bolt-and-React.git]

Always happy to discuss front-end engineering, React architecture, or AI-driven web experiences. Open to new opportunities.

#React #TypeScript #TailwindCSS #WebDevelopment #FrontendDevelopment #Vite #UIDesign #AI #DigitalAgency #OpenToWork

---

## License

This project is open source and available under the MIT License.

---

<p align="center">
  Built with React, TypeScript, and Tailwind CSS
</p>
