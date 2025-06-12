<template>
  <div class="auth-container">
    <h2>{{ isLogin ? '登入' : '註冊' }}</h2>
    <form @submit.prevent="submit" class="auth-form">
      <div class="form-group">
        <label for="username">帳號</label>
        <input id="username" v-model="form.username" type="text" required placeholder="請輸入帳號" />
      </div>
      <div class="form-group">
        <label for="password">密碼</label>
        <input id="password" v-model="form.password" type="password" required placeholder="請輸入密碼" />
      </div>
      <button type="submit" class="submit-btn">{{ isLogin ? '登入' : '註冊' }}</button>
    </form>

    <p class="toggle-text" @click="toggleForm">
      {{ isLogin ? '沒有帳號？註冊' : '已有帳號？登入' }}
    </p>

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '../store/user'

const userStore = useUserStore()

const isLogin = ref(true)
const form = reactive({
  username: '',
  password: ''
})
const errorMessage = ref('')

function toggleForm() {
  errorMessage.value = ''
  isLogin.value = !isLogin.value
  form.username = ''
  form.password = ''
}

function submit() {
  errorMessage.value = ''
  try {
    if (isLogin.value) {
      userStore.login(form)
    } else {
      userStore.register(form)
    }
    alert(isLogin.value ? '登入成功！' : '註冊成功！')
    form.username = ''
    form.password = ''
  } catch (e) {
    errorMessage.value = e.message
  }
}
</script>

<style scoped>
.auth-container {
  max-width: 360px;
  margin: 40px auto;
  padding: 24px 28px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 24px;
  color: #333;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 6px;
  font-weight: 600;
  color: #555;
}

input {
  padding: 10px 12px;
  border: 1.5px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.2s;
}

input:focus {
  border-color: #409eff;
  outline: none;
  box-shadow: 0 0 6px #409effaa;
}

.submit-btn {
  background-color: #409eff;
  color: white;
  font-weight: 600;
  padding: 12px 0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #66b1ff;
}

.toggle-text {
  text-align: center;
  margin-top: 20px;
  color: #409eff;
  cursor: pointer;
  user-select: none;
  font-weight: 500;
}

.toggle-text:hover {
  text-decoration: underline;
}

.error-message {
  margin-top: 12px;
  color: #f56c6c;
  font-weight: 600;
  text-align: center;
  user-select: none;
}
</style>