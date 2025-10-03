<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "../stores/productStore";

const route = useRoute();
const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProduct(route.params.id);
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 py-10 px-4">
    <div class="w-full max-w-4xl bg-white/90 shadow-2xl rounded-2xl border border-indigo-100 backdrop-blur-md p-8">
      <div v-if="productStore.loading" class="flex justify-center items-center py-16">
        <span class="animate-spin rounded-full h-8 w-8 border-4 border-indigo-300 border-t-indigo-600"></span>
        <span class="ml-3 text-indigo-500 font-semibold">Loading...</span>
      </div>
      <div v-if="productStore.error" class="text-center text-red-600 bg-red-50 border border-red-200 rounded py-2 mb-6 animate-pulse">{{ productStore.error }}</div>
      <div v-if="productStore.selectedProduct" class="flex flex-col md:flex-row gap-10 items-center md:items-start">
        <div class="flex-shrink-0 w-full md:w-96 h-96 bg-indigo-50 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg mb-6 md:mb-0">
          <img
            :src="productStore.selectedProduct.image"
            :alt="productStore.selectedProduct.title"
            class="object-contain max-h-80 max-w-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div class="flex-1 flex flex-col gap-4">
          <h1 class="text-3xl md:text-4xl font-extrabold text-indigo-800 mb-2">{{ productStore.selectedProduct.title }}</h1>
          <p class="text-indigo-600 font-bold text-2xl mb-2">${{ productStore.selectedProduct.price }}</p>
          <p class="text-gray-700 text-base mb-2">Stock: <span class="font-semibold">{{ productStore.selectedProduct.stock }}</span></p>
          <p class="text-gray-500 text-sm">{{ productStore.selectedProduct.description }}</p>
          <div class="flex gap-4 mt-6">
            <button class="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow transition-all duration-200 text-lg tracking-wide">Add to Cart</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
