<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
</script>

<template>
  <section id="journey" class="section">
    <div class="container">
      <p class="kicker reveal">{{ t.journey.kicker }}</p>
      <h2 class="section-title reveal">{{ t.journey.title }}</h2>

      <ol class="timeline">
        <li
          v-for="(item, i) in t.journey.items"
          :key="i"
          class="tl reveal"
          :data-accent="item.accent"
          :style="{ transitionDelay: 0.06 * i + 's' }"
        >
          <span class="tl__dot" aria-hidden="true"></span>
          <div class="tl__content">
            <span class="tl__period">{{ item.period }}</span>
            <h3 class="tl__title">{{ item.title }}</h3>
            <p class="tl__org">{{ item.org }}</p>
            <p class="tl__desc">{{ item.desc }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 6px;
  bottom: 6px;
  width: 1.5px;
  background: linear-gradient(180deg, var(--green), var(--blue) 45%, var(--line) 100%);
}
.tl {
  position: relative;
  padding: 0 0 34px 40px;
}
.tl:last-child {
  padding-bottom: 0;
}
.tl__dot {
  position: absolute;
  left: 0;
  top: 5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--bg);
  border: 2px solid var(--accent);
  box-shadow: 0 0 0 4px var(--bg);
  transition: transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
}
.tl:hover .tl__dot {
  transform: scale(1.25);
  box-shadow: 0 0 0 4px var(--bg), 0 0 16px color-mix(in srgb, var(--accent) 60%, transparent);
}
.tl__period {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--accent);
}
.tl__title {
  font-size: 19px;
  font-weight: 600;
  margin: 6px 0 3px;
}
.tl__org {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-dim);
  margin: 0 0 8px;
}
.tl__desc {
  color: var(--text-dim);
  font-size: 14.5px;
  margin: 0;
  max-width: 640px;
}
</style>
