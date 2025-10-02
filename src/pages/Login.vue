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
  <div class="max-w-md mx-auto p-6 bg-white shadow rounded">
    <h2 class="text-xl font-bold mb-4">Login</h2>
    
    <input v-model="email" type="email" placeholder="Email" class="w-full p-2 mb-3 border rounded"/>
    <input v-model="password" type="password" placeholder="Password" class="w-full p-2 mb-3 border rounded"/>
    
    <button @click="handleLogin" class="w-full py-2 bg-indigo-600 text-white rounded">
      Login
    </button>

    <p v-if="authStore.error" class="text-red-500 mt-2">{{ authStore.error }}</p>
    
    <p class="mt-4 text-center">
      no account?
      <button @click="$router.push('/signup')" class="text-indigo-600 font-semibold underline">
        Create a new account
      </button>
    </p>
  </div>
</template>
