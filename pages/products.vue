<template>
  <section class="p-[60px]">
    <div class="flex justify-between items-center">
      <p class="text-3xl font-semibold mb-10">Available Products</p>
      <input type="text" placeholder="search" class="px-4 py-2 rounded-md border-2"/>
    </div>
    <div v-if="pending">
      Fetching...
    </div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="products.length === 0">Sorry No Product Available</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white rounded-[10px] shadow p-[20px] space-y-2"
      >
        <img
          :src="JSON.parse(product?.images[0])[0]"
          alt="product image"
          class="w-[400px] h-[400px]"
        />
        <h3 class="text-xl font-semibold text-black">{{ product.title }}</h3>
        <p class="text-sm text-slate-600">{{ product.description }}</p>
        <p class="font-bold text-xl text-green-800">{{ product.price }}</p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { API_ROUTES } from '../utils/apis'

const requestFetch = useRequestFetch();
 
const { data: products, pending, error } = await useAsyncData(() =>
  requestFetch(API_ROUTES.PRODUCT_URL)
);


</script>
