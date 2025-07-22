<script setup lang="ts">
import { provideContact } from "../composables/useContactProvider";

provideContact();

</script>

<template>
  <slot />
</template>
