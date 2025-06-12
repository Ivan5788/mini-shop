import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: []
  }),
  actions: {
    toggle(product) {
      const index = this.items.findIndex(p => p.id === product.id)
      if (index >= 0) {
        this.items.splice(index, 1)
      } else {
        this.items.push(product)
      }
    },
    isFavorited(id) {
      return this.items.some(p => p.id === id)
    },
    clear() {
      this.items = []
    }
  }
})
