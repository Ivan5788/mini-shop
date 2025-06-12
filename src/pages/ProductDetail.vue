<template>
  <div class="container py-4" v-if="product">
    <div class="row">
      <div class="col-md-6">
        <img :src="product.image" class="img-fluid rounded" :alt="product.name" />
      </div>
      <div class="col-md-6">
        <h2>{{ product.name }}</h2>
        <p class="text-muted">分類：{{ product.category }}</p>
        <p class="h5 text-primary">NT$ {{ product.price }}</p>
        <p>{{ product.description }}</p>
        <div class="mb-3">
          <label for="qty" class="form-label">數量</label>
          <input type="number" id="qty" class="form-control" v-model.number="quantity" min="1" />
        </div>
        <button class="btn btn-primary me-2" @click="addToCart">加入購物車</button>

        <button class="btn btn-outline-danger" @click="wishlistStore.toggle(product)">
          <span v-if="wishlistStore.isFavorited(product.id)">❤️ 已收藏</span>
          <span v-else>🤍 收藏</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { useCartStore } from '../store/cart'
import { useWishlistStore } from '../store/wishlist'

const route = useRoute()
const quantity = ref(1)
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()


const product = ref(null)

function addToCart() {
  if (quantity.value < 1) {
    alert('數量至少為1')
    return
  }
  cartStore.addToCart({ ...product.value, quantity: quantity.value })
  alert(`已加入購物車：${quantity.value} 件`)
}

onMounted(async () => {
  const res = await axios.get('./products.json')
  const all = res.data
  product.value = all.find(p => p.id === parseInt(route.params.id))
})
</script>
