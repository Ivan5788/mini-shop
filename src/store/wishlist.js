import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: []
  }),
  actions: {
    toggle(product) {
      const exists = this.items.find(item => item.id === product.id)
      if (exists) {
        this.items = this.items.filter(item => item.id !== product.id)
      } else {
        this.items.push(product)
      }
    },
    isFavorited(productId) {
      return this.items.some(item => item.id === productId)
    }
  }
})
