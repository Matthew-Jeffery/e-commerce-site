import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ShopPage from '../components/ShopPage.vue';
import ProductDetail from '../components/ProductDetail.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
import CheckoutForm from '../components/CheckoutForm.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/shop', component: ShopPage },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail },
  { path: '/cart', component: ShoppingCart },
  { path: '/checkout', component: CheckoutForm }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;