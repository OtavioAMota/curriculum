<script setup lang="ts">
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import { education } from '@/data/resume'
</script>

<template>
  <section id="education" class="section">
    <div class="container">
      <h2 class="section-title">Educação</h2>
      <p class="section-subtitle">Formação acadêmica e cursos</p>

      <div class="edu__grid">
        <Card v-for="item in education" :key="item.degree" class="edu__card">
          <template #title>{{ item.degree }}</template>
          <template #subtitle>{{ item.institution }}</template>
          <template #content>
            <Tag :value="item.period" severity="secondary" class="edu__period" />
            <p v-if="item.detail" class="edu__detail">{{ item.detail }}</p>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.edu__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
}

.edu__card :deep(.p-card-title) {
  font-size: 1.05rem;
}

.edu__card :deep(.p-card-subtitle) {
  margin-top: 0.1rem;
}

.edu__period {
  --p-tag-font-size: 0.8rem;
  margin-bottom: 0.75rem;
}

.edu__detail {
  margin: 0.75rem 0 0;
  color: var(--p-text-muted-color);
}
</style>