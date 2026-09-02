<script setup lang="ts">
import Button from 'primevue/button'
import SocialButton from '@/components/SocialButton.vue'
import { person, socialNetworks } from '@/data/resume'
</script>

<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">Contato</h2>
      <p class="section-subtitle">Vamos conversar sobre seu próximo projeto</p>

      <div class="contact__cta">
        <div class="contact__actions">
          <Button
            :as="'a'"
            :href="`mailto:${person.email}`"
            label="Enviar um email"
            icon="pi pi-send"
            :aria-label="`Enviar email para ${person.email}`"
            size="large"
            fluid
          />

          <div class="contact__socials">
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
    </div>
  </section>
</template>

<style scoped>
.section-title,
.section-subtitle {
  text-align: center;
}

.contact__cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
}

.contact__actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.contact__socials {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}
</style>