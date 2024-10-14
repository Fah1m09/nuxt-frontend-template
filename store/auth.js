import { defineStore } from "pinia";
import { API_ROUTES } from "../utils/apis";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
    user:null,
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
        const refreshToken = useCookie("refreshToken");
        token.value = access_token; // set token to cookie
        refreshToken.value = refresh_token;
        this.authenticated = true; // set authenticated  state value to true
      }
    },
    logUserOut() {
      const token = useCookie("token");
      this.authenticated = false;
      token.value = null;
    },
    async getProfile() {
      const token = useCookie("token");

      const data = await useFetch(`${API_ROUTES.PROFILE_URL}`, {
        method: "get",
        headers: {
          Accept: "*/*",
          ContentType: "application/json",
          Authorization: `Bearer ${token.value}`,
        },
      });
      this.user = data.data.value
    },
  },
});
