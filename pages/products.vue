<template>
  <section class="p-[60px]">
    <div class="flex justify-between items-center">
      <p class="text-3xl font-semibold mb-10">Available Products</p>
      <input
        type="text"
        placeholder="search"
        class="px-4 py-2 rounded-md border-2"
      />
    </div>
    <div v-if="pending">Fetching...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="products.length === 0">Sorry No Product Available</div>
    <div v-else>
      <div
        class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white rounded-[10px] shadow p-[20px] space-y-2"
        >
          <img
            :src="product?.images[0]"
            alt="product image"
            class="w-[400px] h-[400px]"
          />
          <h3 class="text-xl font-semibold text-black">{{ product.title }}</h3>
          <p class="text-sm text-slate-600">{{ product.description }}</p>
          <p class="font-bold text-xl text-green-800">{{ product.price }}</p>
        </div>
      </div>

      <div class="flex justify-center space-x-4 mt-10">
        <button
          @click="currentPage--"
          :disabled="currentPage <= 1"
          class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {{ currentPage }} </span>
        <button
          @click="currentPage++"
          class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import { API_ROUTES } from "../utils/apis";

const currentPage = ref(1);
const searchQuery = ref("");
const itemsPerPage = ref(8);

const { data: products } = await useAsyncData(
  "posts",
  () =>
    $fetch(`${API_ROUTES.PRODUCT_URL}`, {
      params: {
        offset: itemsPerPage.value * currentPage.value,
        limit: itemsPerPage.value,
      },
    }),
  {
    watch: [currentPage],
  }
);

// Fetch products with pagination and search
// const changePage = (page) => {
//   currentPage.value =
// };
</script>
