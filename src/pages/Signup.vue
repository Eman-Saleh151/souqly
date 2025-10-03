<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();

const name = ref("");
const email = ref("");
const password = ref("");

const localError = ref("");
const handleSignup = async () => {
  localError.value = "";
  if (!name.value || !email.value || !password.value) {
    localError.value = "All fields are required.";
    return;
  }
  await authStore.signup({ name: name.value, email: email.value, password: password.value });
  if (authStore.isLoggedIn) {
    window.location.href = "/";
  }
};
</script>


<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-200">
    <div class="w-full max-w-md p-8 bg-white/90 shadow-2xl rounded-2xl border border-green-100 backdrop-blur-md">
      <h2 class="text-3xl font-extrabold text-center text-green-700 mb-8 tracking-tight">Sign Up</h2>
      <div class="space-y-5">
        <input
          v-model="name"
          type="text"
          placeholder="Full Name"
          class="block w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-base placeholder:text-green-300 bg-green-50/60"
          autocomplete="name"
        />
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="block w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-base placeholder:text-green-300 bg-green-50/60"
          autocomplete="username"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="block w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-base placeholder:text-green-300 bg-green-50/60"
          autocomplete="new-password"
        />
        <button
          @click="handleSignup"
          class="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow transition-all duration-200 text-lg tracking-wide"
        >
          Sign Up
        </button>
        <p v-if="localError" class="text-center text-red-600 bg-red-50 border border-red-200 rounded py-2 mt-2 animate-pulse">{{ localError }}</p>
        <p v-if="authStore.error" class="text-center text-red-600 bg-red-50 border border-red-200 rounded py-2 mt-2 animate-pulse">{{ authStore.error }}</p>
      </div>
    </div>
  </div>
</template>
