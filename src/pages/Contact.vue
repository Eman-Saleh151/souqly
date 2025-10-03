<script setup>
</script>
<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 py-10 px-4">
        <section class="w-full max-w-2xl bg-white/90 shadow-2xl rounded-2xl border border-indigo-100 backdrop-blur-md p-10">
            <h1 class="text-4xl font-extrabold text-center text-indigo-700 mb-8 tracking-tight flex items-center justify-center gap-2">
                <span>Contact Us</span>
            </h1>
            <form class="space-y-6">
                <div>
                    <label class="block mb-2 text-indigo-700 font-semibold">Your Name</label>
                    <input type="text" class="w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base bg-indigo-50/60" placeholder="Enter your name" />
                </div>
                <div>
                    <label class="block mb-2 text-indigo-700 font-semibold">Your Email</label>
                    <input type="email" class="w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base bg-indigo-50/60" placeholder="Enter your email" />
                </div>
                <div>
                    <label class="block mb-2 text-indigo-700 font-semibold">Message</label>
                    <textarea class="w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base bg-indigo-50/60" rows="4" placeholder="Type your message..."></textarea>
                </div>
                <button type="submit" class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow transition-all duration-200 text-lg tracking-wide">Send Message</button>
            </form>
            <div class="mt-10 text-center text-gray-600">
                <p>Email: <a href="mailto:support@souqly.com" class="text-indigo-600 underline">support@souqly.com</a></p>
                <p>Phone: <a href="tel:+1234567890" class="text-indigo-600 underline">+1 234 567 890</a></p>
            </div>
        </section>
    </div>
</template>