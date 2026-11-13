<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
const base = import.meta.env.BASE_URL
</script>

<template>
  <section id="person" class="section">
    <div class="container">
      <h2 class="section-title">{{ t.person.title }}</h2>

      <div class="photos">
        <figure v-for="p in t.person.photos" :key="p.src" class="photo">
          <div class="photo__frame double-rule">
            <img :src="base + p.src" :alt="p.alt" loading="lazy" width="600" height="750" :style="p.focus && { objectPosition: p.focus }" />
          </div>
          <figcaption class="banner">{{ p.caption }}</figcaption>
        </figure>
      </div>

      <div class="about">
        <div>
          <p class="about__body">{{ t.person.body }}</p>
        </div>
        <div class="about__facts">
          <div>
            <h3 class="banner">{{ t.person.focusTitle }}</h3>
            <ul>
              <li v-for="f in t.person.focus" :key="f">{{ f }}</li>
            </ul>
          </div>
          <div>
            <h3 class="banner">{{ t.person.alsoTitle }}</h3>
            <ul>
              <li v-for="f in t.person.also" :key="f">{{ f }}</li>
            </ul>
          </div>
          <div>
            <h3 class="banner">{{ t.person.toolsTitle }}</h3>
            <p>{{ t.person.tools }}</p>
          </div>
          <div>
            <h3 class="banner">{{ t.person.langTitle }}</h3>
            <p>{{ t.person.langs }}</p>
          </div>
        </div>
        <!-- Sport stays a footnote, after the work facts. -->
        <p class="about__sport">
          <span class="banner">{{ t.person.sportTitle }}</span>
          {{ t.person.sport }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.photos {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(20px, 3vw, 44px);
  margin-bottom: clamp(48px, 6vw, 80px);
}
.photo {
  margin: 0;
  transform: rotate(-0.8deg);
}
.photo:nth-child(2) {
  transform: rotate(0.9deg) translateY(clamp(12px, 2vw, 28px));
}
.photo__frame {
  padding: 8px;
  background: var(--paper);
}
.photo__frame img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}
.photo figcaption {
  margin-top: 16px;
  text-align: center;
}
.about {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: clamp(32px, 6vw, 96px);
}
.about__body {
  font-size: clamp(20px, 2vw, 24px);
  line-height: 1.45;
  margin: 0;
}
.about__sport {
  grid-column: 1 / -1;
  margin: 0;
  padding-top: 20px;
  border-top: 1px solid var(--rule);
  color: var(--text-dim);
}
.about__sport .banner {
  display: block;
  margin-bottom: 6px;
}
.about__facts {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px clamp(20px, 3vw, 40px);
}
.about__facts h3 {
  margin: 0 0 8px;
}
.about__facts ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.about__facts li,
.about__facts p {
  margin: 0;
  padding: 3px 0;
  color: var(--text-dim);
}
@media (max-width: 820px) {
  .about {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (max-width: 560px) {
  .photos {
    grid-template-columns: repeat(3, 72%);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding: 8px 8px 36px;
  }
  .photo {
    scroll-snap-align: start;
  }
  /* The last photo cannot reach the start edge; snapping it to the end keeps it whole instead of snapping back. */
  .photo:last-child {
    scroll-snap-align: end;
  }
  .about__facts {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
