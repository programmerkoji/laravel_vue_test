<script setup lang="ts">
import InputForm from "@/components/Atoms/InputForm.vue";
type Props = {
  label: string;
  name: string;
  placeholder?: string;
  modelValue?: string;
  disabled?: boolean;
};
type Emits = {
  (e: "update:modelValue", value: string): void;
};

defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
  <label class="flex items-center">
    <span class="w-1/4 pl-1 font-bold">{{ label }}</span>
    <span class="flex-auto">
      <InputForm
        :name="name"
        :placeholder="placeholder"
        :model-value="modelValue"
        :disabled="disabled"
        @update:model-value="emit('update:modelValue', $event)"
      />
    </span>
  </label>
</template>
