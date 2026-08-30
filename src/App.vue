<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteNav from '@/components/SiteNav.vue'
</script>

<template>
  <SiteNav />
  <RouterView />
  <footer class="site-footer">
    <div class="container">
      <p>© {{ new Date().getFullYear() }} — Feito com Vue 3 + PrimeVue.</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid var(--p-surface-200);
  color: var(--p-text-muted-color);
  font-size: 0.9rem;
}

html.dark-mode .site-footer {
  border-top-color: var(--p-surface-800);
}
</style>