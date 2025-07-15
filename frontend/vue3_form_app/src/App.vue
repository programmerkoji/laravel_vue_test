<script setup lang="ts">
import { ref } from "vue";
import ContactProvider from "@/providers/ContactProvider.vue";

const search = ref("");
</script>

<template>
  <ContactProvider>
    <router-view />
  </ContactProvider>
</template>

<style scoped></style>
