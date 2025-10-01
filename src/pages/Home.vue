<script setup>
import { useToastStore } from "../stores/toastStore";
import FeaturedProducts from "../components/home/FeaturedProducts.vue";
import CategoryList from "../components/home/CategoryList.vue";


</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Welcome to Souqly 🛒</h1>
    <CategoryList />
    <FeaturedProducts />
  </div>
</template>
