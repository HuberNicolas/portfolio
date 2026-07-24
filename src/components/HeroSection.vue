<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useLang } from '../composables/useLang.js'
import { meta } from '../data/content.js'

const { t, lang } = useLang()

/* --- typewriter for the rotating role words --- */
const typed = ref('')
let roleIdx = 0
let charIdx = 0
let deleting = false
let timer

function tick() {
  const words = t.value.hero.roles
  const word = words[roleIdx % words.length]
  charIdx += deleting ? -1 : 1
  typed.value = word.slice(0, charIdx)

  let delay = deleting ? 40 : 85
  if (!deleting && charIdx === word.length) {
    delay = 1600
    deleting = true
  } else if (deleting && charIdx === 0) {
    deleting = false
    roleIdx++
    delay = 350
  }
  timer = setTimeout(tick, delay)
}

// Restart cleanly when the language changes so we never index a stale word.
watch(lang, () => {
  clearTimeout(timer)
  roleIdx = 0
  charIdx = 0
  deleting = false
  typed.value = ''
  timer = setTimeout(tick, 300)
})

onMounted(() => (timer = setTimeout(tick, 600)))
onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero__inner">
      <p class="hero__badge reveal">
        <span class="dot"></span>{{ t.hero.badge }}
      </p>

      <p class="hero__hello reveal">{{ t.hero.hello }}</p>

      <h1 class="hero__name reveal">{{ t.hero.name }}</h1>

      <p class="hero__role reveal">
        <span class="hero__prompt">&gt;</span>
        <span class="hero__typed">{{ typed }}</span><span class="caret"></span>
      </p>

      <!-- transmutation formula: data → systems → impact -->
      <div class="formula reveal">
        <span class="formula__item formula__item--a">{{ t.hero.formula[0] }}</span>
        <span class="formula__arrow">→</span>
        <span class="formula__item formula__item--b">{{ t.hero.formula[1] }}</span>
        <span class="formula__arrow">→</span>
        <span class="formula__item formula__item--c">{{ t.hero.formula[2] }}</span>
      </div>

      <p class="hero__lead reveal">{{ t.hero.lead }}</p>

      <div class="hero__cta reveal">
        <a class="btn btn--primary" href="#projects">
          {{ t.hero.ctaProjects }}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
        <a class="btn" :href="meta.github" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.32 9.32 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
          </svg>
          {{ t.hero.ctaGithub }}
        </a>
        <a class="btn" :href="meta.cv[lang]" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          {{ t.hero.ctaCv }}
        </a>
      </div>
    </div>

    <div class="hero__scroll" aria-hidden="true">
      <span class="mouse"><span></span></span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-top: var(--nav-h);
  position: relative;
}
.hero__inner {
  padding-top: 40px;
  padding-bottom: 60px;
  max-width: 900px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-dim);
  border: 1px solid var(--line);
  background: var(--panel);
  padding: 6px 14px;
  border-radius: 999px;
  margin: 0 0 26px;
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 0 0 rgba(92, 240, 176, 0.6);
  animation: pulse 2.4s infinite;
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(92, 240, 176, 0.5); }
  70% { box-shadow: 0 0 0 8px rgba(92, 240, 176, 0); }
  100% { box-shadow: 0 0 0 0 rgba(92, 240, 176, 0); }
}

.hero__hello {
  font-family: var(--font-mono);
  color: var(--text-dim);
  font-size: 15px;
  margin: 0 0 8px;
  transition-delay: 0.05s;
}
.hero__name {
  font-size: clamp(46px, 9vw, 104px);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.035em;
  margin: 0;
  background: linear-gradient(180deg, #fff 30%, #b8b8cf 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition-delay: 0.1s;
}
.hero__role {
  font-family: var(--font-mono);
  font-size: clamp(18px, 3.4vw, 30px);
  margin: 16px 0 0;
  color: var(--text);
  transition-delay: 0.16s;
  min-height: 1.4em;
}
.hero__prompt {
  color: var(--green);
  margin-right: 10px;
}
.hero__typed {
  color: var(--blue);
}
.caret {
  display: inline-block;
  width: 9px;
  height: 1.05em;
  background: var(--green);
  margin-left: 3px;
  vertical-align: text-bottom;
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}

.formula {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin: 30px 0 0;
  font-family: var(--font-mono);
  font-size: clamp(13px, 2.2vw, 16px);
  transition-delay: 0.22s;
}
.formula__item {
  padding: 6px 14px;
  border-radius: 8px;
  border: 1px solid var(--line);
  background: var(--panel);
}
.formula__item--a { color: var(--text-dim); }
.formula__item--b { color: var(--blue); border-color: rgba(110, 181, 255, 0.3); }
.formula__item--c {
  color: var(--green);
  border-color: rgba(92, 240, 176, 0.35);
  background: rgba(92, 240, 176, 0.06);
}
.formula__arrow {
  color: var(--text-faint);
}

.hero__lead {
  max-width: 620px;
  color: var(--text-dim);
  font-size: clamp(15px, 2vw, 17.5px);
  margin: 30px 0 0;
  transition-delay: 0.28s;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
  transition-delay: 0.34s;
}

.hero__scroll {
  position: absolute;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);
}
.mouse {
  display: block;
  width: 22px;
  height: 34px;
  border: 1.5px solid var(--line-strong);
  border-radius: 12px;
  position: relative;
}
.mouse span {
  position: absolute;
  top: 7px;
  left: 50%;
  width: 3px;
  height: 6px;
  border-radius: 3px;
  background: var(--green);
  transform: translateX(-50%);
  animation: scroll 1.8s var(--ease) infinite;
}
@keyframes scroll {
  0% { opacity: 0; transform: translate(-50%, 0); }
  40% { opacity: 1; }
  80%, 100% { opacity: 0; transform: translate(-50%, 12px); }
}
@media (max-width: 640px) {
  .hero__scroll { display: none; }
}
</style>
