<script setup lang="ts">
import ContactDetailTemplate from "@/components/Templates/ContactDetailTemplate.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useContactStore } from "@/stores/ContactStore";

const route = useRoute();
const contactStore = useContactStore();

onMounted(() => {
  const id = Number(route.params.id);
  contactStore.fetchContactDetail(id);
});
</script>

<template>
  <div>
    <ContactDetailTemplate />
  </div>
</template>
