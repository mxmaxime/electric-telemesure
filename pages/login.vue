<template>
  <form @submit.prevent="login">
    <input v-model="email" type="text" placeholder="Your email" />
    <input v-model="password" type="password" placeholder="Your password" />
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { login } from '@/services/login'

export default {
  methods: {
    async login() {
      const user = await login(this.email, this.password);
      console.log('login:', {user});
    }
  },
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
