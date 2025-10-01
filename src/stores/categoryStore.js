import { defineStore } from "pinia";
import { getCategories } from "../services/categoryService";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [],
    loading: false,
    error: null,
  }),

  getters: {
  getCategoryName: (state) => (id) => {
    const category = state.categories.find(c => c.id === Number(id));
    return category ? category.name : "Unknown";
  }
},
  actions: {
    async fetchCategories() {
      this.loading = true;
      try {
        this.categories = await getCategories();
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
