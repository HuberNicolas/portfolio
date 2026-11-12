<script setup>
import { computed } from 'vue'
import RemedyPoster from './RemedyPoster.vue'
import { useLang } from '../composables/useLang.js'
import { meta, posterMeta } from '../data/content.js'

const { t, lang } = useLang()
// Set at build time in vite.config.js: which CV PDFs actually exist in public/cv/.
const cvReady = __CV_AVAILABLE__

const posters = computed(() => posterMeta.map((m, i) => ({ ...m, ...t.value.posters.items[i] })))
</script>

<template>
  <section id="posters" class="wall-section">
    <div class="container wall-grid">
      <header class="masthead">
        <h1 class="masthead__name">{{ t.house.name }}</h1>
        <p class="masthead__motto">{{ t.house.motto }}</p>
        <p class="banner masthead__role">{{ t.house.role }}</p>
        <p class="ribbon">
          <span>{{ t.house.formula[0] }}</span>
          <span aria-hidden="true">→</span>
          <span>{{ t.house.formula[1] }}</span>
          <span aria-hidden="true">→</span>
          <span>{{ t.house.formula[2] }}</span>
        </p>
        <p class="masthead__lead">{{ t.house.lead }}</p>
        <p class="masthead__links">
          <a class="action" :href="meta.github" target="_blank" rel="noopener">GitHub</a>
          <a class="action" :href="meta.linkedin" target="_blank" rel="noopener">LinkedIn</a>
          <a class="action" :href="`mailto:${meta.email}`">{{ t.house.email }}</a>
          <a v-if="cvReady[lang]" class="action" :href="meta.cv[lang]" target="_blank" rel="noopener">{{ t.house.cv }}</a>
        </p>
      </header>

      <div class="wall" role="list" :aria-label="t.house.wallLabel">
        <div v-for="(p, i) in posters" :key="p.id" role="listitem" class="wall__slot" :class="`wall__slot--${p.format}`">
          <RemedyPoster :poster="p" :index="i" :lead="i === 0" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wall-section {
  padding: calc(var(--nav-h) + clamp(24px, 4vh, 48px)) 0 clamp(80px, 10vw, 128px);
}
.wall-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.52fr) minmax(0, 1fr);
  gap: clamp(32px, 4vw, 64px);
  align-items: start;
}

/* ---- The masthead stays in view while the wall scrolls by ---- */
.masthead {
  position: sticky;
  top: calc(var(--nav-h) + 24px);
}
.masthead__name {
  margin: 0;
  font-family: var(--font-remedy);
  font-style: italic;
  font-weight: 800;
  font-size: clamp(52px, 6.2vw, 92px);
  line-height: 0.92;
  letter-spacing: -0.02em;
}
.masthead__motto {
  margin: 12px 0 0;
  font-family: var(--font-remedy);
  font-style: italic;
  font-weight: 500;
  font-size: clamp(20px, 1.8vw, 26px);
  color: var(--gold-text);
}
.masthead__role {
  margin: 22px 0 0;
}
/* The house slogan on a notched ribbon. */
.ribbon {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 2px 10px;
  margin: 22px 0 0;
  padding: 10px 26px;
  background: var(--ribbon-bg);
  color: var(--ribbon-text);
  font-family: var(--font-banner);
  font-weight: 700;
  font-size: clamp(16px, 1.4vw, 19px);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  clip-path: polygon(0 0, 100% 0, calc(100% - 12px) 50%, 100% 100%, 0 100%, 12px 50%);
}
.masthead__lead {
  margin: 24px 0 0;
  max-width: 34ch;
  color: var(--text-dim);
}
.masthead__links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  margin: 26px 0 0;
  color: var(--link);
}

/* ---- The wall: two staggered columns of posters ---- */
/* ---- The wall: a planned paste-up of normal, wide and small bills ---- */
.wall {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-flow: row dense;
  gap: clamp(28px, 3vw, 44px) clamp(20px, 2.4vw, 36px);
  align-items: start;
}
.wall__slot--wide {
  grid-column: 1 / -1;
}
/* Small handbills are pasted a little in from the edge of their slot. */
.wall__slot--small {
  padding: 0 clamp(0px, 2vw, 28px);
}

@media (max-width: 900px) {
  .wall-grid {
    grid-template-columns: 1fr;
  }
  .masthead {
    position: static;
  }
  .masthead__lead {
    max-width: none;
  }
}
@media (max-width: 620px) {
  .wall {
    grid-template-columns: 1fr;
  }
  .wall__slot--wide {
    grid-column: auto;
  }
  .wall__slot--small {
    padding: 0;
  }
}
</style>
