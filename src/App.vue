<template>
  <div id="app" class="flex flex-col min-h-screen">
    <header class="bg-blue-600 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">E-Commerce Site</h1>
        <nav class="relative">
          <router-link to="/" class="mr-4">Home</router-link>
          <div class="group inline-block relative">
            <router-link to="/shop" class="mr-4 inline-flex items-center">
              <span class="mr-1">Shop</span>
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </router-link>
            <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
              <li v-for="category in categories" :key="category">
                <router-link :to="`/shop?category=${category}`" class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                  {{ titleCase(category) }}
                </router-link>
              </li>
            </ul>
          </div>
          <router-link to="/cart" class="bg-white text-blue-600 px-4 py-2 rounded">Shopping Cart</router-link>
        </nav>
      </div>
    </header>
    <main class="flex-grow container mx-auto p-4">
      <router-view></router-view>
    </main>
    <footer class="bg-blue-600 text-white p-4 mt-4">
      <div class="container mx-auto text-center">
        &copy; 2023 E-Commerce Site. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: []
    };
  },
  created() {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => {
        this.categories = json;
      });
  },
  methods: {
    titleCase(str) {
      return str.replace(/\b\w/g, char => char.toUpperCase()).replace(/'S\b/g, "'s");
    }
  }
};
</script>

<style>
/* Your styles here */
</style>