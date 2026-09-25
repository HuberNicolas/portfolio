<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
const img = (name) => `${import.meta.env.BASE_URL}img/${name}`
</script>

<template>
  <section id="about" class="section">
    <div class="container about">
      <div class="about__intro">
        <p class="kicker reveal">{{ t.about.kicker }}</p>
        <h2 class="section-title reveal">{{ t.about.title }}</h2>
        <p class="about__body reveal">{{ t.about.body }}</p>

        <div class="about__groups">
          <div
            v-for="(g, i) in t.about.groups"
            :key="g.title"
            class="about__group reveal"
            :style="{ transitionDelay: 0.05 * i + 's' }"
          >
            <h4 class="about__group-title">{{ g.title }}</h4>
            <ul class="about__list">
              <li v-for="item in g.items" :key="item">
                <span class="marker" aria-hidden="true"></span>{{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <aside class="about__side">
        <figure class="photo reveal">
          <div class="photo__grid">
            <img :src="img('hiking.jpg')" :alt="t.about.photoAlt.hiking" width="600" height="750" loading="lazy" />
            <img :src="img('surfing.jpg')" :alt="t.about.photoAlt.surfing" width="600" height="750" loading="lazy" />
          </div>
          <figcaption>{{ t.about.photoCaption }}</figcaption>
        </figure>
        <div class="panel reveal">
          <h4 class="panel__title">{{ t.about.stackTitle }}</h4>
          <div class="panel__chips">
            <span v-for="s in t.about.stack" :key="s" class="chip">{{ s }}</span>
          </div>
        </div>
        <div class="panel reveal" style="transition-delay: 0.06s">
          <h4 class="panel__title">{{ t.about.langTitle }}</h4>
          <ul class="panel__langs">
            <li v-for="l in t.about.langs" :key="l">{{ l }}</li>
          </ul>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: clamp(28px, 5vw, 60px);
  align-items: start;
}
.about__body {
  color: var(--text-dim);
  font-size: 16.5px;
  max-width: 560px;
  margin: 0 0 34px;
}
.about__groups {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;
}
.about__group-title {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--green);
  margin: 0 0 14px;
  letter-spacing: 0.02em;
}
.about__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.about__list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: var(--text-dim);
  font-size: 14.5px;
}
.marker {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--green);
  margin-top: 8px;
  flex-shrink: 0;
}

.about__side {
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: sticky;
  top: calc(var(--nav-h) + 24px);
}
.panel {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--panel);
  padding: 24px;
}
.photo {
  margin: 0;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--panel);
  padding: 8px;
}
.photo__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.photo img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: var(--radius-sm);
}
.photo figcaption {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--text-dim);
  padding: 10px 8px 4px;
}
.panel__title {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--blue);
  margin: 0 0 16px;
}
.panel__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.panel__langs {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
  font-family: var(--font-mono);
  font-size: 13.5px;
  color: var(--text-dim);
}

@media (max-width: 860px) {
  .about {
    grid-template-columns: 1fr;
  }
  .about__side {
    position: static;
  }
}
@media (max-width: 480px) {
  .about__groups {
    grid-template-columns: 1fr;
  }
}
</style>
