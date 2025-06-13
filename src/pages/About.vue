<template>
    <div class="container py-5">
        <ScrollReveal animationClass="fade-up">
            <div class="bg-light p-5 shadow-sm rounded">
                <h2 class="mb-3">我們的品牌故事</h2>
                <p>源自對簡約風格的熱愛，我們從 2021 年開始打造...</p>
            </div>
        </ScrollReveal>

        <ScrollReveal animationClass="fade-left">
            <div class="bg-white p-5 mt-5 shadow-sm border rounded">
                <h2 class="mb-3">選物哲學</h2>
                <p>我們挑選的每件商品，都是為了解決「實用、質感、價格」的三大痛點。</p>
            </div>
        </ScrollReveal>
    </div>

    <div class="container py-5">
        <h2 class="mb-4 text-center fw-bold">📩 聯絡我們</h2>

        <div class="row">
            <!-- 聯絡表單 -->
            <div class="col-md-7 mb-4">
                <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label for="name" class="form-label">姓名</label>
                        <input v-model="form.name" type="text" id="name" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">電子郵件</label>
                        <input v-model="form.email" type="email" id="email" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="subject" class="form-label">主旨</label>
                        <input v-model="form.subject" type="text" id="subject" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">留言內容</label>
                        <textarea v-model="form.message" id="message" rows="5" class="form-control" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">送出</button>
                </form>

                <div v-if="submitted" class="alert alert-success mt-4">
                    ✅ 感謝您的留言，我們會盡快與您聯繫！
                </div>
            </div>

            <!-- 聯絡資訊 -->
            <div class="col-md-5">
                <div class="bg-light p-4 rounded shadow-sm">
                    <h5>客服資訊</h5>
                    <p class="mb-1">📞 電話：<a href="tel:+886912345678">0912-345-678</a></p>
                    <p class="mb-1">✉️ Email：<a href="mailto:service@example.com">service@example.com</a></p>
                    <p class="mb-1">🕒 服務時間：週一至週五 10:00 - 18:00</p>
                    <p>📍 地址：台北市中山區範例路 123 號</p>
                </div>

                <!-- Google Map (可選) -->
                <div class="mt-4 ratio ratio-4x3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.679359102969!2d121.542318!3d25.052623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abc123456789%3A0xabcdef1234567890!2z5Y-w5Lit5q2j5aSn6YGT5p2x!5e0!3m2!1szh-TW!2stw!4v1680000000000"
                        style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import ScrollReveal from '../components/ScrollReveal.vue'


const form = ref({
    name: '',
    email: '',
    subject: '',
    message: '',
})

const submitted = ref(false)

const submitForm = () => {
    // 這裡可以接後端 API 或發送 email，用第三方如 Formspree、EmailJS 等也行
    console.log('表單資料：', form.value)
    submitted.value = true
    // 重設表單
    form.value = { name: '', email: '', subject: '', message: '' }
}
</script>

<style scoped>
form input,
form textarea {
  font-size: 0.95rem;
}
</style>