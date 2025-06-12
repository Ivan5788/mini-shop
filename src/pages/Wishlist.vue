<template>
  <div class="container py-4">
    <h2 class="mb-4">收藏清單</h2>

    <div v-if="wishlistStore.items.length === 0">
      <p class="text-muted">尚未收藏任何商品。</p>
    </div>

    <div class="row" v-else>
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
        v-for="product in wishlistStore.items"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWishlistStore } from '../store/wishlist'
import ProductCard from '../components/ProductCard.vue'

const wishlistStore = useWishlistStore()
</script>
