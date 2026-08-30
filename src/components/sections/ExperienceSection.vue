<script setup lang="ts">
import Timeline from 'primevue/timeline'
import Chip from 'primevue/chip'
import { experience } from '@/data/resume'
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <h2 class="section-title">Experiência</h2>
      <p class="section-subtitle">Minha trajetória profissional</p>

      <Timeline :value="experience" align="left">
        <template #content="{ item }">
          <div class="exp-item">
            <h3 class="exp-item__role">{{ item.role }}</h3>
            <p class="exp-item__company">
              {{ item.company }} · <span class="exp-item__period">{{ item.period }}</span>
            </p>
            <p class="exp-item__summary">{{ item.summary }}</p>
            <div class="exp-item__tech">
              <Chip
                v-for="tech in item.tech"
                :key="tech"
                :label="tech"
                class="exp-item__tech-chip"
              />
            </div>
          </div>
        </template>
      </Timeline>
    </div>
  </section>
</template>

<style scoped>
.exp-item {
  padding: 0 0 1.5rem;
}

.exp-item__role {
  margin: 0 0 0.25rem;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--p-text-color);
}

.exp-item__company {
  margin: 0 0 0.75rem;
  color: var(--p-primary-color);
  font-weight: 600;
}

.exp-item__period {
  color: var(--p-text-muted-color);
  font-weight: 400;
}

.exp-item__summary {
  margin: 0 0 0.75rem;
  color: var(--p-text-color);
}

.exp-item__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.exp-item__tech-chip {
  --p-chip-padding-y: 0.15rem;
  --p-chip-padding-x: 0.6rem;
  --p-chip-font-size: 0.8rem;
}
</style>