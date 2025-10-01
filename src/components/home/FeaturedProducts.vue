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
      <ProductCard
        v-for="p in productStore.featuredProducts"
        :key="p.id"
        :product="p"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useProductStore } from "../../stores/productStore";
import { useRouter } from "vue-router";
import ProductCard from "@/components/ui/ProductCard.vue";

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
