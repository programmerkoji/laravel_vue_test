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
const selectedContact = inject(selectedContactInjectionKey, ref(null));
const fetchContactDetail = inject(fetchContactDetailInjectionKey);
const isLoading = ref(true);

watch(
  () => route.params.id,
  async (id) => {
    isLoading.value = true;
    if (!selectedContact) return;
    try {
      if (fetchContactDetail) {
        await fetchContactDetail(Number(id));
      }
    } finally {
      isLoading.value = false;
    }
  },
  { immediate: true }
);

</script>

<template>
  <div class="loading" v-if="isLoading">
    読み込み中...
  </div>
  <div v-else>
    <ContactDetailTemplate />
  </div>
</template>

<style scoped>
.loading {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>