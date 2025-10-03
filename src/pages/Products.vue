<script setup>
import { ref, onMounted } from "vue";
import { useProductStore } from "../stores/productStore";
import ProductCard from "../components/ui/ProductCard.vue";

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
  <div class="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-indigo-50 to-indigo-100 py-10 px-4">
    <div class="w-full max-w-6xl bg-white/90 shadow-2xl rounded-2xl border border-indigo-100 backdrop-blur-md p-8">
      <h1 class="text-3xl font-extrabold text-center text-indigo-700 mb-8 tracking-tight flex items-center justify-center gap-2">
        <span class="text-4xl">🛒</span>
        <span>Products</span>
      </h1>
      <!-- Search + Filter -->
      <div class="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
        <input
          v-model="searchQuery"
          @input="handleSearch"
          type="text"
          placeholder="Search products..."
          class="border border-indigo-200 px-4 py-3 rounded-lg w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base placeholder:text-indigo-300 bg-indigo-50/60"
        />
        <select v-model="selectedCategory" @change="handleFilter" class="border border-indigo-200 px-4 py-3 rounded-lg bg-indigo-50/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base w-full md:w-1/3">
          <option value="">All Categories</option>
          <option value="1">Furniture</option>
          <option value="2">Lighting</option>
          <option value="3">Accessories</option>
        </select>
      </div>
      <div v-if="productStore.loading" class="flex justify-center items-center py-16">
        <span class="animate-spin rounded-full h-8 w-8 border-4 border-indigo-300 border-t-indigo-600"></span>
        <span class="ml-3 text-indigo-500 font-semibold">Loading...</span>
      </div>
      <div v-if="productStore.error" class="text-center text-red-600 bg-red-50 border border-red-200 rounded py-2 mb-6 animate-pulse">{{ productStore.error }}</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <ProductCard
          v-for="p in productStore.filteredProducts"
          :key="p.id"
          :product="p"
        />
      </div>
    </div>
  </div>
</template>

