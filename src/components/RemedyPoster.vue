<script setup>
import { useLang } from '../composables/useLang.js'
import { meta } from '../data/content.js'

defineProps({
  poster: { type: Object, required: true },
  index: { type: Number, default: 0 },
  lead: { type: Boolean, default: false },
})

const { t } = useLang()
const base = import.meta.env.BASE_URL
</script>

<template>
  <article
    :id="`poster-${poster.id}`"
    class="poster"
    :class="[`field--${poster.field}`, `layout--${poster.layout}`, `format--${poster.format}`, { 'poster--lead': lead }]"
    :style="{ '--i': index }"
  >
    <div class="poster__inner double-rule">
      <figure class="poster__window" :class="{ 'poster__window--chart': poster.chart }">
        <img :src="base + poster.image" :alt="poster.alt" loading="lazy" width="800" height="800" />
      </figure>

      <div class="poster__text">
        <h3 class="poster__title">{{ poster.title }}</h3>
        <p class="poster__claim">{{ poster.claim }}</p>
        <p class="poster__desc">{{ poster.desc }}</p>

        <div class="poster__foot">
          <p class="poster__actions">
            <a v-if="poster.demo" class="action" :href="poster.demo" target="_blank" rel="noopener">
              {{ poster.id === 'towers' ? t.house.play : t.house.demo }}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path d="M4 12 12 4M6 4h6v6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
            <a v-if="poster.paper" class="action" :href="meta.paper" target="_blank" rel="noopener">
              {{ t.house.paper }}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path d="M4 12 12 4M6 4h6v6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
            <a class="action action--quiet" :href="poster.repo" target="_blank" rel="noopener">{{ t.house.code }}</a>
          </p>
          <p class="poster__kind">{{ poster.kind }}</p>
        </div>

        <!-- The stop this poster hangs at, on the network plan further down. -->
        <a v-if="poster.stop" class="poster__stop" href="#network">
          <span class="poster__disc" :class="`line--${poster.stop.line}`">{{ poster.stop.line }}</span>
          {{ t.box.stopLabel }} · {{ poster.stop.place }}
        </a>
      </div>

      <span class="stamp" aria-hidden="true">{{ poster.stamp }}</span>
    </div>
  </article>
</template>

<style scoped>
/* Each poster is printed on its own field; the colours do not change with the theme. */
.field--cobalt { --field: var(--cobalt); --on: var(--ivory); --rule-c: var(--gold-light); --stamp: var(--gold-light); }
.field--vermilion { --field: var(--vermilion); --on: var(--ivory); --rule-c: var(--gold-light); --stamp: var(--ivory); }
.field--viridian { --field: var(--viridian); --on: var(--ivory); --rule-c: var(--gold-light); --stamp: var(--gold-light); }
.field--navy { --field: var(--navy); --on: var(--ivory); --rule-c: var(--gold); --stamp: var(--gold-light); }
.field--paper { --field: var(--paper); --on: var(--navy); --rule-c: var(--gold); --stamp: var(--vermilion); }
.field--sky { --field: var(--sky); --on: var(--navy); --rule-c: var(--navy); --stamp: var(--vermilion); }

.poster {
  --tilt: -1deg;
  --pad: clamp(18px, 2.2vw, 28px);
  position: relative;
  background: var(--field);
  color: var(--on);
  padding: 14px;
  transform: rotate(var(--tilt));
  box-shadow:
    0 1px 2px var(--shadow),
    0 18px 36px -12px var(--shadow);
  transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease);
  animation: paste 0.7s var(--ease) both;
  animation-delay: calc(var(--i) * 110ms + 120ms);
}
.format--normal { --tilt: 0.8deg; }
.format--small { --tilt: 1.5deg; }
.format--wide { --tilt: -0.5deg; }
.poster:hover,
.poster:focus-within {
  transform: rotate(0deg) translateY(-4px);
  box-shadow:
    0 1px 2px var(--shadow),
    0 26px 44px -14px var(--shadow);
}

/* Pasting up: the sheet comes down the wall and its tilt settles. */
@keyframes paste {
  from {
    clip-path: inset(0 0 100% 0);
    transform: rotate(calc(var(--tilt) * 3)) translateY(-10px);
  }
  to {
    clip-path: inset(0 0 0 0);
    transform: rotate(var(--tilt));
  }
}

.poster__inner {
  position: relative;
  border-color: var(--rule-c);
  outline-color: var(--rule-c);
  padding: var(--pad);
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 100%;
}
.poster__text {
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1 1 auto;
}

.poster__title {
  margin: 0;
  padding-right: 88px;
  font-family: var(--font-remedy);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(30px, 2.6vw, 40px);
  line-height: 1.02;
  letter-spacing: -0.01em;
  text-wrap: balance;
}
.poster--lead .poster__title {
  font-size: clamp(36px, 3.6vw, 54px);
  padding-right: 112px;
}
/* The title sits first on every layout, even where the picture comes first in the markup. */
.layout--arch .poster__text {
  display: contents;
}
.layout--arch .poster__title {
  order: -1;
}

