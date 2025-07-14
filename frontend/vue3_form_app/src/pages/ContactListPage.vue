<script lang="ts" setup>
import { fetchContacts } from "@/api/contacts";
import type { Contact } from "@/types/contact";
import { onMounted } from "vue";
import { ref } from "vue";
import InputForm from "../components/Atoms/InputForm.vue";
import ContactListTemplate from "@/components/Templates/ContactListTemplate.vue";

const contacts = ref<Contact[]>([]);
const searchWord = ref("");

onMounted(async () => {
  try {
    contacts.value = await fetchContacts();
  } catch (error) {
    console.error("Failed to fetch contacts:", error);
  }
});
</script>

<template>
  <ContactListTemplate :contacts="contacts" />
</template>
