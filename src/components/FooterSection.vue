<script setup>
import { useLang } from '../composables/useLang.js'
import { meta } from '../data/content.js'
const { t } = useLang()
const year = new Date().getFullYear()

const links = [
  { label: 'GitHub', href: meta.github },
  { label: 'LinkedIn', href: meta.linkedin },
  { label: 'ORCID', href: meta.orcid },
  { label: 'Email', href: 'mailto:' + meta.email },
]
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <span class="footer__mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 4 L19 18 H5 Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
            <line x1="8" y1="14.5" x2="16" y2="14.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
          </svg>
        </span>
        <div>
          <p class="footer__name">{{ meta.name }}</p>
          <p class="footer__tagline">{{ t.footer.tagline }}</p>
        </div>
      </div>

      <nav class="footer__links">
        <a v-for="l in links" :key="l.label" :href="l.href" target="_blank" rel="noopener">{{ l.label }}</a>
      </nav>
    </div>

    <div class="container footer__meta">
      <span>© {{ year }} {{ meta.name }} · {{ meta.location }}</span>
      <span>{{ t.footer.built }}</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding: 56px 0 40px;
  background: linear-gradient(180deg, transparent, rgba(92, 240, 176, 0.02));
}
.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
}
.footer__brand {
  display: flex;
  align-items: center;
  gap: 14px;
}
.footer__mark {
  color: var(--green);
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 10px;
}
.footer__mark svg {
  width: 22px;
  height: 22px;
}
.footer__name {
  font-family: var(--font-mono);
  font-weight: 500;
  margin: 0;
}
.footer__tagline {
  color: var(--text-dim);
  font-size: 13.5px;
  margin: 2px 0 0;
}
.footer__links {
  display: flex;
  gap: 24px;
  font-family: var(--font-mono);
  font-size: 14px;
}
.footer__links a {
  color: var(--text-dim);
  transition: color var(--dur) var(--ease);
}
.footer__links a:hover {
  color: var(--green);
}
.footer__meta {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--text-faint);
}
@media (max-width: 560px) {
  .footer__inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
