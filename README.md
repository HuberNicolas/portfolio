# portfolio

Personal portfolio of **Nicolas Huber** — _aspiring code alchemist_.
Turning raw data into elegant, meaningful systems.

Built with **Vue 3 + Vite**. A single, clean, dark-themed page with a bilingual
(EN / DE) toggle. No CSS framework — a small hand-rolled design system instead.

## Stack

- [Vue 3](https://vuejs.org/) (`<script setup>` SFCs)
- [Vite](https://vite.dev/) for dev server & build
- Vanilla CSS design system (`src/styles/main.css`)
- Fonts: Space Grotesk + JetBrains Mono (Google Fonts)

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Editing content

All copy lives in **one place**: [`src/data/content.js`](src/data/content.js).
It holds an `en` and a `de` object with identical shapes, plus a shared `meta`
block (name, links, CV paths). Change text there — no need to touch components.

- Add your CV PDFs to `public/cv/` (`nicolas-huber-cv-en.pdf`,
  `nicolas-huber-cv-de.pdf`) — paths are configured in `meta.cv`.
- The language is remembered via `localStorage` and reflected in a `?lang=`
  URL parameter, so links can deep-link into a language.

## Structure

```
src/
├─ data/content.js        # all bilingual copy + meta (single source of truth)
├─ composables/
│  ├─ useLang.js          # language state, toggle, persistence
│  └─ useReveal.js        # scroll-reveal via IntersectionObserver
├─ styles/main.css        # design tokens + global styles
├─ components/            # Nav, Hero, Stats, Work, Projects, Publication,
│                         #   Journey, About, Footer
├─ App.vue
└─ main.js
```

## Deployment

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to
GitHub Pages on every push to `main`.

- **Custom domain** (e.g. `nicolas-huber.dev`): keep `base: '/'` in
  `vite.config.js` and add a `CNAME` file to `public/`.
- **Project page** (`hubernicolas.github.io/portfolio/`): build with
  `DEPLOY_BASE=/portfolio/ npm run build` (the workflow sets this automatically
  when no custom domain is used).

## License

GPL-3.0-or-later © Nicolas Huber
