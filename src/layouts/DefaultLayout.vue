<template>
   <div class="min-h-screen flex flex-col">
        <Header />

        <main class="flex-1">
            <router-view />
        </main>
        <Footer />
        <Toast />

    </div>
</template>

<script setup>
    import Header from '../components/ui/Header.vue';
    import Footer from '../components/ui/Footer.vue';
    import Toast from '../components/ui/Toast.vue';

</script>
