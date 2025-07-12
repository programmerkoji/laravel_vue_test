<template>
  <div>
    <h1>Contact List</h1>
    <ul v-if="contacts.length">
      <li v-for="contact in contacts" :key="contact.id">
        {{ contact.name }} - {{ contact.email }}
      </li>
    </ul>
    <p v-else>Loading...</p>
  </div>
</template>

<script lang="ts" setup>
import { fetchContacts } from "@/api/contacts";
import type { Contact } from "@/types/contact";
import { onMounted } from "vue";
import { ref } from "vue";

const contacts = ref<Contact[]>([]);

onMounted(async () => {
  try {
    contacts.value = await fetchContacts();
  } catch (error) {
    console.error('Failed to fetch contacts:', error);
  }
})
</script>
