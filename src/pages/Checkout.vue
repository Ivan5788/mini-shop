<template>
  <div class="container py-4">
    <h2 class="mb-4">結帳資料</h2>
    <form @submit.prevent="submitOrder" class="row g-3">
      <div class="col-md-6">
        <label for="name" class="form-label">姓名</label>
        <input v-model="form.name" type="text" id="name" class="form-control" required />
      </div>
      <div class="col-md-6">
        <label for="email" class="form-label">Email</label>
        <input v-model="form.email" type="email" id="email" class="form-control" required />
      </div>
      <div class="col-12">
        <label for="address" class="form-label">地址</label>
        <input v-model="form.address" type="text" id="address" class="form-control" required />
      </div>
      <div class="col-12">
        <label class="form-label">付款方式</label>
        <select v-model="form.payment" class="form-select" required>
          <option value="">請選擇</option>
          <option value="credit">信用卡</option>
          <option value="cod">貨到付款</option>
        </select>
      </div>
      <div class="col-12 text-end">
        <button class="btn btn-success" type="submit">送出訂單</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../store/cart'

const router = useRouter()
const cartStore = useCartStore()

const form = ref({
  name: '',
  email: '',
  address: '',
  payment: ''
})

const submitOrder = () => {
  if (cartStore.items.length === 0) {
    alert('購物車是空的！')
    return
  }

  // 模擬送出
  alert(`感謝您的訂購，${form.value.name}！`)
  cartStore.clearCart()
  router.push('/')
}
</script>
