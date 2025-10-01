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
  <div class="p-6">
    <div v-if="productStore.loading">Loading...</div>
    <div v-if="productStore.error" class="text-red-500">{{ productStore.error }}</div>

    <div v-if="productStore.selectedProduct" class="flex gap-6">
      <img
        :src="productStore.selectedProduct.image"
        :alt="productStore.selectedProduct.title"
        class="w-80 h-80 object-cover rounded shadow"
      />

      <div>
        <h1 class="text-3xl font-bold mb-2">{{ productStore.selectedProduct.title }}</h1>
        <p class="text-gray-600 mb-2">${{ productStore.selectedProduct.price }}</p>
        <p class="mb-4">Stock: {{ productStore.selectedProduct.stock }}</p>
      </div>
    </div>
  </div>
</template>
