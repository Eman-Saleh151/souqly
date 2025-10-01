import { defineStore } from "pinia";
import { getProducts, getProductById } from "../services/productService";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    filteredProducts: [],
    selectedProduct: null,
    loading: false,
    error: null,
  }),

   getters: {
    featuredProducts: (state) => {
      return state.products.filter(p => p.isFeatured);
    }
  },

  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        this.products = await getProducts();
        this.filteredProducts = this.products; 
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchProduct(id) {
      this.loading = true;
      try {
        this.selectedProduct = await getProductById(id);
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    searchProducts(query) {
      this.filteredProducts = this.products.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );
    },

    filterByCategory(categoryId) {
      if (!categoryId) {
        this.filteredProducts = this.products;
      } else {
        this.filteredProducts = this.products.filter(p => p.categoryId === categoryId);
      }
    },
  },
});
