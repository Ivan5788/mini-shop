<template>
  <div class="container py-4">
    <h2 class="mb-4">結帳</h2>

    <div v-if="cartStore.items.length === 0">
      <p>購物車是空的，請先選購商品。</p>
      <router-link to="/" class="btn btn-primary mt-3">返回首頁</router-link>
    </div>

    <div v-else>
      <h4 class="mb-3">訂單內容</h4>
      <ul class="list-group mb-4">
        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in cartStore.items" :key="item.id">
          <div>
            {{ item.name }} × {{ item.quantity }}
          </div>
          <div>NT$ {{ item.price * item.quantity }}</div>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <strong>總計</strong>
          <strong>NT$ {{ total }}</strong>
        </li>
      </ul>

      <h4 class="mb-3">收件資訊</h4>
      <form @submit.prevent="submitOrder">
        <div class="mb-3">
          <label class="form-label">姓名</label>
          <input v-model="form.name" class="form-control" required />
        </div>
        <div class="mb-3">
          <label class="form-label">電話</label>
          <input v-model="form.phone" class="form-control" required />
        </div>
        <div class="mb-3">
          <label class="form-label">地址</label>
          <input v-model="form.address" class="form-control" required />
        </div>
        <button class="btn btn-success">送出訂單</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '../store/cart'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

const form = ref({
  name: '',
  phone: '',
  address: ''
})

const total = computed(() =>
  cartStore.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

const submitOrder = () => {
  alert('✅ 訂單已送出！感謝您的購買 🙏')
  cartStore.clearCart()
  router.push('/')
}
</script>
