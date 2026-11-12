---
name: Nicolas Huber Portfolio
description: Aspiring code alchemist. A dark, terminal-flavoured personal page where raw data becomes elegant systems.
colors:
  void: "#08080c"
  void-raised: "#0d0d14"
  void-deep: "#12121d"
  panel-veil: "rgba(255, 255, 255, 0.025)"
  moonlight: "#eaeaf2"
  ash: "#9a9aad"
  smoke: "#7a7a90"
  hairline: "rgba(255, 255, 255, 0.08)"
  hairline-strong: "rgba(255, 255, 255, 0.16)"
  elixir-green: "#5cf0b0"
  quicksilver-blue: "#6eb5ff"
  aether-violet: "#c99bff"
  gold-leaf-amber: "#ffc06e"
  cinnabar-red: "#ff7a7a"
  paper: "#f6f6f9"
  paper-raised: "#ffffff"
  paper-deep: "#ececf2"
  ink: "#15151f"
  ink-dim: "#52526a"
  elixir-green-light: "#077a52"
  quicksilver-blue-light: "#2a6ad0"
  aether-violet-light: "#7c45d0"
  gold-leaf-amber-light: "#946000"
typography:
  display:
    fontFamily: "'Space Grotesk', system-ui, -apple-system, sans-serif"
    fontSize: "clamp(46px, 9vw, 104px)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Space Grotesk', system-ui, -apple-system, sans-serif"
    fontSize: "clamp(28px, 4.4vw, 46px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Space Grotesk', system-ui, -apple-system, sans-serif"
    fontSize: "21px"
    fontWeight: 600
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Space Grotesk', system-ui, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  body-small:
    fontFamily: "'Space Grotesk', system-ui, -apple-system, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.65
  prompt:
    fontFamily: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "clamp(18px, 3.4vw, 30px)"
    fontWeight: 400
  numeral:
    fontFamily: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "clamp(28px, 4vw, 40px)"
    fontWeight: 600
    letterSpacing: "-0.02em"
  label:
    fontFamily: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "13px"
    fontWeight: 500
    letterSpacing: "0.04em"
  label-small:
    fontFamily: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "12.5px"
    fontWeight: 400
rounded:
  xs: "8px"
  sm: "10px"
  md: "14px"
  pill: "999px"
spacing:
  hairline-gap: "8px"
  stack: "14px"
  grid-gap: "20px"
  gutter: "24px"
  card: "26px"
  section: "clamp(64px, 10vw, 120px)"
  container: "1120px"
  nav-height: "68px"
components:
  button:
    backgroundColor: "{colors.panel-veil}"
    textColor: "{colors.moonlight}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  button-primary:
    backgroundColor: "{colors.panel-veil}"
    textColor: "{colors.moonlight}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  chip:
    backgroundColor: "{colors.panel-veil}"
    textColor: "{colors.ash}"
    typography: "{typography.label-small}"
    rounded: "{rounded.pill}"
    padding: "4px 11px"
  card:
    backgroundColor: "{colors.panel-veil}"
    textColor: "{colors.moonlight}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  panel:
    backgroundColor: "{colors.panel-veil}"
    textColor: "{colors.ash}"
    rounded: "{rounded.md}"
    padding: "24px"
  formula-step:
    backgroundColor: "{colors.panel-veil}"
    textColor: "{colors.ash}"
    rounded: "{rounded.xs}"
    padding: "6px 14px"
  nav-toggle:
    backgroundColor: "{colors.panel-veil}"
    textColor: "{colors.ash}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  nav-bar:
    textColor: "{colors.ash}"
    height: "{spacing.nav-height}"
---

# Design System: Nicolas Huber Portfolio

## Overview

**Creative North Star: "The Alchemist's Terminal"**

The page is a dark workspace where the transmutation happens. Everything a terminal would say — the kicker above each section, the `>` prompt with its typed role and blinking caret, periods, tags, numbers — is set in JetBrains Mono. Everything a person would say — the name, headings, prose — is set in Space Grotesk. That split is the whole personality: a precise, technical instrument with a warm human voice running through it. Personal photos and the occasional wink ("4 surf camps") keep it from feeling like a dashboard.

