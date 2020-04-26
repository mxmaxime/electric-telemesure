<template>
  <div>
    <topbar />
    <notifications v-if="$store.state.notify.notifications.length > 0" :notifications="$store.state.notify.notifications" />
    <nuxt />
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
  }
})
</script>
