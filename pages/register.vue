<template>
  <form @submit.prevent="register">
    <input v-model="email" type="text" placeholder="Your email" />
    <input v-model="password" type="password" placeholder="Your password" />
    <button type="submit">Register</button>
  </form>
</template>
<script lang="ts">
import Vue from 'vue'
import { register, RegisterResponse } from '@/services/register'

export default Vue.extend({
  methods: {
    async register() {
      const registerResponse: RegisterResponse = await register(this.email, this.password);
      if (registerResponse.success) {
        this.$router.push('/');
      } else {
        window.alert('Registration failed');
      }
    }
  },
  data() {
    return {
      email: '',
      password: ''
    }
  }
})
</script>