The mood is calm, technical and warm. Surfaces are near-black with a faint grid and two soft glows that stay fixed at the top of the viewport, like a screen in a dim room. Panels are almost invisible at rest: a hairline border and a 2.5% white veil. Colour appears in small, deliberate doses — a green kicker, a blue typed word, a coloured period on a timeline — and blooms only when the visitor touches something. Density is generous: one idea per section, wide section padding, a 1120px column.

The alchemy lives in words and in one structural device, the formula (raw data → elegant systems → meaningful impact), where each step gets more colour than the last. It never becomes ornament. This is explicitly not neon cyberpunk (no heavy glow, saturated neon or glitch effects), not a corporate template (no stock imagery or sales-funnel CTAs) and not fantasy alchemy kitsch (no parchment, runes, potion bottles or medieval type).

A light theme exists, toggled in the nav and applied before first paint. It keeps every role and swaps the values: paper surfaces, ink text, and deeper versions of each accent so they hold contrast on white.

**Key Characteristics:**
- Two voices: mono for the machine, grotesk for the person.
- Near-black void with a masked 46px grid and two fixed ambient glows.
- Panels quiet at rest; lift, accent edge and soft glow only on hover or focus.
- Elixir Green leads; Quicksilver Blue is the second voice; violet and amber tag individual items.
- Raw → refined gets more colour at each step (dim → blue → green).
- Hairline borders and generous radii (10–14px) everywhere; pills for small controls.

## Colors

A near-monochrome night palette lit by four soft, slightly pastel accents, each mapped to an alchemical substance.

### Primary
- **Elixir Green** (`elixir-green`): the signature. Section kickers, the prompt `>`, the caret, the "result" step of the formula, list markers, the live-status dot, link hover, nav underline, text selection tint, the brand mark. If one thing on a screen is coloured, it is this.

### Secondary
- **Quicksilver Blue** (`quicksilver-blue`): the second voice. The typed role in the hero, the middle "elegant systems" step of the formula, side-panel titles, and the second ambient glow. Pairs with green in gradients (timeline line, primary button, portrait halo).

### Tertiary
- **Aether Violet** (`aether-violet`) and **Gold-Leaf Amber** (`gold-leaf-amber`): per-item accents, applied through `data-accent` on project cards, timeline entries and stats. Amber also owns the publication banner (icon, kicker, hover border). Neither is used for global UI.
- **Cinnabar Red** (`cinnabar-red`): defined but reserved; no current surface uses it.

### Neutral
- **Void** (`void`): page background in dark theme. **Void Raised** and **Void Deep** are the two tonal steps above it.
- **Panel Veil** (`panel-veil`): the 2.5% white wash that is the fill of every card, panel, chip and button.
- **Moonlight** (`moonlight`): primary text and headings.
- **Ash** (`ash`): body prose, descriptions, nav links, chip text. Most running text on the page is Ash, not Moonlight.
- **Smoke** (`smoke`): faint meta text (footer meta, card arrows at rest, formula arrows, captions). Still readable: it holds 4.5:1 on Void (light theme: `#6e6e84` on Paper).
- **Hairline** / **Hairline Strong** (`hairline`, `hairline-strong`): 8% and 16% white borders. Hairline for panels and dividers; Strong for buttons and the repo pill.
- **Paper / Paper Raised / Paper Deep / Ink / Ink Dim**: the light-theme counterparts of Void, Void Raised, Void Deep, Moonlight and Ash. The `-light` accent keys are the deeper accents used in the light theme; each holds at least 4.5:1 on Paper so small mono labels stay readable.

### Named Rules
**The One Elixir Rule.** Elixir Green is the only colour that appears in global UI chrome. Blue supports it; violet and amber belong to individual items, never to navigation or section structure.

**The Rising Colour Rule.** When something moves from raw to refined (formula, timeline line), colour rises with it: dim neutral → Quicksilver Blue → Elixir Green. Never reverse it.

**The Ash-First Rule.** Running prose is Ash. Moonlight is for names, headings and the few words that must lead.

## Typography

**Display Font:** Space Grotesk (with system-ui, -apple-system, sans-serif)
**Body Font:** Space Grotesk
**Label/Mono Font:** JetBrains Mono (with ui-monospace, SF Mono, Menlo, monospace)

**Character:** Space Grotesk is a slightly quirky geometric grotesk that reads as personal and contemporary; JetBrains Mono is the terminal. The grotesk carries meaning, the mono carries metadata.

