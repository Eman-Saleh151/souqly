<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { useRoute, useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  await authStore.login(email.value, password.value);
  if (authStore.isLoggedIn) {
    // لو في redirect هيرجع ليه، غير كده يروح للصفحة الرئيسية
    router.push(route.query.redirect || "/");
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-200">
    <div class="w-full max-w-md p-8 bg-white/90 shadow-2xl rounded-2xl border border-indigo-100 backdrop-blur-md">
  <h2 class="text-3xl font-extrabold text-center text-indigo-700 mb-8 tracking-tight">Login</h2>
      <div class="space-y-5">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="block w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base placeholder:text-indigo-300 bg-indigo-50/60"
          autocomplete="username"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="block w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base placeholder:text-indigo-300 bg-indigo-50/60"
          autocomplete="current-password"
        />
        <button
          @click="handleLogin"
          class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow transition-all duration-200 text-lg tracking-wide"
        >
          Login
        </button>
        <p v-if="authStore.error" class="text-center text-red-600 bg-red-50 border border-red-200 rounded py-2 mt-2 animate-pulse">{{ authStore.error }}</p>
      </div>
      <div class="mt-8 text-center text-indigo-700">
        <span>Don't have an account?</span>
        <button @click="$router.push('/signup')" class="ml-1 text-indigo-600 font-semibold underline hover:text-indigo-800 transition">Create a new account</button>
      </div>
    </div>
  </div>
</template>