/* An Art Nouveau window: arched top, thin rule in the poster's ink. */
.poster__window {
  margin: 0;
  aspect-ratio: 1;
  border-radius: 999px 999px 6px 6px;
  overflow: hidden;
  border: 1.5px solid var(--rule-c);
  background: #0b0b0b;
}
.poster__window img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* Figures from papers and reports sit on ivory so their white ground becomes paper. */
.poster__window--chart {
  background: var(--ivory);
  padding: 8% 6% 4%;
}
.poster__window--chart img {
  object-fit: contain;
  mix-blend-mode: multiply;
}

.poster__claim {
  margin: 0;
  font-family: var(--font-banner);
  font-weight: 700;
  font-size: clamp(21px, 1.7vw, 26px);
  line-height: 1.1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-wrap: balance;
}
.poster__desc {
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  opacity: 0.88;
}

.poster__foot {
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid color-mix(in srgb, var(--on) 30%, transparent);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px 20px;
}
.poster__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin: 0;
}
.poster__actions .action:hover {
  color: var(--on);
  opacity: 0.8;
}
.action--quiet {
  border-bottom-width: 1px;
}
.poster__kind {
  margin: 0;
  font-family: var(--font-banner);
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.85;
}

/* ---- Layouts: not every bill on a wall is printed the same way ---- */

/* Full bleed: the picture runs to the rule, the title follows on the field. */
.layout--bleed .poster__window {
  margin: calc(var(--pad) * -1) calc(var(--pad) * -1) 0;
  aspect-ratio: 4 / 3;
  border-radius: 0;
  border: 0;
  border-bottom: 1.5px solid var(--rule-c);
}

/* Medallion: a type-led handbill; the claim is the hero and the picture a small round seal. */
.layout--medallion .poster__inner {
  display: grid;
  grid-template-columns: 104px minmax(0, 1fr) 74px;
  align-items: center;
  column-gap: 16px;
}
.layout--medallion .stamp {
  position: static;
  grid-column: 3;
  grid-row: 1;
  align-self: center;
}
.layout--medallion .poster__window {
  width: 104px;
  border-radius: 50%;
  padding: 10%;
}
.layout--medallion .poster__text {
  display: contents;
}
.layout--medallion .poster__title {
  grid-column: 1 / -1;
  margin-top: 18px;
  padding-right: 0;
  font-size: clamp(24px, 2vw, 30px);
}
.layout--medallion .poster__claim {
  grid-column: 1 / -1;
  margin-top: 12px;
  font-family: var(--font-remedy);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(24px, 2vw, 30px);
  line-height: 1.12;
  letter-spacing: -0.005em;
  text-transform: none;
}
.layout--medallion .poster__desc,
.layout--medallion .poster__foot,
.layout--medallion .poster__stop {
  grid-column: 1 / -1;
  margin-top: 14px;
}
.layout--medallion .poster__stop {
  justify-self: start;
}

/* Plate: a wide bill with the figure framed like a plate in a book. */
.layout--plate .poster__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: clamp(20px, 3vw, 40px);
  align-items: stretch;
}
.layout--plate .poster__window {
  aspect-ratio: auto;
  min-height: 280px;
  border-radius: 2px;
  outline: 1px solid var(--rule-c);
  outline-offset: 5px;
  margin: 6px;
}

/* A wide full-bleed bill: the picture takes the left half, edge to edge. */
.format--wide.layout--bleed .poster__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(20px, 3vw, 40px);
}
.format--wide.layout--bleed .poster__window {
  margin: calc(var(--pad) * -1) 0 calc(var(--pad) * -1) calc(var(--pad) * -1);
  aspect-ratio: auto;
  min-height: 300px;
  border-bottom: 0;
  border-right: 1.5px solid var(--rule-c);
}
.format--wide.layout--bleed .poster__window img {
  object-fit: contain;
}

.poster__stop {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
  font-family: var(--font-banner);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 4px 12px 4px 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--on) 12%, transparent);
}
.poster__stop:hover {
  color: var(--on);
  background: color-mix(in srgb, var(--on) 22%, transparent);
}
.poster__disc {
  display: inline-grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  font-weight: 800;
  letter-spacing: 0;
  color: var(--ivory);
  box-shadow: 0 0 0 1.5px var(--ivory);
}
.line--D { background: var(--cobalt); }
.line--V { background: var(--vermilion); }
.line--R { background: var(--viridian); }
.line--T { background: var(--gold); color: var(--navy); }

@media (max-width: 620px) {
  .layout--plate .poster__inner,
  .format--wide.layout--bleed .poster__inner {
    display: flex;
  }
  .format--wide.layout--bleed .poster__window {
    margin: calc(var(--pad) * -1) calc(var(--pad) * -1) 0;
    aspect-ratio: 4 / 3;
    min-height: 0;
    border-right: 0;
    border-bottom: 1.5px solid var(--rule-c);
  }
  .layout--plate .poster__window {
    aspect-ratio: 4 / 3;
    min-height: 0;
  }
}

/* The round stamp, printed slightly askew. */
.stamp {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  padding: 10px;
  text-align: center;
  font-family: var(--font-banner);
  font-weight: 800;
  font-size: 13px;
  line-height: 1.05;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--stamp);
  border: 2px solid var(--stamp);
  box-shadow: inset 0 0 0 3px var(--field), inset 0 0 0 4px var(--stamp);
  transform: rotate(-12deg);
}
</style>
