<template>
  <form @submit.prevent="login">
    <input v-model="email" type="text" placeholder="Your email" />
    <input v-model="password" type="password" placeholder="Your password" />
    <button type="submit">Login</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { login, LoginResponse } from '@/services/login'
import {AuthService, AuthServiceInterface} from '@/components/auth/auth'

export default Vue.extend({
  methods: {
    async login() {
      const loginResponse: LoginResponse = await login(this.email, this.password);
      if (loginResponse.success === true) {
        this.authService.login(loginResponse.user);
        this.$router.push('/');
      } else {
        window.alert('Login failed');
      }
    }
  },
  data() {
    return {
      authService: new AuthService(this.$store),
      email: '',
      password: ''
    }
  }
})
</script>
