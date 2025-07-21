<script setup lang="ts">
import BaseLayout from "@/components/Organisms/BaseLayout.vue";
import { selectedContactInjectionKey } from "@/providers/ContactsProviderInjectionKey";
import type { Contact } from "@/types/contact";
import { formatDate } from "@/utils/dateFormat";
import { ref } from "vue";
import { inject } from "vue";

const selectedContact = inject(selectedContactInjectionKey, ref<Contact | null>(null));

</script>

<template>
  <BaseLayout title="お問い合わせ詳細">
    <div
      class="container my-10 mx-auto flex flex-col w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow"
    >
      <ul class="w-full divide divide-y">
        <li class="p-4">
          <dl class="flex items-center">
            <dt class="w-1/4 pl-1 font-bold">ID</dt>
            <dd class="flex-auto">{{ selectedContact?.id ?? "loading..." }}</dd>
          </dl>
        </li>
        <li class="p-4">
          <dl class="flex items-center">
            <dt class="w-1/4 pl-1 font-bold">お名前</dt>
            <dd class="flex-auto">{{ selectedContact ? selectedContact.name : "" }}</dd>
          </dl>
        </li>
        <li class="p-4">
          <dl class="flex items-center">
            <dt class="w-1/4 pl-1 font-bold">メールアドレス</dt>
            <dd class="flex-auto">{{ selectedContact ? selectedContact.email : "" }}</dd>
          </dl>
        </li>
        <li class="p-4">
          <dl class="flex items-center">
            <dt class="w-1/4 pl-1 font-bold">メッセージ</dt>
            <dd class="flex-auto whitespace-pre-line">{{ selectedContact ? selectedContact.message : "" }}</dd>
          </dl>
        </li>
        <li class="p-4">
          <dl class="flex items-center">
            <dt class="w-1/4 pl-1 font-bold">登録日</dt>
            <dd class="flex-auto">
              {{ formatDate(selectedContact ? selectedContact.created_at : "") }}
            </dd>
          </dl>
        </li>
        <li class="p-4">
          <dl class="flex items-center">
            <dt class="w-1/4 pl-1 font-bold">更新日</dt>
            <dd class="flex-auto">
              {{ formatDate(selectedContact ? selectedContact.updated_at : "") }}
            </dd>
          </dl>
        </li>
      </ul>
    </div>
    <div class="flex justify-center items-center gap-6 pb-10">
      <router-link
        to="/"
        class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >戻る</router-link
      >
      <router-link
        to="/"
        class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >編集</router-link
      >
    </div>
  </BaseLayout>
</template>
