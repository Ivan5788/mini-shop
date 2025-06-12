// store/cart.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cartItems')) || []
  }),
  actions: {
    save() {
      localStorage.setItem('cartItems', JSON.stringify(this.items))
    },
    addToCart(product) {
      // 找看看購物車是否已有此商品
      const existing = this.items.find(item => item.id === product.id)
      if (existing) {
        // 如果有，數量要加上傳進來的 quantity
        existing.quantity += product.quantity || 1
      } else {
        // 新商品，加進陣列時要確保有 quantity，沒有就預設1
        this.items.push({ ...product, quantity: product.quantity || 1 })
      }
      this.save()
    },
    remove(id) {
      this.items = this.items.filter(item => item.id !== id)
      this.save()
    }
  }
})
