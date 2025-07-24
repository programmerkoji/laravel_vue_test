<script setup lang="ts">
type Props = {
  label?: string;
  type?: "reset" | "submit" | "button";
  onClick?: () => void;
};
const { label, type, onClick } = defineProps<Props>();
</script>

<template>
  <button
    :type="type"
    class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.input:disabled {
  color: #c0c0c0;
}

.input::placeholder {
  color: #c0c0c0;
}
</style>
