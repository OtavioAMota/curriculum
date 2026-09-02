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
      <p class="section-subtitle">Casos práticos: problema, arquitetura e resultado</p>

      <div class="proj__grid">
        <Card v-for="project in projects" :key="project.name" class="proj__card">
          <template #title>{{ project.name }}</template>
          <template #subtitle>Problema resolvido</template>
          <template #content>
            <p class="proj__problem">{{ project.problem }}</p>
            <div class="proj__tech">
              <Chip v-for="tech in project.stack" :key="tech" :label="tech" class="proj__chip" />
            </div>
          </template>
          <template #footer>
            <div class="proj__actions">
              <Button
                v-if="project.repo"
                :as="'a'"
                :href="project.repo"
                target="_blank"
                rel="noopener noreferrer"
                label="Ver repositório"
                icon="pi pi-external-link"
                severity="secondary"
                outlined
                size="small"
              />
              <Button
                v-if="project.docs"
                :as="'a'"
                :href="project.docs"
                target="_blank"
                rel="noopener noreferrer"
                label="Documentação da API"
                icon="pi pi-book"
                severity="secondary"
                outlined
                size="small"
              />
            </div>
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

.proj__card :deep(.p-card-subtitle) {
  margin-top: 0.1rem;
}

.proj__problem {
  margin: 0 0 0.9rem;
  color: var(--p-text-color);
}

.proj__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.9rem;
}

.proj__chip {
  --p-chip-padding-y: 0.15rem;
  --p-chip-padding-x: 0.6rem;
  --p-chip-font-size: 0.8rem;
}

.proj__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.proj__card :deep(.p-card-footer) {
  padding-top: 0.5rem;
}
</style>