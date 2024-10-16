export const useCustomFetch = (url, options) => {
  return useFetch(url, {
    ...options,
    async onResponse({ request, response, options }) {
      console.log("[fetch response]");
    },
    async onResponseError({ request, response, options }) {
      console.log("[fetch response error]");
    },

    async onRequest({ request, options }) {
      console.log("[fetch request]");
      const headers = new Headers(options.headers);
      headers.set("Authorization", "Bearer Token");

      options.headers = headers;
    },
    async onRequestError({ request, options, error }) {
      console.log("[fetch request error]");
    },
  });
};
