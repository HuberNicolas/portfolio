---
name: Nicolas Huber Portfolio
description: Aspiring code alchemist. Every project is advertised as a 1910 wonder remedy, pasted onto a wall inside a quiet, modern page.
colors:
  matinee-ground: "#eef3f6"
  navy-ink: "#142039"
  ink-dim: "#3d4a63"
  ink-faint: "#5a6680"
  gold-text: "#85600f"
  rule: "rgba(20, 32, 57, 0.14)"
  rule-strong: "rgba(20, 32, 57, 0.32)"
  evening-ground: "#0d1426"
  evening-ivory: "#f1ead8"
  evening-dim: "#c2bba8"
  evening-faint: "#9b947f"
  evening-gold: "#e2b553"
  evening-rule: "rgba(241, 234, 216, 0.14)"
  evening-rule-strong: "rgba(241, 234, 216, 0.32)"
  cobalt: "#1f3c88"
  vermilion: "#b43a26"
  viridian: "#2f6e5a"
  sky: "#bfdcec"
  paper: "#f4efe2"
  ivory: "#f6f0e1"
  gold: "#c9962e"
  gold-light: "#e8c06a"
typography:
  display:
    fontFamily: "'Bodoni Moda', 'Didot', 'Bodoni 72', Georgia, serif"
    fontSize: "clamp(52px, 6.2vw, 92px)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.02em"
    fontVariation: "'opsz' 14"
  headline:
    fontFamily: "'Bodoni Moda', 'Didot', 'Bodoni 72', Georgia, serif"
    fontSize: "clamp(28px, 3.4vw, 44px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
    fontVariation: "'opsz' 14"
  title:
    fontFamily: "'Bodoni Moda', 'Didot', 'Bodoni 72', Georgia, serif"
    fontSize: "clamp(30px, 2.6vw, 40px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.01em"
    fontVariation: "'opsz' 14"
  title-small:
    fontFamily: "'Bodoni Moda', 'Didot', 'Bodoni 72', Georgia, serif"
    fontSize: "clamp(22px, 2vw, 26px)"
    fontWeight: 700
    lineHeight: 1.2
    fontVariation: "'opsz' 14"
  claim:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "clamp(21px, 1.7vw, 26px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.02em"
  action:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "18px"
    fontWeight: 700
    letterSpacing: "0.08em"
  label:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "16px"
    fontWeight: 600
    letterSpacing: "0.12em"
  body-lead:
    fontFamily: "'Schibsted Grotesk', system-ui, -apple-system, sans-serif"
    fontSize: "clamp(20px, 2vw, 24px)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "'Schibsted Grotesk', system-ui, -apple-system, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "'Schibsted Grotesk', system-ui, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  plate: "2px"
  notice: "6px"
  enamel: "12px"
  pill: "999px"
spacing:
  mount: "14px"
  poster-pad: "clamp(18px, 2.2vw, 28px)"
  gutter: "clamp(16px, 4vw, 40px)"
  wall-gap: "clamp(28px, 3vw, 44px) clamp(20px, 2.4vw, 36px)"
  section: "clamp(80px, 11vw, 144px)"
  container: "1240px"
components:
  section-title:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.ivory}"
    typography: "{typography.headline}"
    rounded: "{rounded.enamel}"
    padding: "0.28em 0.8em 0.34em"
  poster-cobalt:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.ivory}"
    padding: "{spacing.mount}"
  poster-vermilion:
    backgroundColor: "{colors.vermilion}"
    textColor: "{colors.ivory}"
    padding: "{spacing.mount}"
  poster-viridian:
    backgroundColor: "{colors.viridian}"
    textColor: "{colors.ivory}"
    padding: "{spacing.mount}"
  poster-navy:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.ivory}"
    padding: "{spacing.mount}"
  poster-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy-ink}"
    padding: "{spacing.mount}"
  poster-sky:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.navy-ink}"
    padding: "{spacing.mount}"
  action-link:
    textColor: "{colors.vermilion}"
    typography: "{typography.action}"
    padding: "4px 0"
  ribbon:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
    padding: "10px 26px"
  ribbon-evening:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy-ink}"
  nav-button:
    textColor: "{colors.navy-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "36px"
    padding: "0 12px"
  stop-tag:
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 12px 4px 4px"
  map-card:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.notice}"
    padding: "14px 16px 12px"
    width: "270px"
