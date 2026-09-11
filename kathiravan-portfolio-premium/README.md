# Kathiravan G — Portfolio

A cinematic, premium developer portfolio built with React, Vite, Tailwind CSS v4, GSAP and lucide-react.
Structure and visual language rebuilt from a reference template, fully re-skinned with Kathiravan G's
identity, resume, skills, experience and projects.

## Stack

- React 18 + Vite 6
- Tailwind CSS v4 (via `@tailwindcss/vite`, no config file needed)
- GSAP (entrance animations, scroll-triggered reveals)
- lucide-react (icons)
- `@emailjs/browser` (contact form — configured via environment variables)

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Contact form setup (optional)

The contact form uses [EmailJS](https://www.emailjs.com/). Copy `.env.example` to `.env` and fill in:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If these are left empty, the form still validates input but shows a friendly message asking the
visitor to email directly instead of crashing or silently failing.

## Before you deploy

1. **Resume** — `public/resume/Kathiravan_Resume.pdf` already contains the real uploaded resume.
   Replace it if you update your resume later (keep the same filename, or update the path in
   `src/data/portfolioData.jsx` → `personal.resumePath`).
2. **Project links** — in `src/data/portfolioData.jsx`, each project's `demo` is currently `'#'`
   (no placeholder/invented URL was used). Update it once you have a real deployed link. `github`
   currently points to your GitHub profile (no per-repo URLs were provided).
3. **Social links** — GitHub, LinkedIn and LeetCode URLs live in `src/data/portfolioData.jsx`
   under `socials`.

## Project structure

```
src/
  components/
    Navbar.jsx      Scroll-aware nav with mobile menu
    Hero.jsx         GSAP scramble-text intro + entrance animation
    About.jsx        Word-reveal bio, education, resume button, skills marquee
    Services.jsx      Accordion "What I Can Do" section
    Skills.jsx        Grouped skill badge grid
    Experience.jsx    Timeline-style work experience
    Project.jsx        Alternating-layout project showcase
    Contact.jsx        Contact form + info (EmailJS)
    Footer.jsx          Closing section with socials + big name
  data/
    portfolioData.jsx  All copy, links and content in one place — edit this
                        file to update the site without touching components
  assets/               Images/video used across the site
public/
  resume/Kathiravan_Resume.pdf
  projects/*.png        Project preview mockups
```

## Notes

- No horizontal scroll on any breakpoint (tested at 390px and 1440px).
- No leftover references to the original reference template's branding anywhere in the code.
- Project preview images are illustrative UI mockups (not live screenshots), since the projects
  aren't deployed yet — swap in real screenshots under `public/projects/` when available.
