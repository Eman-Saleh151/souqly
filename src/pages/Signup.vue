<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();

const name = ref("");
const email = ref("");
const password = ref("");

const handleSignup = async () => {
  await authStore.signup({ name: name.value, email: email.value, password: password.value });
  if (authStore.isLoggedIn) {
    window.location.href = "/";
  }
};
</script>

<template>
  <div class="max-w-md mx-auto p-6 bg-white shadow rounded">
    <h2 class="text-xl font-bold mb-4">Sign Up</h2>

    <input v-model="name" type="text" placeholder="Name" class="w-full p-2 mb-3 border rounded"/>
    <input v-model="email" type="email" placeholder="Email" class="w-full p-2 mb-3 border rounded"/>
    <input v-model="password" type="password" placeholder="Password" class="w-full p-2 mb-3 border rounded"/>
    
    <button @click="handleSignup" class="w-full py-2 bg-green-600 text-white rounded">
      Sign Up
    </button>

    <p v-if="authStore.error" class="text-red-500 mt-2">{{ authStore.error }}</p>
  </div>
</template>
