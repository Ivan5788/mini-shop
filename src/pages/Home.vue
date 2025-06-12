<template>
  <div class="container py-4">
    <h1 class="h4 mb-4">商品列表</h1>

    <div class="row mb-3">
      <div class="col-md-6">
        <input v-model="search" class="form-control" placeholder="搜尋商品名稱..." />
      </div>
      <div class="col-md-6">
        <select v-model="category" class="form-select">
          <option value="">所有分類</option>
          <option value="上衣">上衣</option>
          <option value="褲子">褲子</option>
          <option value="配件">配件</option>
        </select>
      </div>
    </div>

    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '../store/product'

const store = useProductStore()

const search = ref('')
const category = ref('')

const filteredProducts = computed(() =>
  store.products.filter((p) =>
    p.name.toLowerCase().includes(search.value.toLowerCase()) &&
    (category.value === '' || p.category === category.value)
  )
)


</script>
