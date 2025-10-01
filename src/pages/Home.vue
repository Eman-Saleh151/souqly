<script setup>
import { useToastStore } from "../stores/toastStore";

const toast = useToastStore();

// Function عامة: تبعت النوع والرسالة والمدة
function showToast(type, message, timeout = 3000) {
  toast.pushToast({ type, message, timeout });
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Home</h1>

    <!-- أمثلة -->
    <button 
      @click="showToast('success', 'تمت العملية بنجاح!')" 
      class="px-4 py-2 bg-green-600 text-white rounded mr-2"
    >
      Show Success
    </button>

    <button 
      @click="showToast('error', 'حصل خطأ أثناء الحفظ!')" 
      class="px-4 py-2 bg-red-600 text-white rounded mr-2"
    >
      Show Error
    </button>

    <button 
      @click="showToast('warning', 'خلي بالك: المخزون قليل!')" 
      class="px-4 py-2 bg-yellow-500 text-black rounded mr-2"
    >
      Show Warning
    </button>

    <button 
      @click="showToast('info', 'معلومة جديدة متاحة.')" 
      class="px-4 py-2 bg-gray-800 text-white rounded"
    >
      Show Info
    </button>
  </div>
</template>
