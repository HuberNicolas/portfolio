<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
</script>

<template>
  <section id="programme" class="section">
    <div class="container">
      <h2 class="section-title">{{ t.programme.title }}</h2>
      <!-- One line, read like the route strip above a tram door: the newest stop first. -->
      <ol class="route">
        <li v-for="(p, i) in t.programme.items" :key="i" class="route__stop" :class="{ 'route__stop--now': i === 0 }">
          <span class="route__when">{{ p.when }}</span>
          <span class="route__dot" aria-hidden="true"></span>
          <span class="route__body">
            <span class="route__what">{{ p.what }}</span>
            <span class="route__where">{{ p.where }}</span>
          </span>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.route {
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 980px;
}
.route__stop {
  position: relative;
  display: grid;
  grid-template-columns: 8.5em 28px minmax(0, 1fr);
  gap: 0 clamp(16px, 2.4vw, 28px);
  padding-bottom: clamp(24px, 3vw, 36px);
}
/* The line itself runs through the dot column and stops at the last station. */
.route__stop::before {
  content: '';
  position: absolute;
  top: 8px;
  bottom: -8px;
  left: calc(8.5em + clamp(16px, 2.4vw, 28px) + 9px);
  width: 10px;
  background: var(--cobalt);
}
.route__stop:last-child::before {
  display: none;
}
.route__when {
  padding-top: 2px;
  text-align: right;
  font-family: var(--font-banner);
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.08em;
  color: var(--gold-text);
  white-space: nowrap;
}
.route__dot {
  position: relative;
  z-index: 1;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #fff;
  border: 4px solid var(--navy);
}
.route__stop--now .route__dot {
  background: var(--navy);
  box-shadow: inset 0 0 0 4px #fff;
}
:root[data-theme='dark'] .route__dot {
  border-color: var(--ivory);
}
:root[data-theme='dark'] .route__stop--now .route__dot {
  background: var(--ivory);
  box-shadow: inset 0 0 0 4px var(--navy);
}
.route__body {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.route__what {
  font-family: var(--font-remedy);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(22px, 2vw, 26px);
  line-height: 1.2;
}
.route__where {
  color: var(--text-dim);
  max-width: 62ch;
}

@media (max-width: 620px) {
  .route__stop {
    grid-template-columns: 28px minmax(0, 1fr);
    grid-template-areas: 'dot when' 'dot body';
    column-gap: 16px;
  }
  .route__stop::before {
    left: 9px;
  }
  .route__when {
    grid-area: when;
    text-align: left;
  }
  .route__dot {
    grid-area: dot;
  }
  .route__body {
    grid-area: body;
  }
}
</style>
