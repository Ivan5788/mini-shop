<template>
  <div
    ref="target"
    :class="['scroll-reveal', animationClass, { 'is-visible': isVisible }]"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  animationClass: {
    type: String,
    default: 'fade-up', // 預設動畫類型
  },
})

const isVisible = ref(false)
const target = ref(null)

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect() // 只執行一次，如需重複可拿掉
      }
    },
    {
      threshold: 0.1,
    }
  )
  if (target.value) observer.observe(target.value)
})

onUnmounted(() => {
  if (observer && target.value) observer.unobserve(target.value)
})
</script>

<style scoped>
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 可擴充其他動畫類型 */
.fade-up {}
.fade-left {
  transform: translateX(-30px);
}
.fade-right {
  transform: translateX(30px);
}
</style>
