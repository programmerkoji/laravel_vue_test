<script setup lang="ts">
import { useContactProvider } from "@/composables/useContactProvider";
import type { Contact } from "@/types/contact";
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import InputForm from "../Atoms/InputForm.vue";
import TextareaForm from "../Atoms/TextareaForm.vue";
import CommonButton from "@/components/Atoms/CommonButton.vue";
import { onMounted } from "vue";

const form = ref<Contact>({
  id: 0,
  name: "",
  email: "",
  message: "",
  status: "",
  created_at: "",
  updated_at: "",
});

const router = useRouter();
const { editContact, fetchContactDetail } = useContactProvider();

const route = useRoute();
const id = route.params.id ? String(route.params.id) : null;
const buttonLabel = id ? "更新" : "登録";

onMounted(async () => {
  if (id) {
    form.value = await fetchContactDetail(Number(id));
  }
});

const handleSubmit = async () => {
  try {
    const message = await editContact(Number(id), form.value);
    alert(message);
    router.push("/");
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 422) {
        alert("登録に失敗しました");
        console.error(error.response?.data.errors.email);
      }
    }
  }
};
</script>

<template>
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
      <CommonButton type="submit" :label="buttonLabel" />
    </div>
  </form>
</template>
