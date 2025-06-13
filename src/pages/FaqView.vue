<template>
  <div class="container my-5">
    <h1 class="mb-4">常見問題 (FAQ)</h1>
    <div class="accordion" id="faqAccordion">
      <div class="accordion-item" v-for="(item, index) in faqList" :key="index">
        <h2 class="accordion-header" :id="'heading' + index">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + index"
            :aria-expanded="false"
            :aria-controls="'collapse' + index"
          >
            {{ item.question }}
          </button>
        </h2>
        <div
          :id="'collapse' + index"
          class="accordion-collapse collapse"
          :aria-labelledby="'heading' + index"
          data-bs-parent="#faqAccordion"
        >
          <div class="accordion-body">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'

const faqList = [
    {
        question: '如何下訂單？',
        answer: '您可以瀏覽商城，選擇商品加入購物車，然後前往結帳頁面完成付款。'
    },
    {
        question: '運費如何計算？',
        answer: '滿 1000 元免運費，未滿則依距離收取運費，詳情請見運費說明頁面。'
    },
    {
        question: '可以退貨嗎？',
        answer: '商品收到七天內可申請退貨，請保持商品完整並聯繫客服。'
    },
    {
        question: '客服聯絡方式？',
        answer: '您可以撥打 1234-5678 或寄信到 support@minishop.com 聯繫我們。'
    }
]

const activeIndex = ref(null)

function toggle(index) {
    activeIndex.value = activeIndex.value === index ? null : index
}

</script>
