<script setup lang="ts">
import { useContactProvider } from "@/composables/useContactProvider";
import ContactDetailTemplate from "@/components/Templates/ContactDetailTemplate.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { fetchContactDetail } = useContactProvider();

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