<script setup>
import { useLang } from '../composables/useLang.js'
import { meta } from '../data/content.js'
import NetworkMap from './NetworkMap.vue'
const { t } = useLang()
</script>

<template>
  <section id="network" class="section box">
    <div class="container">
      <h2 class="section-title">{{ t.box.title }}</h2>
      <p class="box__intro">{{ t.box.intro }}</p>

      <NetworkMap />

      <h3 class="banner box__more">{{ t.box.moreTitle }}</h3>
      <ul class="box__list">
        <li v-for="m in t.box.more" :key="m.name">
          <a :href="m.link" target="_blank" rel="noopener">
            <span class="box__name">{{ m.name }}</span>
            <span class="box__desc">{{ m.desc }}</span>
          </a>
        </li>
      </ul>

      <div class="paper">
        <a class="paper__title" :href="meta.paper" target="_blank" rel="noopener">{{ t.box.paperTitle }}</a>
        <p class="banner">{{ t.box.paperLabel }} · {{ t.box.paperVenue }}</p>
      </div>

      <a class="action box__all" :href="meta.github" target="_blank" rel="noopener">
        {{ t.box.all }}
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
          <path d="M4 12 12 4M6 4h6v6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </div>
  </section>
</template>

<style scoped>
.box__intro {
  max-width: 60ch;
  color: var(--text-dim);
  margin: -12px 0 clamp(28px, 4vw, 44px);
}
.box__more {
  margin: clamp(48px, 6vw, 72px) 0 16px;
}
.box__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: clamp(32px, 5vw, 72px);
}
.box__list li {
  border-top: 1px solid var(--rule);
}
.box__list a {
  display: block;
  padding: 18px 0 20px;
  text-decoration: none;
}
.box__name {
  display: block;
  font-family: var(--font-remedy);
  font-style: italic;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 4px;
}
.box__desc {
  display: block;
  color: var(--text-dim);
}
.box__list a:hover .box__name {
  color: var(--link);
}
.paper {
  margin-top: clamp(40px, 5vw, 64px);
  padding: 24px 0;
  border-top: 1px solid var(--rule-strong);
  border-bottom: 1px solid var(--rule-strong);
}
.paper .banner {
  margin: 10px 0 0;
}
.paper__title {
  font-family: var(--font-remedy);
  font-style: italic;
  font-weight: 600;
  font-size: clamp(22px, 2.2vw, 28px);
  line-height: 1.25;
  text-decoration: none;
}
.box__all {
  margin-top: 32px;
  color: var(--link);
}
@media (max-width: 720px) {
  .box__list {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
