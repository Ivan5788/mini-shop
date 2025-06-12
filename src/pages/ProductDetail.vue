<template>
  <div class="container py-4" v-if="product">
    <div class="row">
      <div class="col-md-6">
        <img :src="product.image" class="img-fluid rounded" alt="" />
      </div>
      <div class="col-md-6">
        <h2>{{ product.name }}</h2>
        <p class="text-muted">${{ product.price }}</p>
        <p>{{ product.description }}</p>
        <button class="btn btn-primary" @click="addToCart(product)">
          加入購物車
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

const route = useRoute()
const product = ref(null)
const cartStore = useCartStore()

onMounted(async () => {
  const res = await axios.get('/products.json')
  product.value = res.data.find(p => p.id === Number(route.params.id))
})

const addToCart = (product) => {
  cartStore.addToCart(product)
}
</script>
