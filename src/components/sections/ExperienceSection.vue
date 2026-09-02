<script setup lang="ts">
import Timeline from 'primevue/timeline'
import Chip from 'primevue/chip'
import Tag from 'primevue/tag'
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
            <div class="exp-item__header">
              <div class="exp-item__titles">
                <h3 class="exp-item__company">
                  <a v-if="item.website" :href="item.website" target="_blank" rel="noopener noreferrer">
                    {{ item.company }}
                  </a>
                  <template v-else>{{ item.company }}</template>
                </h3>
                <p class="exp-item__company-detail">
                  <a
                    v-if="item.linkedin"
                    :href="item.linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="exp-item__linkedin"
                  >
                    <i class="pi pi-linkedin" /> LinkedIn
                  </a>
                </p>
              </div>
              <Tag :value="item.period" severity="secondary" class="exp-item__period" />
            </div>

            <ul class="exp-item__roles">
              <li v-for="role in item.roles" :key="role.title" class="exp-item__role">
                <span class="exp-item__role-title">{{ role.title }}</span>
                <span class="exp-item__role-period">{{ role.period }}</span>
              </li>
            </ul>

            <ul v-if="item.highlights && item.highlights.length" class="exp-item__highlights">
              <li v-for="highlight in item.highlights" :key="highlight" class="exp-item__highlight">
                {{ highlight }}
              </li>
            </ul>

            <div class="exp-item__tech">
              <Chip v-for="tech in item.tech" :key="tech" :label="tech" class="exp-item__tech-chip" />
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

.exp-item__header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  margin-bottom: 0.75rem;
}

.exp-item__titles {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.exp-item__company {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--p-text-color);
}

.exp-item__company a {
  color: inherit;
}

.exp-item__company-detail {
  margin: 0;
}

.exp-item__linkedin {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--p-primary-color);
  text-decoration: none;
}

.exp-item__period {
  --p-tag-font-size: 0.8rem;
}

.exp-item__roles {
  list-style: none;
  margin: 0 0 0.75rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.exp-item__role {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
}

.exp-item__role-title {
  font-weight: 600;
  color: var(--p-text-color);
}

.exp-item__role-period {
  font-size: 0.85rem;
  color: var(--p-text-muted-color);
}

.exp-item__highlights {
  list-style: none;
  margin: 0 0 0.75rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-left: 2px solid var(--p-primary-color);
}

.exp-item__highlight {
  padding-left: 0.85rem;
  color: var(--p-text-color);
  font-size: 0.95rem;
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