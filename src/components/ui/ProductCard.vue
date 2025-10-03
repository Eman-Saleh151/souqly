<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="group bg-white/90 border border-indigo-100 shadow-xl rounded-2xl p-4 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-200 ease-in-out">
    <div class="w-full h-44 flex items-center justify-center bg-indigo-50 rounded-xl overflow-hidden mb-4">
      <img
        :src="product.image"
        :alt="product.title"
        class="object-contain h-40 max-h-full max-w-full transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <h3 class="font-bold text-lg text-center text-indigo-800 mb-1 truncate w-full">{{ product.title }}</h3>
    <p class="text-indigo-600 font-semibold text-xl mb-2">${{ product.price }}</p>
    <div class="flex gap-2 w-full mt-auto">
      <router-link
        :to="`/products/${product.id}`"
        class="flex-1 py-2 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-semibold text-center hover:bg-indigo-200 transition"
      >
        View Details
      </router-link>
      <button
        class="flex-1 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition shadow"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>
