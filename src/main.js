import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'aos/dist/aos.css'
import AOS from 'aos'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
AOS.init({
  once: true,
})

import { useCartStore } from './store/cart'
import { useWishlistStore } from './store/wishlist'

const cartStore = useCartStore()
cartStore.$subscribe((_, state) => {
  localStorage.setItem('cart', JSON.stringify(state.items))
})

const wishlistStore = useWishlistStore()
wishlistStore.$subscribe((_, state) => {
  localStorage.setItem('wishlist', JSON.stringify(state.items))
})
router.afterEach(() => {
  AOS.refresh()
})