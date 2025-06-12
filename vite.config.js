import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/mini-shop/', // ← 這裡填「你的 repo 名稱」前後加斜線
  plugins: [vue()]
})
