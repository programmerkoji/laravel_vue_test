<script setup lang="ts">
import { useContactProvider } from "@/composables/useContactProvider";
import ContactDetailTemplate from "@/components/Templates/ContactDetailTemplate.vue";
import type { Contact } from "@/types/contact";
import { onMounted } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { inject } from "vue";
import { fetchContactDetailInjectionKey, selectedContactInjectionKey } from "@/providers/ContactsProviderInjectionKey";
import { watch } from "vue";

const route = useRoute();
const { fetchContactDetail } = useContactProvider();
const isLoading = ref(true);

onMounted(() => {
  const id = Number(route.params.id)
  fetchContactDetail(id)
});

</script>

<template>
  <div>
    <ContactDetailTemplate />
  </div>
</template>