### Hierarchy
- **Display** (700, `clamp(46px, 9vw, 104px)`, 0.98): the hero name only. Tight negative tracking and a vertical Moonlight-to-grey text gradient.
- **Headline** (700, `clamp(28px, 4.4vw, 46px)`, 1.08): section titles, always preceded by a mono kicker.
- **Title** (600, 19–24px): card names (21px), timeline titles (19px), the current role (up to 24px).
- **Body** (400, 16px, 1.65): prose; capped around 560–760px wide. Lead and about paragraphs run slightly larger (16.5–17.5px); card and timeline descriptions use **Body Small** (14.5px).
- **Prompt** (mono 400, `clamp(18px, 3.4vw, 30px)`): the hero's typed role line.
- **Numeral** (mono 600, `clamp(28px, 4vw, 40px)`): stat values, coloured by the item accent.
- **Label** (mono 500, 13px, 0.04em): section kickers, panel titles, nav links (14px), buttons (14px).
- **Label Small** (mono 400, 12–12.5px): chips, card roles, periods, captions, footer meta.

### Named Rules
**The Two Voices Rule.** If a string is data, a date, a tag, a number or a command, it is mono. If it is a sentence or a name, it is grotesk. Don't mix within one element.

**The Kicker Rule.** Every section title has a mono kicker above it in Elixir Green. No headline appears alone.

## Layout

A single centred column, max 1120px with a 24px gutter, stacked as full-width sections with `clamp(64px, 10vw, 120px)` vertical padding. The fixed nav is 68px tall; anchor scrolling offsets by 88px.

Inside sections the grids are simple and asymmetric where it helps: hero is text + portrait (`1fr` + `clamp(240px, 26vw, 320px)`); about is `1.35fr` prose + `1fr` sticky side column; projects are a 2-up card grid with 20px gaps; the stats strip is 4 columns divided by hairlines. Secondary projects collapse into a hairline-ruled list (name · description · tag) rather than more cards.

Responsive behaviour is breakpoint-driven, not fluid-grid: two-column layouts fall to one column at 860px (hero, about) and 720px (projects); the stats strip goes 4 → 2 at 760px; the nav switches to a burger with a blurred drop-down at 760px; the hero portrait moves above the text at 170px wide. Type scales with `clamp()` throughout.

### Named Rules
**The Hairline Grid Rule.** Structure is drawn with 1px hairlines (dividers, stat separators, list rules, the ambient grid), not with fills or heavy blocks.

## Elevation & Depth

