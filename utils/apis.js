export const API_BASE_URL =
  import.meta.env.VITE_NUXT_API_BASE_URL;

export const API_ROUTES = {
  LOGIN_URL: `${API_BASE_URL}/auth/login`,
  REFRESH_TOKEN_URL: `${API_BASE_URL}/auth/refresh-token`,
  PROFILE_URL: `${API_BASE_URL}/users`,
  CATEGORY_URL: `${API_BASE_URL}/categories`,
  PRODUCT_URL: `${API_BASE_URL}/products`,
};