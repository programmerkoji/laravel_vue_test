<script setup lang="ts">
import { useContactProvider } from "@/composables/useContactProvider";
import { useCounterStore } from "@/stores/couter";
import axios from "axios";

const { contacts, delContact } = useContactProvider();
const handleDelete = async (id: number) => {
  if (!window.confirm("本当に削除しますか？")) return;
  try {
    const message = await delContact(id);
    if (message) {
      alert(message);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert("登録に失敗しました");
      console.error(error.response?.data.errors.email);
    }
  }
};

const counter = useCounterStore();

const increment = () => {
  counter.increment();
};
const decrement = () => {
  counter.decrement();
};
const reset = () => {
  counter.reset();
};
</script>

<template>
  <div class="flex items-center gap-4">
    <button
      @click="increment"
      class="py-1 px-2 border border-indigo-600 rounded-full text-indigo-600 hover:text-indigo-900"
    >
      +
    </button>
    <button
      @click="decrement"
      class="py-1 px-2 border border-indigo-600 rounded-full text-indigo-600 hover:text-indigo-900"
    >
      -
    </button>
    <button
      @click="reset"
      class="py-1 px-2 border border-indigo-600 rounded-full text-indigo-600 hover:text-indigo-900"
    >
      reset
    </button>
    <p>{{ counter.count }}</p>
  </div>
  <p v-if="!contacts || contacts.length === 0">データがありません</p>
  <table v-else class="min-w-full leading-normal">
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
            <router-link
              :to="{ name: 'update', params: { id: contact.id } }"
              class="py-1 px-2 border border-green-600 rounded-full text-green-600 hover:text-green-900"
              >編集</router-link
            >
            <div>
              <button
                type="button"
                @click="handleDelete(Number(contact.id))"
                class="py-1 px-2 border border-red-600 rounded-full text-red-600 hover:text-red-900"
              >
                削除
              </button>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
