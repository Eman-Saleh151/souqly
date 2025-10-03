<script setup>
import { useAuthStore } from "@/stores/authStore";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();


</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-100">
    <section class="w-full max-w-md p-8 bg-white/90 shadow-2xl rounded-2xl border border-indigo-100 backdrop-blur-md">
      <h2 class="text-3xl font-extrabold text-center text-indigo-700 mb-8 tracking-tight flex items-center justify-center gap-2">
        <span class="text-4xl">👤</span>
        <span>Profile</span>
      </h2>
      <div v-if="authStore.loading" class="flex justify-center items-center py-8">
        <span class="animate-spin rounded-full h-8 w-8 border-4 border-indigo-300 border-t-indigo-600"></span>
        <span class="ml-3 text-indigo-500 font-semibold">Loading...</span>
      </div>
      <div v-else-if="authStore.isLoggedIn" class="space-y-4 text-indigo-900">
        <div class="flex items-center gap-3 bg-indigo-50/60 border border-indigo-100 rounded-lg p-4">
          <span class="font-bold w-24">Name:</span>
          <span>{{ authStore.user.name }}</span>
        </div>
        <div class="flex items-center gap-3 bg-indigo-50/60 border border-indigo-100 rounded-lg p-4">
          <span class="font-bold w-24">Email:</span>
          <span>{{ authStore.user.email }}</span>
        </div>
        <div class="flex items-center gap-3 bg-indigo-50/60 border border-indigo-100 rounded-lg p-4">
          <span class="font-bold w-24">User ID:</span>
          <span>{{ authStore.user.id }}</span>
        </div>
      </div>
      <div v-else class="text-center">
        <p class="text-red-600 bg-red-50 border border-red-200 rounded py-2 mt-2 animate-pulse">You are not logged in.</p>
      </div>
    </section>
  </div>
</template>
