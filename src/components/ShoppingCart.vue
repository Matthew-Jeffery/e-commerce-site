<template>
  <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div v-for="item in cart" :key="item.id" class="mb-2">
        <p class="text-gray-700">{{ item.name }} - {{ item.quantity }} (Stock: {{ item.stock }})</p>
      </div>
      <router-link to="/checkout">
        <button class="bg-blue-600 text-white px-4 py-2 rounded mt-4">Proceed to Checkout</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  }
};
</script>