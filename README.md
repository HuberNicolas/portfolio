# portfolio

Personal portfolio of **Nicolas Huber**: data engineering and machine learning in Zürich.
Live at [nicolas-huber.dev](https://nicolas-huber.dev).

One page in English and German. Each project is advertised as a 1910 wonder-remedy poster on a wall, the projects are
also drawn as stops on a simplified Zürich tram plan, and the rest of the page stays plain and readable. Light theme
("Matinée") and dark theme ("Evening show"). Vue 3 and Vite, no CSS framework.

The design system is described in [`DESIGN.md`](DESIGN.md), the product context in [`PRODUCT.md`](PRODUCT.md).

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Editing content

All copy lives in [`src/data/content.js`](src/data/content.js): an `en` and a `de` object with the same shape, a shared
`meta` block (name, links, CV paths), the poster settings (`posterMeta`) and the tram plan (`networkMap`). Components
hold no copy.

- Every text exists in both languages. German uses Swiss spelling: `ss` instead of `ß`, `10’000`.
- The CV PDFs in `public/cv/` are built in the private repo `minimalistic-cv` (artifact `cv-web`, without phone
  number). The CV link only appears for a language whose PDF exists at build time; restart the dev server after adding
  one.
- Language and theme are stored in `localStorage`. The language is also reflected in `?lang=`, so links can point to
  one language.

## Structure

```
src/
├─ data/content.js          # all copy (EN/DE), meta, posters, tram plan
├─ composables/
│  ├─ useLang.js            # language state, toggle, persistence
│  └─ useTheme.js           # Matinée / Evening show theme
├─ styles/main.css          # tokens and global styles
├─ components/
│  ├─ NavBar.vue            # route-strip navigation, drawer on phones
│  ├─ PosterWall.vue        # masthead and the poster wall
│  ├─ RemedyPoster.vue      # one project poster
│  ├─ BoxSection.vue        # route map, handbills, publication
│  ├─ NetworkMap.vue        # the tram plan (SVG)
│  ├─ NowSection.vue        # current work and the training-tonic ad
│  ├─ ProgrammeSection.vue  # journey
│  ├─ PersonSection.vue     # about, photos
│  └─ ClosingSection.vue    # contact poster and footer
├─ App.vue
└─ main.js
```

## Deployment

`.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages on every push to `main`. The custom
domain comes from `public/CNAME`; keep `base: '/'` in `vite.config.js`. For a project page at
`hubernicolas.github.io/portfolio/`, build with `DEPLOY_BASE=/portfolio/ npm run build`.

## License

GPL-3.0-or-later © Nicolas Huber
