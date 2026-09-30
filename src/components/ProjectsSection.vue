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
        <article
          v-for="(p, i) in t.projects.items"
          :key="p.name"
          class="card reveal"
          :data-accent="p.accent"
          :style="{ transitionDelay: 0.05 * i + 's' }"
        >
          <div class="card__glow" aria-hidden="true"></div>
          <div class="card__top">
            <span class="card__role">{{ p.role }}</span>
            <svg class="card__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <h3 class="card__name">
            <a class="card__link" :href="p.link" target="_blank" rel="noopener">{{ p.name }}</a>
          </h3>
          <p class="card__desc">{{ p.desc }}</p>
          <div class="card__foot">
            <div class="card__tags">
              <span v-for="tag in p.tags" :key="tag" class="chip">{{ tag }}</span>
            </div>
            <a v-if="p.repo" class="card__repo" :href="p.repo" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m9 8-5 4 5 4M15 8l5 4-5 4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ t.projects.repoLabel }}
            </a>
          </div>
        </article>
      </div>

      <div class="more reveal">
        <h3 class="more__title">{{ t.projects.moreTitle }}</h3>
        <ul class="more__list">
          <li v-for="m in t.projects.more" :key="m.name">
            <a class="more__item" :href="m.link" target="_blank" rel="noopener">
              <span class="more__name">{{ m.name }}</span>
              <span class="more__desc">{{ m.desc }}</span>
              <span class="more__tag">{{ m.tag }}</span>
            </a>
          </li>
        </ul>
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
  box-shadow: 0 16px 44px var(--shadow);
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
.card__link {
  color: inherit;
}
/* Stretch the title link over the whole card; the repo link sits above it. */
.card__link::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
}
.card__link:focus-visible {
  outline: none;
}
.card:has(.card__link:focus-visible) {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
.card__foot {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;
}
.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.card__repo {
  position: relative;
  z-index: 2;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--text-dim);
  padding: 4px 11px;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  transition: color var(--dur), border-color var(--dur);
}
.card__repo:hover {
  color: var(--accent);
  border-color: var(--accent);
}
.card__repo svg {
  width: 14px;
  height: 14px;
}

.more {
  margin-top: clamp(40px, 6vw, 64px);
}
.more__title {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  color: var(--text-dim);
  margin: 0 0 12px;
}
.more__list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--line);
}
.more__item {
  display: grid;
  grid-template-columns: 180px 1fr auto;
  align-items: baseline;
  gap: 16px;
  padding: 13px 4px;
  border-bottom: 1px solid var(--line);
  transition: background var(--dur) var(--ease);
}
.more__item:hover {
  background: var(--panel);
}
.more__name {
  font-weight: 600;
  font-size: 15px;
  transition: color var(--dur);
}
.more__item:hover .more__name {
  color: var(--green);
}
.more__desc {
  color: var(--text-dim);
  font-size: 14px;
}
.more__tag {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-faint);
}
@media (max-width: 720px) {
  .more__item {
    grid-template-columns: 1fr auto;
    gap: 2px 12px;
  }
  .more__desc {
    grid-column: 1 / -1;
    grid-row: 2;
  }
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
