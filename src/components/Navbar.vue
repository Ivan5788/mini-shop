<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" href="#">Mini Shop</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/cart" class="nav-link active" aria-current="page" href="#">🛒 購物車<span
                v-if="cartCount > 0">（{{ cartCount }}）</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/wishlist" class="nav-link active" aria-current="page" href="#">❤️ 收藏清單</router-link>
          </li>
        </ul>
        <!-- 登入 -->
        <span v-if="user" class="me-3">
          歡迎，{{ user.username }} |
          <button @click="logout">登出</button>
        </span>
        <span v-else class="me-3">
          <router-link to="/auth">登入 / 註冊</router-link>
        </span>
        <!-- 後台 -->
        <router-link to="/admin" class="btn btn-outline-secondary">進入後台</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '../store/user'
import { useCartStore } from '../store/cart'

const cartStore = useCartStore()
const cartCount = computed(() =>
  cartStore.items.reduce((sum, item) => sum + item.quantity, 0)
)

const userStore = useUserStore()
const user = computed(() => userStore.currentUser)

function logout() {
  userStore.logout()
}

</script>
