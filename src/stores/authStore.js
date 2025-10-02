import { defineStore } from "pinia";
import Cookies from "js-cookie";
import { loginUser, signupUser, getCurrentUser } from "@/services/authService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: false,
    error: null,
  }),

  getters: {
    isLoggedIn: (state) => !!state.user,
  },

  actions: {
    async login(email, password) {
      this.loading = true;
      this.error = null;
      try {
        const { user, token } = await loginUser(email, password);
        this.user = user;
        Cookies.set("token", token, { expires: 4/24 }); 
      } catch (err) {
        this.error = err.message || "Login failed";
      } finally {
        this.loading = false;
      }
    },

    async signup(data) {
      this.loading = true;
      this.error = null;
      try {
        const { user, token } = await signupUser(data);
        this.user = user;
        Cookies.set("token", token, { expires: 4/24 });
      } catch (err) {
        this.error = err.message || "Signup failed";
      } finally {
        this.loading = false;
      }
    },

    logout() {
      this.user = null;
      Cookies.remove("token");
    },

    async loadUserFromCookie() {
      const token = Cookies.get("token");
      if (token) {
        this.loading = true;
        try {
          const { user } = await getCurrentUser(token);
          this.user = user;
        } catch (err) {
          this.user = null;
          Cookies.remove("token");
        } finally {
          this.loading = false;
        }
      }
    },
  },
});
