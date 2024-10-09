// ~/composables/useAuth.js

export const useAuth = () => {
  const accessToken = useState("accessToken", () => null);
  const refreshToken = useState("refreshToken", () => null);

  // Function to handle login
  const login = async (credentials) => {
    try {
      // Example API call to login and get tokens
      const { data } = await $fetch(
        `${process.env.API_BASE_URL/api/login}`,
        {
          method: "POST",
          body: credentials,
        }
      );

      // Store tokens in state
      accessToken.value = data.access_token;
      refreshToken.value = data.refresh_token;

      // Store tokens in localStorage for persistence
      localStorage.setItem("accessToken", data.access_token);
      localStorage.setItem("refreshToken", data.refresh_token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Function to refresh access token
  const refreshAccessToken = async () => {
    try {
      const { data } = await $fetch(
        `${process.env.API_BASE_URL/api/refresh}`,
        {
          method: "POST",
          body: { refresh_token: refreshToken.value },
        }
      );

      // Update access token
      accessToken.value = data.access_token;
      localStorage.setItem("accessToken", data.access_token);
    } catch (error) {
      console.error("Failed to refresh access token:", error);
    }
  };

  // Function to logout and clear tokens
  const logout = () => {
    accessToken.value = null;
    refreshToken.value = null;

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  return {
    accessToken,
    refreshToken,
    login,
    refreshAccessToken,
    logout,
  };
};
