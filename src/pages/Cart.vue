<template>

  <div class="container py-4">
    <h2 class="mb-4">購物車</h2>
    <div v-if="cartStore.items.length === 0">
      <p>購物車是空的。</p>
    </div>
    <div v-else>
      <table class="table">
        <thead>
          <tr>
            <th>商品</th>
            <th>單價</th>
            <th>數量</th>
            <th>小計</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartStore.items" :key="item.id">
            <td>
              <img :src="item.image" alt="" style="height: 50px; margin-right: 8px" />
              {{ item.name }}
            </td>
            <td>${{ item.price }}</td>
            <td>
              <input type="number" v-model.number="item.quantity" min="1" class="form-control form-control-sm" style="width: 80px;" />
            </td>
            <td>${{ item.price * item.quantity }}</td>
            <td>
              <button class="btn btn-sm btn-danger" @click="cartStore.removeFromCart(item.id)">移除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h5 class="text-end">總計：${{ total }}</h5>
      <div class="text-end">
        <router-link to="/checkout" class="btn btn-success">前往結帳</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart'
import { computed } from 'vue'

const cartStore = useCartStore()

const total = computed(() =>
  cartStore.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)
</script>
