<script setup>
import { useLang } from '../composables/useLang.js'
import { meta } from '../data/content.js'
const { t } = useLang()
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <p class="kicker reveal">{{ t.projects.kicker }}</p>
      <h2 class="section-title reveal">{{ t.projects.title }}</h2>

      <div class="grid">
        <a
          v-for="(p, i) in t.projects.items"
          :key="p.name"
          class="card reveal"
          :data-accent="p.accent"
          :href="p.link"
          target="_blank"
          rel="noopener"
          :style="{ transitionDelay: 0.05 * i + 's' }"
        >
          <div class="card__glow" aria-hidden="true"></div>
          <div class="card__top">
            <span class="card__role">{{ p.role }}</span>
            <svg class="card__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <h3 class="card__name">{{ p.name }}</h3>
          <p class="card__desc">{{ p.desc }}</p>
          <div class="card__tags">
            <span v-for="tag in p.tags" :key="tag" class="chip">{{ tag }}</span>
          </div>
        </a>
      </div>

      <div class="projects__more reveal">
        <a class="btn" :href="meta.github" target="_blank" rel="noopener">
          {{ t.projects.viewAll }}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--panel);
  padding: 26px;
  overflow: hidden;
  transition: transform var(--dur) var(--ease), border-color var(--dur) var(--ease),
    box-shadow var(--dur) var(--ease);
}
.card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s var(--ease);
}
.card:hover {
  transform: translateY(-5px);
  border-color: color-mix(in srgb, var(--accent) 45%, transparent);
  box-shadow: 0 16px 44px rgba(0, 0, 0, 0.4);
}
.card:hover::before {
  transform: scaleX(1);
}
.card__glow {
  position: absolute;
  top: -60%;
  right: -30%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, color-mix(in srgb, var(--accent) 16%, transparent), transparent 65%);
  opacity: 0;
  transition: opacity var(--dur) var(--ease);
  pointer-events: none;
}
.card:hover .card__glow {
  opacity: 1;
}

.card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card__role {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--accent);
  letter-spacing: 0.02em;
}
.card__arrow {
  width: 18px;
  height: 18px;
  color: var(--text-faint);
  transition: color var(--dur), transform var(--dur) var(--ease);
}
.card:hover .card__arrow {
  color: var(--accent);
  transform: translate(2px, -2px);
}
.card__name {
  font-size: 21px;
  font-weight: 600;
  margin: 14px 0 10px;
  letter-spacing: -0.01em;
}
.card__desc {
  color: var(--text-dim);
  font-size: 14.5px;
  margin: 0 0 20px;
  flex: 1;
}
.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.projects__more {
  margin-top: 34px;
  display: flex;
  justify-content: center;
}

@media (max-width: 720px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
