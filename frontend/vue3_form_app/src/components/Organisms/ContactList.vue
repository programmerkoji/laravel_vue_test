<script setup lang="ts">
import { useContactProvider } from "@/composables/useContactProvider";

const { contacts } = useContactProvider();

</script>

<template>
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
            <router-link
              :to="{ name: 'detail', params: { id: contact.id } }"
              class="py-1 px-2 border border-indigo-600 rounded-full text-indigo-600 hover:text-indigo-900"
              >詳細</router-link
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
</template>
