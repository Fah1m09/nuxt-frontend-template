<template>
  <section class="p-[60px]">
    <p class="text-3xl font-semibold mb-10">Browse Categories</p>
    <div v-if="pending" class="p-[30px] text-3xl font-bold">
      Fetching...
    </div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="categories.length === 0">Sorry No category Available</div>
    <div v-else class="grid grid-cols-1 gap-2 lg:gap-4">
      <div
        v-for="category in categories"
        :key="category.id"
        class="bg-white flex gap-4 items-center rounded-[10px] shadow p-[10px] space-y-2"
      >
        <img
          :src="category?.image"
          alt="category image"
          class="w-[80px] h-[80px] rounded-full"
        />
        <h3 class="text-xl font-semibold text-black">{{ category.name }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
import { API_ROUTES } from '../utils/apis'

const { data: categories, pending, error } = await useFetch(() => API_ROUTES.CATEGORY_URL);
 
</script>