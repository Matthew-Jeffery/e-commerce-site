<template>
  <div class="container mx-auto p-4">
    <section class="hero bg-blue-600 text-white p-8 rounded-lg mb-8">
      <h1 class="text-4xl font-bold mb-4">Welcome to Our E-Commerce Site</h1>
      <p class="text-xl mb-4">Discover the best products at unbeatable prices.</p>
      <router-link to="/shop" class="bg-white text-blue-600 px-4 py-2 rounded">Shop Now</router-link>
    </section>
    <section class="featured-products">
      <h2 class="text-3xl font-bold mb-4">Featured Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="product in featuredProducts" :key="product.id" class="bg-white shadow-md rounded-lg overflow-hidden">
          <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover">
          <div class="p-4">
            <h2 class="text-xl font-bold mb-2">{{ product.title }}</h2>
            <p class="text-gray-500 mb-2">{{ titleCase(product.category) }}</p>
            <p class="text-gray-700 font-semibold mb-4">${{ product.price }}</p>
            <router-link :to="`/product/${product.id}`" class="bg-blue-600 text-white px-4 py-2 rounded">View Details</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featuredProducts: []
    };
  },
  created() {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(json => {
        this.featuredProducts = json;
      });
  },
  methods: {
    titleCase(str) {
      return str.replace(/\b\w/g, char => char.toUpperCase()).replace(/'S\b/g, "'s");
    }
  }
};
</script>