<template>
  <div>
    <topbar />
    <div class="l-stack-large">
      <header class="header l-ptb3 box">
        <div class="l-container flex">
          <h1 class="h3">Accueil</h1>
        </div>
      </header>
      <notifications v-if="$store.state.notify.notifications.length > 0" :notifications="$store.state.notify.notifications" />
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';

import Topbar from '@/components/layout/Topbar.vue';
import {NotificationService, NotificationServiceInterface, NotificationType} from '@/components/notify/notify';


export default Vue.extend({
  components: {
    Topbar,
    'notifications': () => import(
      /* webpackChunkName: "Notifications.vue" */
      '@/components/notify/Notifications.vue'
    ),
  },

  data() {
    return {
      notificationService: new NotificationService(this.$store)
    }
  },

  computed: {
    notifications() {
      return this.$store.state.notify.notifications
    }
  },
  mounted() {
    this.notificationService.add({
      type: NotificationType.SUCCESS,
      message: `Ravi de vous revoir !`
    });

    this.notificationService.add({
      type: NotificationType.WARNING,
      message: `Warning, you have to take your responsability!`
    });

    this.notificationService.add({
      type: NotificationType.ERROR,
      message: `Oh boy... something went wrong but I don't know what!`
    });
  }
})
</script>
