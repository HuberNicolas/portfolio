<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
</script>

<template>
  <section class="stats">
    <div class="container stats__grid">
      <div
        v-for="(s, i) in t.stats"
        :key="i"
        class="stat reveal"
        :data-accent="s.accent"
        :style="{ transitionDelay: 0.06 * i + 's' }"
      >
        <span class="stat__value">{{ s.value }}</span>
        <span class="stat__label">{{ s.label }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.015), transparent);
}
.stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.stat {
  padding: 34px 26px;
  border-left: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.stat:first-child {
  border-left: 0;
}
.stat__value {
  font-family: var(--font-mono);
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 600;
  color: var(--accent, var(--green));
  letter-spacing: -0.02em;
}
.stat__label {
  font-size: 13.5px;
  color: var(--text-dim);
  line-height: 1.4;
}
@media (max-width: 760px) {
  .stats__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .stat:nth-child(3) {
    border-left: 0;
  }
  .stat:nth-child(-n + 2) {
    border-bottom: 1px solid var(--line);
  }
}
</style>
