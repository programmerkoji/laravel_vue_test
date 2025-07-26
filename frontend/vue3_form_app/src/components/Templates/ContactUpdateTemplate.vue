<script setup lang="ts">
import BaseLayout from "../Organisms/BaseLayout.vue";
import ContactForm from "../Organisms/ContactForm.vue";
</script>

<template>
  <BaseLayout title="更新">
    <div
      class="container my-10 mx-auto flex flex-col w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow"
    >
      <ContactForm />
    </div>
  </BaseLayout>
</template>
