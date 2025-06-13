<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
    <div class="container">
      <!-- 左側 LOGO -->
      <router-link to="/" class="navbar-brand fw-bold text-primary">
        🛍 Mini Shop
      </router-link>

      <!-- 手機版按鈕 -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 導覽項目 -->
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <!-- 中間連結 -->
        <ul class="navbar-nav mx-auto text-center">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact-active-class="active">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/productlist" class="nav-link" exact-active-class="active">商城</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/faq" class="nav-link" exact-active-class="active">FAQ</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" exact-active-class="active">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/promotions" class="nav-link" exact-active-class="active">活動消息</router-link>
          </li>
        </ul>

        <!-- 右側操作 -->
        <div class="d-flex align-items-center text-center gap-3">
          <router-link to="/cart" class="nav-link position-relative">
            🛒
            <span v-if="cartCount > 0" class="badge bg-danger position-absolute top-0 start-100 translate-middle">
              {{ cartCount }}
            </span>
          </router-link>

          <router-link to="/wishlist" class="nav-link">❤️</router-link>

          <div class="user-auth ms-2">
            <template v-if="user">
              <span class="me-2">歡迎，{{ user.username }}</span>
              <button @click="logout" class="btn btn-sm btn-outline-dark">登出</button>
            </template>
            <template v-else>
              <router-link to="/auth" class="btn btn-sm btn-outline-primary">登入 / 註冊</router-link>
            </template>
          </div>

          <router-link to="/admin" class="btn btn-sm btn-secondary ms-2">後台</router-link>
        </div>
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

<style scoped>
.nav-link {
  font-weight: 500;
  color: #333;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #0d6efd;
  text-decoration: underline;
}

.navbar-brand {
  font-size: 1.5rem;
}

.badge {
  font-size: 0.75rem;
  padding: 0.35em 0.5em;
  border-radius: 50%;
}

.user-auth span {
  font-size: 0.95rem;
}
</style>
