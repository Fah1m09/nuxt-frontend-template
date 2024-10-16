<template>
  <section class="p-[60px]">
    <h3 class="text-3xl font-semibold mb-10">Dash Board</h3>
      <button @click="notify">Notify !</button>
  </section>
</template>

<script setup>

const notify = () => {
  useNuxtApp().$toast.info('toastify success');
  // or
  // toast.info('toastify success');
};


</script>