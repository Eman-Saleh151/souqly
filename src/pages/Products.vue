<script setup>
import { ref, onMounted } from "vue";
import { useProductStore } from "../stores/productsStore";

const productStore = useProductStore();
const searchQuery = ref("");
const selectedCategory = ref("");

onMounted(() => {
  productStore.fetchProducts();
});

function handleSearch() {
  productStore.searchProducts(searchQuery.value);
}

function handleFilter() {
  productStore.filterByCategory(Number(selectedCategory.value));
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">🛒 Products</h1>

    <!-- Search + Filter -->
    <div class="flex gap-4 mb-6">
      <input
        v-model="searchQuery"
        @input="handleSearch"
        type="text"
        placeholder="Search products..."
        class="border px-3 py-2 rounded w-1/2"
      />

      <select v-model="selectedCategory" @change="handleFilter" class="border px-3 py-2 rounded">
        <option value="">All Categories</option>
        <option value="1">Furniture</option>
        <option value="2">Lighting</option>
        <option value="3">Accessories</option>
      </select>
    </div>

    <div v-if="productStore.loading">Loading...</div>
    <div v-if="productStore.error" class="text-red-500">{{ productStore.error }}</div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="p in productStore.filteredProducts"
        :key="p.id"
        class="bg-white shadow p-4 rounded"
      >
        <img :src="p.image" :alt="p.title" class="w-full h-40 object-cover rounded mb-3" />
        <h2 class="font-semibold text-lg">{{ p.title }}</h2>
        <p class="text-gray-600">${{ p.price }}</p>
        <router-link :to="`/products/${p.id}`" class="text-indigo-600 hover:underline text-sm">
          View Details
        </router-link>
      </div>
    </div>
  </div>
</template>

