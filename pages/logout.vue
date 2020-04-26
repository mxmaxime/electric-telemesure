<template>
  <p>À bientôt!</p>
</template>

<script lang="ts">
import Vue from 'vue';
import { logout, LogoutResponse } from '@/services/firebase-logout';
import {AuthService, AuthServiceInterface} from '@/components/auth/auth'

export default Vue.extend({
  async mounted() {
    const authService: AuthServiceInterface = new AuthService(this.$store);

    const result: LogoutResponse = await logout();
    if (result.success === true) {
      authService.logout();
      this.$router.push('/');
    } else {
      console.error(result.error);
    }
  }
});
</script>
