<template>
  <div class="container py-4" v-if="product">
    <button class="btn btn-secondary mb-3" @click="$router.back()">← 返回上一頁</button>
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
          <input
            type="number"
            id="qty"
            class="form-control"
            v-model.number="quantity"
            min="1"
          />
        </div>

        <button class="btn btn-primary me-2" @click="addToCart">加入購物車</button>
        <button class="btn btn-outline-danger" @click="wishlistStore.toggle(product)">
          <span v-if="wishlistStore.isFavorited(product.id)">❤️ 已收藏</span>
          <span v-else>🤍 收藏</span>
        </button>
      </div>
    </div>

    <div v-if="relatedProducts.length" class="mt-5">
      <h4>你可能還喜歡</h4>
      <div class="d-flex gap-3 overflow-auto">
        <div
          v-for="item in relatedProducts"
          :key="item.id"
          class="card"
          style="width: 150px; flex-shrink: 0;"
        >
          <router-link :to="`/product/${item.id}`" class="text-decoration-none text-dark">
            <img :src="item.image" class="card-img-top" :alt="item.name" />
            <div class="card-body p-2">
              <p class="card-text text-truncate">{{ item.name }}</p>
              <p class="text-primary fw-bold">NT$ {{ item.price }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { useCartStore } from '../store/cart'
import { useWishlistStore } from '../store/wishlist'

const route = useRoute()
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()

const product = ref(null)
const allProducts = ref([])
const quantity = ref(1)

onMounted(async () => {
  const res = await axios.get(`${import.meta.env.BASE_URL}products.json`)
  allProducts.value = res.data  
  product.value = allProducts.value.find(p => p.id === parseInt(route.params.id))
})

const relatedProducts = computed(() => {
  if (!product.value) return []
  return allProducts.value.filter(
    p => p.category === product.value.category && p.id !== product.value.id
  )
})

function addToCart() {
  if (quantity.value < 1) {
    alert('數量至少為1')
    return
  }
  cartStore.addToCart({ ...product.value, quantity: quantity.value })
  alert(`已加入購物車：${quantity.value} 件`)
}
</script>
