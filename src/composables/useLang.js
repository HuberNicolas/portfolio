import { ref, computed } from 'vue'
import { content } from '../data/content.js'

const SUPPORTED = ['en', 'de']

function detectInitial() {
  const url = new URLSearchParams(window.location.search).get('lang')
  if (SUPPORTED.includes(url)) return url
  const stored = localStorage.getItem('lang')
  if (SUPPORTED.includes(stored)) return stored
  const nav = (navigator.language || 'en').slice(0, 2)
  return SUPPORTED.includes(nav) ? nav : 'en'
}

// Shared singleton state — every component reads the same language.
const lang = ref(detectInitial())

export function useLang() {
  const t = computed(() => content[lang.value])

  function setLang(next) {
    if (!SUPPORTED.includes(next)) return
    lang.value = next
    localStorage.setItem('lang', next)
    document.documentElement.lang = next
    const url = new URL(window.location)
    url.searchParams.set('lang', next)
    window.history.replaceState({}, '', url)
  }

  function toggle() {
    setLang(lang.value === 'en' ? 'de' : 'en')
  }

  return { lang, t, setLang, toggle }
}
