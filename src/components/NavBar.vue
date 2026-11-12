<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useLang } from '../composables/useLang.js'
import { useTheme } from '../composables/useTheme.js'
import { meta } from '../data/content.js'

const { t, lang, toggle } = useLang()
const { theme, toggle: toggleTheme } = useTheme()
const scrolled = ref(false)
const open = ref(false)
const links = ['posters', 'network', 'now', 'programme', 'person', 'contact']
// The stop the reader is at: the last section whose top has passed the upper third of the window.
const current = ref('posters')

function onScroll() {
  scrolled.value = window.scrollY > 12
  const mark = window.innerHeight * 0.35
  let at = links[0]
  for (const id of links) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= mark) at = id
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) at = links[links.length - 1]
  current.value = at
}
onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

function go(id) {
  open.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="nav__inner container">
      <a class="brand" href="#posters" @click.prevent="go('posters')">
        <svg class="brand__mono" viewBox="0 0 40 40" aria-hidden="true">
          <circle cx="20" cy="20" r="18.5" />
          <circle cx="20" cy="20" r="15.5" />
          <text x="20" y="25.5" text-anchor="middle">NH</text>
        </svg>
        <span>{{ meta.name }}</span>
      </a>

      <!-- The navigation is a route strip: every section is a stop, the current one is lit. -->
      <nav id="nav-links" class="nav__links" :class="{ 'is-open': open }">
        <a
          v-for="id in links"
          :key="id"
          :href="`#${id}`"
          :class="{ 'is-current': current === id }"
          :aria-current="current === id ? 'location' : null"
          @click.prevent="go(id)"
        >
          {{ t.nav[id] }}
        </a>
      </nav>

      <div class="nav__actions">
        <button class="nav__btn" @click="toggle" :aria-label="t.nav.langSwitch" :lang="lang === 'en' ? 'de' : 'en'">
          {{ t.nav.langLabel }}
        </button>
        <button class="nav__btn" @click="toggleTheme" :aria-label="t.nav.themeLabel" :title="t.nav.themeLabel">
          {{ theme === 'dark' ? t.nav.matinee : t.nav.evening }}
        </button>
        <button
          class="burger"
          :class="{ 'is-open': open }"
          @click="open = !open"
          :aria-label="t.nav.menu"
          aria-controls="nav-links"
          :aria-expanded="open"
        >
          <span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  height: var(--nav-h);
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  transition: background-color var(--dur) var(--ease), border-color var(--dur) var(--ease);
}
.nav--scrolled {
  background: var(--nav-bg);
  border-bottom-color: var(--rule);
}
.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-remedy);
  font-style: italic;
  font-weight: 700;
  font-size: 22px;
  text-decoration: none;
}
/* The house monogram: two gold rings around the initials, like a maker's seal. */
.brand__mono {
  width: 38px;
  height: 38px;
  flex: none;
}
.brand__mono circle {
  fill: none;
  stroke: var(--gold);
  stroke-width: 1.4;
}
.brand__mono circle:first-child {
  fill: var(--cobalt);
}
.brand__mono text {
  font-family: var(--font-remedy);
  font-style: italic;
  font-weight: 700;
  font-size: 15px;
  fill: var(--ivory);
}

/* A thin line runs under all stops; each stop is a small white dot on it. */
.nav__links {
  position: relative;
  display: flex;
  gap: clamp(14px, 2vw, 28px);
  padding-bottom: 14px;
  margin-top: 14px;
}
.nav__links::before {
  content: '';
  position: absolute;
  left: 4px;
  right: 4px;
  bottom: 4px;
  height: 3px;
  border-radius: 2px;
  background: var(--rule-strong);
}
.nav__links a {
  position: relative;
  font-family: var(--font-banner);
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--text-dim);
  white-space: nowrap;
}
.nav__links a::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -15px;
  width: 11px;
  height: 11px;
  margin-left: -5.5px;
  border-radius: 50%;
  background: var(--ground);
  border: 2px solid var(--text-dim);
  transition: background-color var(--dur) var(--ease), border-color var(--dur) var(--ease), transform var(--dur) var(--ease);
}
.nav__links a:hover {
  color: var(--link);
}
.nav__links a.is-current {
  color: var(--text);
}
.nav__links a.is-current::after {
  background: var(--link);
  border-color: var(--link);
  transform: scale(1.25);
}
.nav__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.nav__btn {
  min-height: 36px;
  padding: 0 12px;
  font-family: var(--font-banner);
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text);
  background: none;
  border: 1.5px solid var(--rule-strong);
  border-radius: 999px;
  cursor: pointer;
  transition: color var(--dur) var(--ease), border-color var(--dur) var(--ease);
}
.nav__btn:hover {
  color: var(--link);
  border-color: var(--link);
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 7px;
  width: 40px;
  height: 36px;
  padding: 0 9px;
  background: none;
  border: 0;
  cursor: pointer;
}
.burger span {
  height: 2px;
  background: var(--text);
  transition: transform var(--dur) var(--ease);
}
.burger.is-open span:nth-child(1) {
  transform: translateY(4.5px) rotate(45deg);
}
.burger.is-open span:nth-child(2) {
  transform: translateY(-4.5px) rotate(-45deg);
}

@media (max-width: 820px) {
  .burger {
    display: flex;
  }
  .nav__links {
    position: fixed;
    top: var(--nav-h);
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    padding: 8px clamp(16px, 4vw, 40px) 20px;
    background: var(--ground);
    border-bottom: 1px solid var(--rule);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition: opacity var(--dur), transform var(--dur), visibility var(--dur);
  }
  .nav__links.is-open {
    opacity: 1;
    visibility: visible;
    transform: none;
  }
  /* In the drawer the strip stands upright, like the route plan beside a tram door. */
  .nav__links {
    margin-top: 0;
    padding-left: calc(clamp(16px, 4vw, 40px) + 26px);
  }
  .nav__links::before {
    left: calc(clamp(16px, 4vw, 40px) + 4px);
    right: auto;
    top: 30px;
    bottom: 36px;
    width: 3px;
    height: auto;
  }
  .nav__links a {
    font-size: 18px;
    padding: 14px 0;
  }
  .nav__links a::after {
    left: -22px;
    bottom: auto;
    top: 50%;
    margin: -5.5px 0 0;
  }
}
@media (max-width: 520px) {
  .brand span {
    display: none;
  }
}
@media (max-width: 1060px) and (min-width: 821px) {
  .brand span {
    display: none;
  }
}
</style>
