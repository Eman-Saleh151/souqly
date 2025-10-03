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
  <section class="w-full max-w-4xl mx-auto bg-white/90 shadow-xl rounded-2xl border border-indigo-100 backdrop-blur-md p-8 mb-8">
    <h2 class="text-2xl font-extrabold text-center text-indigo-700 mb-8 tracking-tight flex items-center justify-center gap-2">
      <span class="text-3xl">📂</span>
      <span>Categories</span>
    </h2>
    <div v-if="categoryStore.loading" class="flex justify-center items-center py-8">
      <span class="animate-spin rounded-full h-8 w-8 border-4 border-indigo-300 border-t-indigo-600"></span>
      <span class="ml-3 text-indigo-500 font-semibold">Loading...</span>
    </div>
    <div v-else class="flex flex-wrap gap-4 justify-center">
      <button
        v-for="cat in categoryStore.categories"
        :key="cat.id"
        @click="$router.push({ 
          name: 'category-products', 
          params: { id: cat.id }, 
          query: { name: cat.name } 
        })"
        class="px-6 py-3 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-semibold rounded-xl shadow transition-all duration-200 text-lg min-w-[120px] text-center"
      >
        {{ cat.name }}
      </button>
    </div>
  </section>
</template>