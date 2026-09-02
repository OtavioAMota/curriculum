<script setup lang="ts">
import Card from 'primevue/card'
import { hobbies, hobbiesLead } from '@/data/resume'

const images = import.meta.glob('@/assets/images/*.jpg', { eager: true, import: 'default' }) as Record<
  string,
  string
>
</script>

<template>
  <section id="hobbies" class="section">
    <div class="container">
      <h2 class="section-title">Hobbies</h2>
      <p class="section-subtitle">Fora do código</p>

      <p class="hobbies__lead">{{ hobbiesLead }}</p>

      <div class="hobbies__grid">
        <Card v-for="hobby in hobbies" :key="hobby.name" class="hobbies__card">
          <template #content>
            <img v-if="hobby.image && images[`/src/assets/images/${hobby.image}`]"
              :src="images[`/src/assets/images/${hobby.image}`]" :alt="`${hobby.name} — ${hobby.description}`"
              class="hobbies__image" />
            <i v-else :class="hobby.icon" class="hobbies__icon" />
            <h3 class="hobbies__name">{{ hobby.name }}</h3>
            <p class="hobbies__description">{{ hobby.description }}</p>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hobbies__lead {
  max-width: 60ch;
  margin: 0 0 2rem;
  font-size: 1.05rem;
  color: var(--p-text-muted-color);
}

.hobbies__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
}

.hobbies__card :deep(.p-card-content) {
  padding-top: 1.5rem;
}

.hobbies__icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  font-size: 1.5rem;
  color: var(--p-primary-contrast-color);
  background: linear-gradient(135deg, var(--p-primary-500), var(--p-primary-700));
  margin-bottom: 1rem;
}

.hobbies__image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 50% 35%;
  border-radius: 15px;
  margin-bottom: 1rem;
  border: 1px solid var(--p-surface-200);
}

html.dark-mode .hobbies__image {
  border-color: var(--p-surface-800);
}

.hobbies__name {
  margin: 0 0 0.5rem;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--p-text-color);
}

.hobbies__description {
  margin: 0;
  color: var(--p-text-muted-color);
}
</style>
