<template>
    <div class="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg overflow-hidden">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img class="h-48 w-full object-contain md:h-full md:w-48" :src="product.image" alt="Product Image">
        </div>
        <div class="p-8">
          <h2 class="text-2xl font-bold mb-2">{{ product.title }}</h2>
          <p class="text-gray-500 mb-4">{{ titleCase(product.category) }}</p>
          <p class="text-gray-700 mb-4">{{ product.description }}</p>
          <p class="text-gray-900 font-semibold mb-4">Price: ${{ product.price }}</p>
          <p class="text-red-600 font-semibold mb-4" v-if="product.stock > 0">Hurry! Only {{ product.stock }} left in stock</p>
          <p class="text-gray-500 mb-4" v-else>Out of stock</p>
          <button @click="addToCart" :disabled="product.stock === 0" class="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {}
      };
    },
    created() {
      const productId = this.$route.params.id;
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(json => {
          this.product = { ...json, stock: Math.floor(Math.random() * 10) + 1 }; // Adding random stock for demonstration
        });
    },
    methods: {
      addToCart() {
        this.$store.commit('addToCart', this.product);
      },
      titleCase(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase()).replace(/'S\b/g, "'s");
      }
    }
  };
  </script>