<script setup lang="ts">
import { provide } from "vue";
import { useContactProvider } from "../composables/useContactProvider";
import {
  contactsInjectionKey,
  fetchContactDetailInjectionKey,
  selectedContactInjectionKey,
} from "./ContactsProviderInjectionKey";
import { onMounted } from "vue";

const { contacts, fetchAllContacts, selectedContact, fetchContactDetail } =
  useContactProvider();

provide(contactsInjectionKey, contacts);
provide(selectedContactInjectionKey, selectedContact);
provide(fetchContactDetailInjectionKey, fetchContactDetail);

onMounted(fetchAllContacts);
</script>

<template>
  <slot />
</template>
