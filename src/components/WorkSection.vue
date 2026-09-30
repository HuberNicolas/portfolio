<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
</script>

<template>
  <section id="work" class="section">
    <div class="container">
      <p class="kicker reveal">{{ t.work.kicker }}</p>
      <h2 class="section-title reveal">{{ t.work.title }}</h2>

      <article class="work reveal">
        <div class="work__glow" aria-hidden="true"></div>
        <div class="work__head">
          <div>
            <h3 class="work__role">{{ t.work.role }}</h3>
            <p class="work__company">{{ t.work.company }}</p>
          </div>
          <span class="work__period">{{ t.work.period }}</span>
        </div>
        <p class="work__body">{{ t.work.body }}</p>
        <ul v-if="t.work.highlights" class="work__highlights">
          <li v-for="h in t.work.highlights" :key="h">{{ h }}</li>
        </ul>
        <div class="work__tags">
          <span v-for="tag in t.work.tags" :key="tag" class="chip">{{ tag }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.work {
  position: relative;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--panel);
  padding: clamp(26px, 4vw, 40px);
  overflow: hidden;
}
.work__glow {
  position: absolute;
  top: -40%;
  right: -10%;
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(92, 240, 176, 0.1), transparent 65%);
  pointer-events: none;
}
.work__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  position: relative;
}
.work__role {
  font-size: clamp(19px, 2.6vw, 24px);
  font-weight: 600;
  margin: 0 0 5px;
}
.work__company {
  font-family: var(--font-mono);
  color: var(--green);
  font-size: 14px;
  margin: 0;
}
.work__period {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-dim);
  white-space: nowrap;
}
.work__body {
  color: var(--text-dim);
  margin: 20px 0 22px;
  max-width: 760px;
  position: relative;
}
.work__highlights {
  color: var(--text-dim);
  margin: -8px 0 24px;
  padding-left: 1.2em;
  max-width: 760px;
  position: relative;
  display: grid;
  gap: 10px;
}
.work__highlights li::marker {
  color: var(--green);
}
.work__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}
</style>
