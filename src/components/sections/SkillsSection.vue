<script setup lang="ts">
import Card from 'primevue/card'
import Chip from 'primevue/chip'
import { skills } from '@/data/resume'
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title">Habilidades</h2>
      <p class="section-subtitle">Ferramentas e tecnologias que domino</p>

      <div class="skills__grid">
        <Card v-for="group in skills" :key="group.category" class="skills__card">
          <template #title>{{ group.category }}</template>
          <template #content>
            <div class="skills__items">
              <Chip
                v-for="skill in group.skills"
                :key="skill"
                :label="skill"
                class="skills__chip"
              />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}

.skills__card :deep(.p-card-title) {
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
}

.skills__items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skills__chip {
  --p-chip-padding-y: 0.2rem;
  --p-chip-padding-x: 0.65rem;
  --p-chip-font-size: 0.85rem;
}
</style>