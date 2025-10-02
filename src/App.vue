<template>
  <DefaultLayout />
</template>

<script setup>
  import DefaultLayout from './layouts/DefaultLayout.vue';
  import { onMounted } from "vue";
  import { useAuthStore } from "@/stores/authStore";

  const authStore = useAuthStore();

  onMounted(() => {
    authStore.loadUserFromCookie();       
  });
</script>


