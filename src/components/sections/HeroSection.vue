<script setup lang="ts">
import Button from 'primevue/button'
import { person } from '@/data/resume'

const initials = person.name
  .split(' ')
  .map((part) => part.charAt(0))
  .slice(0, 2)
  .join('')
  .toUpperCase()

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="hero section">
    <div class="container hero__inner">
      <div class="hero__avatar" aria-hidden="true">{{ initials }}</div>

      <div class="hero__content">
        <p class="hero__eyebrow">{{ person.role }}</p>
        <h1 class="hero__name">{{ person.name }}</h1>
        <p class="hero__summary">{{ person.summary }}</p>

        <div class="hero__meta">
          <span class="hero__meta-item"><i class="pi pi-map-marker" /> {{ person.location }}</span>
          <span class="hero__meta-item"><i class="pi pi-envelope" /> {{ person.email }}</span>
        </div>

        <div class="hero__actions">
          <Button label="Fale comigo" icon="pi pi-send" @click="scrollTo('contact')" />
          <Button
            label="Ver projetos"
            icon="pi pi-briefcase"
            severity="secondary"
            outlined
            @click="scrollTo('projects')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding-top: 6rem;
}

.hero__inner {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  align-items: center;
}

.hero__avatar {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--p-primary-contrast-color);
  background: linear-gradient(135deg, var(--p-primary-500), var(--p-primary-700));
  user-select: none;
}

.hero__eyebrow {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--p-primary-color);
}

.hero__name {
  margin: 0 0 1rem;
  font-size: clamp(2.4rem, 6vw, 4rem);
  line-height: 1.05;
  font-weight: 800;
  color: var(--p-text-color);
}

.hero__summary {
  max-width: 60ch;
  margin: 0 0 1.5rem;
  font-size: 1.1rem;
  color: var(--p-text-muted-color);
}

.hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-bottom: 2rem;
  color: var(--p-text-muted-color);
  font-size: 0.95rem;
}

.hero__meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

@media (max-width: 768px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }

  .hero__avatar {
    margin: 0 auto;
    width: 140px;
    height: 140px;
    font-size: 2.5rem;
  }

  .hero__meta,
  .hero__actions {
    justify-content: center;
  }
}
</style>