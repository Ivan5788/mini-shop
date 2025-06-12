import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: JSON.parse(localStorage.getItem('users')) || [], // 存放用戶帳號密碼
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null, // 目前登入用戶
  }),
  actions: {
    saveUsers() {
      localStorage.setItem('users', JSON.stringify(this.users))
    },
    saveCurrentUser() {
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
    },
    register(user) {
      // 檢查帳號是否重複
      if (this.users.find(u => u.username === user.username)) {
        throw new Error('帳號已存在')
      }
      this.users.push(user)
      this.saveUsers()
      this.currentUser = user
      this.saveCurrentUser()
    },
    login({ username, password }) {
      const user = this.users.find(u => u.username === username && u.password === password)
      if (!user) {
        throw new Error('帳號或密碼錯誤')
      }
      this.currentUser = user
      this.saveCurrentUser()
    },
    logout() {
      this.currentUser = null
      this.saveCurrentUser()
    }
  }
})
