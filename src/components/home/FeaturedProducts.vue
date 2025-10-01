<script setup>
import { onMounted } from "vue";
import { useProductStore } from "../../stores/productsStore";
import { useRouter } from "vue-router";

const productStore = useProductStore();
const router = useRouter();

onMounted(() => {
  if (!productStore.products.length) {
    productStore.fetchProducts();
  }
});

const goToProducts = () => {
  router.push("/products");
};
</script>

<template>
  <section class="p-6 bg-gray-50 rounded-lg">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-bold">✨ Featured Products</h2>
      <button
        @click="goToProducts"
        class="text-blue-600 hover:underline font-medium"
      >
        View All 
      </button>
    </div>

    <div v-if="productStore.loading">Loading...</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="p in productStore.featuredProducts"
        :key="p.id"
        class="bg-white shadow rounded p-4"
      >
        <img
          :src="p.image"
          :alt="p.title"
          class="w-full h-40 object-cover rounded mb-3"
        />
        <h3 class="font-semibold">{{ p.title }}</h3>
        <p class="text-gray-600">${{ p.price }}</p>
      </div>
    </div>
  </section>
</template>
