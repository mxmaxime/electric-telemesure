<template>
  <p>À bientôt!</p>
</template>

<script>
import { logout } from '@/services/firebase-logout';

export default {
  methods: {
    async logout() {
      const result = await logout();
    }
  }
}
</script>
