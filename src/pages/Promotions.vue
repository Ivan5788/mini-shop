<template>
    <div class="animated-bg position-relative">
        <!-- 背景色塊容器 -->
        <div class="floating-blobs">
            <span class="blob blob1"></span>
            <span class="blob blob2"></span>
            <span class="blob blob3"></span>
            <span class="blob blob4"></span>
            <span class="blob blob5"></span>
        </div>

        <div class="container py-5 position-relative" style="z-index: 1;">
            <h1 class="text-center fw-bold mb-5">🎉 最新活動專區</h1>

            <div class="row g-4">
                <!-- 活動卡片 1 -->
                <div class="col-md-6" v-for="(event, index) in events" :key="index">
                    <ScrollReveal :animationClass="'fade-up'">
                        <div class="card border-0 shadow-sm h-100">
                            <img :src="event.image" class="card-img-top" :alt="event.title" />
                            <div class="card-body">
                                <h5 class="card-title">{{ event.title }}</h5>
                                <p class="card-text text-muted small mb-1">📅 {{ event.date }}</p>
                                <p class="card-text">{{ event.desc }}</p>
                                <a :href="event.link" class="btn btn-primary mt-2">了解更多</a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ScrollReveal from '../components/ScrollReveal.vue'

const events = [
    {
        title: '🔥 夏季大促銷｜滿千折百',
        date: '2025/6/10 - 2025/6/13',
        desc: '活動期間使用折扣碼「SUMMER100」，滿 $1000 折 $100、滿 $2000 折 $250！',
        image: 'https://picsum.photos/seed/summer-sale/600/300',
        link: '/shop',
    },
    {
        title: '🎁 新會員購物金 $100',
        date: '即日起 - 長期有效',
        desc: '首次註冊即贈購物金 $100，可立即折抵下單使用。',
        image: 'https://picsum.photos/seed/signup/600/300',
        link: '/register',
    },
    {
        title: '👜 夏季新品登場',
        date: '本月主打',
        desc: '亞麻上衣、編織包、夏日飾品同步上架，穿搭新品全面 85 折起。',
        image: 'https://picsum.photos/seed/new/600/300',
        link: '/shop?category=新品',
    },
    {
        title: '📸 IG 穿搭分享抽獎',
        date: '2025/6/1 - 6/30',
        desc: '分享你的穿搭照並標記 @yourbrand，抽 $500 購物金！',
        image: 'https://picsum.photos/seed/ig/600/300',
        link: 'https://instagram.com/yourbrand',
    },
]
</script>

<style scoped>
.animated-bg {
  position: relative;
  overflow: hidden;
  background: #f8f9fa;
}

.floating-blobs {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.blob {
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  opacity: 0.4;
  filter: blur(60px);
  animation: floatBlobs 30s ease-in-out infinite;
  background: radial-gradient(circle, #ffa9f9, #a5f3fc);
}

.blob1 { top: 10%; left: 20%; animation-delay: 0s; }
.blob2 { top: 30%; left: 70%; animation-delay: 10s; background: radial-gradient(circle, #ffd6e8, #b5fffc); }
.blob3 { top: 60%; left: 10%; width: 300px; height: 300px; animation-delay: 5s; background: radial-gradient(circle, #c3f4ff, #ffdee9); }
.blob4 { bottom: 20%; left: 50%; animation-delay: 15s; background: radial-gradient(circle, #fcd5ce, #a2d2ff); }
.blob5 { top: 70%; left: 80%; animation-delay: 20s; background: radial-gradient(circle, #e0c3fc, #8ec5fc); }

@keyframes floatBlobs {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-50px) scale(1.1);
  }
}


</style>
