<template>
    <div class="container mx-auto p-4 flex">
      <aside class="w-1/4 p-4 bg-gray-100 rounded-lg mr-4">
        <h2 class="text-xl font-bold mb-4">Sort By</h2>
        <select v-model="sortBy" class="w-full p-2 border rounded mb-4">
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
        <h2 class="text-xl font-bold mb-4">Categories</h2>
        <div v-for="category in categories" :key="category" class="mb-2">
          <label class="flex items-center">
            <input type="checkbox" :value="category" v-model="selectedCategories" class="mr-2">
            {{ titleCase(category) }}
          </label>
        </div>
      </aside>
      <main class="w-3/4">
        <h1 class="text-3xl font-bold mb-4">Shop</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="product in sortedProducts" :key="product.id" class="bg-white shadow-md rounded-lg overflow-hidden">
            <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover">
            <div class="p-4">
              <h2 class="text-xl font-bold mb-2">{{ product.title }}</h2>
              <p class="text-gray-500 mb-2">{{ titleCase(product.category) }}</p>
              <p class="text-gray-700 font-semibold mb-4">${{ product.price }}</p>
              <router-link :to="`/product/${product.id}`" class="bg-blue-600 text-white px-4 py-2 rounded">View Details</router-link>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [],
        categories: [],
        selectedCategories: [],
        sortBy: 'default'
      };
    },
    computed: {
      filteredProducts() {
        if (this.selectedCategories.length === 0) {
          return this.products;
        }
        return this.products.filter(product => this.selectedCategories.includes(product.category));
      },
      sortedProducts() {
        let products = [...this.filteredProducts];
        if (this.sortBy === 'price-asc') {
          products.sort((a, b) => a.price - b.price);
        } else if (this.sortBy === 'price-desc') {
          products.sort((a, b) => b.price - a.price);
        }
        return products;
      }
    },
    created() {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
          this.products = json;
        });
  
      fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => {
          this.categories = json;
          this.updateSelectedCategories();
        });
    },
    watch: {
      '$route.query.category': 'updateSelectedCategories'
    },
    methods: {
      updateSelectedCategories() {
        const category = this.$route.query.category;
        if (category) {
          this.selectedCategories = [category];
        } else {
          this.selectedCategories = [];
        }
      },
      titleCase(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase()).replace(/'S\b/g, "'s");
      }
    }
  };
  </script>