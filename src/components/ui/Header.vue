
<template>
    <header class="w-full bg-white/90 shadow-md border-b border-indigo-100 backdrop-blur-md sticky top-0 z-50">
        <nav class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-3">
            <div class="flex items-center gap-6 text-indigo-700 font-semibold text-lg">
                <router-link to="/" class="hover:text-indigo-900 transition">Home</router-link>
                <router-link to="/about" class="hover:text-indigo-900 transition">About</router-link>
                <router-link to="/products" class="hover:text-indigo-900 transition">Products</router-link>
                <router-link to="/categories" class="hover:text-indigo-900 transition">Categories</router-link>
                <router-link to="/contact" class="hover:text-indigo-900 transition">Contact</router-link>
                <router-link to="/cart" class="hover:text-indigo-900 transition">Cart</router-link>
                <router-link to="/profile" v-if="authStore.isLoggedIn" class="hover:text-indigo-900 transition">Profile</router-link>
            </div>
            <div class="flex gap-4 items-center">
                <button
                    v-if="!authStore.isLoggedIn"
                    @click="$router.push('/login')"
                    class="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow transition"
                >
                    Login
                </button>
                <div v-if="authStore.isLoggedIn" class="flex gap-3 items-center">
                    <span class="text-indigo-700 font-semibold">Hi, {{ authStore.user.name }}</span>
                    <button
                        @click="handleLogout"
                        class="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-bold shadow transition"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();

const handleLogout = () => {
  authStore.logout();
  window.location.href = "/";
};
</script>
