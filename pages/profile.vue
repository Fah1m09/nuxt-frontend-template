<template>
  <section class="p-[60px]">
    <h3 class="text-3xl font-semibold mb-10">Profile</h3>

    <img :src="user.avatar" alt="" class="w-[100px] h-[100px] rounded-full mb-6">    
    <h5 class="font-semibold text-xl mb-2">{{ user.name }}</h5>
    <p class="mb-2">{{ user.email }}</p>
    <p>role: {{ user.role }}</p>
  </section>
</template>


<script setup>
import { useAuthStore } from '~/store/auth';

const { getProfile } = useAuthStore();
const { user } = storeToRefs(useAuthStore()); 


await getProfile()

</script>