<template>
  <div
    class="fixed top-4 right-4 z-50 flex flex-col items-end gap-2 pointer-events-none"
    aria-live="polite"
    aria-atomic="true" 
  >
    <transition-group name="toast" tag="div">
      <div
        v-for="t in toasts"
        :key="t.id"
        class="pointer-events-auto max-w-sm w-full rounded-md shadow-lg overflow-hidden"
        :class="toastClass(t.type)"
      >
        <div class="px-4 py-3 flex items-start gap-3">
          <div class="flex-1 text-sm leading-tight">{{ t.message }}</div>
          <button
            @click="remove(t.id)"
            class="ml-2 text-sm opacity-80 hover:opacity-100"
            aria-label="Close notification"
          >
            ✕
          </button>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useToastStore } from "../../stores/toastStore.js";

const toast = useToastStore();
const toasts = computed(() => toast.toasts);

function remove(id) {
  toast.removeToast(id);
}

function toastClass(type) {
  if (type === "success") return "bg-green-600 text-white";
  if (type === "error") return "bg-red-600 text-white";
  if (type === "warning") return "bg-yellow-500 text-black";
  return "bg-gray-800 text-white"; 
}
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: transform .18s ease, opacity .18s ease;
}
.toast-enter-from {
  transform: translateY(-8px);
  opacity: 0;
}
.toast-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.toast-leave-to {
  transform: translateY(-8px);
  opacity: 0;
}
</style>
