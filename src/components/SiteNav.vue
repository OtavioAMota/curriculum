<script setup lang="ts">
import { onMounted } from 'vue'
import Button from 'primevue/button'
import { useTheme } from '@/composables/useTheme'

const { isDark, initTheme, toggleTheme } = useTheme()

const links = [
  { label: 'Sobre', href: '#about' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Educação', href: '#education' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
]

onMounted(() => {
  initTheme()
})
</script>

<template>
  <header class="site-nav">
    <nav class="site-nav__inner container">
      <a href="#hero" class="site-nav__brand">Curriculum</a>

      <div class="site-nav__links">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
      </div>

      <Button
        :aria-label="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
        :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
        :text="true"
        rounded
        @click="toggleTheme"
      />
    </nav>
  </header>
</template>

<style scoped>
.site-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  backdrop-filter: blur(8px);
  background: color-mix(in srgb, var(--p-surface-50) 80%, transparent);
  border-bottom: 1px solid var(--p-surface-200);
}

html.dark-mode .site-nav {
  background: color-mix(in srgb, var(--p-surface-950) 80%, transparent);
  border-bottom-color: var(--p-surface-800);
}

.site-nav__inner {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: 4rem;
}

.site-nav__brand {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--p-primary-color) !important;
  text-decoration: none !important;
}

.site-nav__links {
  display: flex;
  gap: 1.25rem;
  flex: 1;
}

.site-nav__links a {
  color: var(--p-text-muted-color);
  font-size: 0.925rem;
  text-decoration: none;
  transition: color 0.15s ease;
}

.site-nav__links a:hover {
  color: var(--p-primary-color);
  text-decoration: none;
}

@media (max-width: 768px) {
  .site-nav__links {
    display: none;
  }
}
</style>