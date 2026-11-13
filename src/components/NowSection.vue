<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
</script>

<template>
  <section id="now" class="section">
    <div class="container now">
      <div class="now__head">
        <h2 class="section-title">{{ t.now.title }}</h2>
        <p class="now__role">{{ t.now.role }}</p>
        <p class="banner">{{ t.now.org }}</p>

        <aside class="ad double-rule">
          <p class="ad__name">{{ t.now.ad.name }}</p>
          <p class="ad__claim">{{ t.now.ad.claim }}</p>
          <p class="ad__result">{{ t.now.ad.result }}</p>
          <p class="ad__note">{{ t.now.ad.note }}</p>
        </aside>
      </div>
      <div class="now__body">
        <p class="now__lead">{{ t.now.body }}</p>
        <dl class="stations">
          <div v-for="s in t.now.stations" :key="s.where" class="station">
            <dt>
              <span class="station__where">{{ s.where }}</span>
              <span class="banner station__when">{{ s.when }}</span>
            </dt>
            <dd>{{ s.what }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
.now {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.4fr);
  gap: clamp(32px, 6vw, 96px);
}
.now__role {
  font-size: 21px;
  margin: 0 0 6px;
}
.now__lead {
  font-size: clamp(20px, 2vw, 24px);
  line-height: 1.45;
  margin: 0 0 clamp(32px, 4vw, 48px);
  max-width: 36ch;
}
.stations {
  margin: 0;
}
.station {
  padding: 24px 0;
  border-top: 1px solid var(--rule);
}
.station dt {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 4px 20px;
  margin-bottom: 8px;
}
.station__where {
  font-weight: 600;
  font-size: 21px;
}
.station dd {
  margin: 0;
  color: var(--text-dim);
  max-width: 62ch;
}

/* A small printed advertisement, the only place a number gets to shout a little. */
.ad {
  margin-top: clamp(32px, 4vw, 48px);
  max-width: 320px;
  padding: 22px 24px 20px;
  background: var(--paper);
  color: var(--navy);
  transform: rotate(-1.2deg);
  text-align: center;
}
.ad__name {
  margin: 0;
  font-family: var(--font-remedy);
  font-style: italic;
  font-weight: 800;
  font-size: 32px;
  line-height: 1;
}
.ad__claim {
  margin: 10px 0 0;
  font-family: var(--font-banner);
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.ad__result {
  margin: 10px 0 0;
  font-family: var(--font-remedy);
  font-style: italic;
  font-size: 20px;
  color: var(--vermilion);
}
.ad__note {
  margin: 12px 0 0;
  padding-top: 10px;
  border-top: 1px solid rgba(20, 32, 57, 0.25);
  font-size: 13px;
  color: #3d4a63;
}

@media (max-width: 820px) {
  .now {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
