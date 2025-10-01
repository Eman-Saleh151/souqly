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
  <section class="p-6">
    <!-- اسم الفئة من getter في categoryStore -->
    <h2 class="text-xl font-bold mb-4">
      🛍️ Products in {{ $route.query.name}}
    </h2>

    <!-- حالة التحميل -->
    <div v-if="productStore.loading || categoryStore.loading">
      Loading...
    </div>

    <!-- قائمة المنتجات -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ProductCard
        v-for="p in productStore.filteredProducts"
        :key="p.id"
        :product="p"
      />
    </div>
  </section>
</template>
