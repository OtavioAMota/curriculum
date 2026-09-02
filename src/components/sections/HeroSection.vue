<script setup lang="ts">
import Button from 'primevue/button'
import SocialButton from '@/components/SocialButton.vue'
import { person, socialNetworks } from '@/data/resume'
import profileImage from '@/assets/images/Profile.jpg'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="hero section">
    <div class="container hero__inner">
      <img :src="profileImage" :alt="`Foto de ${person.name}`" class="hero__avatar" />

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
          <SocialButton
            v-for="social in socialNetworks"
            :key="social.label"
            :label="social.label"
            :url="social.url"
            :icon="social.icon"
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
  object-fit: cover;
  border: 2px solid var(--p-primary-color);
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
  }

  .hero__meta,
  .hero__actions {
    justify-content: center;
  }
}
</style>