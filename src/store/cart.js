import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addToCart(product) {
      const exists = this.items.find(item => item.id === product.id)
      if (exists) {
        exists.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId)
    },
    clearCart() {
      this.items = []
    }
  }
})
