<script setup lang="ts">
import Card from 'primevue/card'
import Chip from 'primevue/chip'
import Button from 'primevue/button'
import { projects } from '@/data/resume'
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-title">Projetos</h2>
      <p class="section-subtitle">Alguns trabalhos selecionados</p>

      <div class="proj__grid">
        <Card v-for="project in projects" :key="project.name" class="proj__card">
          <template #title>{{ project.name }}</template>
          <template #content>
            <p class="proj__description">{{ project.description }}</p>
            <div class="proj__tech">
              <Chip v-for="tech in project.tech" :key="tech" :label="tech" class="proj__chip" />
            </div>
          </template>
          <template v-if="project.link" #footer>
            <Button
              :as="'a'"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              label="Ver repositório"
              icon="pi pi-external-link"
              severity="secondary"
              outlined
              size="small"
            />
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.proj__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
}

.proj__card :deep(.p-card-title) {
  font-size: 1.05rem;
}

.proj__description {
  margin: 0 0 0.9rem;
  color: var(--p-text-muted-color);
}

.proj__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.proj__chip {
  --p-chip-padding-y: 0.15rem;
  --p-chip-padding-x: 0.6rem;
  --p-chip-font-size: 0.8rem;
}

.proj__card :deep(.p-card-footer) {
  padding-top: 0.5rem;
}
</style>