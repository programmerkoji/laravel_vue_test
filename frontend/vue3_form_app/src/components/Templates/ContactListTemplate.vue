<script setup lang="ts">
import type { Contact } from "@/types/contact";
import BaseLayout from "../Organisms/BaseLayout.vue";

const { contacts } = defineProps<{ contacts: Contact[] }>();
</script>

<template>
  <BaseLayout title="お問い合わせ一覧">
    <div class="pt-4 mb-4 flex flex-wrap justify-between items-center gap-4">
      <a
        href="https://webjin.from-forties.net/admin/job_offers/create"
        class="inline-block flex-shrink-0 px-8 py-2 text-base text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
        >新規登録</a
      >

      <div class="w-full md:w-1/3">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >Search</label
        >
        <div class="relative">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            name="keyword"
            id="default-search"
            value=""
            class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="キーワードで検索"
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            検索
          </button>
        </div>
      </div>
    </div>
    <table class="min-w-full leading-normal">
      <thead>
        <tr>
          <th
            scope="col"
            class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm font-normal whitespace-nowrap"
          >
            ID
          </th>
          <th
            scope="col"
            class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm font-normal whitespace-nowrap"
          >
            お名前
          </th>
          <th
            scope="col"
            class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm font-normal whitespace-nowrap"
          >
            メールアドレス
          </th>
          <th
            scope="col"
            class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm font-normal whitespace-nowrap"
          >
            メッセージ
          </th>
          <th
            scope="col"
            class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm font-normal whitespace-nowrap"
          ></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact.id">
          <td
            class="px-5 py-5 border-b border-gray-200 bg-white text-sm whitespace-nowrap"
          >
            <p class="text-gray-900 whitespace-no-wrap">
              {{ contact.id }}
            </p>
          </td>
          <td
            class="px-5 py-5 border-b border-gray-200 bg-white text-sm whitespace-nowrap"
          >
            <p class="text-gray-900 whitespace-no-wrap">{{ contact.name }}</p>
          </td>
          <td
            class="px-5 py-5 border-b border-gray-200 bg-white text-sm whitespace-nowrap"
          >
            {{ contact.email }}
          </td>
          <td
            class="px-5 py-5 border-b border-gray-200 bg-white text-sm whitespace-nowrap"
          >
            {{ contact.message }}
          </td>
          <td
            class="px-5 py-5 border-b border-gray-200 bg-white text-sm whitespace-nowrap"
          >
            <div class="flex items-center justify-center gap-4">
              <a
                href="https://webjin.from-forties.net/admin/job_offers/24"
                class="py-1 px-2 border border-indigo-600 rounded-full text-indigo-600 hover:text-indigo-900"
                >詳細</a
              >
              <a
                href="https://webjin.from-forties.net/admin/job_offers/24/edit"
                class="py-1 px-2 border border-green-600 rounded-full text-green-600 hover:text-green-900"
                >編集</a
              >
              <form
                id="delete_24"
                action="https://webjin.from-forties.net/admin/job_offers/24"
                method="post"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="bpbUmGWhapQUfRX7MoReXC6zV25LmRAENzhjfaw0"
                />
                <input type="hidden" name="_method" value="delete" />
                <a
                  href="#"
                  data-id="24"
                  onclick="deletePost(this)"
                  class="py-1 px-2 border border-red-600 rounded-full text-red-600 hover:text-red-900"
                  >削除</a
                >
              </form>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </BaseLayout>
</template>
