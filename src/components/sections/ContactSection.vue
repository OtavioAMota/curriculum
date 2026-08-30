<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import Message from 'primevue/message'
import { person } from '@/data/resume'

const name = ref('')
const email = ref('')
const message = ref('')
const sent = ref(false)

function submit() {
  sent.value = true
}
</script>

<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">Contato</h2>
      <p class="section-subtitle">Vamos conversar sobre seu próximo projeto</p>

      <div class="contact__grid">
        <Card class="contact__card">
          <template #title>Envie uma mensagem</template>
          <template #content>
            <form class="contact__form" novalidate @submit.prevent="submit">
              <FloatLabel variant="over">
                <InputText id="name" v-model="name" class="contact__input" fluid />
                <label for="name">Nome</label>
              </FloatLabel>

              <FloatLabel variant="over">
                <InputText id="email" v-model="email" class="contact__input" fluid />
                <label for="email">Email</label>
              </FloatLabel>

              <FloatLabel variant="over">
                <Textarea
                  id="message"
                  v-model="message"
                  class="contact__input"
                  fluid
                  rows="5"
                  autoResize
                />
                <label for="message">Mensagem</label>
              </FloatLabel>

              <Message v-if="sent" severity="success" :closable="false">
                Mensagem registrada! Em breve entrarei em contato.
              </Message>

              <Button
                label="Enviar mensagem"
                icon="pi pi-send"
                type="submit"
                :disabled="sent"
                fluid
              />
            </form>
          </template>
        </Card>

        <Card class="contact__card">
          <template #title>Outros canais</template>
          <template #content>
            <ul class="contact__list">
              <li class="contact__item">
                <i class="pi pi-envelope" />
                <a :href="`mailto:${person.email}`">{{ person.email }}</a>
              </li>
              <li class="contact__item">
                <i class="pi pi-phone" />
                <a :href="`tel:${person.phone}`">{{ person.phone }}</a>
              </li>
              <li class="contact__item">
                <i class="pi pi-map-marker" />
                <span>{{ person.location }}</span>
              </li>
            </ul>

            <div class="contact__socials">
              <Button
                v-for="social in person.socials"
                :key="social.label"
                :as="'a'"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                :label="social.label"
                severity="secondary"
                outlined
              />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  align-items: start;
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact__list {
  list-style: none;
  margin: 0 0 1.5rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact__item {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: var(--p-text-color);
}

.contact__item i {
  color: var(--p-primary-color);
}

.contact__socials {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

@media (max-width: 768px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }
}
</style>