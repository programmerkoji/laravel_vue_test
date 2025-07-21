<script setup lang="ts">
import type { Contact } from "@/types/contact";
import InputForm from "../Atoms/InputForm.vue";
import TextareaForm from "../Atoms/TextareaForm.vue";
import BaseLayout from "../Organisms/BaseLayout.vue";
import { ref } from "vue";
import { createContact } from "@/api/contacts";
import router from "@/router";
import axios from "axios";

const form = ref<Partial<Contact>>({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = async () => {
  try {
    const res = await createContact(form.value as Required<typeof form.value>); //すべてのプロパティが存在している（undefined ではない）と伝える
    alert(res);
    router.push("/");
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 422) {
        alert("登録に失敗しました");
        console.error(error.response?.data.errors.email)
      }
    }
  }
};
</script>

<template>
  <BaseLayout title="新規作成">
    <div
      class="container my-10 mx-auto flex flex-col w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow"
    >
      <form class="w-full divide divide-y" @submit.prevent="handleSubmit">
        <div class="p-4">
          <label class="flex items-center">
            <span class="w-1/4 pl-1 font-bold">お名前</span>
            <span class="flex-auto">
              <InputForm name="name" placeholder="お名前" v-model="form.name" />
            </span>
          </label>
        </div>
        <div class="p-4">
          <label class="flex items-center">
            <span class="w-1/4 pl-1 font-bold">メールアドレス</span>
            <span class="flex-auto">
              <InputForm
                name="name"
                placeholder="メールアドレス"
                v-model="form.email"
              />
            </span>
          </label>
        </div>
        <div class="p-4">
          <label class="flex items-center">
            <span class="w-1/4 pl-1 font-bold">メッセージ</span>
            <span class="flex-auto">
              <TextareaForm
                name="name"
                placeholder="メッセージ"
                v-model="form.message"
              />
            </span>
          </label>
        </div>
        <div class="flex justify-center items-center gap-6 py-10">
          <router-link
            to="/"
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >戻る</router-link
          >
          <button
            type="submit"
            class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            登録
          </button>
        </div>
      </form>
    </div>
  </BaseLayout>
</template>
