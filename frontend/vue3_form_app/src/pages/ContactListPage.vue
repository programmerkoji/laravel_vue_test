<script lang="ts" setup>
import ContactListTemplate from "@/components/Templates/ContactListTemplate.vue";
import { onMounted } from "vue";
import { useContactStore } from "@/stores/ContactStore";

const contactStore = useContactStore();

onMounted(contactStore.fetchAllContacts);
</script>

<template>
  <ContactListTemplate />
</template>
