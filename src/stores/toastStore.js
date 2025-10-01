import { defineStore } from "pinia";

export const useToastStore = defineStore("toast", {
  state: () => ({
    toasts: [],        
    loading: false
  }),

  actions: {

    pushToast(payload = {}) {
      const { type = "info", message = "", timeout = 3500 } = payload;

      const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
      this.toasts.push({ id, type, message });

      setTimeout(() => {
        this.removeToast(id);
      }, timeout);

      return id;
    },

    removeToast(id) {
      this.toasts = this.toasts.filter((t) => t.id !== id);
    },

    setLoading(val) {
      this.loading = !!val;
    }
  }
});