Flat by default, lifted by touch. At rest, depth comes only from the ambient background (masked grid at 50% opacity, two radial glows fixed to the viewport) and from the Panel Veil sitting on Void. There are no resting shadows. On hover, interactive surfaces translate up (2–5px) and pick up a soft shadow or accent-tinted glow. The sticky nav gains a translucent fill, 14px backdrop blur and a hairline bottom border once the page scrolls.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 16px 44px var(--shadow)`): project cards on hover, with `translateY(-5px)`.
- **Elixir glow** (`box-shadow: 0 8px 30px rgba(92, 240, 176, 0.12)`): buttons on hover, with `translateY(-2px)`.
- **Accent halo** (`radial-gradient` of the item accent at 16%, 300px): fades in at a card's top-right corner on hover.
- **Portrait halo** (green → blue gradient, 28px blur, 55% opacity): the one resting glow, behind the hero portrait.

### Named Rules
**The Quiet Until Touched Rule.** Surfaces never glow, lift or shadow at rest (the portrait halo is the single exception). Every lift is a response to hover or focus.

**The Soft Glow Rule.** Glows are diffuse and low-alpha (≤16% for accents, ≤12% for shadows). If a glow reads as neon, it is too strong.

## Shapes

Gently rounded, hairline-bordered rectangles. Large containers (cards, panels, work block, publication banner, photo frames) use 14px; buttons and images inside frames use 10px; formula steps 8px; small controls (chips, language toggle, theme toggle, repo link, status badge) are full pills. Photos sit inside an 8px-padded framed panel, so an image always has a 10px radius inside a 14px frame. Circles appear only as markers: 6px list dots, 7px status dot, 16px ring-style timeline nodes.

## Components

### Buttons
Quiet mono buttons that wake up on hover.
- **Shape:** gently rounded (10px), 1px Hairline Strong border.
- **Default:** Panel Veil fill, Moonlight text, mono 14px/500, 12px × 20px padding, 9px gap to a 16px icon.
- **Primary:** same shape with a faint diagonal Elixir-to-Quicksilver gradient wash (16% / 12%) and a 40% Elixir border.
- **Hover:** lifts 2px, border shifts toward Elixir (50%), Elixir glow appears. 0.22s on the house easing.

### Chips
- **Style:** pill, Panel Veil fill, Hairline border, Ash mono text at 12.5px. Used for tech tags on cards, the work block and the about side panel.
- **State:** static; no selected or filter state exists.

### Cards / Containers
- **Corner Style:** 14px.
- **Background:** Panel Veil over Void, Hairline border.
- **Shadow Strategy:** none at rest; Card lift on hover (see Elevation).
- **Hover:** a 2px top edge in the item accent wipes in from the left (0.35s), the border tints to 45% accent, the corner halo fades in, the arrow nudges up-right.
- **Internal Padding:** 26px for project cards, 24px for side panels, `clamp(26px, 4vw, 40px)` for the current-work block.
- **Linking:** the title link stretches over the whole card; a secondary repo pill sits above it. Focus shows a 2px accent outline on the card.

### Navigation
- **Style:** fixed, transparent over the hero; translucent Void with 14px blur and a hairline once scrolled. Brand mark and mono wordmark (with a green period) on the left.
- **Links:** mono 14px Ash, 30px apart; hover turns them Moonlight and draws a 1.5px Elixir underline from the left.
- **Actions:** EN/DE pill toggle (current language in Elixir), round 32px theme toggle, GitHub icon.
- **Mobile:** at 760px a three-line burger morphs into an X and drops a blurred full-width panel of 16px links.

### Formula (signature)
The raw → refined device. Three mono steps in 8px-rounded veil boxes joined by Smoke arrows: the first in Ash, the second in Quicksilver with a 30% blue border, the third in Elixir with a 35% green border and a 6% green fill. It wraps on narrow screens.

### Terminal Prompt (signature)
The hero role line: an Elixir `>` prompt, the role typed out in Quicksilver, and a 9px-wide Elixir block caret blinking on a 1s step. Above the name sits a mono "hello" line and a pill status badge with a pulsing Elixir dot.

### Timeline (signature)
A 1.5px vertical line graded Elixir → Quicksilver → Hairline, with 16px ring nodes in each entry's accent. Period in accent mono, title in grotesk 19px/600, organisation in Ash mono. On hover the node scales to 1.25 and gains an accent glow.

### Stats Strip
Full-bleed hairline-ruled band, four cells divided by hairlines. Values in the Numeral style coloured by item accent (Elixir by default), labels in Ash at 13.5px.

## Do's and Don'ts

### Do:
- **Do** set every kicker, date, tag, number and command in JetBrains Mono, and every sentence and name in Space Grotesk.
- **Do** keep panels at Panel Veil (2.5% white) with a Hairline border, and save lift and glow for hover and focus.
- **Do** use Elixir Green as the single chrome accent; assign violet and amber only per item through `data-accent`.
- **Do** let colour rise from neutral → Quicksilver → Elixir wherever something goes from raw to refined.
- **Do** use 14px radii for containers, 10px for buttons and inner images, pills for small controls.
- **Do** define every colour for both themes through the `:root` / `:root[data-theme='light']` custom properties.
- **Do** respect `prefers-reduced-motion`: reveals render visible, loops stop, the typed role shows as static text.
- **Do** keep the global keyboard focus ring (2px Elixir outline, 3px offset); components may refine it but never remove it.
- **Do** keep every text colour, including Smoke and the light-theme accents, at 4.5:1 or better on its surface.

### Don't:
- **Don't** go neon cyberpunk: no saturated neon, heavy bloom, scanlines or glitch effects.
- **Don't** use a corporate template look: no stock photography, SaaS hero patterns or sales-funnel CTAs.
- **Don't** illustrate the alchemy: no parchment, runes, potion bottles, sigils or medieval type. The theme lives in words and the formula.
- **Don't** add resting shadows or glows to cards, panels or buttons.
- **Don't** put prose in Moonlight; running text is Ash.
- **Don't** hard-code accent hexes or `rgba()` tints in components; mix them from the custom properties (`color-mix(in srgb, var(--green) 12%, transparent)`) so the light theme follows.
