<script setup>
import { useLang } from '../composables/useLang.js'
import { meta } from '../data/content.js'
const { t } = useLang()
const year = new Date().getFullYear()
</script>

<template>
  <footer id="contact" class="section closing">
    <div class="container">
      <div class="closing__poster">
        <div class="closing__inner double-rule">
          <p class="closing__title">{{ t.closing.title }}</p>
          <p class="closing__body">{{ t.closing.body }}</p>
          <a class="closing__mail" :href="`mailto:${meta.email}`">{{ meta.email }}</a>
          <p class="closing__elsewhere">
            <a :href="meta.github" target="_blank" rel="noopener">GitHub</a>
            <a :href="meta.linkedin" target="_blank" rel="noopener">LinkedIn</a>
            <a :href="meta.orcid" target="_blank" rel="noopener">ORCID</a>
          </p>
        </div>
      </div>
      <p class="banner closing__meta">© {{ year }} {{ meta.name }} · {{ meta.location }} · {{ t.closing.built }}</p>
    </div>
  </footer>
</template>

<style scoped>
/* The closing poster: the house's own advertisement, on cobalt. */
.closing__poster {
  max-width: 760px;
  margin: 0 auto;
  padding: 14px;
  background: var(--cobalt);
  color: var(--ivory);
  transform: rotate(-0.6deg);
  box-shadow:
    0 1px 2px var(--shadow),
    0 22px 40px -14px var(--shadow);
}
.closing__inner {
  border-color: var(--gold-light);
  outline-color: var(--gold-light);
  padding: clamp(32px, 5vw, 56px) clamp(20px, 4vw, 48px);
  text-align: center;
}
.closing__title {
  margin: 0;
  font-family: var(--font-remedy);
  font-style: italic;
  font-weight: 800;
  font-size: clamp(40px, 5.4vw, 68px);
  line-height: 1;
}
.closing__body {
  margin: 18px 0 0;
  font-family: var(--font-banner);
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.closing__mail {
  display: inline-block;
  margin-top: 22px;
  font-family: var(--font-remedy);
  font-style: italic;
  font-weight: 600;
  font-size: clamp(17px, 4.4vw, 36px);
  color: var(--gold-light);
  text-decoration-color: color-mix(in srgb, var(--gold-light) 50%, transparent);
  overflow-wrap: anywhere;
}
.closing__mail:hover {
  color: var(--ivory);
}
.closing__elsewhere {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 28px;
  margin: 28px 0 0;
  font-family: var(--font-banner);
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.closing__elsewhere a {
  text-decoration-color: color-mix(in srgb, var(--ivory) 40%, transparent);
}
.closing__elsewhere a:hover {
  color: var(--gold-light);
}
.closing__meta {
  margin: clamp(48px, 7vw, 80px) 0 0;
  text-align: center;
  font-size: 14px;
  color: var(--text-faint);
}
</style>
