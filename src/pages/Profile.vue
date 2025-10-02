<script setup>
import { useAuthStore } from "@/stores/authStore";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();


</script>

<template>
  <section class="max-w-md mx-auto p-6 bg-white shadow rounded mt-6">
    <h2 class="text-2xl font-bold mb-4">👤 Profile</h2>

    <div v-if="authStore.loading">Loading...</div>

    <div v-else-if="authStore.isLoggedIn">
      <p><strong>Name:</strong> {{ authStore.user.name }}</p>
      <p><strong>Email:</strong> {{ authStore.user.email }}</p>
      <p><strong>User ID:</strong> {{ authStore.user.id }}</p>
    </div>

    <div v-else>
      <p class="text-red-500">You are not logged in.</p>
    </div>
  </section>
</template>
