<script setup>
import { onMounted } from "vue";
import { useCategoryStore } from "../../stores/categoryStore";

const categoryStore = useCategoryStore();

onMounted(() => {
  if (!categoryStore.categories.length) {
    categoryStore.fetchCategories();
  }
});
</script>

<template>
  <section class="p-6 bg-gray-50 rounded-lg">
    <h2 class="text-xl font-bold mb-4">📂 Categories</h2>

    <div v-if="categoryStore.loading">Loading...</div>
    <div v-else class="flex gap-3 flex-wrap">
     <button
        v-for="cat in categoryStore.categories"
        :key="cat.id"
        @click="$router.push({ 
          name: 'category-products', 
          params: { id: cat.id }, 
          query: { name: cat.name } 
        })"
        class="px-4 py-2 bg-indigo-100 hover:bg-indigo-300 rounded"
        >
        {{ cat.name }}
        </button>
    </div>
  </section>
</template>