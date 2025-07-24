<script setup lang="ts">
import type { Contact } from "@/types/contact";
import InputForm from "../Atoms/InputForm.vue";
import TextareaForm from "../Atoms/TextareaForm.vue";
import BaseLayout from "../Organisms/BaseLayout.vue";
import { ref } from "vue";
import { createContact } from "@/api/contacts";
import router from "@/router";
import axios from "axios";
import ContactForm from "../Organisms/ContactForm.vue";
</script>

<template>
  <BaseLayout title="新規作成">
    <div
      class="container my-10 mx-auto flex flex-col w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow"
    >
      <ContactForm />
    </div>
  </BaseLayout>
</template>
