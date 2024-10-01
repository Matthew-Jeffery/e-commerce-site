import { createStore } from 'vuex';

const saveStatePlugin = store => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  });
};

const loadState = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

export default createStore({
  state: {
    cart: loadState()
  },
  mutations: {
    addToCart(state, product) {
      const item = state.cart.find(item => item.id === product.id);
      if (item) {
        if (item.quantity < product.stock) {
          item.quantity++;
        } else {
          alert('No more stock available for this product.');
        }
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    }
  },
  plugins: [saveStatePlugin]
});