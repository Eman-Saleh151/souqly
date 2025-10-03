<script setup>
import { onMounted, watch } from "vue";
import { useProductStore } from "@/stores/productStore";
import { useCategoryStore } from "@/stores/categoryStore";
import ProductCard from "@/components/ui/ProductCard.vue";

// ناخد id كـ prop من الـ route
const props = defineProps({
  id: Number
});

// استدعاء الـ stores
const productStore = useProductStore();
const categoryStore = useCategoryStore();

// نجيب الداتا عند المونت
onMounted(async () => {
  if (!productStore.products.length) {
    await productStore.fetchProducts();
  }
  if (!categoryStore.categories.length) {
    await categoryStore.fetchCategories();
  }
  productStore.filterByCategory(Number(props.id));
});


</script>


<template>
  <div class="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-indigo-50 to-indigo-100 py-10 px-4">
    <section class="w-full max-w-6xl bg-white/90 shadow-2xl rounded-2xl border border-indigo-100 backdrop-blur-md p-8">
      <h2 class="text-3xl font-extrabold text-center text-indigo-700 mb-8 tracking-tight flex items-center justify-center gap-2">
        <span class="text-4xl">🛍️</span>
        <span>Products in {{ $route.query.name }}</span>
      </h2>
      <div v-if="productStore.loading || categoryStore.loading" class="flex justify-center items-center py-16">
        <span class="animate-spin rounded-full h-8 w-8 border-4 border-indigo-300 border-t-indigo-600"></span>
        <span class="ml-3 text-indigo-500 font-semibold">Loading...</span>
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <ProductCard
          v-for="p in productStore.filteredProducts"
          :key="p.id"
          :product="p"
        />
      </div>
    </section>
  </div>
</template>
