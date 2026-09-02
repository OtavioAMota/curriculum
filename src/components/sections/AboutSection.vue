<script setup lang="ts">
import Card from 'primevue/card'
import { about, person } from '@/data/resume'
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">Sobre mim</h2>
      <p class="section-subtitle">Um pouco sobre quem eu sou</p>

      <Card class="about__card">
        <template #content>
          <p v-for="(paragraph, index) in about" :key="index" class="about__text">{{ paragraph }}</p>

          <div class="about__facts">
            <div class="about__fact">
              <span class="about__fact-label">Localização</span>
              <span>{{ person.location }}</span>
            </div>
            <div class="about__fact">
              <span class="about__fact-label">Email</span>
              <a :href="`mailto:${person.email}`">{{ person.email }}</a>
            </div>
            <div class="about__fact">
              <span class="about__fact-label">Foco</span>
              <span>{{ person.focus }}</span>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </section>
</template>

<style scoped>
.about__text {
  margin: 0;
  font-size: 1.05rem;
}

.about__text + .about__text {
  margin-top: 1.25rem;
}

.about__facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.about__fact {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.75rem 1rem;
  border-radius: var(--p-content-border-radius);
  background: var(--p-surface-100);
}

html.dark-mode .about__fact {
  background: var(--p-surface-900);
}

.about__fact-label {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--p-text-muted-color);
}
</style>