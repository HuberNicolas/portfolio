# Concept: transit network map as a design element

Status (2026-11-12, built): the plan moved. The journey stays one straight line (a route strip). The network plan now shows the projects: a much simplified tram network of the city of Zürich (fare zone 110) with four lines (Data & ML, Visualisation, Research, Tools & web), projects at real stops, Zone 110 border, lake, Limmat, Uetliberg, Zürichberg and a few landmarks, plus a detail card on hover or focus. Also built: nav as a route strip, NH monogram, Jugendstil corners, enamel section titles, varied poster formats and layouts. The text below is the earlier concept and is partly out of date.

## The idea

Iconic schematic network maps (the Zürich tram map, the Sydney Trains map, the Lucerne bus and boat network) share one visual language: straight lines at 0°, 45° and 90°, one colour and one number per line, round stops, white interchange rings, and a strict legend. The site borrows that language to draw Nicolas' path as a network: lines are tracks of his life, stops are stations and projects, and interchanges are the places where two tracks met.

This fits the site's two existing threads:

- **Data:** a schematic map is a data visualisation that people read every day. It is the honest version of "technical" decoration.
- **The poster world:** around 1910, trams carried exactly the kind of advertising the posters imitate. The posters become "ads at the stops".

## What we must not do

- Do not reproduce a real map, its exact layout, line colours used as a brand, logos (VBZ, VBL, ZVV, Sydney Trains, Transport for NSW) or official pictograms. That would imitate real organisations. We use the **genre** (octilinear schematic), with our own geometry, our own line numbers and our own colours from the site palette.
- Real place names (Zürich, Sydney, Lucerne, UZH, UTS) are facts and may appear as stop names.
- Do not invent biography. Confirmed facts (2026-11-12, from Nicolas): grew up in Lucerne, played for Unihockey Luzern for many years, lives in Zürich now.

## Two cities or three?

Three, but not as equals. Each city carries a different part of the story, and all three are facts:

- **Lucerne, the origin terminus:** where the line starts. Childhood, Unihockey Luzern.
- **Zürich, the hub:** most lines meet here. Study at UZH, work, home today.
- **Sydney, the overseas branch:** one long dashed "sea" segment off the map edge, then a short line at UTS. It tells "far away, then back" in one gesture.

Two cities would cut either the roots (Lucerne) or the one move abroad (Sydney). Three equal sheets (option C) would make Lucerne look as big as Zürich, which is not true. One network with a hierarchy is honest and reads better.

## Three options

### A. The journey as a network map (recommended)

Replace the "The journey so far" list with an SVG network map. Everything else stays as it is.

- **Line 0, Origin** (navy, short): Lucerne → Zürich. A stub that feeds into the hub, so the map starts where Nicolas did.
- **Line 1, Education** (cobalt): BSc UZH 2019 → MSc UZH 2023 → MSc done 2025.
- **Line 2, Work** (vermilion): novu 2021 → Migros 2025 → MGB Data & Analytics → Migros Bank → Digitec Galaxus (now).
- **Line 3, Research** (viridian): IVDA research assistant 2023 → IEEE paper 2023 → SDG Tag Heroes (MSc thesis).
- **Line S, Sydney** (gold, drawn as a ferry or harbour line with a dashed segment for the flight): exchange semester at UTS 2024 → Gaia Classifier.
- **Interchanges:** UZH (Lines 1 and 3), the MSc thesis (Lines 1 and 3), Migros (Line 2 branches into its three stations).
- **Stops are links:** a project stop scrolls to its poster; a work stop opens the matching "At present" entry.
- **Time runs left to right** like a timeline, but the lines bend at 45° where tracks meet, so it reads as a map, not a chart.
- Legend in the corner, in the poster type: line number in a coloured disc, line name in Big Shoulders caps.

Why A: it adds the most character for the least risk, it fixes the old timeline's weak point (a long single-column list), and the posters stay the hero.

### B. The navigation as a line

The fixed nav becomes a thin horizontal line with five stops (Remedies, Handbills, Now, Journey, About, Contact). The current section is the lit stop, like the "you are here" marker on a tram display. Small, cheap and pairs well with A, but on its own it is decoration.

### C. Three city sheets

A section with three small network sheets side by side, Zürich, Lucerne and Sydney, each showing what happened there. Strongest "three cities" story, but it splits attention and needs the Lucerne content to exist. Only worth it if Lucerne has real substance.

## Visual rules (for A): an old network plan, not a modern one

Decision 2026-11-12: the map uses the **old style**, like a lithographed tram plan from around 1910, not a modern metro diagram. It replaces the journey timeline completely.