---

# Design System: Nicolas Huber Portfolio

## Overview

**Creative North Star: "The Wonder-Remedy Wall"**

The aspiring code alchemist advertises his remedies. Each project is a 1910 elixir poster: a real image in an Art Nouveau window, a true claim in confident poster voice, a round stamp and two plain actions. The posters are pasted onto a wall beside a sticky house masthead, and the rest of the page keeps the same printed vocabulary: section titles are enamel stop signs, the journey and the navigation are tram route strips, and the project map is a network plan of four invented lines laid over a simplified Zürich zone-110 tram network.

The energy is the 1910 World's Fair and elixir advertising: luminous, sure of itself, a little tongue-in-cheek, as a genre and never as a copy of any game, brand or transit operator. Around the posters the scaffold stays modern and quiet: a sky-white ground, navy ink, generous section spacing, a grotesk for every sentence a visitor actually needs to read. Colour and period voice live on the printed objects (posters, ad, plan, closing poster); the page itself never dresses up.

Two theme names come from the cinema bill: the light **Matinée** is the default, the dark **Evening show** sits under `data-theme="dark"`. Printed objects keep their colours in both.

**Key Characteristics:**
- Printed objects on a modern ground: posters, the training-tonic ad, the network plan and the closing poster carry full-strength fields; everything else is navy (or ivory) text on a calm ground.
- Three voices of type: Bodoni Moda italic for names, Big Shoulders Display caps for claims and labels, Schibsted Grotesk for reading.
- Gold double rules with small Jugendstil corner curls frame every printed object.
- Transit grammar for structure: stop dots, route strips, lettered line discs, a zone border.
- One authored motion moment (the paste-up) plus a hover straighten and a one-time line draw on the plan.

## Colors

A sky-and-navy house with a small set of printed poster inks that never change with the theme.

### Primary
- **Cobalt Enamel** (cobalt): the house plate. Section titles (enamel signs), the lead poster field, the closing poster, the monogram disc, the programme route line.
- **Navy Ink** (navy-ink): Matinée text and the dark poster field; the ribbon ground in Matinée, the map detail card, stop-dot rings on the plan and route.

### Secondary
- **Poster Vermilion** (vermilion): a poster field, the stamp on paper and sky posters, and the Matinée link and hover colour (also the lit current stop in the nav and the focus ring).
- **Viridian** (viridian): a poster field; thinned with paper for the woods on the plan.

### Tertiary
- **Leaf Gold** (gold): the double rule, the monogram rings, the Evening ribbon ground.
- **Pale Gold** (gold-light): rules and stamps on dark fields, the inner rim line of the enamel sign, the closing poster's email, hover fill of project stops on the plan.
- **Gold Text** (gold-text / evening-gold): the masthead motto and programme dates; a darker gold for contrast on the Matinée ground, a brighter one in the Evening show, where it also becomes the link colour.

### Neutral
- **Matinée Sky-White** (matinee-ground): the Matinée page ground.
- **Ink Dim / Ink Faint** (ink-dim, ink-faint): secondary text, labels, the footer line.
- **Hairline / Strong Hairline** (rule, rule-strong): section borders, list dividers, link underlines, the nav route line, nav button outlines.
- **Evening Navy** (evening-ground) with **Evening Ivory** (evening-ivory), **Evening Dim** and **Evening Faint**: the Evening show ground and text tiers; its rules are ivory at the same two strengths.
- **Poster Paper** (paper) and **Ivory** (ivory): the paper field (posters, ad, photo mounts, network plan) and the text on every dark field.
- **Sky** (sky): a poster field and the lake and river on the plan.

### Named Rules
**The Printed Field Rule.** Posters, the ad, the photo mounts, the network plan and the closing poster are printed objects: their fields, inks and rules are fixed and do not swap with the theme. Only the page ground, page text, rules, ribbon and link colour change.

