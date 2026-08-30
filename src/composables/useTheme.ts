import { ref } from 'vue'

const THEME_KEY = 'curriculum-theme'
const DARK_CLASS = 'dark-mode'

const isDark = ref(false)

function apply(): void {
  document.documentElement.classList.toggle(DARK_CLASS, isDark.value)
}

function initTheme(): void {
  const saved = localStorage.getItem(THEME_KEY)
  if (saved !== null) {
    isDark.value = saved === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  apply()
}

function toggleTheme(): void {
  isDark.value = !isDark.value
  localStorage.setItem(THEME_KEY, isDark.value ? 'dark' : 'light')
  apply()
}

export function useTheme() {
  return { isDark, initTheme, toggleTheme }
}