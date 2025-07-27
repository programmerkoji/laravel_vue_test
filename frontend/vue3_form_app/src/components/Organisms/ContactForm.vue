<script setup lang="ts">
import { useContactProvider } from "@/composables/useContactProvider";
import type { Contact } from "@/types/contact";
import CommonButton from "@/components/Atoms/CommonButton.vue";
import LabelWithInput from "@/components/Molecules/LabelWithInput.vue";
import LabelWithTextarea from "@/components/Molecules/LabelWithTextarea.vue";
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import InputForm from "../Atoms/InputForm.vue";
import TextareaForm from "../Atoms/TextareaForm.vue";
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
      <LabelWithInput
        label="お名前"
        name="name"
        placeholder="山田　太郎"
        v-model="form.name"
      />
    </div>
    <div class="p-4">
      <LabelWithInput
        label="メールアドレス"
        name="email"
        placeholder="yamada@test.com"
        v-model="form.email"
      />
    </div>
    <div class="p-4">
      <LabelWithTextarea
        label="お問い合わせ内容"
        name="message"
        placeholder="ご要望・ご相談をご記入ください"
        v-model="form.message"
      />
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
