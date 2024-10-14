import { defineStore } from "pinia";
import { API_ROUTES } from "../utils/apis";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ email, password }) {
      // useFetch from nuxt 3
      const { access_token, refresh_token } = await $fetch(
        `${API_ROUTES.LOGIN_URL}`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            email,
            password,
          },
        }
      );
      //this.loading = pending;

      if (access_token) {
        const token = useCookie("token"); // useCookie new hook in nuxt 3
        token.value = access_token; // set token to cookie
        this.authenticated = true; // set authenticated  state value to true
      }
    },
    logUserOut() {
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },
  },
});