**The Six Fields Rule.** A poster is printed on exactly one of six fields: cobalt, vermilion, viridian or navy (ivory text, pale gold rule) or paper or sky (navy text, gold or navy rule, vermilion stamp). No gradients, no new field colours.

**The Four Lines Rule.** The plan has four lines, one per field of work, named by a letter, never a number, and drawn in the colour of the Zürich tram that runs its corridor: D (Data & ML) magenta like tram 10, V (Visualisation) black like tram 7, R (Research) green like tram 3, T (Tools & web) blue like tram 4 (tokens --tram-magenta, --tram-black, --tram-green, --tram-blue; the only colours outside the poster palette). Line discs repeat these colours wherever a stop is referenced (poster stop tags, map card).

## Typography

**Display Font:** Bodoni Moda, italic only, weights 500 to 800 (with Didot, Bodoni 72, Georgia)
**Banner Font:** Big Shoulders Display, 600 to 800, always uppercase (with Arial Narrow)
**Body Font:** Schibsted Grotesk, 400 and 600 (with system-ui)

**Character:** A high-contrast Didone italic names things the way a 1910 bill would; condensed caps shout the claims; a sober modern grotesk carries every fact, so the period voice never gets in the way of reading.

### Hierarchy
- **Display** (Bodoni italic 800, clamp 52 to 92px, line-height 0.92): the name in the masthead only. The closing poster's call (800, clamp 40 to 68px) is its only sibling.
- **Headline** (Bodoni italic 700, clamp 28 to 44px, line-height 1.08): section titles, always set inside the enamel sign.
- **Title** (Bodoni italic 700, clamp 30 to 40px; the lead poster goes to clamp 36 to 54px): remedy names on posters.
- **Title Small** (Bodoni italic 700, 22 to 26px, line-height 1.2): programme stops, handbill names, map stop names, the paper title. The masthead motto uses the same face at weight 500 in gold.
- **Claim** (Big Shoulders 700, clamp 21 to 26px, uppercase, +0.02em): the poster claim. On medallion handbills the claim switches to Bodoni italic and becomes the hero.
- **Action** (Big Shoulders 700, 18px, uppercase, +0.08em): text actions with an underline bar.
- **Label** (Big Shoulders 600, 16px, uppercase, +0.12em): dates, organisations, captions, list headings, nav stops, the formula ribbon.
- **Body Lead** (Schibsted 400, 20 to 24px, line-height 1.45, about 36ch): the opening paragraph of Now and Person.
- **Body** (Schibsted 400, 18px, line-height 1.6, 34 to 62ch): all running text; 600 for station names.
- **Body Small** (Schibsted 400, 16px, line-height 1.5): poster descriptions; 13 to 15px only inside the ad note and the map card.

### Named Rules
**The Readable Hairline Rule.** Bodoni Moda is set with optical sizing off and `'opsz' 14` on the body. Its display optical size has hairlines too thin to read (Huber reads as Iluber); never switch optical sizing back on.

**The Facts In Grotesk Rule.** Every recruiting-relevant fact (role, employer, dates, degrees, results, contact) exists as plain grotesk or label text that can be read and copied. Bodoni and the poster voice decorate; they never carry the only copy of a fact.

**The No Mono Rule.** No monospace face anywhere. The site is not a terminal.

## Layout

A single page in one centred container (max 1240px, side padding clamp 16 to 40px). Sections are separated by a hairline and generous vertical padding (clamp 80 to 144px). The fixed nav is 64px tall and becomes a translucent ground with a hairline once the page scrolls.

The opening is a two-column grid (about 0.52 : 1): the masthead on the left stays sticky while the poster wall scrolls by on the right. The wall is a two-column dense grid: normal posters take one column, wide posters span both, small handbills are inset a little from their slot. Below 900px the masthead stacks above the wall and stops sticking; below 620px the wall becomes one column and wide layouts fall back to a stacked picture-then-text order.

Content sections use asymmetric two-column grids (Now 0.8 : 1.4, About 1.1 : 1) collapsing to one column at 820px. The programme is a single vertical route, newest stop first, with dates right-aligned in a column left of the line (on phones the dates move above each stop). Photos sit in a three-up row that becomes a horizontal snap scroller on phones. The network plan scrolls horizontally inside its frame below about 820px, with a swipe hint.

