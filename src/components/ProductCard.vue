<template>
  <div class="card h-100">
    <img :src="product.image" class="card-img-top" :alt="product.name" style="height: 200px; object-fit: cover;" />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text text-muted">${{ product.price }}</p>
      <router-link :to="`/product/${product.id}`" class="btn btn-outline-secondary btn-sm mb-2">
        查看詳情
      </router-link>
      <button class="btn btn-primary btn-sm mt-auto mb-2" @click="addToCart(props.product)">
        加入購物車
      </button>
      <button class="btn btn-outline-danger btn-sm mb-2" @click="toggleFavorite">
        <span v-if="isFavorited()">❤️ 已收藏</span>
        <span v-else>🤍 收藏</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart'
import { useWishlistStore } from '../store/wishlist'

const props = defineProps({ product: Object })

const cartStore = useCartStore()

const addToCart = (product) => {
  cartStore.addToCart(product)
}

const wishlistStore = useWishlistStore()

const toggleFavorite = () => wishlistStore.toggle(props.product)
const isFavorited = () => wishlistStore.isFavorited(props.product.id)
</script>
