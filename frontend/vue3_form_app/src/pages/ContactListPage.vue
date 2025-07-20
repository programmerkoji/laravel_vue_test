<script lang="ts" setup>
import type { Contact } from "@/types/contact";
import { ref } from "vue";
import ContactListTemplate from "@/components/Templates/ContactListTemplate.vue";
import { fetchContacts } from "@/api/contacts";
import { onMounted } from "vue";
import { inject } from "vue";
import { contactsInjectionKey } from "@/providers/ContactsProviderInjectionKey";

const contacts = inject(contactsInjectionKey);
const searchWord = ref("");

onMounted(async () => {
  if (contacts) {
    contacts.value = await fetchContacts();
  }
});
</script>

<template>
  <ContactListTemplate />
</template>
