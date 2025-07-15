<script setup lang="ts">
import { provide } from "vue";
import { useContactProvider } from "../composables/useContactProvider";
import { contactsInjectionKey } from "./ContactsProviderInjectionKey";

const { contacts, showContactList } = useContactProvider();

provide(contactsInjectionKey, contacts);
</script>

<template>
  <slot />
</template>
