<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useLang } from '../composables/useLang.js'
import { networkMap, posterMeta } from '../data/content.js'

const { t } = useLang()
const order = ['D', 'V', 'R', 'T']
const colourOf = Object.fromEntries(networkMap.lines.map((l) => [l.id, l.colour]))

// Each stop gets the project it carries: its name and where a click on it goes.
const stops = computed(() =>
  networkMap.stops.map((s) => {
    if (s.poster) {
      const i = posterMeta.findIndex((p) => p.id === s.poster)
      const item = t.value.posters.items[i]
      return { ...s, name: item.title, kind: item.kind, text: item.claim, href: `#poster-${s.poster}` }
    }
    if (s.handbill) {
      const h = t.value.box.more.find((m) => m.name === s.handbill)
      return { ...s, name: h.name, text: h.desc, href: h.link, external: true }
    }
    return s
  }),
)

// Details on demand: hovering or focusing a project stop opens a small card beside it.
const active = ref(null)
const card = computed(() => {
  const s = stops.value.find((x) => x.place === active.value)
  if (!s) return null
  const shiftX = s.x < 240 ? '-12%' : s.x > 860 ? '-88%' : '-50%'
  const below = s.y < 300
  return {
    ...s,
    below,
    style: {
      left: `${(s.x / 1100) * 100}%`,
      top: `${(s.y / 820) * 100}%`,
      transform: `translate(${shiftX}, ${below ? '26px' : 'calc(-100% - 26px)'})`,
    },
  }
})

// The lines draw themselves once, the first time the plan comes into view.
const plan = ref(null)
const drawn = ref(false)
let observer
onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        drawn.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.3 },
  )
  observer.observe(plan.value)
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div ref="plan" class="plan double-rule" :class="{ 'is-drawn': drawn }">
    <div class="plan__scroll">
      <div class="plan__canvas">
      <svg class="plan__svg" viewBox="0 0 1100 820" role="group" :aria-label="t.box.planLabel">
        <g class="ground" aria-hidden="true">
          <path :d="networkMap.zone" class="zone" />
          <g :transform="`translate(${networkMap.zoneBadge.x} ${networkMap.zoneBadge.y})`" class="zone__badge">
            <circle r="26" />
            <text y="7" text-anchor="middle">110</text>
          </g>
          <g v-for="w in networkMap.woods" :key="w.name">
            <path :d="w.d" class="wood" />
            <text :x="w.label.x" :y="w.label.y" text-anchor="middle" class="wood__name">{{ w.name }}</text>
          </g>
        </g>

        <g class="water" aria-hidden="true">
          <path :d="networkMap.lake" />
          <path :d="networkMap.river" class="water__river" />
          <text :x="networkMap.lakeLabel.x" :y="networkMap.lakeLabel.y" text-anchor="middle">{{ t.box.lake }}</text>
        </g>

        <g class="landmarks" aria-hidden="true">
          <path v-for="m in networkMap.landmarks" :key="m.id" :d="m.d" :transform="`translate(${m.x} ${m.y})`" />
        </g>

        <g class="legend" transform="translate(28 14)" aria-hidden="true">
          <g v-for="(id, i) in order" :key="id" :transform="`translate(${[0, 160, 350, 500][i]} 0)`">
            <circle cx="13" cy="13" r="13" :class="`fill--${colourOf[id]}`" />
            <text x="13" y="18" text-anchor="middle" class="legend__num">
              {{ id }}
            </text>
            <text x="38" y="19" class="legend__name">{{ t.box.lines[id] }}</text>
          </g>
        </g>

        <g aria-hidden="true">
          <path
            v-for="(l, i) in networkMap.lines"
            :key="l.id"
            :d="l.d"
            class="line"
            :class="`stroke--${l.colour}`"
            :style="{ '--i': i }"
            pathLength="1"
          />
        </g>

        <g v-for="s in stops" :key="s.place" class="stop" :class="{ 'stop--change': s.change, 'stop--project': s.name }">
          <a
            v-if="s.name"
            :href="s.href"
            :target="s.external ? '_blank' : null"
            :rel="s.external ? 'noopener' : null"
            :aria-label="`${s.name}, ${s.place}`"
            @mouseenter="active = s.place"
            @mouseleave="active = null"
            @focus="active = s.place"
            @blur="active = null"
          >
            <circle :cx="s.x" :cy="s.y" :r="s.change ? 12 : 10" class="stop__dot" />
            <text :x="s.label.x" :y="s.label.y" :text-anchor="s.label.anchor" class="stop__name">{{ s.name }}</text>
            <text :x="s.label.x" :y="s.label.y + 20" :text-anchor="s.label.anchor" class="stop__place">{{ s.place }}</text>
          </a>
          <g v-else aria-hidden="true">
            <circle :cx="s.x" :cy="s.y" :r="s.change ? 12 : 8" class="stop__dot" />
            <text :x="s.label.x" :y="s.label.y" :text-anchor="s.label.anchor" class="stop__place">{{ s.place }}</text>
          </g>
        </g>
      </svg>

      <div v-if="card" class="card" :class="{ 'card--below': card.below }" :style="card.style" aria-hidden="true">
        <p class="card__name">{{ card.name }}</p>
        <p class="card__where">
          <span v-for="l in card.lines" :key="l" class="card__disc" :class="`fill-bg--${colourOf[l]}`">{{ l }}</span>
          {{ card.place }}
        </p>
        <p v-if="card.kind" class="card__kind">{{ card.kind }}</p>
        <p class="card__text">{{ card.text }}</p>
        <p class="card__go">{{ card.external ? t.box.seeCode : t.box.seePoster }}</p>
      </div>
      </div>
    </div>
  </div>
  <p class="plan__hint banner" aria-hidden="true">{{ t.box.swipe }}</p>
