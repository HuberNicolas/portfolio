<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
const paperUrl = 'https://ieeexplore.ieee.org/document/10224977'
</script>

<template>
  <section class="section pub-section">
    <div class="container">
      <a class="pub reveal" :href="paperUrl" target="_blank" rel="noopener">
        <div class="pub__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5Z" stroke-linejoin="round" />
            <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 20.5Z" stroke-linejoin="round" />
            <path d="M8 8h8M8 11h5" stroke-linecap="round" />
          </svg>
        </div>
        <div class="pub__body">
          <p class="pub__kicker">{{ t.publication.kicker }} · {{ t.publication.venue }}</p>
          <h3 class="pub__title">{{ t.publication.title }}</h3>
          <p class="pub__desc">{{ t.publication.desc }}</p>
        </div>
        <span class="pub__cta">
          {{ t.publication.cta }}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.pub-section {
  padding-top: 0;
}
.pub {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 26px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 28px 32px;
  background: linear-gradient(120deg, rgba(255, 192, 110, 0.05), rgba(201, 155, 255, 0.04));
  transition: border-color var(--dur) var(--ease), transform var(--dur) var(--ease);
}
.pub:hover {
  border-color: rgba(255, 192, 110, 0.45);
  transform: translateY(-3px);
}
.pub__icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  color: var(--amber);
  background: rgba(255, 192, 110, 0.1);
  border: 1px solid rgba(255, 192, 110, 0.25);
}
.pub__icon svg {
  width: 26px;
  height: 26px;
}
.pub__kicker {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--amber);
  margin: 0 0 6px;
}
.pub__title {
  font-size: clamp(16px, 2.2vw, 20px);
  font-weight: 600;
  margin: 0 0 6px;
  line-height: 1.3;
}
.pub__desc {
  color: var(--text-dim);
  font-size: 14px;
  margin: 0;
}
.pub__cta {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: var(--font-mono);
  font-size: 13.5px;
  color: var(--text);
  white-space: nowrap;
}
.pub__cta svg {
  width: 15px;
  height: 15px;
}
@media (max-width: 800px) {
  .pub {
    grid-template-columns: auto 1fr;
    gap: 18px;
  }
  .pub__cta {
    grid-column: 2;
    color: var(--amber);
  }
}
</style>
