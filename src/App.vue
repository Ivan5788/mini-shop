<template>
  <div class="layout-wrapper d-flex flex-column min-vh-100">
    <Navbar />
    <main class="flex-grow-1">
      <router-view />
    </main>
        <footer class="bg-dark text-light py-4">
      <div class="container text-center">
        <p>© 2025 我的網站 - All rights reserved.</p>
        <p>聯絡電話：1234-5678 | 地址：台北市信義區</p>
      </div>
    </footer>

    <!-- 回到頂部按鈕 -->
<button
  v-show="showBackToTop"
  @click="scrollToTop"
  class="btn btn-primary position-fixed d-flex justify-content-center align-items-center"
  style="bottom: 40px; right: 30px; z-index: 999; width: 50px; height: 50px;"
>
  ^ TOP
</button>


  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'

import { ref, onMounted, onUnmounted } from 'vue'

const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
button.btn.btn-primary {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 1rem;
  font-size: 0.8rem;
  transition: opacity 0.3s ease;
  line-height: 15px;
}
</style>

