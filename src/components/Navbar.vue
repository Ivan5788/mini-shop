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
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '../store/cart'

const cartStore = useCartStore()
const cartCount = computed(() =>
  cartStore.items.reduce((sum, item) => sum + item.quantity, 0)
)
</script>
