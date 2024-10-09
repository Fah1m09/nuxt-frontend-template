<template>
  <div>
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
      <h3 class="text-xl font-semibold">{{ product.title }}</h3>
      <p class="text-sm text-slate-600">{{ product.description }}</p>
      <p class="font-bold text-xl text-green-800">{{ product.price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const requestFetch = useRequestFetch();

const { data: products ,} = await useAsyncData(() =>
  requestFetch("https://api.escuelajs.co/api/v1/products")
);
</script>
