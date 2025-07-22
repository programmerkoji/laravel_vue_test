<script setup lang="ts">
import BaseLayout from "@/components/Organisms/BaseLayout.vue";
import { useContactProvider } from "@/composables/useContactProvider";
import { formatDate } from "@/utils/dateFormat";

const { selectedContact } = useContactProvider();
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
            <dd class="flex-auto">{{ selectedContact?.id }}</dd>
          </dl>
        </li>
        <li class="p-4">
          <dl class="flex items-center">
            <dt class="w-1/4 pl-1 font-bold">お名前</dt>
            <dd class="flex-auto">
              {{ selectedContact?.name }}
            </dd>
          </dl>
        </li>
        <li class="p-4">
          <dl class="flex items-center">
            <dt class="w-1/4 pl-1 font-bold">メールアドレス</dt>
            <dd class="flex-auto">
              {{ selectedContact?.email }}
            </dd>
          </dl>
        </li>
        <li class="p-4">
          <dl class="flex items-center">
            <dt class="w-1/4 pl-1 font-bold">メッセージ</dt>
            <dd class="flex-auto whitespace-pre-line">
              {{ selectedContact?.message }}
            </dd>
          </dl>
        </li>
        <li class="p-4">
          <dl class="flex items-center">
            <dt class="w-1/4 pl-1 font-bold">登録日</dt>
            <dd class="flex-auto">
              {{ formatDate(selectedContact?.created_at) }}
            </dd>
          </dl>
        </li>
        <li class="p-4">
          <dl class="flex items-center">
            <dt class="w-1/4 pl-1 font-bold">更新日</dt>
            <dd class="flex-auto">
              {{ formatDate(selectedContact?.updated_at) }}
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
