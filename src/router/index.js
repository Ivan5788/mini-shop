import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../pages/ProductList.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import Cart from '../pages/Cart.vue'
import Home from '../pages/Home.vue'
import Checkout from '../pages/Checkout.vue'
import Wishlist from '../pages/Wishlist.vue'
import Admin from '../pages/Admin.vue'
import Auth from '../pages/Auth.vue'
import FaqView from '../pages/FaqView.vue'
import About from '../pages/About.vue'
import Promotions from '../pages/Promotions.vue'

const routes = [
  { path: '/', component: Home, meta: { title: '首頁 - Mini Shop', description: '歡迎來到 Mini Shop 官方網站' } },
  { path: '/productlist', component: ProductList, meta: { title: '商品列表 - Mini Shop', description: '瀏覽我們的各式商品' } },
  { path: '/product/:id', component: ProductDetail, meta: { title: '商品詳情 - Mini Shop' } },
  { path: '/cart', component: Cart, meta: { title: '購物車 - Mini Shop' } },
  { path: '/checkout', component: Checkout, meta: { title: '結帳 - Mini Shop' } },
  { path: '/wishlist', component: Wishlist, meta: { title: '收藏清單 - Mini Shop' } },
  { path: '/admin', component: Admin, meta: { title: '後台管理 - Mini Shop' } },
  { path: '/auth', component: Auth, meta: { title: '登入 / 註冊 - Mini Shop' } },
  { path: '/faq', name: 'FAQ', component: FaqView, meta: { title: '常見問題 - Mini Shop' } },
  { path: '/about', name: 'about', component: About, meta: { title: '關於我們 - Mini Shop' } },
  { path: '/promotions', name: 'promotions', component: Promotions, meta: { title: '活動頁面 - Mini Shop' } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// 動態更改 title 與 meta description
router.afterEach((to) => {
  document.title = to.meta.title || 'Mini Shop'
  const description = to.meta.description || 'Mini Shop 官方網站'
  const descTag = document.querySelector("meta[name='description']")
  if (descTag) {
    descTag.setAttribute('content', description)
  } else {
    const meta = document.createElement('meta')
    meta.name = 'description'
    meta.content = description
    document.head.appendChild(meta)
  }
})

export default router
