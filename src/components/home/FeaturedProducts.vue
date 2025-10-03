<template>
  <section class="w-full max-w-6xl mx-auto bg-white/90 shadow-2xl rounded-2xl border border-indigo-100 backdrop-blur-md p-8 mb-8">
    <div class="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
      <h2 class="text-2xl font-extrabold text-indigo-700 flex items-center gap-2">
        <span class="text-3xl">✨</span>
        <span>Featured Products</span>
      </h2>
      <button
        @click="goToProducts"
        class="px-6 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-semibold rounded-xl shadow transition-all duration-200 text-base min-w-[120px] text-center"
      >
        View All
      </button>
    </div>
    <div v-if="productStore.loading" class="flex justify-center items-center py-8">
      <span class="animate-spin rounded-full h-8 w-8 border-4 border-indigo-300 border-t-indigo-600"></span>
      <span class="ml-3 text-indigo-500 font-semibold">Loading...</span>
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
