<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="bg-white shadow rounded p-4 hover:shadow-lg transition">
    <img
      :src="product.image"
      :alt="product.title"
      class="w-full h-40 object-cover rounded mb-3"
    />
    <h3 class="font-semibold text-lg mb-1">{{ product.title }}</h3>
    <p class="text-gray-600 mb-2">${{ product.price }}</p>
    <router-link :to="`/products/${product.id}`" class="text-indigo-600 hover:underline text-sm">
      View Details
    </router-link>
    <button class="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">
      Add to Cart
    </button>
  </div>
</template>
