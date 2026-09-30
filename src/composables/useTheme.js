import { ref } from 'vue'

// The inline script in index.html sets data-theme before first paint; read it back here.
const theme = ref(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')

export function useTheme() {
  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = theme.value
    try {
      localStorage.setItem('theme', theme.value)
    } catch {
      // Storage blocked — the choice just won't persist.
    }
  }

  return { theme, toggle }
}