- **Geography as a faint ground:** the lakes and the harbour are drawn as simple flat shapes in `--sky` (Lake Lucerne, Lake Zürich, Sydney Harbour as rough abstract outlines, not traced from a real map). They give the map its place without the need for streets.
- **Lines:** still mostly straight with 45° bends, but thinner (5px desktop, 4px phone) with a fine dark edge, as printed lines were. Colours from the tokens (`--navy`, `--cobalt`, `--vermilion`, `--viridian`, `--gold`).
- **Stops:** small circles with a ring; the main stops (Lucerne, Zürich, Sydney) are larger double rings. Interchanges are joined rings, not modern capsules.
- **Labels:** stop names in Bodoni italic (the house serif), years in small Big Shoulders caps. Labels stay horizontal.
- **Cartouche and legend:** the map title sits in a framed cartouche with the double gold rule ("Liniennetz", "Network of lines"); the legend is a small framed table: line number in a disc, line name, years.
- **Paper:** the map sits on `--paper` with the double rule, like the posters, so it belongs to the same wall. No fake stains, folds or grain.
- **Motion:** one quiet moment only. When the map scrolls into view, the lines draw once in plain even steps (about 1.2 s). No swing timing. Reduced motion: drawn at once.
- **Dark theme:** the map stays on paper (like the posters); only the ground around it changes. Optional later: the "night network" variant.

## Responsive

- Desktop: the full map, about 1100 × 520.
- Phone: the map rotates to run **top to bottom** (time flows down), lines in parallel columns; labels to the right. Do not shrink the desktop map.

## Accessibility

- The SVG has `role="img"` and a title; the real content is an ordered list next to it (visually hidden or shown as a toggle "Show as list"), so screen readers and search engines get the journey as text.
- Stops that link are real `<a>` elements inside the SVG with focus rings.
- Line colours are never the only signal: every line also has its number and name.

## Implementation sketch

1. Add `journeyMap` data to `src/data/content.js`: lines (id, number, colour token, name EN/DE) and stops (id, line ids, year, label EN/DE, link target, x/y on the 24px grid). Keep EN/DE parity.
2. New component `JourneyMap.vue`: renders lines as SVG paths built from the grid coordinates (straight segments plus fixed-radius bends), then stops, interchanges and labels; a second layout table for the phone orientation.
3. Replace `ProgrammeSection.vue` with the map plus its list fallback.
4. Optional B: a `NavLine.vue` variant of the nav that highlights the current section via an IntersectionObserver.
5. Update DESIGN.md (the documenter step) once built.

Effort: A is about one focused session; B adds a little; C depends on content.

## Decisions on the spice ideas (2026-11-12)

- No extra electro swing. No swing timing.
- **Yes:** section titles as small enamel stop signs (rounded rectangle, cobalt or navy, ivory Big Shoulders caps, thin gold rim). Genre only, no operator's sign.
- **Sport stays quiet:** no sport line. Unihockey Luzern appears at most as a small label at the Lucerne terminus. The surf photos stay in the person section. Open: whether the "Training Tonic" ad goes, because it puts sport forward more than wanted.
- Not now: brass gleam, ticket, night network.

## Posters: more depth

Nicolas likes the posters but finds them a bit one-dimensional. The cause: all six have the same format, the same structure (title, arched window, claim, text, foot, stamp), the same size and the same tilt rhythm. A real poster wall is varied. Ideas, best first:

1. **Different formats (recommended).** Real walls mix formats. One tall lead poster (two rows high), one wide landscape poster with the image on the left, two normal ones and two small handbills with type only and a small image. The grid becomes a planned paste-up with fixed slots, not two even columns.
2. **Different layouts per poster (recommended).** Not every poster needs the arch window. Variants: image full bleed with the title over a band; type-led poster where the claim is the hero and the image is a small medallion; chart poster where the figure is framed like a plate in a book. Three or four layouts, chosen per project in the data.
3. **Overlap (recommended, carefully).** Posters overlap their neighbours by a few pixels at corners, as pasted sheets do, and the hovered poster comes to the front. This gives depth without fake texture.
4. **Posters belong to stops.** Each poster carries a small stop tag ("Stop: Universität Zürich", "Stop: UTS Sydney") that links to that stop on the map, and each project stop on the map links back. The wall and the map become one system: the ads hang at the stops.
5. Not: torn edges, glue stains, paper grain, older posters under the new ones. The earlier review called faked material out; depth must come from format and layout.

Recommendation: 1 + 2 + 4 together; 3 if it still feels flat afterwards.

## Open questions

1. Still open: years at Unihockey Luzern, only if the label should carry years.
2. Does the "Training Tonic" ad stay?
3. Posters: go with 1 + 2 + 4?
