# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People who look Nicolas Huber up: colleagues and teams across the Migros group, people met at meetups or university, and anyone who follows a link from GitHub, LinkedIn or a CV. There is no active job search right now. The site is a general professional presence, not a recruiting funnel.

Visitors want a quick, credible, personal picture: Nicolas's current work, past projects, background, and how to get in touch.

## Product Purpose

A single-page personal portfolio at `nicolas-huber.dev`. It presents a data engineer / ML developer (MSc Informatics, UZH; IT trainee at Migros-Genossenschafts-Bund since June 2025) through current work, selected projects, a publication, education and experience, and a personal "about" section.

Success: a visitor leaves with an accurate sense of who Nicolas is and what Nicolas works on, and can easily get to GitHub, LinkedIn, ORCID, email, live demos and code.

## Positioning

"Makes messy data behave": turning raw, messy data into clean pipelines and working models. The claim is backed by specifics that no one else's portfolio can copy: a measured production result at Migros (2.4 M models down to 10,000, 240×; training from 3 h to 15 min, 12×), a peer-reviewed IEEE paper (MTD strategy selection, Aug 2023), a master's thesis on AI-assisted, gamified SDG labeling, and playable or explorable live demos (OkCupid Explorer, Towers vs. Monsters: Remastered).

## Operating Context

- Visitors arrive from links (GitHub profile, LinkedIn, CV, email signature) on desktop and phone, and usually skim.
- Bilingual: English and German, toggled in the nav. Choice persists in `localStorage` and is reflected in `?lang=` for deep links.
- Light/dark theme toggle, with the saved or system theme applied before first paint.
- Outbound destinations: GitHub repos, live demos on GitHub Pages, the IEEE paper, LinkedIn, ORCID, email.

## Capabilities and Constraints

- Stack: Vue 3 (`<script setup>` SFCs) + Vite, hand-rolled vanilla CSS design system in `src/styles/main.css`, no CSS framework. Deployed to GitHub Pages via GitHub Actions on push to `main`; custom domain via `public/CNAME`.
- All copy lives in `src/data/content.js` (`en` and `de` objects with identical shapes, plus shared `meta`). Components do not hold copy.
- **EN/DE parity is required:** every piece of copy must exist in both languages before it ships.
- **CV PDFs are pending:** `meta.cv` points to `/cv/nicolas-huber-cv-en.pdf` and `/cv/nicolas-huber-cv-de.pdf`, which are not in `public/cv/` yet. Future work must handle this gracefully and never ship a placeholder or fake CV.
- License: GPL-3.0-or-later.

## Brand Commitments

- **The alchemy is retired to a footnote (owner's decision, 13 Nov 2026).** "Aspiring code alchemist" read as unprofessional as a headline. The subtitle is now "makes messy data behave" / "bringt unordentliche Daten in Form", the ribbon reads "raw data → pipeline → model". The old tagline survives only as a small nod in the footer ("Formerly known as the aspiring code alchemist"). The owner still likes the theme: keep that one nod, do not bring alchemy back into headings or copy without asking. The remedy-poster design stays.
- **Playful touches are welcome but rare.** Example: the running photo captioned "Running away from Teams messages".
- **German copy uses Swiss conventions:** `ss` instead of `ß`, `’` as the thousands separator (10’000), Swiss vocabulary (e.g. "Spitäler").
- Name: Nicolas Huber. Location: Zürich, Switzerland.

## Evidence on Hand

- Portrait and personal photos: `public/img/portrait.jpg`, `hiking.jpg`, `running.jpg`, `surfing.jpg`.
- Favicon: `public/favicon.svg`.
- Real projects with repos, two with live demos (see `projects.items` and `projects.more` in `src/data/content.js`).
- Publication: IEEE, Aug 2023, MTD strategy selection against malware in resource-constrained devices.
- Quantified work results at Migros (MGB Data & Analytics; Migros Bank Product & Marketing Analytics).
- Absent and must not be fabricated: CV files, testimonials, client logos, employer endorsements, metrics beyond those already in the content.

## Product Principles

1. **Specifics over adjectives.** Let real projects, numbers and links carry credibility.
2. **Personal, not corporate.** It's a person's page. Warmth and the occasional wink belong; sales funnels don't.
3. **One source of truth, two languages.** Content changes go through `content.js` and land in EN and DE together.
4. **Everything reachable.** Every project, paper and profile mentioned links to something real a visitor can open.
5. **Keep the period voice on the printed objects.** The remedy posters carry the wink; headings and facts stay plain.
