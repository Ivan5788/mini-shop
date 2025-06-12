import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import Cart from '../pages/Cart.vue'
import Checkout from '../pages/Checkout.vue'
import Wishlist from '../pages/Wishlist.vue'
import Admin from '../pages/Admin.vue'
import Auth from '../pages/Auth.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: ProductDetail },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: Checkout },
  { path: '/wishlist', component: Wishlist },
  { path: '/admin', component: Admin },
  { path: '/auth', component: Auth },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