## Elevation & Depth

Depth means paper on a wall. Printed objects (posters, plan, closing poster) cast a soft two-layer drop shadow and sit at a slight tilt; the page itself is flat. Hover or focus lifts a poster and straightens it. The enamel sign gets its own inset rim and a small cast shadow. There are no glows, no hard offset shadows and no blur effects.

### Shadow Vocabulary
- **Pasted paper** (`box-shadow: 0 1px 2px var(--shadow), 0 18px 36px -12px var(--shadow)`): posters and the network plan at rest; the closing poster uses `0 22px 40px -14px`.
- **Lifted paper** (`box-shadow: 0 1px 2px var(--shadow), 0 26px 44px -14px var(--shadow)`): poster on hover or focus, with `rotate(0) translateY(-4px)`.
- **Enamel rim** (`box-shadow: inset 0 0 0 3px cobalt, inset 0 0 0 4.5px gold-light, 0 1px 1px rgba(20,32,57,.25), 0 10px 20px -10px var(--shadow)`): section titles; in the Evening show the 1px outer line becomes faint ivory.
- **Notice** (`box-shadow: inset 0 0 0 1px gold, 0 14px 28px -10px rgba(20,32,57,.5)`): the map detail card.

The shadow colour is navy at 18% in the Matinée and black at 50% in the Evening show.

### Named Rules
**The Paste-Up Tilt Rule.** Printed objects hang slightly askew (posters 0.8 to 1.5deg, wide bills -0.5deg, the ad -1.2deg, closing poster -0.6deg, photos about ±0.9deg). Interface elements (nav, buttons, text blocks) are never tilted.

## Shapes

Mostly rectangular paper with a few period silhouettes. The house border is a double rule: 1.5px border plus a 1.5px outline offset 4px, with a small drawn Jugendstil curl masked into each inner corner, in gold (pale gold or navy on some fields). Poster windows have an arched top (`999px 999px 6px 6px`); bleed layouts drop the arch and run the picture to the rule; plates use a 2px corner and a second offset outline; medallion seals are full circles. Stamps are 74px circles with a double ring, rotated -12deg. The enamel sign has 12px corners. The formula ribbon is notched at both ends with a 12px clip-path chevron. Pills (999px) are reserved for nav buttons and stop tags. Stop dots are white circles with a navy ring; line discs are small solid circles with an ivory ring.

## Components

### Remedy Poster (signature)
A 14px coloured mount around a double-ruled inner panel. Title (Bodoni italic, with right padding for the stamp), picture window, claim in banner caps, short description, a foot with a hairline above holding the actions on the left and the kind label on the right, then an optional stop tag linking to the plan.
- **Fields:** the six fields of the Six Fields Rule.
- **Layouts:** *arch* (arched window, title first), *bleed* (picture runs to the rule, 4:3), *medallion* (type-led handbill: small round seal, stamp in the grid, Bodoni claim as hero), *plate* (wide bill, figure framed like a book plate beside the text).
- **Formats:** *normal* (one column), *wide* (spans both columns, picture left half), *small* (inset handbill).
- **Chart pictures:** figures from papers sit on an ivory window with multiply blending so their white becomes paper.
- **Motion:** pasted up on first load (clip from the top, tilt settles from 3x, 0.7s, staggered 110ms); hover or focus straightens and lifts it. Reduced motion: posters are simply there.

### Stamp
A round vermilion, ivory or pale-gold double-ring stamp with condensed caps (13px, 800), rotated -12deg, top-right of the poster. One per poster.

### Section Title (Enamel Sign)
Every section title is a cobalt enamel plate with ivory Bodoni italic, a 3px cobalt rim, a fine pale-gold inner line and 12px corners. Sized to content, never full width.

### Actions
- **Action link:** banner caps 18px with a 2px underline bar and, for outbound links, a 14px arrow icon that nudges up-right on hover. In the page it takes the link colour; on posters it takes the poster's text colour and dims to 80% on hover.
- **Quiet action:** same, with a 1px bar (the Code link beside a demo).
- **Nav button:** pill outline (1.5px strong hairline), 36px tall, banner caps; turns link colour on hover. Used for the language switch and the theme switch (Matinée / Evening).

