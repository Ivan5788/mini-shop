<template>
  <div class="container py-4">
    <h1 class="h4">後台商品管理</h1>

    <button class="btn btn-success mb-3" @click="openForm()">+ 新增商品</button>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>名稱</th><th>價格</th><th>分類</th><th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in store.products" :key="p.id">
          <td>{{ p.name }}</td>
          <td>{{ p.price }}</td>
          <td>{{ p.category }}</td>
          <td>
            <button class="btn btn-sm btn-outline-primary me-2" @click="openForm(p)">編輯</button>
            <button class="btn btn-sm btn-outline-danger" @click="deleteProduct(p.id)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 商品表單 -->
    <div v-if="showForm" class="card p-3 mb-4">
      <h5>{{ editId ? '編輯商品' : '新增商品' }}</h5>
      <input class="form-control mb-2" placeholder="商品名稱" v-model="form.name" />
      <input class="form-control mb-2" type="number" placeholder="價格" v-model="form.price" />
      <input class="form-control mb-2" placeholder="圖片 URL" v-model="form.image" />
      <select class="form-select mb-2" v-model="form.category">
        <option value="">請選擇分類</option>
        <option>上衣</option>
        <option>褲子</option>
        <option>配件</option>
      </select>
      <button class="btn btn-primary me-2" @click="submitForm()">儲存</button>
      <button class="btn btn-secondary" @click="cancelForm()">取消</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProductStore } from '../store/product'
import { defineStore } from 'pinia'

const store = useProductStore()
const products = store.products

const showForm = ref(false)
const form = ref({})
const editId = ref(null)

const openForm = (product = null) => {
  showForm.value = true
  editId.value = product?.id || null
  form.value = product ? { ...product } : { name: '', price: '', image: '', category: '' }
}

const cancelForm = () => {
  showForm.value = false
  form.value = {}
  editId.value = null
}

const submitForm = () => {
  if (!form.value.name || !form.value.price) return alert('請填寫名稱與價格')

  if (editId.value) {
    store.update(form.value)
    console.log('更新商品 ID:', form.value.id)
  } else {
    store.add(form.value)
    console.log('新增商品:', form.value)
  }

  cancelForm()
}


const deleteProduct = (id) => {
  console.log('要刪除的商品 ID:', id)
  if (confirm('確定要刪除嗎？')) {
    store.remove(id)
    console.log('剩下的商品:', store.products)
  }
}
</script>
