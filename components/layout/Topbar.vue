<template>
  <div class="topbar">
    <nav
      class="topbar__nav l-container"
      role="navigation"
      aria-label="Menu principal">

      <ul class="topbar__nav__menu">
        <li v-for="nav in navigation.main" :key="nav.link">
          <nuxt-link :to="nav.link">{{ nav.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';

import { logout } from '@/services/firebase-logout';
import { topbarNavigation } from './navigation';
import {AuthService, AuthServiceInterface} from '@/components/auth/auth';

export default Vue.extend({
  computed: {
    navigation() {
      const isConnected = this.$store.state.auth.isConnected;
      return topbarNavigation(isConnected);
    }
  }
});
</script>

<style lang="scss">
@import "~/assets/css/helpers/_space.scss";
@import "~/assets/css/helpers/_colors.scss";

.topbar {
  background-color: color('mx-purple', 'black-darker');
  color: color('mx-purple', 'grey')
}

.topbar__nav {
  display: flex;
}

.topbar__nav__menu {
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: space(4);
}

.topbar__nav__menu a {
  display: block;
  padding: space(3) 0;
}

</style>
