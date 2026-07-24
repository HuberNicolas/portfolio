<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useLang } from '../composables/useLang.js'
import { meta } from '../data/content.js'

const { t, lang, toggle } = useLang()
const scrolled = ref(false)
const open = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 12
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

function go(id) {
  open.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="nav__inner container">
      <a class="brand" href="#top" @click.prevent="go('top')">
        <span class="brand__mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 4 L19 18 H5 Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
            <line x1="8" y1="14.5" x2="16" y2="14.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
          </svg>
        </span>
        <span class="brand__name">nicolas<span class="brand__dot">.</span>huber</span>
      </a>

      <nav class="nav__links" :class="{ 'is-open': open }">
        <a href="#work" @click.prevent="go('work')">{{ t.nav.work }}</a>
        <a href="#projects" @click.prevent="go('projects')">{{ t.nav.projects }}</a>
        <a href="#journey" @click.prevent="go('journey')">{{ t.nav.journey }}</a>
        <a href="#about" @click.prevent="go('about')">{{ t.nav.about }}</a>
      </nav>

      <div class="nav__actions">
        <button class="lang" @click="toggle" :aria-label="'Switch language to ' + t.nav.langLabel">
          <span class="lang__cur">{{ lang.toUpperCase() }}</span>
          <span class="lang__sep">/</span>
          <span class="lang__alt">{{ t.nav.langLabel }}</span>
        </button>
        <a class="nav__gh" :href="meta.github" target="_blank" rel="noopener" aria-label="GitHub">
          <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.32 9.32 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
          </svg>
        </a>
        <button class="burger" :class="{ 'is-open': open }" @click="open = !open" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-h);
  display: flex;
  align-items: center;
  transition: background var(--dur) var(--ease), border-color var(--dur) var(--ease), backdrop-filter var(--dur);
  border-bottom: 1px solid transparent;
}
.nav--scrolled {
  background: rgba(8, 8, 12, 0.72);
  backdrop-filter: blur(14px);
  border-bottom-color: var(--line);
}
.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 15px;
  letter-spacing: -0.01em;
}
.brand__mark {
  color: var(--green);
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
}
.brand__mark svg {
  width: 24px;
  height: 24px;
}
.brand__dot {
  color: var(--green);
}

.nav__links {
  display: flex;
  gap: 30px;
  font-family: var(--font-mono);
  font-size: 14px;
}
.nav__links a {
  color: var(--text-dim);
  position: relative;
  transition: color var(--dur) var(--ease);
}
.nav__links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 1.5px;
  background: var(--green);
  transition: width var(--dur) var(--ease);
}
.nav__links a:hover {
  color: var(--text);
}
.nav__links a:hover::after {
  width: 100%;
}

.nav__actions {
  display: flex;
  align-items: center;
  gap: 14px;
}
.lang {
  font-family: var(--font-mono);
  font-size: 13px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 5px 12px;
  color: var(--text-dim);
  cursor: pointer;
  transition: border-color var(--dur), color var(--dur);
}
.lang:hover {
  border-color: rgba(92, 240, 176, 0.5);
}
.lang__cur {
  color: var(--green);
}
.lang__sep {
  margin: 0 3px;
  color: var(--text-faint);
}
.nav__gh {
  color: var(--text-dim);
  display: grid;
  place-items: center;
  transition: color var(--dur), transform var(--dur);
}
.nav__gh:hover {
  color: var(--text);
  transform: translateY(-1px);
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: 0;
  cursor: pointer;
  padding: 4px;
}
.burger span {
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform var(--dur), opacity var(--dur);
}
.burger.is-open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.burger.is-open span:nth-child(2) {
  opacity: 0;
}
.burger.is-open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 760px) {
  .burger {
    display: flex;
  }
  .nav__links {
    position: fixed;
    top: var(--nav-h);
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 4px;
    padding: 18px 24px 26px;
    background: rgba(10, 10, 16, 0.96);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--line);
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--dur), transform var(--dur);
  }
  .nav__links.is-open {
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }
  .nav__links a {
    font-size: 16px;
    padding: 10px 0;
  }
}
</style>
