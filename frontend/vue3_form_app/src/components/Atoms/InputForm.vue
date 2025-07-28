<script setup lang="ts">
type Props = {
  disabled?: boolean;
  modelValue?: string;
  name: string;
  placeholder?: string;
};

type Emits = {
  (e: "update:modelValue", value: string): void;
};

const { disabled, modelValue, name, placeholder } = defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <input
    type="text"
    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out input"
    :disabled="disabled"
    :value="modelValue"
    :name="name"
    :placeholder="placeholder"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<style scoped>
.input:disabled {
  color: #c0c0c0;
}

.input::placeholder {
  color: #c0c0c0;
}
</style>
