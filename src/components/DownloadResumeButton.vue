<script setup lang="ts">
import Button from 'primevue/button'
import { resumePdfUrl } from '@/data/resume'
</script>

<template>
  <Button
    :as="'a'"
    :href="resumePdfUrl"
    download
    label="Baixar currículo (PDF)"
    icon="pi pi-download"
    severity="secondary"
    outlined
  />
</template>