<script setup lang="ts">
import Chip from 'primevue/chip'

defineProps<{
  label: string
  size?: 'sm' | 'md'
}>()
</script>

<template>
  <Chip :label="label" :class="size === 'sm' ? 'tech-chip tech-chip--sm' : 'tech-chip'" />
</template>

<style scoped>
.tech-chip {
  --p-chip-padding-y: 0.2rem;
  --p-chip-padding-x: 0.65rem;
  --p-chip-font-size: 0.85rem;
}

.tech-chip--sm {
  --p-chip-padding-y: 0.15rem;
  --p-chip-padding-x: 0.6rem;
  --p-chip-font-size: 0.8rem;
}
</style>