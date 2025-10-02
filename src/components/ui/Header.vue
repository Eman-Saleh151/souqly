<template>
    
    <nav class="bg-gray-100 dark:bg-gray-800 p-4 flex gap-4">
        <router-link to="/" class="hover:underline">Home</router-link>
        <router-link to="/about" class="hover:underline">About</router-link>
        <router-link to="/products" class="hover:underline">Products</router-link>
        <router-link to="/categories" class="hover:underline">Categories</router-link>
        <router-link to="/contact" class="hover:underline">Contact</router-link>
        <router-link to="/cart" class="hover:underline">Cart</router-link>
        <router-link to="/profile" class="hover:underline" v-if="authStore.isLoggedIn">Profile</router-link>
        <div class="flex gap-4 self-end">
        <button v-if="!authStore.isLoggedIn" @click="$router.push('/login')" class="px-3 py-1 bg-indigo-600 text-white rounded">Login</button>
        
        <div v-if="authStore.isLoggedIn" class="flex gap-2 items-center">
            <span>Hi, {{ authStore.user.name }}</span>
            <button @click="handleLogout" class="px-3 py-1 bg-red-500 text-white rounded">Logout</button>
        </div>
    </div>
    </nav>
</template>

<script setup>
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();

const handleLogout = () => {
  authStore.logout();
  window.location.href = "/";
};
</script>
