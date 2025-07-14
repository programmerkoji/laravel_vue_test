<script lang="ts" setup>
import { fetchContactById } from "@/api/contacts";
import ContactDetailTemplate from "@/components/Templates/ContactDetailTemplate.vue";
import type { Contact } from "@/types/contact";
import { onMounted } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const contact = ref<Partial<Contact>>({
  id: 0,
  name: "",
  email: "",
  message: "",
  created_at: "",
  updated_at: "",
});

onMounted(async () => {
  try {
    const id = Number(route.params.id);
    contact.value = await fetchContactById(id);
  } catch (error) {
    console.error("Failed to fetch contacts:", error);
  }
});
</script>

<template>
  <ContactDetailTemplate :contact="contact"/>
</template>
