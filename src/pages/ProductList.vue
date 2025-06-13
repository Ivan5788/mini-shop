<template>
  <div class="container py-5">
<!-- 輪播牆 -->
<div id="mainCarousel" class="carousel slide mb-5 shadow-sm" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://picsum.photos/1200/400?random=1" class="d-block w-100" alt="Banner 1">
      <div class="carousel-caption d-none d-md-block">
        <h5>🔥 夏季大促銷</h5>
        <p>全館滿千折百，限時 3 天！</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/1200/400?random=2" class="d-block w-100" alt="Banner 2">
      <div class="carousel-caption d-none d-md-block">
        <h5>👕 精選上衣 79 折</h5>
        <p>熱賣百搭純棉白T 現正優惠中</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/1200/400?random=3" class="d-block w-100" alt="Banner 3">
      <div class="carousel-caption d-none d-md-block">
        <h5>👜 新品配件上市</h5>
        <p>質感包款、飾品同步登場</p>
      </div>
    </div>
  </div>

  <!-- 控制按鈕 -->
  <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">上一張</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">下一張</span>
  </button>
</div>


    <h1 class="text-center fw-bold mb-4">📦 商品列表</h1>

    <!-- 搜尋與分類 -->
    <div class="row mb-3">
  <div class="col-md-4 mb-2">
    <input v-model="search" class="form-control" placeholder="搜尋商品名稱..." />
  </div>
  <div class="col-md-4 mb-2">
    <select v-model="category" class="form-select">
      <option value="">所有分類</option>
      <option value="上衣">上衣</option>
      <option value="褲子">褲子</option>
      <option value="配件">配件</option>
    </select>
  </div>
  <div class="col-md-4 mb-2">
    <select v-model="sortOption" class="form-select">
      <option value="">預設排序</option>
      <option value="price-asc">價格：低 → 高</option>
      <option value="price-desc">價格：高 → 低</option>
      <option value="name-asc">名稱：A → Z</option>
      <option value="name-desc">名稱：Z → A</option>
    </select>
  </div>
</div>

    <!-- 商品卡片 -->
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
        v-for="product in paginatedProducts"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </div>

      <!-- 沒有商品 -->
      <div v-if="paginatedProducts.length === 0" class="text-center text-muted py-5">
        😢 沒有符合條件的商品
      </div>
    </div>

    <!-- 分頁 -->
    <nav v-if="totalPages > 1" class="mt-4 d-flex justify-content-center">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: page === 1 }">
          <button class="page-link" @click="page--" :disabled="page === 1">上一頁</button>
        </li>
        <li
          class="page-item"
          v-for="p in totalPages"
          :key="p"
          :class="{ active: p === page }"
        >
          <button class="page-link" @click="page = p">{{ p }}</button>
        </li>
        <li class="page-item" :class="{ disabled: page === totalPages }">
          <button class="page-link" @click="page++" :disabled="page === totalPages">下一頁</button>
        </li>
      </ul>
    </nav>
  </div>
</template>


<script setup>
import { ref, computed, onMounted,watch } from 'vue'
import axios from 'axios'
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '../store/product'

const store = useProductStore()
const search = ref('')
const category = ref('')
const page = ref(1)
const perPage = 8 // 每頁幾筆商品
const sortOption = ref('')

// 取得資料（僅本地測試時使用，若已使用 store 就不用）
onMounted(async () => {
  if (store.products.length === 0) {
    const res = await axios.get(`${import.meta.env.BASE_URL}products.json`)
    store.setProducts(res.data)
  }
})

const sortedProducts = computed(() => {
  const products = [...filteredProducts.value]

  switch (sortOption.value) {
    case 'price-asc':
      return products.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return products.sort((a, b) => b.price - a.price)
    case 'name-asc':
      return products.sort((a, b) => a.name.localeCompare(b.name, 'zh-Hant'))
    case 'name-desc':
      return products.sort((a, b) => b.name.localeCompare(a.name, 'zh-Hant'))
    default:
      return products
  }
})

// 過濾後商品
const filteredProducts = computed(() =>
  store.products.filter((p) =>
    p.name.toLowerCase().includes(search.value.toLowerCase()) &&
    (category.value === '' || p.category === category.value)
  )
)

// 分頁處理
const totalPages = computed(() =>
  Math.ceil(filteredProducts.value.length / perPage)
)

const paginatedProducts = computed(() =>
 sortedProducts.value.slice((page.value - 1) * perPage, page.value * perPage)
)



// 若搜尋或分類改變，重設分頁
watch([search, category], () => {
  page.value = 1
})
</script>

<style scoped>


h1 {
  font-size: 2rem;
}

.form-control,
.form-select {
  font-size: 0.95rem;
}

.pagination .page-link {
  cursor: pointer;
}

.pagination .active .page-link {
  background-color: #0d6efd;
  color: #fff;
  border-color: #0d6efd;
}
</style>