</template>

<style scoped>
/* The plan is printed on paper, like the posters, so it keeps its colours in both themes. */
.plan {
  --plan-ink: var(--navy);
  background: var(--paper);
  color: var(--plan-ink);
  padding: clamp(10px, 1.6vw, 20px);
  box-shadow:
    0 1px 2px var(--shadow),
    0 18px 36px -12px var(--shadow);
}
.plan__scroll {
  overflow-x: auto;
  scrollbar-color: rgba(20, 32, 57, 0.3) transparent;
}
.plan__canvas {
  position: relative;
  min-width: 820px;
}
.plan__svg {
  display: block;
  width: 100%;
  height: auto;
}
.plan__hint {
  display: none;
  margin: 12px 0 0;
  font-size: 14px;
}

/* The fare zone of the city: a dashed border with its number, as on the zone plan. */
.zone {
  fill: color-mix(in srgb, var(--ivory) 55%, #fff);
  stroke: #7d879c;
  stroke-width: 2;
  stroke-dasharray: 10 7;
}
.zone__badge circle {
  fill: var(--paper);
  stroke: #7d879c;
  stroke-width: 2;
}
.zone__badge text {
  font-family: var(--font-banner);
  font-weight: 800;
  font-size: 21px;
  letter-spacing: 0.04em;
  fill: #4a5470;
}
.wood {
  fill: color-mix(in srgb, var(--viridian) 16%, var(--paper));
}
.wood__name {
  font-family: var(--font-remedy);
  font-style: italic;
  font-size: 16px;
  fill: #3f6a5c;
}
.landmarks path {
  fill: none;
  stroke: #56617a;
  stroke-width: 1.6;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.water path {
  fill: var(--sky);
  stroke: color-mix(in srgb, var(--cobalt) 30%, transparent);
  stroke-width: 1;
}
.water .water__river {
  fill: none;
  stroke: var(--sky);
  stroke-width: 14;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.water text {
  font-family: var(--font-remedy);
  font-style: italic;
  font-size: 17px;
  fill: #3b5487;
  letter-spacing: 0.04em;
}

.legend__num {
  font-family: var(--font-banner);
  font-weight: 800;
  font-size: 16px;
  fill: var(--ivory);
}
.legend__name {
  font-family: var(--font-banner);
  font-weight: 700;
  font-size: 17px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  fill: var(--plan-ink);
}

.fill--magenta { fill: var(--tram-magenta); }
.fill--black { fill: var(--tram-black); }
.fill--green { fill: var(--tram-green); }
.fill--blue { fill: var(--tram-blue); }
.stroke--magenta { stroke: var(--tram-magenta); }
.stroke--black { stroke: var(--tram-black); }
.stroke--green { stroke: var(--tram-green); }
.stroke--blue { stroke: var(--tram-blue); }

/* Network-plan lines: thick, flat colour, round joins, white stop dots on top. */
.line {
  fill: none;
  stroke-width: 11;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
}
.plan:not(.is-drawn) .line {
  stroke-dashoffset: 1;
}
.plan.is-drawn .line {
  transition: stroke-dashoffset 1.2s var(--ease);
  transition-delay: calc(var(--i) * 160ms);
}

.stop__dot {
  fill: #fff;
  stroke: var(--plan-ink);
  stroke-width: 3;
}
.stop--change .stop__dot {
  stroke-width: 4.5;
}
.stop__name {
  font-family: var(--font-remedy);
  font-style: italic;
  font-weight: 700;
  font-size: 20px;
  fill: var(--plan-ink);
}
.stop__place {
  font-family: var(--font-banner);
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  fill: #3d4a63;
}
.stop--project a {
  cursor: pointer;
}
.stop--project a:hover .stop__name,
.stop--project a:focus-visible .stop__name {
  fill: var(--vermilion);
  text-decoration: underline;
}
.stop--project a:hover .stop__dot,
.stop--project a:focus-visible .stop__dot {
  fill: var(--gold-light);
}
.stop--project a:focus-visible {
  outline: none;
}

/* The detail card: a small timetable notice pinned beside the stop. */
.card {
  position: absolute;
  z-index: 2;
  width: 270px;
  padding: 14px 16px 12px;
  background: var(--navy);
  color: var(--ivory);
  border-radius: 6px;
  box-shadow:
    inset 0 0 0 1px var(--gold),
    0 14px 28px -10px rgba(20, 32, 57, 0.5);
  pointer-events: none;
  animation: card-in 0.18s var(--ease) both;
}
@keyframes card-in {
  from {
    opacity: 0;
  }
}
.card__name {
  margin: 0;
  font-family: var(--font-remedy);
  font-style: italic;
  font-weight: 700;
  font-size: 21px;
  line-height: 1.15;
}
.card__where {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  font-family: var(--font-banner);
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gold-light);
}
.card__disc {
  display: inline-grid;
  place-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-weight: 800;
  letter-spacing: 0;
  color: var(--ivory);
  box-shadow: 0 0 0 1.5px var(--ivory);
}
.fill-bg--magenta { background: var(--tram-magenta); }
.fill-bg--black { background: var(--tram-black); }
.fill-bg--green { background: var(--tram-green); }
.fill-bg--blue { background: var(--tram-blue); }
.card__kind {
  margin-top: 8px;
  font-size: 14px;
  color: #c9cfdb;
}
.card__text {
  margin-top: 6px;
  font-size: 15px;
  line-height: 1.45;
}
.card__go {
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px solid rgba(246, 240, 225, 0.25);
  font-family: var(--font-banner);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold-light);
}

@media (max-width: 900px) {
  .plan__hint {
    display: block;
  }
}
@media (prefers-reduced-motion: reduce) {
  .plan:not(.is-drawn) .line {
    stroke-dashoffset: 0;
  }
}
</style>
