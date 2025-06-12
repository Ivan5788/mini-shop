import { defineStore } from 'pinia'

const defaultProducts = [
{ "id": 1, "name": "純棉白T", "price": 399, "image": "https://picsum.photos/200", "description": "舒適純棉材質，簡約百搭。", "category": "上衣" },
  { "id": 2, "name": "牛仔褲", "price": 899, "image": "https://picsum.photos/200", "description": "修身剪裁，高彈力布料。", "category": "褲子" },
  { "id": 3, "name": "運動短褲", "price": 499, "image": "https://picsum.photos/200", "description": "透氣輕盈，適合運動穿著。", "category": "褲子" },
  { "id": 4, "name": "針織毛衣", "price": 999, "image": "https://picsum.photos/200", "description": "溫暖舒適，冬天必備。", "category": "上衣" },
  { "id": 5, "name": "西裝外套", "price": 1999, "image": "https://picsum.photos/200", "description": "正式場合穿搭必選。", "category": "上衣" },
  { "id": 6, "name": "休閒襯衫", "price": 699, "image": "https://picsum.photos/200", "description": "簡約設計，日常穿搭。", "category": "上衣" },
  { "id": 7, "name": "運動鞋", "price": 1299, "image": "https://picsum.photos/200", "description": "舒適防滑，適合日常運動。", "category": "配件" },
  { "id": 8, "name": "帆布鞋", "price": 899, "image": "https://picsum.photos/200", "description": "經典百搭，時尚休閒。", "category": "配件" },
  { "id": 9, "name": "高筒靴", "price": 1899, "image": "https://picsum.photos/200", "description": "耐用皮革，適合秋冬穿著。", "category": "配件" },
  { "id": 10, "name": "休閒短褲", "price": 599, "image": "https://picsum.photos/200", "description": "透氣舒適，夏季必備。", "category": "褲子" },
  { "id": 11, "name": "皮帶", "price": 399, "image": "https://picsum.photos/200", "description": "簡約設計，耐用質感。", "category": "配件" },
  { "id": 12, "name": "棒球帽", "price": 499, "image": "https://picsum.photos/200", "description": "休閒百搭，遮陽防曬。", "category": "配件" },
  { "id": 13, "name": "圍巾", "price": 699, "image": "https://picsum.photos/200", "description": "柔軟保暖，秋冬必備。", "category": "配件" },
  { "id": 14, "name": "皮夾", "price": 999, "image": "https://picsum.photos/200", "description": "精緻手工，耐用收納。", "category": "配件" },
  { "id": 15, "name": "運動手錶", "price": 2999, "image": "https://picsum.photos/200", "description": "智慧功能，運動監測。", "category": "配件" },
  { "id": 16, "name": "墨鏡", "price": 799, "image": "https://picsum.photos/200", "description": "時尚造型，防紫外線。", "category": "配件" },
  { "id": 17, "name": "背包", "price": 1499, "image": "https://picsum.photos/200", "description": "大容量收納，旅行好夥伴。", "category": "配件" },
  { "id": 18, "name": "旅行箱", "price": 2999, "image": "https://picsum.photos/200", "description": "堅固耐用，輕便出行。", "category": "配件" },
  { "id": 19, "name": "耳機", "price": 1299, "image": "https://picsum.photos/200", "description": "高音質，降噪效果優秀。", "category": "配件" },
  { "id": 20, "name": "手機殼", "price": 299, "image": "https://picsum.photos/200", "description": "時尚設計，防摔耐用。", "category": "配件" },
  { "id": 21, "name": "運動襪", "price": 199, "image": "https://picsum.photos/200", "description": "吸汗透氣，舒適耐穿。", "category": "配件" },
  { "id": 22, "name": "瑜珈墊", "price": 899, "image": "https://picsum.photos/200", "description": "防滑設計，練習更穩定。", "category": "配件" },
  { "id": 23, "name": "保溫瓶", "price": 799, "image": "https://picsum.photos/200", "description": "長效保溫，方便攜帶。", "category": "配件" },
  { "id": 24, "name": "運動短袖", "price": 599, "image": "https://picsum.photos/200", "description": "透氣輕盈，運動舒適。", "category": "上衣" }
]

export const useProductStore = defineStore('product', {
  state: () => ({
    products: JSON.parse(localStorage.getItem('products')) || defaultProducts
  }),
  actions: {
    save() {
      localStorage.setItem('products', JSON.stringify(this.products))
    },
    add(product) {
      const id = Date.now()
      this.products.push({ ...product, id })
      this.save()
    },
    update(product) {
      const i = this.products.findIndex(p => p.id === product.id)
      if (i !== -1) {
        this.products[i] = { ...product }
        this.save()
      }
    },
    remove(id) {
      this.products = this.products.filter(p => p.id !== id)
      this.save()
    }
  }
})
