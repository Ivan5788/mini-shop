<template>
   <div>

    <!-- Hero with background -->
    <section class="hero-section text-center py-5 text-white" data-aos="fade-up">
      <div class="container">
        <img src="/images/markdown-pana.svg" class="img-fluid floating" style="max-height: 280px;" alt="主視覺圖" />
        <h1 class="display-5 fw-bold mt-4">Mini Shop</h1>
        <p class="lead">用 Vue 打造的展示型商店網站，專注動效與實作</p>
      </div>
    </section>

    <!-- 品牌故事 with 淺紫背景 -->
    <section class="py-5" style="background-color: #f3f0ff;" data-aos="fade-right">
      <div class="container row align-items-center">
        <div class="col-md-6">
          <img src="/images/Storyboard-pana.svg" class="img-fluid" alt="品牌故事插圖" />
        </div>
        <div class="col-md-6">
          <h2>我們的故事</h2>
          <p>Mini Shop 的誕生，是為了學習 Vue SPA 架構、分頁設計與前端動效。</p>
        </div>
      </div>
    </section>

    <!-- 解決問題 with 卡片風格 -->
    <section class="py-5 bg-white" data-aos="fade-left">
      <div class="container row align-items-center flex-md-row-reverse">
        <div class="col-md-6">
          <img src="/images/solving-pana.svg" class="img-fluid" alt="痛點插圖" />
        </div>
        <div class="col-md-6">
          <div class="card shadow-sm p-4 rounded-4 border-0">
            <h2>解決的問題</h2>
            <ul class="mb-0">
              <li>畫面雜亂 → 分區設計與動畫導引</li>
              <li>狀態無同步 → Pinia 管理購物與收藏</li>
              <li>首頁缺乏亮點 → 色塊＋動畫美化</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 技術亮點 with 藍色背景 -->
    <section class="py-5 text-center" style="background-color: #e7f5ff;" data-aos="zoom-in">
      <div class="container">
        <h2>技術亮點</h2>
        <div class="row mt-4">
          <div class="col-md-3 mb-3">
            <div class="p-3 bg-white shadow rounded hover-scale">Vue 3</div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="p-3 bg-white shadow rounded hover-scale">Vue Router</div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="p-3 bg-white shadow rounded hover-scale">Pinia</div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="p-3 bg-white shadow rounded hover-scale">Bootstrap 5</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ CTA -->
    <section class="py-5 text-center" style="background-color: #e0f7fa;" data-aos="fade-up">
      <div class="container">
        <h3>常見問題？</h3>
        <p>看看我們整理的 <router-link to="/faq" class="btn btn-outline-dark ms-2">FAQ</router-link></p>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.init({ once: true,}) // 滾動進入一次後不重播
})
</script>

<style scoped>
img {
  max-width: 100%;
}

.hero-section {
  background: linear-gradient(135deg, #6c63ff 0%, #8360c3 100%);
}
.floating {
  animation: float 3s ease-in-out infinite;
}
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}
.hover-scale {
  transition: transform 0.3s ease;
}
.hover-scale:hover {
  transform: scale(1.05);
}
</style>