### Formula Ribbon
The house formula (raw data → elegant systems → meaningful impact) on a notched ribbon: navy with ivory in the Matinée, gold with navy in the Evening show.

### Navigation (Route Strip)
Fixed bar with the NH monogram (cobalt disc, two gold rings, ivory Bodoni initials) and the name in Bodoni italic. Links are banner caps sitting on a thin 3px line; each link has a small hollow stop dot under it, the current section's dot is filled with the link colour and scaled 1.25. On narrow screens the strip stands upright in a drawer with the dots on a vertical line.

### Programme Route
A 10px cobalt line through 28px white stop dots with a 4px navy ring (ivory ring in the Evening show); the current stop is filled. Gold dates in banner caps, Bodoni titles, grotesk detail.

### Network Plan
Printed on paper inside the double rule. A dashed grey zone border with a round "110" badge, woods tinted viridian, the lake and river in sky, small line-drawn landmark icons, and a legend of four lettered line discs. Lines are 11px, flat colour, round joins, running at 0, 45 or 90 degrees; they draw themselves once when the plan first scrolls into view (1.2s, 160ms stagger). Stops are white dots with a navy ring (thicker at interchanges); project stops carry a Bodoni name and a caps place name and open a navy detail card on hover or focus (name, line discs and place in pale gold, kind, claim, "see poster"/"see code"). Place names stay German.

### Training Tonic Ad
A small paper advertisement (max 320px) in a double rule, tilted -1.2deg, centred: Bodoni product name, banner-caps claim, the result in vermilion Bodoni italic, a fine-print note. The only place a number is allowed to stand out.

### Stop Tag
A pill in the poster's text colour at 12% (22% on hover) with a line disc and "Stop · Place" in caps, linking a poster to its stop on the plan.

### Photo Mount
Photographs sit in a paper mount (8px) inside the double rule, slightly tilted, with a centred caps caption below.

### Closing Poster
The house's own advertisement: cobalt field, pale-gold double rule, centred Bodoni call, caps line, the email address set large in pale-gold Bodoni italic, then GitHub, LinkedIn and ORCID in caps.

## Do's and Don'ts

### Do:
- **Do** advertise every project as a remedy with a true, slightly tongue-in-cheek claim on one of the six fields, with a stamp and real demo/code actions.
- **Do** frame every printed object in the gold double rule with its Jugendstil corners.
- **Do** keep printed colours fixed across Matinée and Evening show; change only ground, text, rules, ribbon and link colour.
- **Do** set every recruiting-relevant fact (role, employer, dates, degrees, results, email, GitHub, LinkedIn, ORCID) as plain, findable text.
- **Do** keep achievements subtle: numbers live in captions, descriptions and the one small ad.
- **Do** keep sport a marginal footnote at the end of About, after the work facts.
- **Do** use the transit grammar (stop dots, route strips, line discs, zone border) for structure, with invented lines and the four poster inks.
- **Do** keep copy in `src/data/content.js` with EN/DE parity, Swiss spelling and du in German.
- **Do** honour reduced motion: posters simply appear and the plan lines are drawn from the start.

### Don't:
- **Don't** make it look like a newspaper: no newsprint columns, datelines, bylines or broadsheet rules.
- **Don't** copy BioShock Infinite: no logos, characters, typography lockups, slogans or props from the game. The 1910 World's Fair mood is a genre only.
- **Don't** use real transit branding: no VBZ or ZVV logos and no real line numbers. The route map borrows only the Zürich tram line colours (owner's decision).
- **Don't** fake material: no paper grain, stains, torn edges, halftone noise or aged textures.
- **Don't** add swing timing or extra electro-swing props (no gramophones, bouncing reveals, cabaret ornaments). The paste-up and the line draw are the only authored motion.
- **Don't** put a metric hero, stats strip or achievement badges on the page.
- **Don't** use monospace, glows, grid backgrounds, or kickers and eyebrows above headings.
- **Don't** tilt interface elements or body text; only printed objects hang askew.
- **Don't** turn Bodoni Moda's optical sizing back on.
