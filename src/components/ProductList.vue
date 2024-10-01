<template>
    <div>
      <h2>Products</h2>
      <div v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
          {{ product.name }}
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: []
      };
    },
    created() {
      // Use mock data instead of fetching from an API
      const mockData = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' }
      ];
      this.products = mockData;
    }
  };
  </script>