<script lang="ts" setup>
import type { Contact } from "@/types/contact";
import { ref } from "vue";
import ContactListTemplate from "@/components/Templates/ContactListTemplate.vue";
import { onMounted } from "vue";
import { useContactProvider } from "@/composables/useContactProvider";

const { fetchAllContacts } = useContactProvider();

onMounted(fetchAllContacts);
</script>

<template>
  <ContactListTemplate />
</template>
