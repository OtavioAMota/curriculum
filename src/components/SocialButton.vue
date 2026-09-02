<script setup lang="ts">
import Button from 'primevue/button'

defineProps<{
  label: string
  url: string
  icon: string
}>()
</script>

<template>
  <Button
    :as="'a'"
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    :icon="icon"
    :label="label"
    severity="secondary"
    outlined
  />
</template>