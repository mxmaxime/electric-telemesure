<template>
  <form @submit.prevent="register">
    <input v-model="email" type="text" placeholder="Your email" />
    <input v-model="password" type="password" placeholder="Your password" />
    <button type="submit">Login</button>
  </form>
</template>
<script lang="ts">
import Vue from 'vue'
import { register } from '@/services/register'

export default Vue.extend({
  methods: {
    async register() {
      const user = await register(this.email, this.password);
      console.log('user connection', {user})
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
