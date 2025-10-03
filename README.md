# Souqly 🛒

Souqly is a simple **E-commerce web application** built with **Vue 3 + Vite**.  
The goal of this project is to practice modern frontend development, using tools like:

- ⚡ **Vite** – For fast development & build.
- 🎨 **Tailwind CSS** – For styling with utility classes.
- 🌙 **Dark Mode** – With Tailwind configuration.
- 🛣️ **Vue Router** – For navigation between pages.
- 🗂️ **Pinia** – For state management.
- 🌍 **Vue I18n** – For internationalization (multi-language support).
- 🌐 **Axios** – For API requests (e.g. Fake API for products).


# ✨ Features 

- User authentication (Sign up / Login).
- Product listing page.
- Product details page.
- Cart & checkout.
- Multi-language support (Arabic / English).
- Dark / Light mode toggle.


# 📂 UI Shared Components

To keep the UI consistent and reusable, some shared components are placed inside /src/components/ui.

These can be imported and used anywhere in the project.

### Toast Notification 
Location: src/components/ui/Toast.vue

Usage: Can be called from any page (e.g. Home.vue, Login.vue) to show success/error/info messages.

```bash
<script setup>
import { useToastStore } from "@/stores/toastStore";

const toast = useToastStore();

function handleLogin() {
  // after login success
  toast.pushToast({ type: "success", message: "Login successful!" });

  // if error
  // toast.pushToast({ type: "error", message: "Invalid credentials!" });
}
</script>

<template>
  <button @click="handleLogin" class="px-4 py-2 bg-indigo-600 text-white rounded">
    Test Toast
  </button>
</template>
```


# 📦 Modules
### 🛒 Products Module
Service layer for fetching products.

Pinia store with state, getters, and actions for managing products.

✨ Features

Fetch all products.

Fetch product by ID.

Featured products section (Home).

Search products by title.

Filter products by category.

### 📦 Categories Module
Module to handle categories and filtering products by category.

✨ Features

Fetch all categories from API.

Display categories as buttons or links.

Filter products by category ID.

Retrieve category name from store (no need to pass it in URL).

Works with Pinia store for state management.

### 🔐 Authentication 

Souqly has a simple authentication system built with **Pinia + Vue Router**.

✨ Features

* **Sign up**: Create new user with email & password.
* **Login**: Authenticate existing users and store their token/session.
* **Error handling**: Displays error message if credentials are invalid.
* **Redirect after login**: If a user tries to access a protected page (like `Cart` or `Checkout`) without being logged in, they are redirected to the `Login` page.
  After login, they are redirected back to the page they were trying to access.

🔒 Route Guards

Implemented in `router/index.js` using `beforeEach`:

```js
import { useAuthStore } from "@/stores/authStore";

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next({ path: "/login", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});
```

### 🔑 Login Page Example

When login is successful, user is redirected:

```js
const handleLogin = async () => {
  await authStore.login(email.value, password.value);
  if (authStore.isLoggedIn) {
    router.push(route.query.redirect || "/");
  }
};
```

This ensures:

* Unauthorized users **can’t access protected routes**.
* After login, user experience is smooth with redirect to intended page.

---

# 🚀 In Coming Features

- Authorization (Role-based access: Admin / User).
- Wishlist for products.
- Order history page.



# ⬇️ Project Setup

Clone the repository
```bash
git clone https://github.com/Eman-Saleh151/souqly.git
```

Install dependencies
```bash
npm install
```

Start fake API
```bash
npm run mock
```

Run development server
```bash
npm run dev
```

# 🔑 Demo Login Credentials

If you want to test the login functionality without creating a new account, you can use the following credentials:

```json
{
  "email": "eman@example.com",
  "password": "password123"
}
```

