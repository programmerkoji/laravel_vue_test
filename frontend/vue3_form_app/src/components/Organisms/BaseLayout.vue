<script setup lang="ts">
type Props = {
  title: string;
};

const { title } = defineProps<Props>();
</script>

<template>
  <div class="ly_cont_inner">
    <h1 class="p-4 text-xl text-center font-bold mb-4">{{title}}</h1>
    <slot />
  </div>
</template>

<style scoped>
  .ly_cont_inner {
      max-width: 1064px;
      width: 100%;
      margin: 0 auto;
      padding: 0 20px;
      position: relative;
  }
</style>