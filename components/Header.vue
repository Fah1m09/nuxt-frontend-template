<template>
  <header class="w-full px-10 py-4 flex justify-between bg-gray-900 text-white text-lg">
    <nav>
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        <li><NuxtLink to="/categories">Categories</NuxtLink></li>
        <li><NuxtLink to="/profile">Profile</NuxtLink></li>
      </ul>
    </nav>
    <button>Logout</button>
  </header>
</template>
